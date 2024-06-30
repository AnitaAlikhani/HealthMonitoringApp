"use client";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Chat from "../../../../public/chat.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Heart from "../../../../public/heart.svg";
import M1 from "../../../../public/m1.svg";
import M2 from "../../../../public/m2.svg";
import M3 from "../../../../public/m32.svg";
import M4 from "../../../../public/m42.svg";
import Tick from "../../../../public/tick.svg";
import Clock from "../../../../public/clock.svg";
import Doctor from "../../../../public/doctor.svg";
import Bone from "../../../../public/bone.svg";
import Plus from "../../../../public/plus.svg";
import E1 from "../../../../public/e1.svg";
import E2 from "../../../../public/e2.svg";
import E3 from "../../../../public/e3.svg";
import E4 from "../../../../public/e4.svg";
import E5 from "../../../../public/e5.svg";

import ArrowRight from "../../../../public/arrow-right.svg";
import { useRouter } from "next/navigation";

export default function Doctors() {
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
        در حال جست‌وجو پزشک...
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
        <IconButton
          sx={{ p: "0px", m: "0px" }}
          onClick={() => router.push("/user/patient/emergency")}
        >
          <Image src={M2.src} width={56} height={56} />
        </IconButton>
        <IconButton sx={{ p: "0px", m: "0px" }}>
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
              <Typography fontSize="30px">پزشکان</Typography>
              <Typography>از میان بهترین پزشکان انتخاب کنید.</Typography>
            </Stack>
            <IconButton
              onClick={() => router.push("/user/patient/doctors/messages")}
            >
              <Image src={Chat.src} width={64} height={64} />
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
            {/* <Box
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
            </Box> */}

            <Stack gap="8px" mx="16px">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>مرور کردن تخصص‌ها</Typography>
                <Button
                  variant="text"
                  onClick={() => router.push("/user/patient/doctors/choose")}
                >
                  مشاهده همه
                </Button>
              </Box>
              <Box
                display="flex"
                // gap="8px"
                justifyContent="space-between"
                alignItems="center"
                pb="20px"
                // sx={{ overflowX: "scroll" }}
              >
                <Stack gap="6px" alignItems="center">
                  <Image src={E1.src} width={64} height={64} />
                  <Typography>مغز</Typography>
                </Stack>
                <Stack gap="6px" alignItems="center">
                  <Image src={E2.src} width={64} height={64} />
                  <Typography>دندان</Typography>
                </Stack>
                <Stack gap="6px" alignItems="center">
                  <Image src={E3.src} width={64} height={64} />
                  <Typography>تغذیه</Typography>
                </Stack>
                <Stack gap="6px" alignItems="center">
                  <Image src={E4.src} width={64} height={64} />
                  <Typography>ارتوپد</Typography>
                </Stack>
                <Stack gap="6px" alignItems="center">
                  <Image src={E5.src} width={64} height={64} />
                  <Typography>قلب</Typography>
                </Stack>
              </Box>
            </Stack>

            <Stack gap="8px" mx="16px">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>قرارهای ملاقات من</Typography>
                <Button
                  variant="text"
                  onClick={() =>
                    router.push("/user/patient/doctors/appointments")
                  }
                >
                  مشاهده همه
                </Button>
              </Box>
              <Stack bgcolor="white" p="16px" borderRadius="32px" gap="8px">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p="12px"
                  //   borderRadius="32px"
                  //   bgcolor="#F5F5F5"
                >
                  <Stack gap="6px">
                    <Typography fontSize="30px">2</Typography>
                    <Typography>قرار ملاقات دارید.</Typography>
                  </Stack>
                  <IconButton
                    onClick={() =>
                      router.push("/user/patient/doctors/appointments")
                    }
                  >
                    <Image src={Plus.src} width={64} height={64} />
                  </IconButton>
                </Box>
                {new Array(2).fill(1).map(() => (
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
                          <Typography>دکتر حسین حسینی</Typography>
                          <Image src={Tick.src} width={20} height={20} />
                        </Box>
                        <Box display="flex" alignItems="center" gap="2px">
                          <Image src={Bone.src} width={16} height={16} />
                          <Typography>متخصص ارتوپد</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="2px">
                          <Image src={Clock.src} width={16} height={16} />
                          <Typography>۱۰:۳۰ - ۱۱:۰۰</Typography>
                        </Box>
                      </Stack>
                    </Box>
                    <IconButton>
                      <Image src={ArrowRight.src} width={24} height={24} />
                    </IconButton>
                  </Box>
                ))}
              </Stack>
            </Stack>

            <Stack gap="8px" mx="16px">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>پزشکان نزدیک من</Typography>
                <Button variant="text">مشاهده همه</Button>
              </Box>
              <Stack bgcolor="white" p="16px" borderRadius="32px" gap="8px">
                {new Array(4).fill(1).map(() => (
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
                          <Typography>دکتر حسین حسینی</Typography>
                          <Image src={Tick.src} width={20} height={20} />
                        </Box>
                        <Box display="flex" alignItems="center" gap="2px">
                          <Image src={Bone.src} width={16} height={16} />
                          <Typography>متخصص ارتوپد</Typography>
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
                ))}
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
                        <Typography>علیرضا حسینی</Typography>
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
                  <IconButton
                    onClick={() => router.push("/user/patient/doctors/did")}
                  >
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
  //   );
}
