"use client";

import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Profile from "../../../../public/profile.svg";
import ArrowRight from "../../../../public/arrow-right.svg";
import M1 from "../../../../public/m12.svg";
import M2 from "../../../../public/m2.svg";
import M3 from "../../../../public/m3.svg";
import M4 from "../../../../public/m42.svg";
import T1 from "../../../../public/t1.svg";
import T2 from "../../../../public/t2.svg";
import T3 from "../../../../public/t3.svg";
import T4 from "../../../../public/t4.svg";
import Back from "../../../../public/pback.svg";
import Setting from "../../../../public/psetting.svg";
import Icon from "../../../../public/picon.svg";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
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
        <IconButton sx={{ p: "0px", m: "0px" }}>
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
        <IconButton
          sx={{ p: "0px", m: "0px" }}
          onClick={() => router.push("/user/patient")}
        >
          <Image src={M4.src} width={56} height={56} />
        </IconButton>
      </Box>

      <Stack gap="30px" mb="100px">
        <Box position="relative">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p="16px"
            bgcolor="#111A14"
            color="white"
          >
            <IconButton sx={{ p: "0px", m: "0px" }}>
              <Image src={Back.src} width={56} height={56} />
            </IconButton>
            <IconButton
              sx={{ p: "0px", m: "0px" }}
              onClick={() => router.push("/user/patient/profile/setting")}
            >
              <Image src={Setting.src} width={56} height={56} />
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
          ></Box>
          <Stack
            gap="16px"
            sx={{ position: "absolute", left: "40%", bottom: "-96px" }}
            alignItems="center"
          >
            <Image src={Profile.src} width={96} height={96} />
            <Typography fontSize="24px">الیاس اوستاد</Typography>
          </Stack>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt="80px"
          mx="64px"
        >
          <Stack gap="8px" alignItems="center">
            <Typography>سن</Typography>
            <Typography>30yr</Typography>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack gap="8px" alignItems="center">
            <Typography>قد</Typography>
            <Typography>1.95m</Typography>
          </Stack>
          <Divider orientation="vertical" flexItem />

          <Stack gap="8px" alignItems="center">
            <Typography>وزن</Typography>
            <Typography>71kg</Typography>
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

        <Stack gap="24px" p="16px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p="12px"
            borderRadius="32px"
            bgcolor="white"
          >
            <Box display="flex" alignItems="center" gap="8px">
              <Image src={Icon.src} width={56} height={56} />
              <Typography>نوبت های من</Typography>
            </Box>
            <IconButton>
              <Image src={ArrowRight.src} width={24} height={24} />
            </IconButton>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p="12px"
            borderRadius="32px"
            bgcolor="white"
          >
            <Box display="flex" alignItems="center" gap="8px">
              <Image src={Icon.src} width={56} height={56} />
              <Typography>داروهای من</Typography>
            </Box>
            <IconButton>
              <Image src={ArrowRight.src} width={24} height={24} />
            </IconButton>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
