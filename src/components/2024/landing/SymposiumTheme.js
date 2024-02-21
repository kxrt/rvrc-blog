import React from "react";
import { Box, Typography } from "@mui/material";

import learn from "../../../assets/2022/event1.png";

const SymposiumTheme = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#e1d0f5" }}>
        <Box component="img" src={learn} sx={{ width: "100%" }} />
        <div style={{ paddingInline: "10%", paddingBlock: "30px" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "20pt", md: "26pt" },
              fontFamily: "Jost",
              color: "#592693",
              textAlign: "center",
            }}
          >
            Symposium Theme
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "20pt",
              fontWeight: "bold",
              fontFamily: "Jost",
              paddingTop: "32px",
              textAlign: "center",
            }}
          >
            'Living and Learning for a Shared Future: The RVRC Way'
          </Typography>
          <p style={{ fontSize: "16pt" }}>
            <i>One generation plants the trees and another gets the shade</i>{" "}
            &#8212; Chinese Proverb
          </p>
          <p style={{ fontSize: "16pt" }}>
            The Ridge View Residential College (RVRC) marks its 10th Anniversary
            in 2024, with a nod to its forward-looking mission of fostering
            sustainability education and workplace readiness in young adults.
            This year’s symposium celebrates how learning at the college
            transcends the confines of the classroom and the immediacy of the
            present, towards a contribution to the future of our society and the
            environment.
          </p>
        </div>
      </Box>
    </>
  );
};

export default SymposiumTheme;
