import { useState } from "react";
import BoxBody from "../../components/box-body/index";
import { ROUTE } from "../../router/config";
import { useNavigate } from "react-router";
import {
    Box,
    Typography,
    TextField,
    Button,
    Link,
} from "@mui/material";
import { getSessionItem, setSessionItem } from "../../ultis/store";
export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    const navigate = useNavigate();
    const account = {};
    const user = getSessionItem(username);
    const handleRegister = (ev) => {
        ev.preventDefault();
        if (user?.user === username) {
            alert("Tài khoản đã tồn tại!");
        }
        else {
            if (password !== confirmPw) {
                alert("Mật khẩu không khớp! Vui lòng nhập lại");
            }
            else {
                account["user"] = username;
                account["password"] = password;
                setSessionItem(username, account);
                alert("Đăng ký tài khoản thành công!");
                localStorage.clear();
                navigate(ROUTE.LOGIN);
            }
        }

    }
    return (
        <BoxBody>
            <Box display="flex" justifyContent="center" alignItems="center" >
                <form onSubmit={handleRegister} style={{ width: "450px", height: "400px", padding: "16px 24px", border: "2px solid #ccc", borderRadius: "12px" }}>
                    <Typography variant="h3" mb={4} textAlign="center" fontWeight="bold">Đăng Ký</Typography>
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
                    <Box
                        mt={1}
                        mb={4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Typography mr={1} width="120px">Xác nhận mật khẩu</Typography>
                        <TextField
                            size="small"
                            type="password"
                            placeholder="confirm password"
                            fullWidth
                            required
                            value={confirmPw}
                            onChange={(ev) => setConfirmPw(ev.target.value)}
                        />
                    </Box>
                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                    >
                        Đăng ký
                    </Button>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px",
                    }}>
                        <Typography variant="subtitle1" textAlign="center" mr={1}>Quay trở lại trang</Typography>
                        <Link
                            variant="subtitle1"
                            href={ROUTE.LOGIN}
                        >
                            Đăng nhập
                        </Link>
                    </Box>
                </form>
            </Box>
        </BoxBody>
    );
}