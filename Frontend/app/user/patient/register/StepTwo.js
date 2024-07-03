import { Button, TextField, Typography } from "@mui/material";
import Header from "./Header";

export default function StepTwo({ setStep }) {
  return (
    <>
      <Header num={2} prevStepHandler={() => setStep(1)} />
      <Typography alignSelf="center" fontSize="36px">
        بیماری
      </Typography>
      <Typography alignSelf="center" mt="-20px">
        بیماری‌های خود را توضیح دهید.
      </Typography>
      <TextField
        multiline
        rows={7}
        placeholder="چند وقتیه که احساس می‌کنم ضربان قلبم نامنظم شده. گاهی اوقات خیلی تند میزنه و بعد دوباره کند میشه. حتی بعضی وقت‌ها احساس می‌کنم قلبم یک ضربه رو جا میندازه. "
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
      <Button type="submit" sx={{ mt: "32px" }} onClick={() => setStep(3)}>
        ادامه
      </Button>
    </>
  );
}
