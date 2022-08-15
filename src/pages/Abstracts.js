import { Box, Typography } from "@mui/material";
import React from "react";

import Blogs from "../components/Blogs";

const Abstracts = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#592693", padding: "2%" }}>
        <Typography
          variant="h1"
          sx={{ color: "white", fontSize: "28pt", fontFamily: "Jost" }}
        >
          Project Abstracts
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "black",
          padding: "2%",
          paddingLeft: "8%",
          paddingRight: "8%",
          fontFamily: "Jost",
          fontSize: "16pt",
        }}
      >
        During the next decade, more than half of the world’s population will
        live in cities. The modern city is a prominent example of the built
        environment, the human-made surroundings that provide the physical
        setting for human activities.
      </Typography>
      <Blogs />
    </>
  );
};

export default Abstracts;
