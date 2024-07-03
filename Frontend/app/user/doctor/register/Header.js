import {
  Box,
  Button,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";

import ArrowLeft from "../../../../public/arrow-left.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header({ num, prevStepHandler }) {
  const router = useRouter();
  return (
    <>
      <Typography alignSelf="center" color="gray" mb="-30px">
        {`${num} از 2`}
      </Typography>
      <Box display="flex" alignItems="center" gap="8px">
        <IconButton sx={{ bgcolor: "#E3E4E3" }} onClick={prevStepHandler}>
          <Image src={ArrowLeft.src} width={24} height={24} />
        </IconButton>
        <LinearProgress
          variant="determinate"
          value={(num / 2) * 100}
          sx={{
            height: "8px",
            width: "80%",
            borderRadius: "10px",
            rotate: "180deg",
          }}
        />
        <Button
          variant="text"
          color="inherit"
          onClick={() => router.push("/user/doctor")}
        >
          بعدا
        </Button>
      </Box>
    </>
  );
}
