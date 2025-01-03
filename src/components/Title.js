import React from "react";
import { Box, Typography } from "@mui/material";

const Title = ({ title }) => (
  <Box
    sx={{
      background: "#592693",
      padding: "24px",
    }}
  >
    <Typography
      variant="h1"
      sx={{
        color: "white",
        fontSize: { xs: "32pt", md: "40pt" },
        fontFamily: "Jost",
        fontWeight: "Bold",
      }}
    >
      {title}
    </Typography>
  </Box>
);

export default Title;
