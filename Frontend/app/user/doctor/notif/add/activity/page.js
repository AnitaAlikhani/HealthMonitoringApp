"use client";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ArrowLeftFilled from "../../../../../../public/arrow-left-filled.svg";
import Tick from "../../../../../../public/tick.svg";
import Clock from "../../../../../../public/clock.svg";
import { useRouter } from "next/navigation";

export default function Activity() {
  const router = useRouter();
  return (
    <Stack gap="24px" p="16px">
      <Box display="flex" alignItems="center" gap="16px" p="16px">
        <IconButton sx={{ p: "0px", m: "0px" }} onClick={() => router.back()}>
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
        <Typography fontSize="20px">افزودن فعالیت</Typography>
      </Box>

      <Stack gap="8px">
        <Typography>نام بیمار</Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p="12px"
          borderRadius="32px"
          bgcolor="white"
        >
          <Box display="flex" alignItems="center" gap="8px">
            <Image src={Clock.src} width={24} height={24} />
            <Typography>الیاس اوستاد</Typography>
          </Box>
          <IconButton>
            <Image src={Tick.src} width={24} height={24} />
          </IconButton>
        </Box>
      </Stack>

      <Stack gap="8px">
        <Typography>نام فعالیت</Typography>
        <TextField placeholder="گرفتن قند خون"></TextField>
      </Stack>
      <Stack gap="8px">
        <Typography>تکرار</Typography>
        <Select defaultValue="weekly">
          <MenuItem value="weekly">هر هفته</MenuItem>
          <MenuItem value="daily">هر روز</MenuItem>
        </Select>
      </Stack>

      <Stack gap="8px">
        <Typography>فاصله</Typography>
        <Select defaultValue="2">
          <MenuItem value="2">۲ بار در روز</MenuItem>
          <MenuItem value="1">1 بار در روز</MenuItem>
        </Select>
      </Stack>
      <Stack gap="8px">
        <Typography>ساعت</Typography>
        <TextField placeholder="11:00"></TextField>
      </Stack>
      <Stack gap="8px">
        <Typography>توضیحات</Typography>
        <TextField
          multiline
          rows={7}
          placeholder="توضیحات خود را اینجا اضافه کنید."
          variant="outlined"
          InputProps={{
            sx: {
              borderRadius: "21px",
              backgroundColor: "white",
              paddingX: "16px",
              border: "none",
            },
          }}
        />
      </Stack>
      <Button onClick={() => router.push("/user/doctor/notif")}>
        افزودن فعالیت
      </Button>
    </Stack>
  );
}
