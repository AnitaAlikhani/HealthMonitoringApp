"use client";

import {
  Box,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ArrowLeftFilled from "../../../../../public/arrow-left-filled.svg";
import Tick from "../../../../../public/tick.svg";
import Clock from "../../../../../public/clock.svg";
import Doctor from "../../../../../public/doctor.svg";
import ArrowRight from "../../../../../public/arrow-right.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Messages() {
  const router = useRouter();

  return (
    <Stack gap="24px" p="16px">
      <Box display="flex" alignItems="center" gap="16px" p="16px">
        <IconButton sx={{ p: "0px", m: "0px" }} onClick={() => router.back()}>
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
        <Typography fontSize="20px">پیام‌ها</Typography>
      </Box>
      <Typography>خوانده نشده (۲)</Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="12px"
        borderRadius="32px"
        bgcolor="#fff"
      >
        <Box display="flex" alignItems="center" gap="8px">
          <Image src={Doctor.src} width={72} height={72} />
          <Stack gap="6px">
            <Box display="flex" alignItems="center" gap="2px">
              <Typography>علیرضا حسینی</Typography>
              <Image src={Tick.src} width={20} height={20} />
            </Box>
            <Box display="flex" alignItems="center" gap="2px">
              <Image src={Clock.src} width={16} height={16} />
              <Typography>مغز و اعصاب</Typography>
            </Box>
          </Stack>
        </Box>
        <IconButton
          onClick={() => router.push("/user/patient/doctors/messages/mid")}
        >
          <Image src={ArrowRight.src} width={24} height={24} />
        </IconButton>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="12px"
        borderRadius="32px"
        bgcolor="#fff"
      >
        <Box display="flex" alignItems="center" gap="8px">
          <Image src={Doctor.src} width={72} height={72} />
          <Stack gap="6px">
            <Box display="flex" alignItems="center" gap="2px">
              <Typography>علیرضا حسینی</Typography>
              <Image src={Tick.src} width={20} height={20} />
            </Box>
            <Box display="flex" alignItems="center" gap="2px">
              <Image src={Clock.src} width={16} height={16} />
              <Typography>مغز و اعصاب</Typography>
            </Box>
          </Stack>
        </Box>
        <IconButton
          onClick={() => router.push("/user/patient/doctors/messages/mid")}
        >
          <Image src={ArrowRight.src} width={24} height={24} />
        </IconButton>
      </Box>
      <Typography>خوانده‌شده</Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="12px"
        borderRadius="32px"
        bgcolor="#fff"
      >
        <Box display="flex" alignItems="center" gap="8px">
          <Image src={Doctor.src} width={72} height={72} />
          <Stack gap="6px">
            <Box display="flex" alignItems="center" gap="2px">
              <Typography>علیرضا حسینی</Typography>
              <Image src={Tick.src} width={20} height={20} />
            </Box>
            <Box display="flex" alignItems="center" gap="2px">
              <Image src={Clock.src} width={16} height={16} />
              <Typography>مغز و اعصاب</Typography>
            </Box>
          </Stack>
        </Box>
        <IconButton
          onClick={() => router.push("/user/patient/doctors/messages/mid")}
        >
          <Image src={ArrowRight.src} width={24} height={24} />
        </IconButton>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="12px"
        borderRadius="32px"
        bgcolor="#fff"
      >
        <Box display="flex" alignItems="center" gap="8px">
          <Image src={Doctor.src} width={72} height={72} />
          <Stack gap="6px">
            <Box display="flex" alignItems="center" gap="2px">
              <Typography>علیرضا حسینی</Typography>
              <Image src={Tick.src} width={20} height={20} />
            </Box>
            <Box display="flex" alignItems="center" gap="2px">
              <Image src={Clock.src} width={16} height={16} />
              <Typography>مغز و اعصاب</Typography>
            </Box>
          </Stack>
        </Box>
        <IconButton
          onClick={() => router.push("/user/patient/doctors/messages/mid")}
        >
          <Image src={ArrowRight.src} width={24} height={24} />
        </IconButton>
      </Box>
    </Stack>
  );
}
