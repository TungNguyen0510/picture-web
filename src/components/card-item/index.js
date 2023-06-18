import { Box, ListItem, Typography } from "@mui/material";
import { convertWithCommas } from "../../ultis/number";

function CardItem({ nameProc, price, quantity, imageUrl }) {
  return (
    <ListItem>
      <img src={imageUrl} alt="" style={{ width: 50, height: 50 }} />
      <Box ml={1}>
        <Typography>{nameProc}</Typography>
        <Typography>{`${quantity} x ${convertWithCommas(price)} đ`}</Typography>
      </Box>
    </ListItem>
  );
}

export default CardItem;
