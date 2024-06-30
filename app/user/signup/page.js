"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../../public/logo.svg";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [isPatient, setIsPatient] = useState(true);
  const [pass, setPass] = useState("");
  const [repeatedPass, setRepeatedPass] = useState("");

  return (
    <Stack
      //   border="1px solid"
      p="16px"
      gap="16px"
      minHeight="100vh"
      //   alignItems="center"
      justifyContent="center"
    >
      <Image
        src={Logo.src}
        width={56}
        height={56}
        style={{ alignSelf: "center" }}
      />
      <Typography alignSelf="center" fontSize="36px">
        ثبت‌نام
      </Typography>
      <Box display="flex" gap="8px">
        <Button
          fullWidth
          sx={{
            bgcolor: isPatient ? "#313A34" : "white",
            color: isPatient ? "white" : "#313A34",
            "&:hover": {
              backgroundColor: isPatient ? "#313A34" : "white",
            },
          }}
          onClick={() => setIsPatient(true)}
        >
          بیمار
        </Button>
        <Button
          fullWidth
          sx={{
            bgcolor: !isPatient ? "#313A34" : "white",
            color: !isPatient ? "white" : "#313A34",
            "&:hover": {
              backgroundColor: !isPatient ? "#313A34" : "white",
            },
          }}
          onClick={() => setIsPatient(false)}
        >
          پزشک
        </Button>
      </Box>
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
      <Stack gap="8px">
        <Typography>تکرار رمز عبور</Typography>
        <TextField
          value={repeatedPass}
          onChange={(e) => setRepeatedPass(e.target.value)}
        ></TextField>
      </Stack>
      {repeatedPass.length > 0 && pass.length > 0 && repeatedPass !== pass && (
        <Box
          display="flex"
          alignItems="center"
          gap="8px"
          bgcolor="#FFE4E7"
          p="12px"
          sx={{ borderRadius: "21px", border: "1px solid #F43F5E" }}
        >
          <Image src="./next.svg" width={20} height={20} />
          <Typography>خطا: تکرار رمز عبور مطابقت ندارد.</Typography>
        </Box>
      )}
      <Button
        sx={{ mb: "32px" }}
        onClick={() => {
          if (isPatient) router.push("/user/patient/register");
        }}
      >
        ثبت‌نام
      </Button>
      <Typography alignSelf="center">
        حساب کاربری دارید؟{" "}
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
    </Stack>
  );
}
