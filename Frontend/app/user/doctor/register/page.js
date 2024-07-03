"use client";

import { Stack } from "@mui/material";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import LastStep from "./LastStep";
import { useState } from "react";

export default function DoctorRegistration() {
  const [step, setStep] = useState(1);
  return (
    <Stack p="16px" gap="16px" mt="30px" justifyContent="center">
      {step === 1 && <StepOne setStep={setStep} />}
      {step === 2 && <StepTwo setStep={setStep} />}
      {step === 3 && <LastStep />}
    </Stack>
  );
}
