#include <Wire.h>
#include "MAX30105.h"
#include "spo2_algorithm.h"

MAX30105 particleSensor;

// تعداد نمونه‌های مورد نیاز برای محاسبه‌ی SpO2 و ضربان قلب
const int bufferSize = 100;
uint32_t irBuffer[bufferSize]; // آرایه‌ای برای ذخیره مقادیر IR
uint32_t redBuffer[bufferSize]; // آرایه‌ای برای ذخیره مقادیر قرمز

// تعریف متغیرهای مورد نیاز
const int rateSize = 10;
float rates[rateSize]; // آرایه‌ای برای ذخیره نرخ‌های ضربان قلب
int rateSpot = 0; // موقعیت فعلی در آرایه
float beatSum = 0;
float beatAvg = 0;

const float spo2Scale = 0.98; // ضریب مقیاس‌بندی برای کالیبراسیون SpO2
const float spo2Offset = 0.0; // مقدار افست برای کالیبراسیون SpO2
const float bpmScale = 0.5; // ضریب مقیاس‌بندی برای کالیبراسیون ضربان قلب
const float bpmOffset = 30; // مقدار افست برای کالیبراسیون ضربان قلب

float spo2Buffer[rateSize]; // برای میانگین‌گیری متحرک SpO2
int spo2BufferIndex = 0;
float spo2Sum = 0;


void setup() {
  Serial.begin(115200);
  //Wire.begin(19, 18); // Use GPIO19 as SDA and GPIO18 as SCL

  if (!particleSensor.begin(Wire, I2C_SPEED_FAST)) {
    Serial.println("MAX30105 was not found. Please check wiring/power.");
    while (1);
  }

  particleSensor.setup(); // تنظیمات اولیه سنسور
  particleSensor.setPulseAmplitudeRed(0x0A); // روشن کردن LED قرمز
  particleSensor.setPulseAmplitudeIR(0x0A); // روشن کردن LED مادون قرمز

  Serial.println("Place your finger on the sensor with steady pressure.");

  // مقداردهی اولیه بافر SpO2 و ضربان قلب
  for (int i = 0; i < rateSize; i++) {
    spo2Buffer[i] = 0;
    rates[i] = 0;
  }
}

void loop() {
  for (int i = 0; i < bufferSize; i++) {
    while (particleSensor.available() == false) {
      particleSensor.check(); // بررسی داده‌های جدید از سنسور
    }
    redBuffer[i] = particleSensor.getRed();
    irBuffer[i] = particleSensor.getIR();
    particleSensor.nextSample(); // آماده شدن برای نمونه‌گیری بعدی
  }

  // متغیرهای مورد نیاز برای محاسبه‌ی SpO2 و BPM
  int32_t spo2;
  int8_t validSPO2;
  int32_t heartRate;
  int8_t validHeartRate;

  // محاسبه‌ی SpO2 و BPM
  maxim_heart_rate_and_oxygen_saturation(irBuffer, bufferSize, redBuffer, &spo2, &validSPO2, &heartRate, &validHeartRate);

  if (validHeartRate && validSPO2) {
    // کالیبراسیون و فیلتر کردن داده‌های ضربان قلب
    float calibratedHeartRate = heartRate * bpmScale + bpmOffset;
    if (calibratedHeartRate > 30 && calibratedHeartRate < 180) {
      rates[rateSpot] = calibratedHeartRate;
      rateSpot = (rateSpot + 1) % rateSize;

      // محاسبه میانگین ضربان قلب
      beatSum = 0;
      int validBeatCount = 0;
      for (int i = 0; i < rateSize; i++) {
        if (rates[i] > 30 && rates[i] < 180) {
          beatSum += rates[i];
          validBeatCount++;
        }
      }
      beatAvg = validBeatCount > 0 ? beatSum / validBeatCount : 0;
    }

    // کالیبراسیون و فیلتر کردن داده‌های SpO2
    float calibratedSpO2 = spo2 * spo2Scale + spo2Offset;
    if (calibratedSpO2 > 70 && calibratedSpO2 <= 100) {
      spo2Buffer[spo2BufferIndex] = calibratedSpO2;
      spo2BufferIndex = (spo2BufferIndex + 1) % rateSize;

      // محاسبه میانگین SpO2
      spo2Sum = 0;
      int validSpo2Count = 0;
      for (int i = 0; i < rateSize; i++) {
        if (spo2Buffer[i] > 70 && spo2Buffer[i] <= 100) {
          spo2Sum += spo2Buffer[i];
          validSpo2Count++;
        }
      }
      float spo2Avg = validSpo2Count > 0 ? spo2Sum / validSpo2Count : 0;

      // تبدیل SpO2 به رشته با دو رقم اعشار
      char spo2String[8];
      dtostrf(spo2Avg, 6, 2, spo2String);

      // نمایش نتایج
      Serial.print("Heart Rate (BPM): ");
      Serial.print(calibratedHeartRate);
      Serial.print(" | Avg BPM: ");
      Serial.print(beatAvg);
      Serial.print(" | SpO2: ");
      Serial.print(spo2String);
      Serial.println("%");
    }
  } else {
    Serial.println("Invalid reading");
  }

  delay(1000); // تأخیر یک ثانیه‌ای برای مشاهده تغییرات
}
