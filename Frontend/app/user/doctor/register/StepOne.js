"use client";

import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "zaman";
import Header from "./Header";

export default function StepOne({ setStep }) {
  return (
    <>
      <Header num={1} prevStepHandler={() => {}} />

      <Typography alignSelf="center" fontSize="36px">
        اطلاعات پزشک
      </Typography>
      <Stack gap="8px">
        <Typography>نام</Typography>
        <TextField placeholder="نام"></TextField>
      </Stack>
      <Stack gap="8px">
        <Typography>نام خانوادگی</Typography>
        <TextField placeholder="نام خانوادگی"></TextField>
      </Stack>
      <Stack gap="8px">
        <Typography>کد ملی</Typography>
        <TextField placeholder="0123456789"></TextField>
      </Stack>

      <Stack gap="8px">
        <Typography>شماره نظام پزشکی</Typography>
        <TextField placeholder="0123456789"></TextField>
      </Stack>

      <Stack gap="8px">
        <Typography>شهر</Typography>
        <Select defaultValue="tehran">
          <MenuItem value="tehran">تهران</MenuItem>
          <MenuItem value="esfahan">اصفهان</MenuItem>
          <MenuItem value="shiraz">شیراز</MenuItem>
        </Select>
      </Stack>

      <Stack gap="8px">
        <Typography>ثبت دقیق ادرس روی نقشه</Typography>
        <Select defaultValue="tehran">
          <MenuItem value="tehran">تهران</MenuItem>
          <MenuItem value="esfahan">اصفهان</MenuItem>
          <MenuItem value="shiraz">شیراز</MenuItem>
        </Select>
      </Stack>

      <Button onClick={() => setStep(2)}>ادامه</Button>
    </>
  );
}
