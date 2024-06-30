"use client";

import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import Header from "./Header";
import { useState } from "react";

export default function Step({ setStep, num }) {
  const [checked, setChecked] = useState(new Array(names.length).fill(false));

  return (
    <>
      <Header num={num - 1} prevStepHandler={() => setStep(num - 2)} />

      <Typography alignSelf="center" fontSize="36px">
        {titles[num - 4]}
      </Typography>
      <Typography alignSelf="center" mt="-20px">
        {subTitles[num - 4]}
      </Typography>
      <TextField placeholder="جست و جو نام بیماری"></TextField>
      {names.map((name, i) => (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderRadius="21px"
          p="16px"
          bgcolor="white"
          key={i}
        >
          <Typography>{name}</Typography>
          <Checkbox
            checked={checked[i]}
            onChange={() =>
              setChecked((prev) => {
                const newArr = [...prev];
                newArr[i] = !prev[i];
                return newArr;
              })
            }
          />
        </Box>
      ))}
      <Box display="flex" gap="8px" alignItems="center" flexWrap="wrap">
        <Typography mt="13px">انتخاب شده:</Typography>
        {checked.map((item, i) => {
          if (item)
            return (
              <Box
                borderRadius="9px"
                p="6px 10px"
                bgcolor="#F43F5E"
                color="white"
              >
                {names[i]}
              </Box>
            );
        })}
      </Box>
      <Button type="submit" sx={{ mt: "32px" }} onClick={() => setStep(num)}>
        ادامه
      </Button>
    </>
  );
}

const names = ["آ.س.آ", "آپروتینین", "آتراکوریوم", "آتروپین", "آتورواستاتین"];
const titles = ["سابقه بیماری", "سابقه خانوادگی", "دارو‌ها", "آلرژی‌ها"];
const subTitles = [
  "سابقه بیماری‌های خود را لیست کنید.",
  "سوابق خانوادگی خود را ثبت کنید",
  "داروهای مصرفی خود را مشخص کنید.",
  "آلرژی‌های خود را مشخص کنید.",
];
