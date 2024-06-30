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
import { useRouter, useSearchParams } from "next/navigation";
import ArrowLeftFilled from "../../../../../public/arrow-left-filled.svg";
import { useState } from "react";

import Image1 from "../../../../../public/image1.svg";
import Image2 from "../../../../../public/image2.svg";
import Image3 from "../../../../../public/image3.svg";
import Image4 from "../../../../../public/image4.svg";
import History from "../../../../../public/history.svg";

export default function PatientStatus() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isRedirected = Boolean(searchParams.get("i"));
  const [isEditing, setIsEditing] = useState(isRedirected);
  return (
    <Stack gap="24px" p="16px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="16px"
      >
        <IconButton sx={{ p: "0px", m: "0px" }} onClick={() => router.back()}>
          <Image src={ArrowLeftFilled.src} width={56} height={56} />
        </IconButton>
        <Typography fontSize="20px">
          {isEditing ? "ویرایش شرح حال" : "شرح حال"}
        </Typography>
        <IconButton
          sx={{ p: "0px", m: "0px" }}
          onClick={() => router.push("/user/patient/data/status/history")}
        >
          <Image src={History.src} width={56} height={56} />
        </IconButton>
      </Box>

      <Stack gap="8px">
        <Typography>تصاویر</Typography>
        <Box display="flex" gap="8px" alignItems="center" flexWrap="wrap">
          {isEditing && <Image src={Image1.src} width={80} height={80} />}
          <Image src={Image2.src} width={80} height={80} />
          <Image src={Image3.src} width={80} height={80} />
          <Image src={Image4.src} width={80} height={80} />
        </Box>
      </Stack>

      <Stack gap="8px">
        <Typography>شرح حال</Typography>
        {isEditing ? (
          <TextField
            multiline
            rows={7}
            defaultValue="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می."
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
        ) : (
          <Typography>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می.
          </Typography>
        )}
      </Stack>
      <Button
        onClick={() => {
          if (isRedirected) router.push("/user/patient/data/edit");
          else if (isEditing) setIsEditing(false);
          else setIsEditing(true);
        }}
      >
        {isEditing ? "ذخیره تغییرات" : "ویرایش شرح حال"}
      </Button>
    </Stack>
  );
}
