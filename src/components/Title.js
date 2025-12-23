import React from "react";
import { Box, Fade, Typography } from "@mui/material";

const Title = ({ title }) => (
  <Box
    sx={{
      background: "#592693",
      padding: "24px",
    }}
  >
    <Fade in timeout={1000}>
      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontSize: { xs: "26pt", md: "40pt" },
          fontFamily: "Jost",
          fontWeight: "Bold",
        }}
      >
        {title}
      </Typography>
    </Fade>
  </Box>
);

export default Title;
