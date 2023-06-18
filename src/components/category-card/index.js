import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CategoryCard({ title = "", quantity, image = "", onClick, }) {
  return (
    <Card onClick={onClick} sx={{
      "&:hover": {
        transform: "scale(1.05)",
        transition: "transform .2s ease",
      }
    }}>
      <CardMedia component="img" image={image} alt="" sx={{width: 400, height: 300}} />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{`${quantity} Tác phẩm`}</Typography>
      </CardContent>
    </Card>
  );
}
