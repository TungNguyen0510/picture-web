import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  TextField,
  Typography,
  Modal,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import BoxBody from "../../components/box-body";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getListProduct } from "../../data/product";
import { useClasses } from "../../theme/helper";
import style from "./style";
import { convertWithCommas } from "../../ultis/number";
import CardProduct from "../../components/product-cart";
import { useEffect, useState } from "react";
import { getSessionItem, setSessionItem } from "../../ultis/store";
import { isEmpty } from "lodash";
import { ROUTE } from "../../router/config";
import { scrollToTop } from "../../ultis/scroll";
import { useForm } from "react-hook-form";

export default function ProductDetail() {
  scrollToTop();
  const classes = useClasses(style);
  const { id } = useParams();
  const listItem = getListProduct();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const item = listItem.find((item) => item.id === id);
  const sameItem = listItem.filter((items) => items.nameCate === item.nameCate);
  const cardArr = getSessionItem("cards") || [];
  useEffect(() => {
    setQuantity(1);
  }, [id]);
  //xử lý thêm giỏ hàng
  const handleAdd = () => {
    const old = cardArr.find((card) => item.id === card.id);
    if (!isEmpty(old)) {
      const itemOther = cardArr.filter((card) => card.id !== item.id);
      setSessionItem("cards", [
        ...itemOther,
        {
          ...item,
          quantity,
        },
      ]);
    } else {
      setSessionItem("cards", [
        ...cardArr,
        {
          ...item,
          quantity,
        },
      ]);
    }
    alert("Đã thêm thành công");
  };

  //Xử lý modals mua ngay
  const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Xử lý button đặt hàng nhanh
  const textRequired = "Trường này bắt buộc phải nhập";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      address: "",
      phone: "",
    },
  });
  const onSubmitForm = () => {
    alert("Bạn đã đặt hàng thành công!");
    handleClose();
  }
  //Xử lý breadcrumbs
  const breadcrumbs = [
    <Link to="/" style={{ textDecoration: "none" }}>
      <Typography>Trang chủ</Typography>
    </Link>,
    <Typography key="3" color="text.primary">
      {item.nameProc}
    </Typography>,
  ];


  return (
    <BoxBody>
      <Breadcrumbs separator="/" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Grid container spacing={1} mt={2}>
        <Grid item xs={6} xl={6}>
          <img
            src={item.imageUrl}
            alt={item.nameProc}
            className={classes.img}
          />
        </Grid>
        <Grid item xs={6} xl={4}>
          <Typography variant="h4" mt={1} mb={1}
          sx={{
            margin: "0 100px",
            fontWeight: "bold"
          }}
          >
            {item.nameProc}
          </Typography>
          <Typography
            sx={{
              margin: "12px 100px",
              color: "#df6a6a",
              fontWeight: "bold"
            }}
          >{`${convertWithCommas(item.price)} đ`}</Typography>
          <Typography 
            sx={{
              margin: "0 100px",
              color: "#777"
            }}
          >{item.nameCate}</Typography>
          <Typography 
            sx={{
              margin: "0 100px",
              color: "#777"
            }}
          >{item.size}</Typography>
          <Box
            mt={1}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              margin: "16px 100px",
            }}
          >
            <TextField
              type="number"
              size="small"
              sx={{ width: "80px" }}
              onChange={(e) => setQuantity(+e.target.value)}
              value={quantity}
            />
            <Button
              variant="contained"
              sx={{
                ml: 1,
                backgroundColor: "#df6a6a",
              }}
              onClick={handleAdd}>
              Thêm vào giỏ
            </Button>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fb6e2e",
              width: "220px",
              margin: "0 100px",
            }}
            onClick={handleOpen}
          >
            Mua ngay
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            disableScrollLock
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
            }}
          >
            <form onSubmit={handleSubmit(onSubmitForm)} >
              <Box sx={{
                ...styleModal,
                width: "70%",
                height: "auto",
                display: "flex",
                justifyContent: "space-around",
                overflow: "hidden",
                borderRadius: "5px",
              }}>
                <Box
                  position="fixed"
                  top="0"
                  left="0"
                  width="100%"
                  height="40px"

                >
                  <Typography
                    variant="h1"
                    color="#fff"
                    fontSize="18px"
                    fontWeight="520"
                    pl={1}
                    textTransform="uppercase"
                    backgroundColor="#6c5070"

                    lineHeight="32px"
                  >
                    Đặt mua {item.nameProc}
                  </Typography>
                </Box>
                <Box mt={4}>
                  <Box display="flex" alignItems="center" >
                    <img
                      src={item.imageUrl}
                      alt={item.nameProc}
                      width="100px"
                      height="100px"
                    />
                    <Box ml={2}>
                      <Typography
                        variant="h1"
                        color="#333"
                        fontSize="18px"
                        fontWeight="550"
                        mb={1}
                      >
                        {item.nameProc}
                      </Typography>
                      <Typography
                        color="#df6a6a"
                        fontWeight="bold"
                      >{convertWithCommas(item.price)}</Typography>
                    </Box>
                  </Box>
                  <Typography mt={2}>Số lượng</Typography>
                  <TextField
                    type="number"
                    size="small"
                    sx={{
                      width: "80px",
                      margin: "4px 0 42px 0",
                    }}
                    value={quantity}
                    onChange={(e) => setQuantity(+e.target.value)}
                  />
                  <Typography
                    variant="h1"
                    color="#333"
                    fontSize="14px"
                    fontWeight="bold"
                    textAlign="center"
                    lineHeight="32px"
                  >
                    Bạn vui lòng nhập đúng số điện thoại
                    để chúng tôi sẽ gọi xác nhận đơn hàng. <br />
                    Xin cảm ơn!
                  </Typography>
                </Box>
                <Box mt={4}>
                  <Typography
                    variant="h1"
                    color="#333"
                    fontSize="18px"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    Thông tin người mua
                  </Typography>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                        <FormControlLabel value="female" control={<Radio />} label="Anh" />
                        <FormControlLabel value="male" control={<Radio />} label="Chị" />
                      </Box>
                    </RadioGroup>
                  </FormControl>
                  <Box >
                    <TextField
                      sx={{
                        marginRight: "12px",
                        marginBottom: "10px",
                      }}
                      id="outlined-basic"
                      placeholder="Họ và tên"
                      variant="outlined"
                      error={!isEmpty(errors.fullName)}
                      {...(!isEmpty(errors.fullName)
                        ? { helperText: textRequired }
                        : {})}
                      {...register("fullName", { required: true })}
                    />
                    <TextField
                      id="outlined-basic"
                      placeholder="Số điện thoại"
                      variant="outlined"
                      error={!isEmpty(errors.phone)}
                      {...(!isEmpty(errors.phone)
                        ? { helperText: textRequired }
                        : {})}
                      {...register("phone", { required: true })}
                    />
                  </Box>
                  <TextField
                    type="text"
                    size="normal"
                    fullWidth
                    multiline
                    rows={3}
                    sx={{ marginTop: "12px" }}
                    placeholder="Địa chỉ"
                    error={!isEmpty(errors.address)}
                    {...(!isEmpty(errors.address)
                      ? { helperText: textRequired }
                      : {})}
                    {...register("address", { required: true })}
                  />
                  <Typography
                    variant="subtitle1"
                    color="#333"
                    fontWeight="600"
                    m={1}

                  >
                    Tổng: {convertWithCommas(quantity * item.price)}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                  >
                    ĐẶT HÀNG NGAY
                  </Button>
                </Box>
              </Box>
            </form>
          </Modal>
        </Grid>
        <Grid item xs={12} xl={2}>
          <Typography sx={{ marginTop: 1, fontWeight: "600" }} variant="h6">
            Đặt hàng và thanh toán
          </Typography>
          <Typography
            sx={{ marginTop: 1, display: "flex", alignItems: "center" }}
          >
            <img
              style={{ marginRight: "6px" }}
              src="https://bantranh.com/wp-content/uploads/2021/06/dt1.png"
              alt=""
            />
            Đặt hàng trực tuyến trên website.
          </Typography>
          <Typography
            sx={{ marginTop: 1, display: "flex", alignItems: "center" }}
          >
            <img
              style={{ marginRight: "6px" }}
              src="https://bantranh.com/wp-content/uploads/2021/06/dt2.png"
              alt=""
            />
            Đặt hàng qua điện thoại (zalo): 0983568361
          </Typography>
          <Typography
            sx={{ marginTop: 1, display: "flex", alignItems: "center" }}
          >
            <img
              style={{ marginRight: "6px" }}
              src="	https://bantranh.com/wp-content/uploads/2021/06/dt3.png"
              alt=""
            />
            Thanh toán tiền mặt trực tiếp hoặc chuyển khoản
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" mt={1} sx={{ color: "#555", fontWeight: "bolder" }}>
            Mô tả
          </Typography>
          <Typography sx={{ marginTop: 1, color: "#777", margin: "16px 0" }}>
            {item.description}
          </Typography>
          <Typography variant="h5" sx={{ color: "#555", fontWeight: "bolder" }}>
            Thông số kỹ thuật
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              color: "#777",
            }}
          >
            <Typography
              sx={{ display: "block", width: "120px", fontWeight: "500" }}
              variant="h7"
            >
              CHẤT LIỆU
            </Typography>
            <Typography sx={{ margin: "16px 64px" }}>
              {item.material}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              color: "#777",
            }}
          >
            <Typography
              sx={{ display: "block", width: "120px", fontWeight: "500" }}
              variant="h7"
            >
              KÍCH THƯỚC
            </Typography>
            <Typography sx={{ margin: "16px 64px" }}>{item.size}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              color: "#777",
            }}
          >
            <Typography
              sx={{ display: "block", width: "120px", fontWeight: "500" }}
              variant="h7"
            >
              TRANH HỌA SĨ
            </Typography>
            <Typography sx={{ margin: "16px 64px" }}>{item.author}</Typography>
          </Box>
        </Grid>
        <Grid container item xs={12} mt={2}>
          <Typography sx={{ color: "#555", fontWeight: "bolder" }} variant="h5">
            Sản phẩm tương tự
          </Typography>
        </Grid>
        <Grid container xs={12} mt={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {sameItem.map((item) => (
            <Grid item xs={3} xl={6} key={item.id}>
              <CardProduct
                image={item.imageUrl}
                name={item.nameProc}
                price={convertWithCommas(item.price)}
                cateName={item.nameCate}
                onClick={() => navigate(ROUTE.DETAIL.replace(":id", item.id))}
              />
            </Grid>
          ))}
        </Grid>

      </Grid>
    </BoxBody>
  );
}
