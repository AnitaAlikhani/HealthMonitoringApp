"use client";

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ArrowLeftFilled from "../../../../../public/arrow-left-filled.svg";
import R2 from "../../../../../public/r2.svg";

import { useRouter } from "next/navigation";

export default function Appointment() {
  const router = useRouter();
  return (
    <Stack gap="24px" p="16px">
      <Box display="flex" p="16px">
        <IconButton sx={{ p: "0px", m: "0px" }} onClick={() => router.back()}>
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
      </Box>
      <Stack alignItems="center" gap="4px">
        <Typography fontSize="30px">قرار های ملاقات من</Typography>
        <Typography>شما ۲ قرار ملاقات دارید.</Typography>
      </Stack>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="12px"
        borderRadius="32px"
        bgcolor="white"
      >
        <Box display="flex" alignItems="center" gap="8px">
          <Image src={R2.src} width={56} height={56} />
          <Stack gap="6px">
            <Typography>ملاقات با دکتر علیرضا حسینی</Typography>
            <Typography>۲ ساعت و ۱۵ دقیقه دیگر تا ملاقات! </Typography>
            <Typography>۹:۰۰-۱۰:۰۰</Typography>
          </Stack>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="12px"
        borderRadius="32px"
        bgcolor="white"
      >
        <Box display="flex" alignItems="center" gap="8px">
          <Image src={R2.src} width={56} height={56} />
          <Stack gap="6px">
            <Typography>ملاقات با دکتر علیرضا حسینی</Typography>
            <Typography>۲ ساعت و ۱۵ دقیقه دیگر تا ملاقات! </Typography>
            <Typography>۹:۰۰-۱۰:۰۰</Typography>
          </Stack>
        </Box>
      </Box>
      <Button>اضافه کردن قرار ملاقات</Button>
    </Stack>
  );
}
