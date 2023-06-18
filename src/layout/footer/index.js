import { Box, Typography } from "@mui/material";
import BoxBody from "../../components/box-body";
import { NAVIGATE_DATA } from "../../data/navigate";
import { NAVIGATION } from "../../router/config";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../ultis/scroll";
export default function Footer() {

  scrollToTop()
  return (
    <Box sx={{
      position: "absolute",
      bottom: 0,
      width: "100%",
    }}>
      <Box textAlign="center">
        <BoxBody>
          <Box>
            <img
              src="https://bantranh.com/wp-content/uploads/2019/02/phuong-thuc-thanh-toan.png"
              alt=""
            />
          </Box>
        </BoxBody>
      </Box>
      <Box>
        <BoxBody>
          <Box display="flex" justifyContent="center" alignItems="center">
            {NAVIGATE_DATA.slice(0, 5).map((value, index) => (
              <Link
                key={index}
                style={{
                  color: "#ccc",
                  padding: "16px",
                  fontSizes: "0.8em",
                  textAlign: "center",
                  textTransform: "uppercase",
                  lineHeight: "1.2",
                  cursor: "pointer",
                  textDecoration: "none",
                }
                } to={NAVIGATION[index]}
              >
                {value}
              </Link>
            ))}
          </Box>
        </BoxBody>
      </Box>
    </Box>
  );
}
