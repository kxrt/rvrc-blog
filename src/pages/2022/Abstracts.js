import { Box, Typography } from "@mui/material";
import React from "react";

import Blogs from "../../components/Blogs";

const Abstracts = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#592693", padding: "1.5%" }}>
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontSize: { xs: "24pt", md: "40pt" },
            fontFamily: "Jost",
          }}
        >
          Project Abstracts
        </Typography>
      </Box>
      <Box sx={{ marginTop: "10px" }}>
        <Blogs/>
      </Box>
    </>
  );
};

export default Abstracts;
