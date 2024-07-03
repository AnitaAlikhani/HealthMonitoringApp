"use client";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import ArrowLeftBlue from "../../../../../public/arrow-left-blue.svg";
import Tick from "../../../../../public/tick.svg";
import Clock from "../../../../../public/clock.svg";
import Doctor from "../../../../../public/doctor.svg";
import Test from "../../../../../public/test.svg";
import ArrowRight from "../../../../../public/arrow-right.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Did() {
  const router = useRouter();
  return (
    <Stack gap="30px" mb="16px">
      <Stack
        p="16px"
        pb="28px"
        bgcolor="#60A5FA"
        borderRadius="0 0 48px 48px"
        gap="16px"
        alignItems="center"
        color="#fff"
      >
        <IconButton
          sx={{ bgcolor: "#60A5FA", alignSelf: "flex-start" }}
          onClick={() => router.push("/user/patient/doctors")}
        >
          <Image src={ArrowLeftBlue.src} width={48} height={48} />
        </IconButton>
        <Image src={Doctor.src} width={96} height={96} />
        <Stack gap="12px" alignItems="center">
          <Box display="flex" alignItems="center" gap="2px">
            <Typography fontSize="24px">دکتر علیرضا حسینی</Typography>
            <Image src={Tick.src} width={20} height={20} />
          </Box>
          <Box display="flex" gap="16px">
            <Box display="flex" alignItems="center" gap="4px">
              <Image src={Clock.src} width={16} height={16} />
              <Typography>مغز و اعصاب</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="4px">
              <Image src={Clock.src} width={16} height={16} />
              <Typography>501m</Typography>
            </Box>
          </Box>
        </Stack>
      </Stack>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="12px"
        borderRadius="32px"
        bgcolor="#fff"
        mx="16px"
      >
        <Box
          display="flex"
          alignItems="center"
          gap="8px"
          //   onClick={() => router.push("/user/patient/data/status")}
          //   sx={{ cursor: "pointer" }}
        >
          <Image src={Test.src} width={56} height={56} />
          <Stack gap="6px">
            <Typography>زودترین وقت</Typography>
            <Typography>۱۰:۰۰ - ۱۰:۳۰ ۲۹ خرداد، ۱۴۰۳</Typography>
          </Stack>
        </Box>
        <IconButton>
          <Image src={ArrowRight.src} width={24} height={24} />
        </IconButton>
      </Box>
      <Typography mx="16px">توضیحات</Typography>
      <Typography mx="16px">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتاب.
      </Typography>
      <Button
        sx={{ alignSelf: "center" }}
        onClick={() => router.push("/user/patient/doctors/did/set")}
      >
        رزرو
      </Button>
    </Stack>
  );
}
