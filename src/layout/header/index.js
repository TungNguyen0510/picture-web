import {
  Box,
  Button,
  IconButton,
  List,
  Popover,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import BoxBody from "../../components/box-body";
import { NAVIGATE_DATA } from "../../data/navigate";
import { CATEGORY_DATA } from "../../data/category";
import Icon from "../../components/icon";
import { useState } from "react";
import { getSessionItem } from "../../ultis/store";
import CardItem from "../../components/card-item";
import { isEmpty } from "lodash";
import { useClasses } from "../../theme/helper";
import style from "./style";
import { useNavigate } from "react-router";
import { ROUTE } from "../../router/config";
import { Link } from "react-router-dom";
import { NAVIGATION } from "../../router/config";
import SearchIcon from '@mui/icons-material/Search';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function Headers() {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useClasses(style);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const onClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const cardArr = getSessionItem("cards") || [];
  return (
    <Box
      sx={{
        width: "100vw",
        height: 160,
        position: "fixed",
        top: 0,
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      <Box sx={{ height: 40, backgroundColor: "#d36b97" }}>
        <BoxBody >
          <Box sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            height: "100%",
            overflow: "hidden",
          }}>
            {NAVIGATE_DATA.map((value, index) => (
              <Link
                className="navigation-link"
                key={index}
                style={{
                  cursor: "pointer",
                  color: "white",
                  padding: "16px 12px",
                  fontSize: "0.9em",
                  textDecoration: "none",
                }}
                to={NAVIGATION[index]}
              >
                {value}
              </Link>
            ))}
          </Box>
        </BoxBody>
      </Box>
      <Box sx={{ height: 70, backgroundColor: "white" }}>
        <BoxBody>
          <Box
            display="flex"
            height="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link style={{ cursor: "default" }} to="/">
              <img
                src="https://bantranh.com/wp-content/uploads/2019/02/logo-2.png"
                alt=""
                height="50px"
              />
            </Link>
            <TextField
              sx={{ ml: 2, padding: "12px" }}
              id="margin-none"
              variant="outlined"
              fullWidth
              size="small"
              placeholder="Tìm kiếm sản phẩm"
              InputProps={{
                endAdornment: (
                  <InputAdornment  position="end">
                    <IconButton >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}

            />
            <IconButton sx={{ ml: 1 }} onClick={(e) => handleOpen(e)}>
              <Icon name="card" size={30} />
              <Typography color="red">{cardArr.length}</Typography>
            </IconButton>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={onClose}
              PaperProps={{
                variant: "caret",
                sx: { overflow: "hidden" },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              className={classes.root}
            >
              {isEmpty(cardArr) ? (
                <Box sx={{
                  width: 400,
                  height: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <Typography >
                    Không có mặt hàng nào
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ width: 300 }}>
                  <List className={classes.list}>
                    {cardArr.map((item) => (
                      <CardItem
                        key={item.id}
                        nameProc={item.nameProc}
                        price={item.price}
                        quantity={item.quantity}
                        imageUrl={item.imageUrl}
                      />
                    ))}
                  </List>
                  <Button
                    variant="contained"
                    endIcon={<ArrowCircleRightIcon
                    />}
                    sx={{ mb: 1, ml: 1, mr: 1, mt: 1, width: 200 }}
                    onClick={() => navigate(ROUTE.CART)}
                  >
                    Đến giỏ hàng
                  </Button>
                </Box>
              )}
            </Popover>
          </Box>
        </BoxBody>
      </Box>
      <Box sx={{ height: 50, backgroundColor: "#6c5070" }}>
        <BoxBody>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            height="100%"
            textAlign="center"
            overflow="hidden"

          >
            {CATEGORY_DATA.map((cate,index) => (
              <Link to={ROUTE.LISTPRODUCT.replace(":id", cate.idCate)}
                className="category-link"
                key={index}
                style={{
                  cursor: "pointer",
                  color: "white",
                  padding: "18px 0",
                  fontSize: ".8em",
                  textAlign: "center",
                  textDecoration: "none",
                  width: "100%",
                }}
              >
                {cate.name}
              </Link>
            ))}
          </Box>
        </BoxBody>
      </Box>
    </Box>
  );
}
