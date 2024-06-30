"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

let interval;

export default function ForgotPassword() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    if (step === 2) {
      setTimer(59);
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev > 0) return prev - 1;
          clearInterval(interval);
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step]);

  return (
    <Stack p="16px" gap="16px" minHeight="100vh" justifyContent="center">
      <Image
        src={Logo.src}
        width={56}
        height={56}
        style={{ alignSelf: "center" }}
      />
      {step === 1 && (
        <>
          <Typography alignSelf="center" fontSize="36px">
            فراموشی رمز عبور
          </Typography>
          <Stack gap="8px">
            <Typography>شماره همراه</Typography>
            <TextField></TextField>
          </Stack>
          <Button sx={{ mb: "32px" }} onClick={() => setStep(2)}>
            ارسال کد
          </Button>
          <Typography alignSelf="center">
            حساب کاربری ندارید؟{" "}
            <Link
              href="/user/signup"
              style={{
                // textDecoration: "underline",
                borderBottom: "1px solid #60A5FA",
                color: "#60A5FA",
              }}
            >
              ثبت نام کنید.
            </Link>
          </Typography>
          {/* <Link href="/forgot-password" style={{ alignSelf: "center" }}>
        <Typography
          sx={{
            // textDecoration: "underline",
            borderBottom: "1px solid #60A5FA",
          }}
          color="#60A5FA"
        >
          فراموشی رمز عبور
        </Typography>
      </Link> */}
        </>
      )}
      {step === 2 && (
        <>
          <Typography alignSelf="center" fontSize="36px">
            فراموشی رمز عبور
          </Typography>
          <Stack gap="8px">
            <Typography>کد دریافتی را وارد کن</Typography>
            <TextField></TextField>
          </Stack>
          <Button sx={{ mb: "32px" }} onClick={() => setStep(3)}>
            تایید
          </Button>
          <Typography alignSelf="center">
            09121234567{" "}
            <Typography
              sx={{
                // textDecoration: "underline",
                display: "inline-block",
                borderBottom: "1px solid #60A5FA",
                color: "#60A5FA",
                cursor: "pointer",
              }}
              onClick={() => setStep(1)}
            >
              ویرایش کنید
            </Typography>
          </Typography>
          <Typography alignSelf="center">{`ارسال مجدد کد پس از (00:${timer})`}</Typography>
          <Typography alignSelf="center" mt="60px">
            رمز عبور را بیاد آوردید؟{" "}
            <Link
              href="/user/login"
              style={{
                // textDecoration: "underline",
                borderBottom: "1px solid #60A5FA",
                color: "#60A5FA",
              }}
            >
              ورود.
            </Link>
          </Typography>
        </>
      )}
      {step === 3 && (
        <>
          <Typography alignSelf="center" fontSize="36px">
            تغییر رمز عبور
          </Typography>
          <Stack gap="8px">
            <Typography>رمز عبور جدید</Typography>
            <TextField></TextField>
          </Stack>
          <Stack gap="8px">
            <Typography>تکرار رمز عبور جدید</Typography>
            <TextField></TextField>
          </Stack>
          <Button
            sx={{ mb: "32px" }}
            onClick={() => router.push("/user/patient/register")}
          >
            تایید
          </Button>
        </>
      )}
    </Stack>
  );
}
