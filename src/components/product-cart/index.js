import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardProduct({
  image = "",
  name,
  price,
  cateName,
  onClick,
}) {
  return (
    <Card onClick={onClick} sx={{ 
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.05)",
        transition: "transform .2s ease",
      }
      }}>
      <CardMedia
        component="img"
        image={image}
        alt=""
        sx={{ width: 300, height: 250 }}
      />
      <CardContent>
        <Typography variant="body1" sx={{ opacity: 0.7 }}>
          {cateName}
        </Typography>
        <Typography variant="body1">{name}</Typography>
        <Typography  sx={{ color:"#df6a6a"}} variant="body2">{`Giá: ${price} đ`}</Typography>
      </CardContent>
    </Card>
  );
}
