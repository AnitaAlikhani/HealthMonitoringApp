"use client";

import { Box, Typography } from "@mui/material";
import Logo from "../public/logo-white.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  // useEffect(() => {
  //   // document.body.style.backgroundColor = "#60A5FA";
  //   document.body.style.backgroundImage = "url(./background.svg)";
  //   document.body.style.backgroundPosition = "center"; /* Center the image */
  //   document.body.style.backgroundRepeat =
  //     "no-repeat"; /* Do not repeat the image */
  //   document.body.style.backgroundSize =
  //     "cover"; /* Resize the background image to cover the entire container */
  // }, []);
  const router = useRouter();
  const [isShowingSplash, setisShowingSplash] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let interval;
    setTimeout(() => {
      setisShowingSplash(false);
      interval = setInterval(() => {
        setPercentage((prev) => {
          if (prev < 100) return prev + 1;
        });
      }, 50);
    }, 1000);
    clearInterval(interval);
  }, []);

  if (percentage === 100) router.push("./user/login");

  return isShowingSplash ? (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100dvh"
      bgcolor="#60A5FA"
    >
      <Image
        src={Logo.src}
        width={72}
        height={72}
        style={{ alignSelf: "center" }}
        alt="logo"
      />
    </Box>
  ) : (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100dvh"
      sx={{
        backgroundImage: "url(./background.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography fontSize="48px">{percentage}%</Typography>
    </Box>
  );
}
