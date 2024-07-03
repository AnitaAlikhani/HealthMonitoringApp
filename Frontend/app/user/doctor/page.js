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
import R2 from "../../../public/r2.svg";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DoctorPage() {
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
          // onClick={() => router.push("/user/patient/profile")}
        >
          <Image src={M1.src} width={56} height={56} />
        </IconButton>
        <IconButton
          sx={{ p: "0px", m: "0px" }}
          // onClick={() => router.push("/user/patient/emergency")}
        >
          <Image src={M2.src} width={56} height={56} />
        </IconButton>
        <IconButton
          sx={{ p: "0px", m: "0px" }}
          // onClick={() => router.push("/user/patient/doctors")}
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
              <Image src={Doctor.src} width={56} height={56} />
            </IconButton>
            <Typography>شنبه، ۱۰ خرداد ۱۴۰۳</Typography>
            <IconButton
              sx={{ p: "0px", m: "0px" }}
              onClick={() => router.push("/user/doctor/notif")}
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
            <Typography fontSize="30px">دکتر محمد نباتی</Typography>
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
            <Typography>۱۰ بیمار اورژانسی !</Typography>
            <Typography>
              وضعیت ۱۰ بیمار وخیم و نیاز به بررسی فوری دارد
            </Typography>
            <Button color="error" sx={{ width: "50%" }}>
              مشاهده همه
            </Button>
          </Stack>
        </Box>

        <Stack gap="8px" mx="16px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>لیست بیماران اورژانسی</Typography>
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
                  <Image src={Profile.src} width={56} height={56} />
                  <Stack gap="6px">
                    <Typography>الیاس اوستاد</Typography>

                    <Box display="flex" alignItems="center" gap="8px">
                      <Typography
                        borderRadius="9px"
                        bgcolor="#FEF9C3"
                        p="8px"
                        color="#EAB308"
                      >
                        وضعیت زرد
                      </Typography>
                      <Typography>بستری</Typography>
                    </Box>
                  </Stack>
                </Box>
                <IconButton onClick={() => router.push("/user/doctor/pid")}>
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
            <Typography>لیست همه بیماران</Typography>
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
                  <Image src={Profile.src} width={56} height={56} />
                  <Stack gap="6px">
                    <Typography>الیاس اوستاد</Typography>

                    <Box display="flex" alignItems="center" gap="8px">
                      <Typography
                        borderRadius="9px"
                        bgcolor="#ECFCCB"
                        p="8px"
                        color="#84CC16"
                      >
                        وضعیت نرمال
                      </Typography>
                      <Typography>بستری</Typography>
                    </Box>
                  </Stack>
                </Box>
                <IconButton onClick={() => router.push("/user/doctor/pid")}>
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
            <Typography>لیست قرارهای ملاقات</Typography>
            <Button variant="text">مشاهده همه</Button>
          </Box>
          <Stack bgcolor="white" p="16px" borderRadius="32px" gap="8px">
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
                  <Image src={R2.src} width={56} height={56} />
                  <Stack gap="6px">
                    <Typography>ملاقات با دکتر علیرضا حسینی</Typography>
                    <Typography>۲ ساعت و ۱۵ دقیقه دیگر تا ملاقات! </Typography>
                    <Typography>۹:۰۰-۱۰:۰۰</Typography>
                  </Stack>
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
