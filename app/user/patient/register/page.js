"use client";

import { Stack } from "@mui/material";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Step from "./Step";
import LastStep from "./LastStep";
import { useState } from "react";

export default function PatientRegistration() {
  const [step, setStep] = useState(1);
  return (
    <Stack p="16px" gap="16px" mt="30px" justifyContent="center">
      {step === 1 && <StepOne setStep={setStep} />}
      {step === 2 && <StepTwo setStep={setStep} />}
      {step === 3 && <Step setStep={setStep} num={4} />}
      {step === 4 && <Step setStep={setStep} num={5} />}
      {step === 5 && <Step setStep={setStep} num={6} />}
      {step === 6 && <Step setStep={setStep} num={7} />}
      {step === 7 && <LastStep />}
    </Stack>
  );
}
