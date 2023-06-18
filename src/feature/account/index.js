import BoxBody from "../../components/box-body";
import {
    Box,
    Typography,
    Button,
} from "@mui/material";
import { convertWithCommas } from "../../ultis/number";
import { NAVIGATION } from "../../router/config";
import { NAVIGATE_DATA } from "../../data/navigate";
import { ROUTE } from "../../router/config";
import { useNavigate } from "react-router";
export default function Account() {
    const cards = JSON.parse(localStorage.getItem("saleOrders")) || [];
    const getItems = cards.reduce((prev, curr) => {
         prev.push(...curr.items);
        return prev;
    }, []);
    console.log(getItems);
    const total = getItems.reduce((prev, curr) => prev + curr.total, 0);
    const navigate = useNavigate();
    const handleSignout = () => {
        NAVIGATE_DATA.splice(5, 1, "Đăng nhập / Đăng ký");
        NAVIGATION.splice(5, 1, "/login");
        navigate(ROUTE.LOGIN);
    }
    return (
        <BoxBody>
            <Box sx={{
                display: "flex",
                justifyContent: "end",
            }}>
                <Button
                    variant="contained"
                    onClick={handleSignout}
                >
                    Đăng xuất
                </Button>
            </Box>
            <Box>
                <Typography variant="h2" sx={{ fontSize: "1.3rem", fontWeight: "bold", textAlign: "center" }}>Đơn hàng của bạn</Typography>
            </Box>
            <Box sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "32px",
            }}>
                {cards.length === 0
                    ? "Bạn không có đơn hàng nào"
                    :
                    getItems.map((cart) => (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                margin: "12px 0",
                            }}
                            key={cart.id}
                        >
                            <Typography mr={8} sx={{ textAlign: "left", width: "200px" }}>{`${cart.name} x ${cart.quantity}`}</Typography>
                            <Typography sx={{ color: "#df6a6a", width: "200px", textAlign: "right" }}>{`${convertWithCommas(
                                +cart.price * +cart.quantity
                            )} đ`}</Typography>
                        </Box>
                    ))
                }
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "12px 0",
                    }}
                >
                    <Typography sx={{ textAlign: "left", width: "200px", fontWeight: "bold", marginTop: "12px" }} mr={12}>Tổng tiền phải trả</Typography>
                    <Typography sx={{ color: "#df6a6a", textAlign: "right", fontWeight: "bold" }} >{`${convertWithCommas(total)} đ`}</Typography>
                </Box>
            </Box>

        </BoxBody>
    );
}