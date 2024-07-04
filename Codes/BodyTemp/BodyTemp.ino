#include <Wire.h>
#include "ClosedCube_MAX30205.h"

// ساخت یک شی از کلاس حسگر
ClosedCube_MAX30205 sensor;

void setup() {
  Serial.begin(115200);
  Wire.begin(); // شروع ارتباط I2C

  sensor.begin(0x48); // آدرس پیش فرض حسگر MAX30205

  Serial.println("MAX30205 Body Temperature Sensor Test");
}

void loop() {
  unsigned long startTime = 0;
  bool started = false;

  float sum = 0;
  int count = 0;
  int totalReadings = 0;

  while (true) {
    float temp = sensor.readTemperature(); // خواندن دما
    temp = temp + 3; // اضافه کردن 2 درجه به دما

    // بررسی معتبر بودن دما و قرار داشتن در محدوده 30 تا 45 درجه برای شروع
    if (!started && !isnan(temp) && temp >= 30 && temp <= 45) {
      started = true;
      startTime = millis(); // زمان شروع پس از اولین دمای معتبر
      Serial.println("Started measurements after first valid temperature reading.");
    }

    if (started) {
      // بررسی معتبر بودن دما و قرار داشتن در محدوده 20 تا 40 درجه برای اندازه‌گیری
      if (!isnan(temp) && temp >= 20 && temp <= 40) {
        sum += temp;
        count++;
      }

      totalReadings++;
      unsigned long currentTime = millis(); // زمان فعلی
      unsigned long elapsedTime = currentTime - startTime;
      if (elapsedTime > 10000) {
        break;
      }
    }
  }

  unsigned long endTime = millis(); // زمان پایان

  if (count > 0) {
    float average = sum / count;
    Serial.print("Average Temperature (20-40 C): ");
    Serial.print(average);
    Serial.println(" C");
  } else {
    Serial.println("No valid temperature data in the range 20-40 C.");
  }

  Serial.print("Number of valid readings: ");
  Serial.println(count);

  Serial.print("Total readings attempted: ");
  Serial.println(totalReadings);

  unsigned long elapsedTime = endTime - startTime; // زمان سپری شده
  Serial.print("Time taken for ");
  Serial.print(totalReadings);
  Serial.print(" readings: ");
  Serial.print(elapsedTime);
  Serial.println(" milliseconds");
  
  Serial.println("\n");
  Serial.println("\n");
  Serial.println("\n");
  
  delay(5000); // تاخیر 2 ثانیه‌ای قبل از شروع مجدد
}
