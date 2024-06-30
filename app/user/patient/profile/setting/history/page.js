"use client";

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ArrowRight from "../../../../../../public/arrow-right.svg";
import ArrowLeftFilled from "../../../../../../public/arrow-left-filled.svg";
import Edit from "../../../../../../public/layers.svg";
import Test from "../../../../../../public/test.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfileHistory() {
  const router = useRouter();
  const [mode, setMode] = useState(3);
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
        <Typography fontSize="20px">تاریخچه پزشکی</Typography>
        <IconButton
          sx={{ p: "0px", m: "0px" }}
          //   onClick={() => router.push("/user/patient/data/edit")}
        >
          <Image src={Edit.src} width={56} height={56} />
        </IconButton>
      </Box>
      <Box
        display="flex"
        gap="4px"
        p="4px"
        bgcolor="white"
        borderRadius={8}
        width="100%"
        // color="white"
      >
        <Button
          onClick={() => setMode(1)}
          fullWidth
          variant={mode === 1 ? "contained" : "text"}
          color={mode === 1 ? "primary" : "inherit"}
        >
          دارو
        </Button>
        <Button
          onClick={() => setMode(2)}
          fullWidth
          variant={mode === 2 ? "contained" : "text"}
          color={mode === 2 ? "primary" : "inherit"}
        >
          بیماری
        </Button>
        <Button
          onClick={() => setMode(3)}
          fullWidth
          variant={mode === 3 ? "contained" : "text"}
          color={mode === 3 ? "primary" : "inherit"}
        >
          آزمایش
        </Button>
      </Box>
      <Stack gap="8px">
        {mode === 2 && (
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
              //   onClick={() => router.push("/user/patient/data/status")}
              //   sx={{ cursor: "pointer" }}
            >
              <Image src={Test.src} width={56} height={56} />
              <Stack gap="6px">
                <Typography>مراجعه به پزشکی</Typography>
                <Typography>۲۹ خرداد، ۱۴۰۳</Typography>
              </Stack>
            </Box>
            <IconButton
            //   onClick={() => router.push("/user/patient/data/status")}
            >
              <Image src={ArrowRight.src} width={24} height={24} />
            </IconButton>
          </Box>
        )}
        {mode === 3 && (
          <>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p="12px"
              borderRadius="32px"
              bgcolor="#fff"
            >
              <Box display="flex" alignItems="center" gap="8px">
                <Image src={Test.src} width={56} height={56} />
                <Stack gap="6px">
                  <Typography>آزمایش خون کامل (CBC)</Typography>

                  <Box display="flex" alignItems="center" gap="8px">
                    <Typography
                      borderRadius="9px"
                      bgcolor="#ECFCCB"
                      p="8px"
                      color="#84CC16"
                    >
                      در حال بررسی
                    </Typography>
                    <Typography>۲۹ خرداد، ۱۴۰۳</Typography>
                  </Box>
                </Stack>
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
              bgcolor="#fff"
            >
              <Box display="flex" alignItems="center" gap="8px">
                <Image src={Test.src} width={56} height={56} />
                <Stack gap="6px">
                  <Typography>آزمایش ادرار (Urinalysis)</Typography>

                  <Box display="flex" alignItems="center" gap="8px">
                    <Typography
                      borderRadius="9px"
                      bgcolor="#ECFCCB"
                      p="8px"
                      color="#84CC16"
                    >
                      وضعیت نرمال
                    </Typography>
                    <Typography>۲۹ خرداد، ۱۴۰۳</Typography>
                  </Box>
                </Stack>
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
              bgcolor="#fff"
            >
              <Box display="flex" alignItems="center" gap="8px">
                <Image src={Test.src} width={56} height={56} />
                <Stack gap="6px">
                  <Typography>الکتروکاردیوگرام (ECG)</Typography>

                  <Box display="flex" alignItems="center" gap="8px">
                    <Typography
                      borderRadius="9px"
                      bgcolor="#FEF9C3"
                      p="8px"
                      color="#EAB308"
                    >
                      وضعیت زرد
                    </Typography>
                    <Typography>۲۹ خرداد، ۱۴۰۳</Typography>
                  </Box>
                </Stack>
              </Box>
              <IconButton
                onClick={() =>
                  router.push("/user/patient/data/electrocardiography")
                }
              >
                <Image src={ArrowRight.src} width={24} height={24} />
              </IconButton>
            </Box>
          </>
        )}
      </Stack>
    </Stack>
  );
}
