import React from "react";
import { Box, Typography } from "@mui/material";

import Thread2 from "../../components/2024/thematic-threads/Thread2";
import Thread3 from "../../components/2024/thematic-threads/Thread3";
import Thread1 from "../../components/2024/thematic-threads/Thread1";

const ThematicThreads = () => {
  return (
    <>
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
          Thematic Threads
        </Typography>
      </Box>
      <Thread1 />
      <Thread2 />
      <Thread3 />
    </>
  );
};

export default ThematicThreads;
