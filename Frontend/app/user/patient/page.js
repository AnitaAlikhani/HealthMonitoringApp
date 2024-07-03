"use client";

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Profile from "../../../public/profile.svg";
import Notif from "../../../public/notif.svg";
import Heart from "../../../public/heart.svg";
import ArrowRight from "../../../public/arrow-right.svg";
import Tick from "../../../public/tick.svg";
import Bone from "../../../public/bone.svg";
import Doctor from "../../../public/doctor.svg";
import M1 from "../../../public/m1.svg";
import M2 from "../../../public/m2.svg";
import M3 from "../../../public/m3.svg";
import M4 from "../../../public/m4.svg";
import T1 from "../../../public/t1.svg";
import T2 from "../../../public/t2.svg";
import T3 from "../../../public/t3.svg";
import T4 from "../../../public/t4.svg";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PatientPage() {
  const router = useRouter();
  return (
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
        <IconButton
          sx={{ p: "0px", m: "0px" }}
          onClick={() => router.push("/user/patient/doctors")}
        >
          <Image src={M3.src} width={56} height={56} />
        </IconButton>
        <IconButton sx={{ p: "0px", m: "0px" }}>
          <Image src={M4.src} width={56} height={56} />
        </IconButton>
      </Box>

      <Stack gap="30px" mb="100px">
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p="16px"
            bgcolor="#111A14"
            color="white"
          >
            <IconButton sx={{ p: "0px", m: "0px" }}>
              <Image src={Profile.src} width={56} height={56} />
            </IconButton>
            <Typography>شنبه، ۱۰ خرداد ۱۴۰۳</Typography>
            <IconButton
              sx={{ p: "0px", m: "0px" }}
              onClick={() => router.push("/user/patient/notif")}
            >
              <Image src={Notif.src} width={56} height={56} />
            </IconButton>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p="16px"
            pb="40px"
            bgcolor="#111A14"
            color="white"
            borderRadius="0 0 48px 48px"
          >
            <Typography fontSize="30px">الیاس اوستاد</Typography>
            <IconButton>
              <Image src={ArrowRight.src} width={24} height={24} />
            </IconButton>
          </Box>
        </Box>
        <Box
          display="flex"
          // alignItems="center"
          // justifyContent="space-between"
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
            <Button color="error" sx={{ width: "50%" }}>
              تماس با پزشک
            </Button>
          </Stack>
        </Box>

        <Stack gap="8px" mx="16px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>داده‌های سلامت</Typography>
            <Button
              variant="text"
              onClick={() => router.push("/user/patient/data")}
            >
              مشاهده همه
            </Button>
          </Box>
          <Box
            display="flex"
            gap="8px"
            alignItems="center"
            pb="20px"
            sx={{ overflowX: "scroll" }}
          >
            <Image src={T1.src} width={155} height={201} />
            <Image src={T2.src} width={155} height={201} />
            <Image src={T3.src} width={155} height={201} />
            <Image src={T4.src} width={155} height={201} />
          </Box>
        </Stack>

        <Stack gap="8px" mx="16px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>پزشکان من</Typography>
            <Button variant="text">مشاهده همه</Button>
          </Box>
          <Stack bgcolor="white" p="16px" borderRadius="32px" gap="8px">
            {new Array(3).fill(1).map(() => (
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
                  </Stack>
                </Box>
                <IconButton>
                  <Image src={ArrowRight.src} width={24} height={24} />
                </IconButton>
              </Box>
            ))}
          </Stack>
        </Stack>

        {/*  */}
        <Stack gap="8px" mx="16px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>پزشکان محبوب</Typography>
            <Button variant="text">مشاهده همه</Button>
          </Box>
          <Stack bgcolor="white" p="16px" borderRadius="32px" gap="8px">
            {new Array(3).fill(1).map(() => (
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
                  </Stack>
                </Box>
                <IconButton>
                  <Image src={ArrowRight.src} width={24} height={24} />
                </IconButton>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
