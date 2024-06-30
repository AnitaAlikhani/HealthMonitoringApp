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
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Medicine() {
  const router = useRouter();
  const [is‌Before, setIs‌Before] = useState(true);

  return (
    <Stack gap="24px" p="16px">
      <Box display="flex" alignItems="center" gap="16px" p="16px">
        <IconButton sx={{ p: "0px", m: "0px" }} onClick={() => router.back()}>
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
        <Typography fontSize="20px">افزودن دارو</Typography>
      </Box>

      <Stack gap="8px">
        <Typography>نام دارو</Typography>
        <TextField placeholder="ویتامین ب"></TextField>
      </Stack>
      <Stack gap="8px">
        <Typography>دوز مصرفی</Typography>
        <TextField placeholder="۱۰۰ میلی گرم"></TextField>
      </Stack>
      <Stack gap="8px">
        <Typography>تعداد</Typography>
        <TextField placeholder="2"></TextField>
      </Stack>

      <Stack gap="8px">
        <Typography>واحد</Typography>
        <Select defaultValue="tablet">
          <MenuItem value="tablet">قرص</MenuItem>
          <MenuItem value="count">تعداد</MenuItem>
        </Select>
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
        <Typography>قبل یا بعد غذا مصرف شود؟</Typography>
        <Box display="flex" gap="8px">
          <Button
            fullWidth
            sx={{
              bgcolor: is‌Before ? "#313A34" : "white",
              color: is‌Before ? "white" : "#313A34",
              "&:hover": {
                backgroundColor: is‌Before ? "#313A34" : "white",
              },
            }}
            onClick={() => setIs‌Before(true)}
          >
            قبل
          </Button>
          <Button
            fullWidth
            sx={{
              bgcolor: !is‌Before ? "#313A34" : "white",
              color: !is‌Before ? "white" : "#313A34",
              "&:hover": {
                backgroundColor: !is‌Before ? "#313A34" : "white",
              },
            }}
            onClick={() => setIs‌Before(false)}
          >
            بعد
          </Button>
        </Box>
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
      <Button onClick={() => router.push("/user/patient/notif")}>
        افزودن دارو
      </Button>
    </Stack>
  );
}
