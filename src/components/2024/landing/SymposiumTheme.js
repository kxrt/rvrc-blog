import React from "react";
import { Box, Typography } from "@mui/material";

import learn from "../../../assets/2022/event1.png";

const SymposiumTheme = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#e1d0f5" }}>
        <Box component="img" src={learn} sx={{ width: "100%" }} />
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "20pt", md: "26pt" },
            fontFamily: "Jost",
            paddingTop: "30px",
            color: "#592693",
            textAlign: "center",
            paddingInline: "8%",
          }}
        >
          Symposium Theme
        </Typography>
        <Box
          sx={{
            bgcolor: "#e1d0f5",
            marginInline: "6%",
            borderRadius: "16px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "16pt", md: "18pt" },
              fontFamily: "Jost",
              paddingTop: "32px",
              textAlign: "center",
            }}
          >
            "Living and Learning for a Shared Future: The RVRC Way"
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "black",
              paddingTop: "32px",
              paddingInline: "32px",
              fontSize: { xs: "14pt", md: "16pt" },
              fontFamily: "Jost",
              textAlign: "justify",
            }}
          >
            <i>One generation plants the trees and another gets the shade</i> -
            Chinese Proverb
          </Typography>
          <Typography
            sx={{
              color: "black",
              paddingTop: "16px",
              paddingInline: "32px",
              paddingBottom: "32px",
              fontFamily: "Jost",
              fontSize: { xs: "14pt", md: "16pt" },
              textAlign: "justify",
            }}
          >
            The Ridge View Residential College (RVRC) marks its 10th Anniversary
            in 2024, with a nod to its forward-looking mission of fostering
            sustainability education and workplace readiness in young adults.
            This year’s symposium celebrates how learning at the college
            transcends the confines of the classroom and the immediacy of the
            present, towards a contribution to the future of our society and the
            environment.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SymposiumTheme;
