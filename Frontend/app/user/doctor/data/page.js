"use client";

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ArrowRight from "../../../../public/arrow-right.svg";
import D1 from "../../../../public/d1.svg";
import D2 from "../../../../public/d2.svg";
import D3 from "../../../../public/d3.svg";
import D4 from "../../../../public/d4.svg";
import D5 from "../../../../public/d5.svg";
import D6 from "../../../../public/d6.svg";
import D7 from "../../../../public/d7.svg";
import Chart1 from "../../../../public/chart1.svg";
import Chart2 from "../../../../public/chart2.svg";
import Chart3 from "../../../../public/chart3.svg";
import Chart4 from "../../../../public/chart4.svg";
import ArrowLeftFilled from "../../../../public/arrow-left-filled.svg";
import Edit from "../../../../public/edit.svg";
import { useRouter } from "next/navigation";

export default function PatientData() {
  const router = useRouter();
  return (
    <Stack gap="24px" p="16px" bgcolor="white" minHeight="100dvh">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="16px"
      >
        <IconButton
          sx={{ p: "0px", m: "0px" }}
          onClick={() => router.push("/user/doctor")}
        >
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
        <Typography fontSize="20px"> داده‌های سلامت</Typography>
        <IconButton
          sx={{ p: "0px", m: "0px" }}
          onClick={() => router.push("/user/doctor/data/edit")}
        >
          <Image src={Edit.src} width={56} height={56} />
        </IconButton>
      </Box>
      <Typography textAlign="center">شنبه، ۱۰ خرداد ۱۴۰۳</Typography>
      <Stack gap="8px">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p="12px"
          borderRadius="32px"
          bgcolor="#F5F5F5"
        >
          <Box display="flex" alignItems="center" gap="8px">
            <Image src={D1.src} width={56} height={56} />
            <Stack gap="6px">
              <Typography>وضعیت اتصال دستگاه</Typography>

              <Box display="flex" alignItems="center" gap="8px">
                <Typography
                  borderRadius="9px"
                  bgcolor="#ECFCCB"
                  p="8px"
                  color="#84CC16"
                >
                  وضعیت نرمال
                </Typography>
                <Typography>ADSL</Typography>
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
          bgcolor="#F5F5F5"
        >
          <Box
            display="flex"
            alignItems="center"
            gap="8px"
            onClick={() => router.push("/user/doctor/data/status")}
            sx={{ cursor: "pointer" }}
          >
            <Image src={D2.src} width={56} height={56} />
            <Stack gap="6px">
              <Typography>شرح حال بیمار</Typography>
              <Typography>آخرین ویرایش : یک ساعت پیش</Typography>
            </Stack>
          </Box>
          <IconButton onClick={() => router.push("/user/doctor/data/status")}>
            <Image src={ArrowRight.src} width={24} height={24} />
          </IconButton>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p="12px"
          borderRadius="32px"
          bgcolor="#F5F5F5"
        >
          <Box display="flex" alignItems="center" gap="8px">
            <Image src={D3.src} width={56} height={56} />
            <Stack gap="6px">
              <Typography>ضربان قلب</Typography>

              <Box display="flex" alignItems="center" gap="2px">
                <Typography color="#647067">bpm</Typography>
                <Typography fontSize="24px">97</Typography>
              </Box>
            </Stack>
          </Box>
          <Image src={Chart1.src} width={133} height={56} />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p="12px"
          borderRadius="32px"
          bgcolor="#F5F5F5"
        >
          <Box display="flex" alignItems="center" gap="8px">
            <Image src={D4.src} width={56} height={56} />
            <Stack gap="6px">
              <Typography>نوار قلب</Typography>

              <Box display="flex" alignItems="center" gap="8px">
                <Typography
                  borderRadius="9px"
                  bgcolor="#FEF9C3"
                  p="8px"
                  color="#EAB308"
                >
                  وضعیت زرد
                </Typography>
                <Typography>نیاز به بررسی بیمار</Typography>
              </Box>
            </Stack>
          </Box>
          <IconButton
            onClick={() => router.push("/user/doctor/data/electrocardiography")}
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
          bgcolor="#F5F5F5"
        >
          <Box display="flex" alignItems="center" gap="8px">
            <Image src={D5.src} width={56} height={56} />
            <Stack gap="6px">
              <Typography>فشار خون</Typography>

              <Box display="flex" alignItems="center" gap="2px">
                <Typography color="#647067">mmHg</Typography>
                <Typography fontSize="24px">112</Typography>
              </Box>
            </Stack>
          </Box>
          <Image src={Chart2.src} width={133} height={56} />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p="12px"
          borderRadius="32px"
          bgcolor="#F5F5F5"
        >
          <Box display="flex" alignItems="center" gap="8px">
            <Image src={D6.src} width={56} height={56} />
            <Stack gap="6px">
              <Typography>دمای بدن</Typography>

              <Box display="flex" alignItems="center" gap="2px">
                <Typography color="#647067">C</Typography>
                <Typography fontSize="24px">37</Typography>
              </Box>
            </Stack>
          </Box>
          <Image src={Chart3.src} width={133} height={56} />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p="12px"
          borderRadius="32px"
          bgcolor="#F5F5F5"
        >
          <Box display="flex" alignItems="center" gap="8px">
            <Image src={D7.src} width={56} height={56} />
            <Stack gap="6px">
              <Typography>اکسیژن</Typography>

              <Box display="flex" alignItems="center" gap="2px">
                <Typography color="#647067">%</Typography>
                <Typography fontSize="24px">98</Typography>
              </Box>
            </Stack>
          </Box>
          <Image src={Chart4.src} width={133} height={56} />
        </Box>
      </Stack>
      <Button>اشتراک گذاری داده ها</Button>
    </Stack>
  );
}
