"use client";
import Image from "next/image";
import Page from "../../../../../public/page.svg";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ArrowLeftFilled from "../../../../../public/arrow-left-filled.svg";
import { useRouter } from "next/navigation";

export default function Electrocardiography() {
  const router = useRouter();
  return (
    <Stack alignItems="center">
      <Box
        display="flex"
        alignItems="center"
        gap="16px"
        p="16px"
        mb="-80px"
        width="100%"
      >
        <IconButton sx={{ p: "0px", m: "0px" }} onClick={() => router.back()}>
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
        <Typography fontSize="20px">نوار قلب</Typography>
      </Box>
      <Image src={Page.src} width={343} height={996} />
    </Stack>
  );
}
