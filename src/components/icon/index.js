import { Box } from "@mui/material";
import { PropTypes } from "prop-types";
import { ReactComponent as Search } from "../../access/icon/search.svg";
import { ReactComponent as Card } from "../../access/icon/card.svg";
import { ReactComponent as Remove } from "../../access/icon/remove.svg";
const icons = {
  search: <Search />,
  card: <Card />,
  remove: <Remove />,
};
const Icon = ({ name, fill, size, sx, ...props }) => {
  return (
    <Box
      component="span"
      className="x-icon"
      {...props}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...(size
          ? {
              width: size,
              height: size,
            }
          : {}),
        svg: {
          width: "100%",
          height: "100%",
          path: { fill: fill },
        },
        ...sx,
      }}
    >
      {icons[name]}
    </Box>
  );
};

Icon.defaultProps = {
  name: "",
  size: 20,
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Icon;
