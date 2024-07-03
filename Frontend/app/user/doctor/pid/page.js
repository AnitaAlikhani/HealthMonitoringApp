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
import T1 from "../../../../public/t1.svg";
import T2 from "../../../../public/t2.svg";
import T3 from "../../../../public/t3.svg";
import T4 from "../../../../public/t4.svg";
import Back from "../../../../public/pback.svg";
import Setting from "../../../../public/psetting.svg";
import Icon from "../../../../public/picon.svg";
import F1 from "../../../../public/f1.svg";
import F2 from "../../../../public/f2.svg";
import F3 from "../../../../public/f3.svg";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  return (
    <>
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
            <IconButton sx={{ p: "0px", m: "0px" }}
            onClick={() => router.push("/user/doctor")}>
              <Image src={Back.src} width={56} height={56} />

            </IconButton>
            <IconButton
              sx={{ p: "0px", m: "0px" }}
              // onClick={() => router.push("/user/patient/profile/setting")}
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

        <Stack mt="80px" mx="16px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>ویزیت دوره ای بیمار</Typography>
            <Button variant="text">...</Button>
          </Box>
          <Image
            src={F1.src}
            width={400}
            height={170}
            style={{ alignSelf: "center" }}
          />
        </Stack>

        <Stack>
          <Image
            src={F2.src}
            width={400}
            height={45}
            style={{ alignSelf: "center" }}
          />
        </Stack>

        <Box display="flex" mx="16px" gap="16px">
          <Button sx={{ width: "50%" }}>گفت و گو با بیمار</Button>
          <Button sx={{ width: "50%" }}>ترخیص بیمار</Button>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          // mt="80px"
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

        <Stack mx="16px">
          <Image
            src={F3.src}
            width={400}
            height={223}
            style={{ alignSelf: "center" }}
          />
        </Stack>

        <Stack gap="8px" mx="16px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>داده‌های سلامت</Typography>
            <Button
              variant="text"
              onClick={() => router.push("/user/doctor/data")}
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
              <Stack>
                <Typography>شرح حال بیمار</Typography>
                <Typography>آخرین ویرایش : یک ساعت پیش</Typography>
              </Stack>
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
              <Stack>
                <Typography>شرح حال بیمار</Typography>
                <Typography>آخرین ویرایش : یک ساعت پیش</Typography>
              </Stack>
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
