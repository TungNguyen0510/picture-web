import {
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { SliderComponent } from "../../../components/slide";
export default function IntroPage() {
  return (
    <Grid>
      <SliderComponent />
      <Box sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "12px 0px",
      }}>
        <Box sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "12px 0",
        }}>
          <Box sx={{
            width: "32px",
            border: "1px solid red",
            borderRadius: "32px",
            textAlign: "center",
            padding: "6px",
            margin: "16px",
          }}>
            <img
              src="https://bantranh.com/wp-content/uploads/2019/02/chatluong.png"
              width="24px"
              height="24px"
              alt=""
            />
          </Box>
          <Box>
            <Typography variant="h3"
              sx={{
                color: "#555",
                margin: "0 0 6px 0",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}>Chất lượng</Typography>
            <Typography className="underline-contained">
              <Typography className="underline" sx={{
                fontStyle: "italic",
                fontSize: ".9rem",
                opacity: 0.6,
              }}>
                Đảm bảo chất lượng những dịch vụ tốt nhất.
              </Typography>
            </Typography>

          </Box>
        </Box>
        <Box sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "12px 0",
        }}>
          <Box sx={{
            width: "32px",
            border: "1px solid red",
            borderRadius: "32px",
            textAlign: "center",
            padding: "6px",
            margin: "16px",
          }}>
            <img
              src="https://bantranh.com/wp-content/uploads/2019/02/tocdo.png"
              width="24px"
              height="24px"
              alt=""
            />
          </Box>
          <Box>
            <Typography variant="h3"
              sx={{
                color: "#555",
                margin: "0 0 6px 0",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}>
              Tốc độ
            </Typography>
            <Typography className="underline-contained">
              <Typography className="underline" sx={{
                fontStyle: "italic",
                fontSize: ".9rem",
                opacity: 0.6,
              }}>
                Giao hàng nhanh chóng đến địa chỉ khách hàng.
              </Typography>
            </Typography>

          </Box>
        </Box>
        <Box sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "12px 0",
        }}>
          <Box sx={{
            width: "32px",
            border: "1px solid red",
            borderRadius: "32px",
            textAlign: "center",
            padding: "6px",
            margin: "16px",
          }}>
            <img
              src="https://bantranh.com/wp-content/uploads/2019/02/support-icon-400x400.png"
              width="24px"
              height="24px"
              alt=""
            />
          </Box>
          <Box>
            <Typography variant="h3"
              sx={{
                color: "#555",
                margin: "0 0 6px 0",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}>
              Trợ giúp
            </Typography>

            <Typography className="underline-contained">
              <Typography className="underline" sx={{
                fontStyle: "italic",
                fontSize: ".9rem",
                opacity: 0.6,
              }}>
                Tư vấn và trợ giúp đặt hàng nhanh chóng.
              </Typography>
            </Typography>

          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h1" sx={{
          fontSize: "1.4rem",
          color: "#555",
          fontWeight: "bold",
          margin: "12px 0",

        }}>
          Tranh Phong Cảnh, Tranh Sơn Dầu, Khung Tranh Đẹp, Chất Lượng Cao!
        </Typography>
        <Typography sx={{
          color: "#777",
          textAlign: "justify",
        }}>
          Bán Tranh đang mang đến cho không gian của bạn thêm phần sống động,
          nhiều màu sắc, sự tinh tế, vẻ đẹp thông qua những những bức tranh sơn
          dầu, tranh sơn mài, tranh phong cảnh, tranh hoa, tranh nghệ thuật đẹp
          nhất từ hàng trăm họa sĩ tài năng và giàu kinh nghiệm tại Việt Nam.
          Những bức tranh độc bản được sáng tác đậm chất nghệ thuật và độc đáo
          nhất mà bạn không thể tìm được thấy được ở nơi nào khác đảm bảo sẽ đem
          đến sự hài lòng cho các bạn. Để làm tôn thêm vẻ đẹp cho các bức tranh,
          chúng tôi cũng cung cấp dịch vụ đóng khung tranh theo yêu cầu, những
          khung tranh đẹp, khung tranh gỗ tự nhiên, chất lượng cao với mẫu mã
          phong phú, đa dạng và giá tốt nhất. Ngoài ra, dịch vụ vẽ tranh theo
          yêu cầu của chúng tôi sẽ giúp quý khách sở hữu bức tranh đẹp như ý
          muốn.
        </Typography>
      </Box>
    </Grid>
  )
}
