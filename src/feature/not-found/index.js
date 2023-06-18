import React from "react";

import { style } from "./style";
import { useClasses } from "../../theme/helper";
import { useNavigate } from "react-router";
import { Box, Button, Typography } from "@mui/material";

function NotFoundPage() {
  const navigate = useNavigate();
  const classes = useClasses(style);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        pt: "10%",
      }}
    >
      <Typography sx={{ fontSize: 60, fontWeight: "bold" }}>Oops!</Typography>
      <div className={classes.container}>
        <span className="span-affter">
          <b
            className="span-affter-label"
            style={{ WebkitTextStroke: `2px #0761AD` }}
          >
            4
          </b>
          <span
            className="span-before"
            style={{
              color: "#0761AD",
              borderBottom: `6px solid #0761AD`,
              filter: `drop-shadow(0 0 1px #0761AD)`,
            }}
          >
            <b>4</b>
          </span>
        </span>
        <span className="span-affter">
          <b
            className="span-affter-label"
            style={{ WebkitTextStroke: `2px #FF9054` }}
          >
            0
          </b>
          <span
            className="span-before"
            style={{
              color: "#FF9054",
              borderBottom: `6px solid #FF9054`,
              filter: `drop-shadow(0 0 1px #FF9054)`,
            }}
          >
            <b>0</b>
          </span>
        </span>
        <span className="span-affter">
          <b
            className="span-affter-label"
            style={{ WebkitTextStroke: `2px #0761AD` }}
          >
            4
          </b>
          <span
            className="span-before"
            style={{
              color: "#0761AD",
              borderBottom: `6px solid #0761AD`,
              filter: `drop-shadow(0 0 1px #0761AD)`,
            }}
          >
            <b>4</b>
          </span>
        </span>
      </div>
      <Typography sx={{ fontSize: 20, mt: 1 }}>404 - Page Not Found</Typography>
      <Button variant="contained" onClick={() => navigate("/")} sx={{ mt: 3 }}>
        Back to Home
      </Button>
    </Box>
  );
}

export default NotFoundPage;
