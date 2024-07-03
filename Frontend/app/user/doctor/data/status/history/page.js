"use client";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import History from "../../../../../../public/history.svg";
import ArrowLeftFilled from "../../../../../../public/arrow-left-filled.svg";
import ArrowRight from "../../../../../../public/arrow-right.svg";
import D2 from "../../../../../../public/d2.svg";

export default function StatusHistory() {
  const router = useRouter();
  return (
    <Stack gap="24px" p="16px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="16px"
      >
        <IconButton sx={{ p: "0px", m: "0px" }} onClick={() => router.back()}>
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
        <Typography fontSize="20px">تاریخچه شرح حال</Typography>
        <IconButton
          sx={{ p: "0px", m: "0px" }}
          onClick={() => router.push("/user/doctor/data/status/history")}
        >
          <Image src={History.src} width={56} height={56} />
        </IconButton>
      </Box>
      {new Array(4).fill(1).map(() => (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p="12px"
          borderRadius="32px"
          bgcolor="white"
        >
          <Box
            display="flex"
            alignItems="center"
            gap="8px"
            // onClick={() => router.push("/user/patient/data/status")}
            // sx={{ cursor: "pointer" }}
          >
            <Image src={D2.src} width={56} height={56} />
            <Stack gap="6px">
              <Typography>شرح حال بیمار</Typography>
              <Typography>آخرین ویرایش : یک ساعت پیش</Typography>
            </Stack>
          </Box>
          <IconButton
          //   onClick={() => router.push("/user/patient/data/status")}
          >
            <Image src={ArrowRight.src} width={24} height={24} />
          </IconButton>
        </Box>
      ))}
    </Stack>
  );
}
