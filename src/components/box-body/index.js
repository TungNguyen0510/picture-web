import { Box } from "@mui/material";

export default function BoxBody({ children }) {
  return (
    <Box
      sx={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
}
