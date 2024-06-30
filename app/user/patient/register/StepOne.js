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
        اطلاعات بیمار
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
        <Typography>شهر</Typography>
        <Select defaultValue="tehran">
          <MenuItem value="tehran">تهران</MenuItem>
          <MenuItem value="esfahan">اصفهان</MenuItem>
          <MenuItem value="shiraz">شیراز</MenuItem>
        </Select>
      </Stack>

      <Stack gap="8px">
        <Typography>جنسیت</Typography>
        <Select defaultValue="male">
          <MenuItem value="male">مرد</MenuItem>
          <MenuItem value="female">زن</MenuItem>
          <MenuItem value="other">دیگر</MenuItem>
        </Select>
      </Stack>

      <Stack gap="8px">
        <Typography>تاریخ تولد</Typography>
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

      <Stack gap="8px">
        <Typography>گروه خونی</Typography>
        <Select defaultValue="+ab">
          <MenuItem value="+ab">+AB</MenuItem>
          <MenuItem value="-ab">-AB</MenuItem>
          <MenuItem value="+a">+A</MenuItem>
          <MenuItem value="-a">-A</MenuItem>
          <MenuItem value="+b">+B</MenuItem>
          <MenuItem value="-b">-B</MenuItem>
        </Select>
      </Stack>

      <Button onClick={() => setStep(2)}>ادامه</Button>
    </>
  );
}
