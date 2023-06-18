import {
  Breadcrumbs,
  Button,
  Grid,
  TextField,
  Typography,
  Box,
  Autocomplete,
} from "@mui/material";
import BoxBody from "../../components/box-body";
import { Link, useNavigate } from "react-router-dom";
import {
  getLocalItem,
  getSessionItem,
  setLocalItem,
  setSessionItem,
} from "../../ultis/store";
import { convertWithCommas } from "../../ultis/number";
import { useForm } from "react-hook-form";
import { isEmpty } from "lodash";
import { ROUTE } from "../../router/config";

export default function Checkout() {
  const breadcrumbs = [
    <Link
      to="/"
      key="1"
      color="text.primary"
      style={{ textDecoration: "none" }}
    >
      Trang chủ
    </Link>,
    <Link
      to="/cart"
      key="2"
      color="text.primary"
      style={{ textDecoration: "none" }}
    >
      Giỏ hàng của bạn
    </Link>,
    <Link
      to="/checkout"
      key="3"
      color="text.primary"
      style={{ textDecoration: "none" }}
    >
      Tiến hành thanh toán
    </Link>,
  ];

  const navigate = useNavigate();

  const country = [
    {
      label: "Việt Nam",
      id: 1,
    },
    {
      label: "Trung Quốc",
      id: 2,
    },
    {
      label: "Nhật Bản",
      id: 3,
    },
  ];

  const cards = getSessionItem("cards") || [];

  const items = cards.map((card) => ({
    ...card,
    id: card?.id,
    name: card?.nameProc || card?.name,
    price: card?.price,
    quantity: card?.quantity,
    total: +card?.price * +card?.quantity,
  }));

  const totalInit = items.reduce((prev, curr) => +prev + +curr.total, 0);
  console.log(items);
  const textRequired = "Trường này bắt buộc phải nhập";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      country: null,
      address: "",
      province: "",
      phone: "",
      email: "",
      note: "",
    },
  });

  const saleOrders = getLocalItem("saleOrders") || [];

  const submitForm = (val) => {
    const newSaleOrder = {
      id: +saleOrders.length + 1,
      ...val,
      items: items,
    };
    setLocalItem("saleOrders", [...saleOrders, newSaleOrder]);
    alert("Đặt hàng thành công");
    setSessionItem("cards", []);
    navigate(ROUTE.CART);
  };

  return (
    <BoxBody>
      <Breadcrumbs separator="/" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <form onSubmit={handleSubmit(submitForm)} style={{ marginTop: "48px" }}>
        <Grid container spacing={6} >
          <Grid item xs={12} xl={6} >
            <Typography
              variant="h1"
              sx={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#555",
                marginTop: "12px",
                borderTop: "1px solid #ccc",
                paddingTop: "24px",
              }}
            >
              THÔNG TIN THANH TOÁN
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 1,
              }}
            >
              <Box sx={{ width: "50%", mr: 1 }}>
                <Typography>Họ *</Typography>
                <TextField
                  type="text"
                  size="small"
                  fullWidth
                  error={!isEmpty(errors.firstName)}
                  {...(!isEmpty(errors.firstName)
                    ? { helperText: textRequired }
                    : {})}
                  {...register("firstName", { required: true })}
                />
              </Box>
              <Box sx={{ width: "50%" }}>
                <Typography>Tên *</Typography>
                <TextField
                  type="text"
                  size="small"
                  fullWidth
                  error={!isEmpty(errors.lastName)}
                  {...(!isEmpty(errors.lastName)
                    ? { helperText: textRequired }
                    : {})}
                  {...register("lastName", { required: true })}
                />
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography>Quốc gia / Khu vực *</Typography>
              <Autocomplete
                options={country}
                getOptionLabel={(opt) => opt.label}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label=""
                    size="small"
                    error={!isEmpty(errors.country)}
                    {...(!isEmpty(errors.country)
                      ? { helperText: textRequired }
                      : {})}
                    {...register("country", { required: true })}
                  />
                )}
                fullWidth
              />
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <Typography>Địa chỉ *</Typography>
              <TextField
                type="text"
                size="small"
                fullWidth
                error={!isEmpty(errors.address)}
                {...(!isEmpty(errors.address)
                  ? { helperText: textRequired }
                  : {})}
                {...register("address", { required: true })}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography>Tỉnh / Thành phố *</Typography>
              <TextField
                type="text"
                size="small"
                fullWidth
                error={!isEmpty(errors.province)}
                {...(!isEmpty(errors.province)
                  ? { helperText: textRequired }
                  : {})}
                {...register("province", { required: true })}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography>Số điện thoại *</Typography>
              <TextField
                type="text"
                size="small"
                fullWidth
                error={!isEmpty(errors.phone)}
                {...(!isEmpty(errors.phone)
                  ? { helperText: textRequired }
                  : {})}
                {...register("phone", { required: true })}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography>Email *</Typography>
              <TextField
                type="text"
                size="small"
                fullWidth
                error={!isEmpty(errors.email)}
                {...(!isEmpty(errors.email)
                  ? { helperText: textRequired }
                  : {})}
                {...register("email", { required: true })}
              />
            </Box>
            <Box sx={{ margin: "30px 0" }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#555",
                  marginBottom: "16px",
                }}
              >
                THÔNG TIN BỔ SUNG
              </Typography>
              <Typography
                sx={{ color: "#555", fontWeight: "500", marginBottom: "8px" }}
              >
                Ghi chú đơn hàng (tùy chọn)
              </Typography>
              <TextField
                type="text"
                size="normal"
                fullWidth
                multiline
                rows={4}
                {...register("note")}
              />
            </Box>
          </Grid>
          <Grid item xs={6} xl={6}>
            <Typography sx={{ fontWeight: "bold" }}>ĐƠN HÀNG CỦA BẠN</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "12px 0",
                borderBottom: "2px solid #ccc",
                paddingBottom: "8px"
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>SẢN PHẨM</Typography>
              <Typography sx={{ fontWeight: "bold" }}>TỔNG PHỤ</Typography>
            </Box>
            {items.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "12px 0",
                }}
                key={item.id}
              >
                <Typography>{`${item.name} x ${item.quantity}`}</Typography>
                <Typography sx={{ color: "#df6a6a" }}>{`${convertWithCommas(
                  +item.price * +item.quantity
                )} đ`}</Typography>
              </Box>
            ))}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "12px 0",
              }}
            >
              <Typography>Tổng phụ</Typography>
              <Typography sx={{ color: "#df6a6a" }}>{`${convertWithCommas(totalInit)} đ`}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "12px 0",
              }}
            >
              <Typography>Tổng</Typography>
              <Typography sx={{ color: "#df6a6a" }} >{`${convertWithCommas(totalInit)} đ`}</Typography>
            </Box>
            <Box>
              <Typography>Chuyển khoản qua ngân hàng</Typography>
            </Box>
            <Button variant="contained" sx={{ margin: "16px 0" }} type="submit">
              ĐẶT HÀNG
            </Button>
          </Grid>
        </Grid>
      </form>
    </BoxBody>
  );
}
