"use client";

import { Box, IconButton, Stack, Switch, Typography } from "@mui/material";
import Image from "next/image";
import ArrowLeftFilled from "../../../../../public/arrow-left-filled.svg";
import ArrowRight from "../../../../../public/arrow-right.svg";
import Icon1 from "../../../../../public/picon.svg";
import Icon2 from "../../../../../public/ps2.svg";
import Icon3 from "../../../../../public/ps3.svg";
import Exit from "../../../../../public/exit.svg";

import { useRouter } from "next/navigation";

export default function ProfileSetting() {
  const router = useRouter();
  return (
    <Stack gap="24px" p="16px">
      <Box display="flex" alignItems="center" gap="16px" p="16px">
        <IconButton sx={{ p: "0px", m: "0px" }} onClick={() => router.back()}>
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
        <Typography fontSize="20px">تنظیمات پروفایل</Typography>
      </Box>

      <Stack gap="8px">
        <Typography>عمومی</Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p="12px"
          borderRadius="32px"
          bgcolor="white"
        >
          <Box display="flex" alignItems="center" gap="8px">
            <Image src={Icon1.src} width={56} height={56} />
            <Typography>اطلاعات شخصی</Typography>
          </Box>
          <IconButton>
            <Image src={ArrowRight.src} width={24} height={24} />
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
            <Image src={Icon2.src} width={56} height={56} />
            <Typography>تاریخچه پزشکی</Typography>
          </Box>
          <IconButton
            onClick={() => router.push("/user/patient/profile/setting/history")}
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
          <Box
            display="flex"
            alignItems="center"
            gap="8px"
            onClick={() => router.push("/user/patient/data/status")}
            sx={{ cursor: "pointer" }}
          >
            <Image src={Icon3.src} width={56} height={56} />
            <Stack gap="6px">
              <Typography>نام کامل دستگاه</Typography>
              <Box display="flex" alignItems="center" gap="8px">
                <Typography>متصل</Typography>
                <Typography>97%</Typography>
              </Box>
            </Stack>
          </Box>
          <Switch defaultChecked />
        </Box>
      </Stack>

      <Stack gap="8px">
        <Typography>خروج</Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p="12px"
          borderRadius="32px"
          bgcolor="white"
        >
          <Box display="flex" alignItems="center" gap="8px">
            <Image src={Exit.src} width={56} height={56} />
            <Typography>خروج</Typography>
          </Box>
          <IconButton>
            <Image src={ArrowRight.src} width={24} height={24} />
          </IconButton>
        </Box>
      </Stack>
    </Stack>
  );
}
