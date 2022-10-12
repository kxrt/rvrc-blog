import React from "react";
import { Typography } from "@mui/material";

import Timeline from "../Timeline";

const ProgrammeHighlights = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "20pt", md: "26pt" },
          fontFamily: "Jost",
          paddingTop: "30px",
          color: "#1d9077",
        }}
      >
        Programme Highlights
      </Typography>
      <Timeline />
    </>
  );
};

export default ProgrammeHighlights;
