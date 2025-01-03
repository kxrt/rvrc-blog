import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Footer from "../../components/Footer";
import Title from "../../components/Title";
import PosterGalleryImage from "../../assets/rvrc_outdoor_learning.png";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import { posterGalleryEvents } from "../../constants/2025/ProgrammeEvents";

const Thread1 = () => {
  return (
    <Stack spacing={0}>
      <Title title="Poster Gallery" />
      <Box component="img" src={PosterGalleryImage} sx={{ width: "100%" }} />
      <Stack
        spacing={4}
        sx={{
          backgroundColor: "#008080",
          paddingInline: "10%",
          paddingBlock: "20px",
        }}
      >
        <Typography sx={{ fontSize: "16pt", color: "white" }}>
          Featuring posters from Thread 1 and 2, the Poster Gallery highlights
          both academic learning and student-led initiatives. Attendees can
          explore projects at their own pace, interact with the material, and
          engage with creators in a casual, dynamic setting, encouraging deeper
          understanding and personalized insights into each initiative.
        </Typography>
      </Stack>
      <ProgrammeHighlights
        title="Poster Gallery Programme"
        events={posterGalleryEvents}
      />
      <Footer />
    </Stack>
  );
};

export default Thread1;
