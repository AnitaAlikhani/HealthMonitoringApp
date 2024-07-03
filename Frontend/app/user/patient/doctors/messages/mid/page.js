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
import ArrowLeftFilled from "../../../../../../public/arrow-left-filled.svg";
import Message from "../../../../../../public/message.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Mid() {
  const router = useRouter();

  return (
    <Stack gap="24px">
      <Box
        display="flex"
        alignItems="center"
        gap="16px"
        bgcolor="#fff"
        p="16px"
        pb="28px"
        borderRadius="0 0 48px 48px"
      >
        <IconButton sx={{ p: "0px", m: "0px" }} onClick={() => router.back()}>
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
        <Stack gap="4px">
          <Typography fontSize="20px">علیرضا حسینی</Typography>
          <Typography>مغز و اعصاب</Typography>
        </Stack>
      </Box>
      <Image
        src={Message.src}
        width={343}
        height={521}
        style={{ alignSelf: "center" }}
      />
      <Box
        display="flex"
        alignItems="center"
        gap="16px"
        bgcolor="#111A14"
        p="16px"
        mx="16px"
        mb="16px"
        borderRadius="32px"
      >
        <IconButton sx={{ p: "0px", m: "0px" }}>
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
        <TextField sx={{ width: "100%" }} placeholder="پیام" />
      </Box>
    </Stack>
  );
}
