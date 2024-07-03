"use client";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ArrowLeftFilled from "../../../../../public/arrow-left-filled.svg";
import Activity from "../../../../../public/activity.png";
import Medicine from "../../../../../public/medicine.svg";
import Plus2 from "../../../../../public/plus2.png";

import { useRouter } from "next/navigation";

export default function AddNotif() {
  const router = useRouter();
  return (
    <Stack gap="24px" p="16px">
      <Box display="flex" alignItems="center" gap="16px" p="16px">
        <IconButton sx={{ p: "0px", m: "0px" }} onClick={() => router.back()}>
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
        <Typography fontSize="20px">افزودن یادآور</Typography>
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
          <Image src={Activity.src} width={56} height={56} />
          <Typography>افزودن فعالیت</Typography>
        </Box>
        <IconButton
          onClick={() => router.push("/user/doctor/notif/add/activity")}
        >
          <Image src={Plus2.src} width={24} height={24} />
        </IconButton>
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
          <Image src={Medicine.src} width={56} height={56} />
          <Typography>افزودن دارو</Typography>
        </Box>
        <IconButton
          onClick={() => router.push("/user/doctor/notif/add/medicine")}
        >
          <Image src={Plus2.src} width={24} height={24} />
        </IconButton>
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
          <Image src={Medicine.src} width={56} height={56} />
          <Typography>افزودن بیمار</Typography>
        </Box>
        <IconButton>
          <Image src={Plus2.src} width={24} height={24} />
        </IconButton>
      </Box>
    </Stack>
  );
}
