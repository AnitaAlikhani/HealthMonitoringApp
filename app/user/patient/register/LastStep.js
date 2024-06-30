import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Frame from "../../../../public/frame.svg";
import { useRouter } from "next/navigation";

export default function LastStep() {
  const router = useRouter();
  return (
    <Stack p="16px" gap="16px" minHeight="100vh" justifyContent="center">
      <Image
        src={Frame.src}
        width={308}
        height={248}
        style={{ alignSelf: "center" }}
        alt="frame"
      />
      <Typography alignSelf="center" fontSize="36px">
        خوش آمدید!
      </Typography>
      <Typography alignSelf="center" mt="-20px">
        ثبت‌نام شما تکمیل شد.
      </Typography>
      <Button
        type="submit"
        sx={{ mt: "32px" }}
        onClick={() => router.push("/user/patient")}
      >
        عالی
      </Button>
    </Stack>
  );
}
