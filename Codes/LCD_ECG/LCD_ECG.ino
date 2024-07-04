#include <SPI.h>
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

#define LO_PLUS 26 // Leads off detection pin LO+
#define LO_MINUS 27 // Leads off detection pin LO-
#define OUTPUT_PIN 35 // Analog output from AD8232

const int ecgBufferSize = 120;
int ecgBuffer[ecgBufferSize];
int ecgIndex = 0;

void setup() {
  Serial.begin(9600);
  
  pinMode(LO_PLUS, INPUT_PULLUP);
  pinMode(LO_MINUS, INPUT_PULLUP);
  pinMode(OUTPUT_PIN, INPUT);

  tft.init();
  tft.setRotation(1);
  tft.fillScreen(TFT_BLACK);

  int screenWidth = tft.width();
  int screenHeight = tft.height();

  tft.drawLine(0, screenHeight / 1.7, screenWidth, screenHeight / 1.7, TFT_WHITE);

  int lowerPartY = screenHeight / 1.7 + 10;

  tft.setTextColor(TFT_SKYBLUE, TFT_BLACK);
  tft.setTextSize(2);
  tft.setCursor(10, lowerPartY);
  tft.println("SpO2(%)");
  tft.setTextSize(4);
  tft.setCursor(10, lowerPartY + 30);
  tft.println("99");

  tft.setTextColor(TFT_SKYBLUE, TFT_BLACK);
  tft.setTextSize(2);
  tft.setCursor(screenWidth / 3 + 10, lowerPartY);
  tft.println("Pr(bpm)");
  tft.setTextSize(4);
  tft.setCursor(screenWidth / 3 + 10, lowerPartY + 30);
  tft.println("80");

  tft.setTextColor(TFT_YELLOW, TFT_BLACK);
  tft.setTextSize(2);
  tft.setCursor(2 * screenWidth / 3 + 10, lowerPartY);
  tft.println("TEMP(°C)");
  tft.setTextSize(4);
  tft.setCursor(2 * screenWidth / 3 + 10, lowerPartY + 30);
  tft.println("36.8");

  for (int i = 0; i < ecgBufferSize; i++) {
    ecgBuffer[i] = screenHeight / 2;
  }
}

void loop() {
  float sensorValue = 0;
  if ((digitalRead(LO_PLUS) == HIGH) || (digitalRead(LO_MINUS) == HIGH)) {
    Serial.println("Leads Off!");
    sensorValue = 0;
  } else {
    sensorValue = analogRead(OUTPUT_PIN);
    Serial.println(sensorValue);
  }

  int ecgY = map(sensorValue, 0, 4095, tft.height() / 1.7, 0);

  ecgBuffer[ecgIndex] = ecgY;
  ecgIndex = (ecgIndex + 1) % ecgBufferSize;

  tft.fillRect(0, 0, tft.width(), tft.height() / 1.7, TFT_BLACK);

  for (int i = 1; i < ecgBufferSize; i++) {
    int x0 = (i - 1) * (tft.width() / ecgBufferSize);
    int y0 = ecgBuffer[(ecgIndex + i - 1) % ecgBufferSize];
    int x1 = i * (tft.width() / ecgBufferSize);
    int y1 = ecgBuffer[(ecgIndex + i) % ecgBufferSize];
    tft.drawLine(x0, y0, x1, y1, TFT_GREEN);
  }

  delay(10);
}
