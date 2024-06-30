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
import P1 from "../../../../../../public/p1.svg";
import P2 from "../../../../../../public/p2.svg";
import Tick from "../../../../../../public/tick.svg";
import Clock from "../../../../../../public/clock.svg";
import Doctor from "../../../../../../public/doctor.svg";
import ArrowRight from "../../../../../../public/arrow-right.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Calendar, CalendarProvider } from "zaman";

export default function Set() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [view, setView] = useState("cal");
  const [calendarValue, setCalendarValue] = useState(new Date());
  const [time, setTime] = useState(1);

  return (
    <Stack gap="24px" p="16px">
      <Box display="flex" alignItems="center" gap="16px" p="16px">
        <IconButton
          sx={{ p: "0px", m: "0px" }}
          onClick={() => {
            if (step === 2) setStep(1);
            else router.back();
          }}
        >
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
        <Typography fontSize="20px">وقت ملاقات</Typography>
      </Box>
      <Image
        src={step === 1 ? P1.src : P2.src}
        width={375}
        height={60}
        style={{ alignSelf: "center" }}
      />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="12px"
        borderRadius="32px"
        bgcolor="#fff"
      >
        <Box display="flex" alignItems="center" gap="8px">
          <Image src={Doctor.src} width={72} height={72} />
          <Stack gap="6px">
            <Box display="flex" alignItems="center" gap="2px">
              <Typography>علیرضا حسینی</Typography>
              <Image src={Tick.src} width={20} height={20} />
            </Box>
            <Box display="flex" alignItems="center" gap="2px">
              <Image src={Clock.src} width={16} height={16} />
              <Typography>مغز و اعصاب</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="2px">
              <Image src={Clock.src} width={16} height={16} />
              <Typography>501m</Typography>
            </Box>
          </Stack>
        </Box>
        <IconButton onClick={() => router.push("/user/patient/doctors/did")}>
          <Image src={ArrowRight.src} width={24} height={24} />
        </IconButton>
      </Box>
      <Divider />
      {step === 1 && (
        <>
          <Typography>دلیل مراجعه</Typography>
          <TextField
            multiline
            rows={5}
            placeholder="لطفا دلیل مراجعه خود را اینجا ذکر کنید..."
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
          <Button onClick={() => setStep(2)}>ادامه</Button>
        </>
      )}

      {step === 2 && (
        <>
          <Typography>انتخاب تاریخ</Typography>
          <Stack alignItems="center">
            <CalendarProvider locale="fa" round="x2">
              <Calendar
                defaultValue={calendarValue}
                onChange={({ value }) => setCalendarValue(value)}
                weekends={[6]}
              />
            </CalendarProvider>
          </Stack>
          <Typography>ساعت</Typography>
          <Box display="flex" gap="8px" flexWrap="wrap" alignSelf="center">
            <Button
              sx={{
                bgcolor: time === 1 ? "#313A34" : "white",
                color: time === 1 ? "white" : "#313A34",
                "&:hover": {
                  backgroundColor: time === 1 ? "#313A34" : "white",
                },
              }}
              onClick={() => setTime(1)}
            >
              8:00
            </Button>
            <Button
              sx={{
                bgcolor: time === 2 ? "#313A34" : "white",
                color: time === 2 ? "white" : "#313A34",
                "&:hover": {
                  backgroundColor: time === 2 ? "#313A34" : "white",
                },
              }}
              onClick={() => setTime(2)}
            >
              9:00
            </Button>
            <Button
              sx={{
                bgcolor: time === 3 ? "#313A34" : "white",
                color: time === 3 ? "white" : "#313A34",
                "&:hover": {
                  backgroundColor: time === 3 ? "#313A34" : "white",
                },
              }}
              onClick={() => setTime(3)}
            >
              10:00
            </Button>
            <Button
              sx={{
                bgcolor: time === 4 ? "#313A34" : "white",
                color: time === 4 ? "white" : "#313A34",
                "&:hover": {
                  backgroundColor: time === 4 ? "#313A34" : "white",
                },
              }}
              onClick={() => setTime(4)}
            >
              11:00
            </Button>
            <Button
              sx={{
                bgcolor: time === 5 ? "#313A34" : "white",
                color: time === 5 ? "white" : "#313A34",
                "&:hover": {
                  backgroundColor: time === 5 ? "#313A34" : "white",
                },
              }}
              onClick={() => setTime(5)}
            >
              12:00
            </Button>
          </Box>
          <Button onClick={() => router.push("/user/patient/doctors/did")}>
            ثبت
          </Button>
        </>
      )}
    </Stack>
  );
}
