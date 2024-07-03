import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import R1 from "../../../../public/r1.svg";
import R2 from "../../../../public/r2.svg";

export default function List() {
  return (
    <Stack gap="24px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="12px"
        borderRadius="32px"
        bgcolor="white"
      >
        <Box display="flex" alignItems="center" gap="8px">
          <Image src={R1.src} width={56} height={56} />
          <Stack gap="6px">
            <Typography>یادآور ثبت دارو</Typography>
            <Typography>۵۰۰ میلی‌گرم آسپیرین</Typography>
          </Stack>
        </Box>
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
          <Image src={R2.src} width={56} height={56} />
          <Stack gap="6px">
            <Typography>ملاقات با بیمار الیاس اوستاد</Typography>
            <Typography>۲ ساعت و ۱۵ دقیقه دیگر تا ملاقات! </Typography>
            <Typography>۹:۰۰-۱۰:۰۰</Typography>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}
