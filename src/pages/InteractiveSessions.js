import React from "react";
import { Box, Typography } from "@mui/material";
import Blogs from "../components/Blogs";

const InteractiveSessions = () => {
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
          Interactive Sessions
        </Typography>
      </Box>
      <Box sx={{ paddingBlock: "20px" }}>
        <Typography
          style={{
            fontFamily: "Jost",
            fontSize: "14pt",
            paddingInline: "10%",
            paddingBlock: "0%",
            textAlign: "center",
          }}
        >
          Thematic Thread 1
        </Typography>
        <Typography
          style={{
            fontFamily: "Jost",
            fontSize: "24pt",
            paddingInline: "10%",
            textAlign: "center",
          }}
        >
          Examining ideas beyond the hegemony of the present
        </Typography>
        <Typography
          style={{
            fontFamily: "Jost",
            fontSize: "16pt",
            paddingInline: "10%",
            textAlign: "left",
          }}
        >
          This thread explores the importance of examining ideas beyond the
          hegemony of the present and the limitations of the popular and the
          immediate, to prime students for the lifelong process of learning and
          personal development and to meet the challenges of a rapidly changing
          world. Selected student work will showcase the ‘learning process’ and
          application of complex skills such as reflective and critical
          thinking, in order to examine their own thinking and that of others.
        </Typography>
        <br />
        <Typography
          style={{
            fontFamily: "Jost",
            fontSize: "14pt",
            paddingInline: "10%",
            paddingBlock: "0%",
            textAlign: "center",
          }}
        >
          Thematic Thread 2
        </Typography>
        <Typography
          style={{
            fontFamily: "Jost",
            fontSize: "24pt",
            paddingInline: "10%",
            textAlign: "center",
          }}
        >
          Engaging within and across the plurality of communities
        </Typography>
        <Typography
          style={{
            fontFamily: "Jost",
            fontSize: "16pt",
            paddingInline: "10%",
            textAlign: "left",
          }}
        >
          This thread explores the importance of communicating in ways sensitive
          to differing contexts and cultivating an orientation towards (and
          responsibility for) broad societal issues, to build meaningful
          relationships within and across the plurality of communities that make
          up the fabric of society. Selected work will showcase how
          out-of-classroom learning and working with external partners enabled
          students to develop these skills and achieve a demonstrable impact on
          identified issues.
        </Typography>
      </Box>
      <Box>
        <Blogs number={4} />
      </Box>
    </>
  );
};

export default InteractiveSessions;
