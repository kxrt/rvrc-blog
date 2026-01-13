import React from "react";
import { Box, Typography } from "@mui/material";

import learn from "../../../assets/2022/event1.webp";

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
            "Learning to Learn: The world is our classroom"
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
            The working world today is in constant flux, defined by emerging
            business models, new technologies, and evolving consumer behaviour.
            The ability to acquire knowledge and skills continually is crucial
            to success in such a world. For new graduates, this rapid pace of
            change can be especially demanding. Hence, students must cultivate
            the aspiration to be effective learners; they must ‘Learn to learn’
            by acquiring diverse capabilities, participating in meaningful
            growth opportunities, and become willing to experiment with new
            ideas. The symposium theme explores how the RVRCP fosters these
            attributes by presenting the world as a classroom, with a focus on
            authentic out-of-classroom and experiential learning.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SymposiumTheme;
