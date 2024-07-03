"use client";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Call from "../../../../public/call.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Heart from "../../../../public/heart.svg";
import M1 from "../../../../public/m1.svg";
import M2 from "../../../../public/m22.svg";
import M3 from "../../../../public/m3.svg";
import M4 from "../../../../public/m42.svg";
import Tick from "../../../../public/tick.svg";
import Clock from "../../../../public/clock.svg";
import Hospital from "../../../../public/hospital.svg";
import Doctor from "../../../../public/doctor.svg";
import ArrowRight from "../../../../public/arrow-right.svg";
import { useRouter } from "next/navigation";

export default function Emergency() {
  const router = useRouter();
  const [isSearch, setIsSearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (isSearch)
      setTimeout(() => {
        setIsSearching(false);
      }, 2000);
  }, [isSearch]);

  return isSearching ? (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100dvh"
      bgcolor="#60A5FA"
      sx={{
        backgroundImage: "url(../../../../background2.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography fontSize="30px" textAlign="center" width="45%" color="white">
        در حال جست‌وجو نزدیک‌ترین اورژانس ...
      </Typography>
    </Box>
  ) : (
    <>
      <Box
        p="8px"
        borderRadius="27px"
        bgcolor="#111A14"
        position="fixed"
        right="16px"
        left="16px"
        bottom="16px"
        zIndex={2}
        maxWidth="700px"
        mx="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton
          sx={{ p: "0px", m: "0px" }}
          onClick={() => router.push("/user/patient/profile")}
        >
          <Image src={M1.src} width={56} height={56} />
        </IconButton>
        <IconButton sx={{ p: "0px", m: "0px" }}>
          <Image src={M2.src} width={56} height={56} />
        </IconButton>
        <IconButton
          sx={{ p: "0px", m: "0px" }}
          onClick={() => router.push("/user/patient/doctors")}
        >
          <Image src={M3.src} width={56} height={56} />
        </IconButton>
        <IconButton
          sx={{ p: "0px", m: "0px" }}
          onClick={() => router.push("/user/patient")}
        >
          <Image src={M4.src} width={56} height={56} />
        </IconButton>
      </Box>
      <Stack gap="30px" mb="100px">
        <Stack
          p="16px"
          pb="28px"
          bgcolor="#111A14"
          borderRadius="0 0 48px 48px"
          gap="16px"
          alignItems="flex-start"
        >
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
              <Typography fontSize="30px">اورژانس</Typography>
              <Typography>نزدیک ترین را انتخاب کنید</Typography>
            </Stack>
            <IconButton>
              <Image src={Call.src} width={64} height={64} />
            </IconButton>
          </Box>
          <Box
            display="flex"
            gap="4px"
            p="4px"
            bgcolor="#1E2721"
            borderRadius={8}
            width="100%"
            color="white"
          >
            <Button
              onClick={() => {
                setIsSearch(true);
                setIsSearching(true);
              }}
              fullWidth
              variant={isSearch ? "contained" : "text"}
              color={isSearch ? "info" : "inherit"}
            >
              جست‌وجو
            </Button>
            <Button
              onClick={() => setIsSearch(false)}
              fullWidth
              variant={isSearch ? "text" : "contained"}
              color={isSearch ? "inherit" : "info"}
            >
              نزدیک شما
            </Button>
          </Box>
        </Stack>

        {!isSearch && (
          <>
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
                <Typography>ضربان قلب غیر طبیعی</Typography>
                <Typography>
                  دستگاه بیمار ضربان قلب را غیر طبیعی تشخیص داده است.
                </Typography>
                <Button color="error">تماس با پزشک</Button>
              </Stack>
            </Box>

            <Stack gap="8px" mx="16px">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>بیمارستان های اطراف من</Typography>
                <Button variant="text">تغییر آدرس</Button>
              </Box>
              <Stack bgcolor="white" p="16px" borderRadius="32px" gap="8px">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p="12px"
                  borderRadius="32px"
                  bgcolor="#F5F5F5"
                >
                  <Box display="flex" alignItems="center" gap="8px">
                    <Image src={Hospital.src} width={72} height={72} />
                    <Stack gap="6px">
                      <Box display="flex" alignItems="center" gap="2px">
                        <Typography>بیمارستان مهر</Typography>
                        <Image src={Tick.src} width={20} height={20} />
                      </Box>
                      <Box display="flex" alignItems="center" gap="2px">
                        <Image src={Clock.src} width={16} height={16} />
                        <Typography>۷ دقیقه فاصله</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" gap="2px">
                        <Image src={Clock.src} width={16} height={16} />
                        <Typography>501m</Typography>
                      </Box>
                    </Stack>
                  </Box>
                  <IconButton>
                    <Image src={ArrowRight.src} width={24} height={24} />
                  </IconButton>
                </Box>
              </Stack>
            </Stack>
          </>
        )}
        {isSearch && (
          <>
            <TextField placeholder="جست و جو کنید" sx={{ mx: "16px" }} />
            <Stack gap="8px" mx="16px">
              <Typography>۱ نتیجه پیدا شد.</Typography>
              <Stack bgcolor="white" p="16px" borderRadius="32px" gap="8px">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p="12px"
                  borderRadius="32px"
                  bgcolor="#F5F5F5"
                >
                  <Box display="flex" alignItems="center" gap="8px">
                    <Image src={Doctor.src} width={72} height={72} />
                    <Stack gap="6px">
                      <Box display="flex" alignItems="center" gap="2px">
                        <Typography>اورژانس خصوصی قائم</Typography>
                        <Image src={Tick.src} width={20} height={20} />
                      </Box>
                      <Box display="flex" alignItems="center" gap="2px">
                        <Image src={Clock.src} width={16} height={16} />
                        <Typography>۷ دقیقه فاصله</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" gap="2px">
                        <Image src={Clock.src} width={16} height={16} />
                        <Typography>501m</Typography>
                      </Box>
                    </Stack>
                  </Box>
                  <IconButton>
                    <Image src={ArrowRight.src} width={24} height={24} />
                  </IconButton>
                </Box>
              </Stack>
            </Stack>
          </>
        )}
      </Stack>
    </>
  );
}
