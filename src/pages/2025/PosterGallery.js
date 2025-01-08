import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Footer from "../../components/Footer";
import Title from "../../components/Title";
import PosterGalleryImage from "../../assets/2025/poster-gallery.jpg";
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
          engage directly with creators encouraging deeper understanding and
          personalized insights into each initiative. Attendees can also visit
          the Interactive Booths by community partners such as Hatch, FiTree,
          and NTUC to learn about how they tackle complex socio-environmental
          issues. These two parallel sessions will be conducted within a shared
          space for the tea break, enhancing meaningful learning and networking
          opportunities for all.
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
