import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Title from "../../components/Title";
import Footer from "../../components/Footer";
import Thread2Image from "../../assets/2024/thread-2.jpg";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import { thread2Events } from "../../constants/2025/ProgrammeEvents";

const Thread2 = () => {
  return (
    <Stack spacing={0}>
      <Title title="Thread 2: Adventure" />
      <Box component="img" src={Thread2Image} sx={{ width: "100%" }} />
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
            Adventure
          </Typography>
          <Typography
            sx={{
              fontSize: "16pt",
              color: "white",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            Cultivating Curiosity and Stewardship
          </Typography>
        </Stack>
        <Typography sx={{ fontSize: "16pt", color: "white" }}>
          Highlighting student-led co-curricular endeavours, discussions in this
          thread evidence the crucial acquisition of soft skills, such as
          leadership and cultural awareness, towards the cause of building a
          shared future that is more sustainable and equitable for all.
          Presenters include students from RVRC, NUS, and other IHLs, and are
          invited to share their unique experiences and exchange ideas with one
          another to discover new insights. The thread will also showcase how
          the distinct RVRC living-learning experience instils stewardship of
          society and environment.
        </Typography>
      </Stack>
      <ProgrammeHighlights title="Thread 2 Programme" events={thread2Events} />
      <Footer />
    </Stack>
  );
};

export default Thread2;
