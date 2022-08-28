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
      <Box>
        <p style={{ fontSize: "16pt", paddingInline: "10%" }}>
          The Symposium will have interactive sessions with the keynote speaker
          and the students. The audience will be able to ask questions and
          interact with the speakers. The Symposium also be featuring the
          following interactive sessions:
        </p>
      </Box>
      <Box>
        <Blogs number={4} />
      </Box>
    </>
  );
};

export default InteractiveSessions;
