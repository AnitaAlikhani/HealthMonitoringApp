"use client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [pass, setPass] = useState("");
  return (
    <Stack p="16px" gap="16px" minHeight="100vh" justifyContent="center">
      <Image
        src={Logo.src}
        width={56}
        height={56}
        style={{ alignSelf: "center" }}
        alt="logo"
      />
      <Typography alignSelf="center" fontSize="36px">
        ورود
      </Typography>
      <Stack gap="8px">
        <Typography>شماره همراه</Typography>
        <TextField></TextField>
      </Stack>
      <Stack gap="8px">
        <Typography>رمز عبور</Typography>
        <TextField
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        ></TextField>
      </Stack>
      <Button
        sx={{ mb: "32px" }}
        onClick={() => {
          if (pass === "p") router.push("/user/patient/register");
          else if (pass === "d") router.push("/user/doctor/register");
        }}
      >
        ورود
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
      <Link href="/user/forgot-password" style={{ alignSelf: "center" }}>
        <Typography
          sx={{
            // textDecoration: "underline",
            borderBottom: "1px solid #60A5FA",
          }}
          color="#60A5FA"
        >
          فراموشی رمز عبور
        </Typography>
      </Link>
    </Stack>
  );
}
