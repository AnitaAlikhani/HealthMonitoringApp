"use client";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ArrowLeftFilled from "../../../../../public/arrow-left-filled.svg";
import ArrowRight from "../../../../../public/arrow-right.svg";
import { useRouter } from "next/navigation";
import { DatePicker } from "zaman";

export default function EditPatientData() {
  const router = useRouter();
  return (
    <Stack gap="24px" p="16px">
      <Box display="flex" alignItems="center" gap="16px" p="16px">
        <IconButton sx={{ p: "0px", m: "0px" }} onClick={() => router.back()}>
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
        <Typography fontSize="20px"> ویرایش داده‌های سلامت</Typography>
      </Box>

      <Stack gap="8px">
        <Typography>تاریخ</Typography>
        <DatePicker
          round="x4"
          position="right"
          onChange={(e) => console.log(e)}
          inputAttributes={{
            style: {
              padding: "16px",
              borderRadius: "16px",
              border: "1px solid #bbb",
              cursor: "pointer",
            },
          }}
          defaultValue={Date.now()}
        />
      </Stack>

      <Stack gap="8px">
        <Typography>قند خون</Typography>
        <TextField placeholder="میزان قند خون را وارد کنید"></TextField>
      </Stack>

      <Stack gap="8px">
        <Typography>فشار خون</Typography>
        <TextField placeholder="میزان فشار خون را وارد کنید"></TextField>
      </Stack>

      <Box display="flex" gap="8px">
        <Stack gap="8px" width="50%">
          <Typography>وزن</Typography>
          <TextField placeholder="60kg"></TextField>
        </Stack>
        <Stack gap="8px" width="50%">
          <Typography>قد</Typography>
          <TextField placeholder="165cm"></TextField>
        </Stack>
      </Box>

      <Stack
        gap="8px"
        sx={{ cursor: "pointer" }}
        onClick={() => router.push("/user/patient/data/status?i=TRUE")}
      >
        <Typography>شرح حال</Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p="12px"
          borderRadius="32px"
          bgcolor="white"
        >
          <Typography>ویرایش شرح حال بیمار</Typography>
          <IconButton
            onClick={() => router.push("/user/patient/data/status?i=TRUE")}
          >
            <Image src={ArrowRight.src} width={24} height={24} />
          </IconButton>
        </Box>
      </Stack>

      <Button onClick={() => router.push("/user/patient/data")}>
        ذخیره تغییرات
      </Button>
    </Stack>
  );
}
