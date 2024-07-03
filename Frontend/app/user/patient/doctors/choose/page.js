"use client";

import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ArrowLeftFilled from "../../../../../public/arrow-left-filled.svg";
import Activity from "../../../../../public/activity.png";
import Medicine from "../../../../../public/medicine.svg";
import Plus2 from "../../../../../public/plus2.png";
import R2 from "../../../../../public/r2.svg";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Choose() {
  const router = useRouter();
  const [c, setC] = useState(1);
  return (
    <Stack gap="24px" p="16px">
      <Box display="flex" p="16px">
        <IconButton sx={{ p: "0px", m: "0px" }} onClick={() => router.back()}>
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
      </Box>
      <Stack alignItems="center" gap="4px">
        <Typography fontSize="30px">انتخاب تخصص</Typography>
        <Typography>قبل از رزرو وقت مشخص کنید.</Typography>
      </Stack>

      <Stack gap="16px">
        <TextField placeholder="روان‌پزشک" />
        <Box display="flex" gap="16px" width="100%">
          <Box
            display="flex"
            alignItems="center"
            p="12px"
            borderRadius="32px"
            bgcolor={c === 1 ? "#111A14" : "white"}
            color={c === 1 ? "white" : "#111A14"}
            gap="8px"
            width="50%"
            sx={{ cursor: "pointer" }}
            onClick={() => setC(1)}
          >
            <Image src={R2.src} width={56} height={56} />
            <Typography>روان‌پزشک</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            p="12px"
            borderRadius="32px"
            bgcolor={c === 2 ? "#111A14" : "white"}
            color={c === 2 ? "white" : "#111A14"}
            gap="8px"
            width="50%"
            sx={{ cursor: "pointer" }}
            onClick={() => setC(2)}
          >
            <Image src={R2.src} width={56} height={56} />
            <Typography>قلب‌ و عروق</Typography>
          </Box>
        </Box>
        <Box display="flex" gap="16px" width="100%">
          <Box
            display="flex"
            alignItems="center"
            p="12px"
            borderRadius="32px"
            bgcolor={c === 3 ? "#111A14" : "white"}
            color={c === 3 ? "white" : "#111A14"}
            gap="8px"
            width="50%"
            sx={{ cursor: "pointer" }}
            onClick={() => setC(3)}
          >
            <Image src={R2.src} width={56} height={56} />
            <Typography>فیزیولوژیست</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            p="12px"
            borderRadius="32px"
            bgcolor={c === 4 ? "#111A14" : "white"}
            color={c === 4 ? "white" : "#111A14"}
            gap="8px"
            width="50%"
            sx={{ cursor: "pointer" }}
            onClick={() => setC(4)}
          >
            <Image src={R2.src} width={56} height={56} />
            <Typography>داروساز</Typography>
          </Box>
        </Box>
        <Box display="flex" gap="16px" width="100%">
          <Box
            display="flex"
            alignItems="center"
            p="12px"
            borderRadius="32px"
            bgcolor={c === 5 ? "#111A14" : "white"}
            color={c === 5 ? "white" : "#111A14"}
            gap="8px"
            width="50%"
            sx={{ cursor: "pointer" }}
            onClick={() => setC(5)}
          >
            <Image src={R2.src} width={56} height={56} />
            <Typography>پرستار</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            p="12px"
            borderRadius="32px"
            bgcolor={c === 6 ? "#111A14" : "white"}
            color={c === 6 ? "white" : "#111A14"}
            gap="8px"
            width="50%"
            sx={{ cursor: "pointer" }}
            onClick={() => setC(6)}
          >
            <Image src={R2.src} width={56} height={56} />
            <Typography>عمومی</Typography>
          </Box>
        </Box>
        <Box display="flex" gap="16px" width="100%">
          <Box
            display="flex"
            alignItems="center"
            p="12px"
            borderRadius="32px"
            bgcolor={c === 7 ? "#111A14" : "white"}
            color={c === 7 ? "white" : "#111A14"}
            gap="8px"
            width="50%"
            sx={{ cursor: "pointer" }}
            onClick={() => setC(7)}
          >
            <Image src={R2.src} width={56} height={56} />
            <Typography>تغذیه</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            p="12px"
            borderRadius="32px"
            bgcolor={c === 8 ? "#111A14" : "white"}
            color={c === 8 ? "white" : "#111A14"}
            gap="8px"
            width="50%"
            sx={{ cursor: "pointer" }}
            onClick={() => setC(8)}
          >
            <Image src={R2.src} width={56} height={56} />
            <Typography>دندان‌پزشک</Typography>
          </Box>
        </Box>
      </Stack>
      <Button>جست‌وجو پزشکان</Button>
    </Stack>
  );
}
