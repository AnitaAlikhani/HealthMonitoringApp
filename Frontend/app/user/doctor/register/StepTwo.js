import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Header from "./Header";

export default function StepTwo({ setStep }) {
  return (
    <>
      <Header num={2} prevStepHandler={() => setStep(1)} />
      <Typography alignSelf="center" fontSize="36px">
        اطلاعات پزشک
      </Typography>

      <Stack gap="8px">
        <Typography>روز های کاری مطب</Typography>
        <Select defaultValue="even">
          <MenuItem value="even">فقط روزهای زوج</MenuItem>
          <MenuItem value="odd">فقط روزهای فرد</MenuItem>
          <MenuItem value="all">همه روزه</MenuItem>
        </Select>
      </Stack>

      <Box display="flex" gap="8px">
        <Stack gap="8px" width="50%">
          <Typography>ساعات کاری مطب</Typography>
          <Select defaultValue="9">
            <MenuItem value="9">9 صبح</MenuItem>
            <MenuItem value="10">10 صبح</MenuItem>
            <MenuItem value="11">11 صبح</MenuItem>
          </Select>
        </Stack>

        <Stack gap="8px" width="50%">
          <Typography>ساعات کاری مطب</Typography>
          <Select defaultValue="21">
            <MenuItem value="21">21 شب</MenuItem>
            <MenuItem value="22">22 شب</MenuItem>
            <MenuItem value="23">23 شب</MenuItem>
          </Select>
        </Stack>
      </Box>

      <Stack gap="8px">
        <Typography>تخصص</Typography>
        <Select defaultValue="all">
          <MenuItem value="all">پزشک عمومی</MenuItem>
          <MenuItem value="h">قلب</MenuItem>
          <MenuItem value="b">مغز</MenuItem>
        </Select>
      </Stack>

      <Button onClick={() => setStep(3)}>ادامه</Button>
    </>
  );
}
