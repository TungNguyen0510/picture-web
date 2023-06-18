import { Box } from "@mui/material";
import Headers from "../header";
import Footer from "../footer";

export default function PrivateLayout({ children }) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Headers />
      <Box sx={{
        marginTop: "200px",
        minHeight: 450,
        marginBottom: "100px",
      }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
