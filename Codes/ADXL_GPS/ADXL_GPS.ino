#include <Wire.h>
#include "ADXL345.h"
#include <WiFi.h>
#include <HTTPClient.h>

ADXL345 accelerometer;

const char* ssid = ""; // Replace with your WiFi SSID
const char* password = ""; // Replace with your WiFi Password

const char* serverName = ""; // Replace with your server URL


void setup(void) 
{
    Serial.begin(115200);

    WiFi.begin(ssid, password);
    Serial.print("Connecting to WiFi...");
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.print(".");
    }
    Serial.println("Connected to WiFi");
    delay(1000);
    
    Serial.println("Initialize ADXL345");
    
    if (!accelerometer.begin()) {
        Serial.println("Could not find a valid ADXL345 sensor, check wiring!");
        while (1);
    }

    accelerometer.setFreeFallThreshold(0.3); // Lower threshold for higher sensitivity
    accelerometer.setFreeFallDuration(0.01);   // Longer duration for more reliable detection

    // Select INT 1 for getting activities
    accelerometer.useInterrupt(ADXL345_INT1);
    checkSetup();
}

void checkSetup() {
    Serial.print("Free Fall Threshold = "); Serial.println(accelerometer.getFreeFallThreshold());
    Serial.print("Free Fall Duration = "); Serial.println(accelerometer.getFreeFallDuration());
}

void loop(void) {
    delay(50);
    Vector norm = accelerometer.readNormalize();
    Serial.print("Xnorm = "); Serial.print(norm.XAxis);
    Serial.print(" Ynorm = "); Serial.print(norm.YAxis);
    Serial.print(" Znorm = "); Serial.println(norm.ZAxis);
    Activites activ = accelerometer.readActivites();
    Serial.print("Free fall status: "); Serial.println(activ.isFreeFall);
    Serial.print("Overrun: "); Serial.println(activ.isOverrun);
    Serial.print("Watermark: "); Serial.println(activ.isWatermark);
    Serial.print("Inactivity: "); Serial.println(activ.isInactivity);
    Serial.print("Activity: "); Serial.println(activ.isActivity);
    Serial.print("Double Tap: "); Serial.println(activ.isDoubleTap);
    Serial.print("Tap: "); Serial.println(activ.isTap);
    Serial.print("Data Ready: "); Serial.println(activ.isDataReady);
    Serial.print("Activity on X: "); Serial.println(activ.isActivityOnX);
    Serial.print("Activity on Y: "); Serial.println(activ.isActivityOnY);
    Serial.print("Activity on Z: "); Serial.println(activ.isActivityOnZ);
    Serial.print("Tap on X: "); Serial.println(activ.isTapOnX);
    Serial.print("Tap on Y: "); Serial.println(activ.isTapOnY);
    Serial.print("Tap on Z: "); Serial.println(activ.isTapOnZ);
    if (activ.isFreeFall) {
        Serial.println("Free Fall Detected!");
        sendFallDetected();
        while (1) {}
    }
}


void sendFallDetected() {
    if(WiFi.status()== WL_CONNECTED){
        HTTPClient http;
        
        String serverPath = serverName;
        serverPath += "/?rtype=motion"; // Add the request type as a query parameter
        
        http.begin(serverPath);

        http.addHeader("accept", "application/json");
        http.addHeader("Content-Type", "application/json");



        String httpRequestData = "{\"heart_rate\": 0, \"body_temperature\": 0, \"SPO2\": 0, \"blood_pressure\": 0, \"ECG\": \"\", \"ADXL\": \"fall\", \"gps\": \"\", \"device_id\": \"23456\"}";           

        Serial.println("HTTP Request:");
        Serial.println(serverPath);
        Serial.println(httpRequestData);

        int httpResponseCode = http.POST(httpRequestData);

        if (httpResponseCode > 0) {
            Serial.print("HTTP Response code: ");
            Serial.println(httpResponseCode);

            if (httpResponseCode == HTTP_CODE_TEMPORARY_REDIRECT || httpResponseCode == HTTP_CODE_MOVED_PERMANENTLY || httpResponseCode == HTTP_CODE_FOUND) {
                String newLocation = http.header("Location");
                Serial.print("Redirected to: ");
                Serial.println(newLocation);

                http.end();
                http.begin(newLocation);
                http.addHeader("Content-Type", "application/json");
                httpResponseCode = http.POST(httpRequestData);

                if (httpResponseCode > 0) {
                    Serial.print("HTTP Response code after redirect: ");
                    Serial.println(httpResponseCode);
                    String response = http.getString();
                    Serial.println(response);
                } else {
                    Serial.print("Error on sending POST after redirect: ");
                    Serial.println(httpResponseCode);
                }
            } else {
                String response = http.getString();
                Serial.println(response);
            }
        } else {
            Serial.print("Error on sending POST: ");
            Serial.println(httpResponseCode);
        }

        http.end();
    } else {
        Serial.println("WiFi Disconnected");
    }
}