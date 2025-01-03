import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Footer from "../../components/Footer";
import Title from "../../components/Title";
import Thread1Image from "../../assets/2025/thread-1.jpg";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import { thread1Events } from "../../constants/2025/ProgrammeEvents";

const Thread1 = () => {
  return (
    <Stack spacing={0}>
      <Title title="Thread 1: Edu-venture" />
      <Box component="img" src={Thread1Image} sx={{ width: "100%" }} />
      <Stack
        spacing={4}
        sx={{
          backgroundColor: "#008080",
          paddingInline: "10%",
          paddingBlock: "20px",
        }}
      >
        <Stack spacing={1}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "26pt",
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Edu-venture
          </Typography>
          <Typography
            sx={{
              fontSize: "16pt",
              color: "white",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            Cultivating Skills through Experiential Learning
          </Typography>
        </Stack>
        <Typography sx={{ fontSize: "16pt", color: "white" }}>
          Focused on academic learning at RVRC, presentations in this thread
          demonstrate how RVRCP courses enable students to hone their skills and
          equip them with professional competencies to navigate a dynamic and
          increasingly complex world. It also features experiential learning
          beyond the classroom, such as partnering with external organizations,
          empowering students to identify real-world issues and effect
          meaningful change. Students will showcase the learning process and
          successful application of skills like critical thinking and creative
          problem-solving.
        </Typography>
      </Stack>
      <ProgrammeHighlights title="Thread 1 Programme" events={thread1Events} />
      <Footer />
    </Stack>
  );
};

export default Thread1;
