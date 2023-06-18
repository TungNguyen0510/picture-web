import BoxBody from "../../components/box-body";
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Contact() {
    return (
        <BoxBody>
            <Box display="flex" justifyContent="center" width="90%">
                <Box width="100%" mr={10}>
                    <Typography
                        variant="h1"
                        color="#555"
                        fontSize="22px"
                        fontWeight="550"
                        mb={2}
                    >
                        Các câu hỏi thường gặp
                    </Typography>
                    <Typography>
                        Vui lòng đọc những hướng dẫn của chúng tôi trước khi gửi yêu cầu hỗ trợ.
                    </Typography>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Phí giao hàng đến tận nhà như thế nào?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Chúng tôi miễn phí giao hàng cho các khu vực trong nội thành
                                Hà Nội và những bức tranh có giá trị lớn hơn 2.000.000vnđ
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Những phương thức thanh toán nào được chấp nhận?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Thanh toán bằng tiền mặt, hoặc chuyển khoản là được chấp nhận.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Trong bao lâu hàng sẽ được chuyển đến ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Trong vòng 24h kể từ lúc mua hàng, hàng sẽ
                                được chuyển đến bạn. Trường hợp các trường hợp
                                khách quan ảnh hưởng đến vấn đề chuyển hàng, sẽ cộng thêm 1 ngày.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Dữ liệu khách hàng sẽ được bảo mật?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Chúng tôi đảm bảo dữ liệu thông tin của bạn đã đăng ký với chúng tôi sẽ được bảo mật và an toàn.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Việc đặt hàng online diễn ra trong bao lâu?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Chỉ vài phút nếu bạn đã chọn được một bức tranh ưng ý.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Tôi có thể nhận hóa đơn khi mua tranh?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nếu bạn yêu cầu.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box>
                    <Typography
                        variant="h1"
                        color="#555"
                        fontSize="22px"
                        fontWeight="550"
                        mb={2}
                    >
                        Gửi một email đến chúng tôi
                    </Typography>
                    <Typography>
                        Nếu bạn muốn liên hệ hoặc hỏi trợ giúp từ chúng tôi thông
                        qua email, vui lòng soạn email và gửi đến địa chỉ info [@] bantranh [dot] com
                        <br /> <br />
                        Chúng tôi sẽ trả lời đến bạn trong thời gian sớm nhất.
                        <br /> <br />
                        Cảm ơn!
                    </Typography>
                </Box>
            </Box>
        </BoxBody>
    );
}