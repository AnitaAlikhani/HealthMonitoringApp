import { Box } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <Box maxWidth="700px" m="auto">
      {children}
    </Box>
  );
}
