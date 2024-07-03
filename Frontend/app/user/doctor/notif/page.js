"use client";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import ArrowLeftBlue from "../../../../public/arrow-left-blue.svg";
import Plus from "../../../../public/plus.svg";
import Image from "next/image";
import { useState } from "react";
import Heart from "../../../../public/heart.svg";
import List from "./List";
import { useRouter } from "next/navigation";

export default function Notif() {
  const router = useRouter();
  const [isToday, setIsToday] = useState(true);
  return (
    <Stack gap="30px" mb="16px">
      <Stack
        p="16px"
        pb="28px"
        borderRadius="0 0 48px 48px"
        bgcolor="#60A5FA"
        gap="16px"
        alignItems="flex-start"
      >
        <IconButton
          sx={{ bgcolor: "#60A5FA" }}
          onClick={() => router.push("/user/doctor")}
        >
          <Image src={ArrowLeftBlue.src} width={48} height={48} />
        </IconButton>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p="12px"
          borderRadius="32px"
          color="white"
          width="100%"
          // bgcolor="white"
        >
          <Stack gap="6px">
            <Typography fontSize="30px">یادآورها</Typography>
            <Typography>شما ۱۲ یادآور دارید!</Typography>
          </Stack>
          <IconButton onClick={() => router.push("/user/doctor/notif/add")}>
            <Image src={Plus.src} width={64} height={64} />
          </IconButton>
        </Box>
        <Box
          display="flex"
          gap="4px"
          p="4px"
          bgcolor="#3B82F6"
          borderRadius={8}
          width="100%"
          color="white"
        >
          <Button
            onClick={() => setIsToday(true)}
            fullWidth
            variant={isToday ? "contained" : "text"}
            color={isToday ? "info" : "inherit"}
          >
            امروز
          </Button>
          <Button
            onClick={() => setIsToday(false)}
            fullWidth
            variant={isToday ? "text" : "contained"}
            color={isToday ? "inherit" : "info"}
          >
            گذشته
          </Button>
        </Box>
      </Stack>
      {isToday ? (
        <>
          <Stack gap="8px" mx="16px">
            <Typography>فوری(1)</Typography>
            <Box
              display="flex"
              gap="12px"
              p="16px"
              bgcolor="#FFE4E7"
              borderRadius="32px"
              mx="16px"
            >
              <Image src={Heart.src} width={64} height={64} />
              <Stack gap="6px">
                <Typography>۱۰ بیمار اورژانسی !</Typography>
                <Typography>
                  وضعیت ۱۰ بیمار وخیم و نیاز به بررسی فوری دارد
                </Typography>
                <Button color="error" sx={{ width: "50%" }}>
                  مشاهده همه
                </Button>
              </Stack>
            </Box>
          </Stack>

          <Stack gap="8px" mx="16px">
            <Typography>امروز(2)</Typography>
            <List />
          </Stack>
        </>
      ) : (
        <>
          <Stack gap="8px" mx="16px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography>یک روز پیش (۲)</Typography>
              <IconButton>
                <Image src={Heart.src} width={24} height={24} />
              </IconButton>
            </Box>
            <List />
          </Stack>
          <Stack gap="8px" mx="16px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography>دو روز پیش (۲)</Typography>
              <IconButton>
                <Image src={Heart.src} width={24} height={24} />
              </IconButton>
            </Box>
            <List />
          </Stack>
        </>
      )}
    </Stack>
  );
}
