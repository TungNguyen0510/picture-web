import BoxBody from "../../components/box-body/index";
import { ROUTE } from "../../router/config";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
    Box,
    Typography,
    TextField,
    Button,
    Link,
} from "@mui/material";
import { getSessionItem } from "../../ultis/store";
import { NAVIGATION } from "../../router/config";
import { NAVIGATE_DATA } from "../../data/navigate";
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = (ev) => {
        ev.preventDefault();
        const account = getSessionItem(username);
        if (account?.user !== username) {
            alert("Tài khoản không tồn tại! Vui lòng nhập lại.")
        }
        else if (account?.password !== password) {
            alert("Mật khẩu không chính xác! Vui lòng nhập lại.")
        }
        else {
            alert("Đăng nhập thành công!");
            NAVIGATE_DATA.splice(5, 1, "Tài khoản");
            NAVIGATION.splice(5, 1, "/account");
            navigate(ROUTE.HOME);
        }
    }
    return (
        <BoxBody>
            <Box display="flex" justifyContent="center" alignItems="center" >
                <form onSubmit={handleLogin} style={{ width: "450px", height: "400px", padding: "16px 24px", border: "2px solid #ccc", borderRadius: "12px" }}>
                    <Typography variant="h3" mb={4} textAlign="center" fontWeight="bold">Đăng Nhập</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Typography mr={1} width="120px">Tài khoản</Typography>
                        <TextField
                            size="small"
                            type="text"
                            placeholder="username"
                            fullWidth
                            required
                            value={username}
                            onChange={(ev) => setUsername(ev.target.value)}
                        />
                    </Box>
                    <Box
                        mt={3}
                        mb={4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Typography mr={1} width="120px">Mật khẩu</Typography>
                        <TextField
                            size="small"
                            type="password"
                            placeholder="password"
                            fullWidth
                            required
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                    </Box>
                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                    >
                        Đăng nhập
                    </Button>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px",
                    }}>
                        <Typography variant="subtitle1" textAlign="center" mr={1}>Đăng ký tài khoản</Typography>
                        <Link href={ROUTE.REGISTER} variant="subtitle1">Đăng ký</Link>
                    </Box>
                </form>
            </Box>
        </BoxBody>
    );
}