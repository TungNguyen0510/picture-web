import BoxBody from "../../components/box-body/index"
import {
    Box,
    Typography,
    Typygraphy,

} from "@mui/material";
export default function Map() {
    return (
        <BoxBody>
            <Box display="flex" justifyContent="around" >
                <Box textAlign="justify" mr={6}>
                    <Typography
                        variant="h1"
                        color="#555"
                        fontSize="22px"
                        fontWeight="550"
                        mb={2}
                    >
                        Bản đồ đường đến cửa hàng Khung & Tranh Mộc Sinh
                    </Typography>
                    <Typography
                        variant="h3"
                        color="#000080"
                        fontSize="16px"
                        fontWeight="550"
                        mb={2}
                        lineHeight="24px"
                    >
                        Địa chỉ cửa hàng: 385 đường Ngọc Hồi, Thanh Trì, Hà Nội <br />
                        Điện thoại: 0961136825 – Mr Sinh<br />
                        Email: info@bantranh.com
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="#777"
                        fontSize="14px"
                        fontStyle="italic"
                        mb={2}
                    >
                        Để tìm đường đến cửa hàng Khung &
                        Tranh Mộc Sinh tại 385 đường Ngọc Hồi là h
                        ết sức đơn giản và dễ dàng. Cửa hàng nằm trên
                        trục đường 1A gần trung tâm thương mại huyện
                        Thanh Trì, bên cạnh cổng huyện Thanh trì. Để
                        đến cửa hàng của chúng tôi, bạn có thể từ Ngọc
                        Hồi (phía Nam) đi lên, hoặc từ Hà Đông (Phía Tây)
                        đi đến hoặc từ đường Giải Phóng (phía Bắc) đi
                        xuống hoặc từ Yên Sở (phía Đông) đi sang. Tất
                        cả đường đi đều thuận tiện, thông thoáng và nhanh.
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="#777"
                        fontSize="14px"
                        fontWeight="550"
                        fontStyle="italic"
                        mb={2}
                    >
                        Cửa hàng mở cửa từ 8h30 đến 6h30 mỗi ngày,
                        kể cả Thứ 7 và Chủ Nhật. Tất cả các mẫu khung
                        đang có trên website bantranh.com đều có sẵn
                        tại shop. Các mẫu tranh được vẽ bởi họa sĩ của
                        chúng tôi vui lòng qua cửa hàng xem hoặc liên
                        hệ trước với chúng tôi. Rất hạnh phục vụ quý khách.
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="#777"
                        fontSize="14px"
                        fontWeight="500"
                        mb={2}
                    >
                        <b>Chỉ dẫn chi tiết:</b> Từ đường Giải Phóng
                        (Giáp Bát Hà Nội) đi thẳng xuống qua bến
                        xe Nước Ngầm khoảng hơn 1km, qua trung tâm
                        thương mại huyện Thanh Trì khoảng 150 mét,
                        cửa hàng nằm bên kia đường, sát cạnh cửa hàng
                        Thế Giới Di Động là thấy cửa hàng của chúng tôi
                        như hình ảnh.
                    </Typography>
                </Box>
                <Box textAlign="center">
                    <img src="https://bantranh.com/wp-content/uploads/2019/10/cua-hang-khung-tranh-385-duong-ngoc-hoi-304x400.jpg" />
                    <Typography
                        variant="subtitle1"
                        color="#777"
                        fontSize="12px"
                        fontStyle="italic"
                    >
                        Cửa hàng Khung & Tranh Mộc Sinh – 385 đường Ngọc Hồi, Thanh Trì, Hà Nội
                    </Typography>
                </Box>
            </Box>

        </BoxBody>
    );
}