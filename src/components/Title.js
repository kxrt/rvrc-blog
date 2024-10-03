import React from "react";
import { Box, Typography } from "@mui/material";

const Title = ({ title }) => (
  <Box
    sx={{
      bgcolor: "#592693",
      padding: { xs: "3%", md: "1%" },
    }}
  >
    <Typography
      variant="h1"
      sx={{
        color: "white",
        fontSize: { xs: "24pt", md: "40pt" },
        fontFamily: "Jost",
        fontWeight: "Bold",
      }}
    >
      {title}
    </Typography>
  </Box>
);

export default Title;
