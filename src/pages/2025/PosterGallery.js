import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import PosterGalleryImage from "../../assets/2025/poster-gallery.JPG";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import ProjectCard from "../../components/ProjectCard";
import { posterGalleryEvents } from "../../constants/2025/ProgrammeEvents";
import { thread1Posters, thread2Posters } from "../../constants/2025/Speakers";

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
        <Typography sx={{ fontSize: { md: "16pt" }, color: "white" }}>
          Featuring posters from Thread 1 and 2, the Poster Gallery highlighted
          both academic learning and student-led initiatives. Attendees could
          explore projects at their own pace, interact with the material, and
          engage directly with creators encouraging deeper understanding and
          personalized insights into each initiative. Attendees could also visit
          Interactive Booths hosted by our community partners, NTUC, Hatch, the
          moonbeam co., to learn about how they tackle complex
          socio-environmental issues. These two parallel sessions was conducted
          within a shared space for the tea break, enhancing meaningful learning
          and networking opportunities for all.
        </Typography>
      </Stack>
      <ProgrammeHighlights
        title="Poster Gallery Programme"
        events={posterGalleryEvents}
      />

      <Stack gap={2}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
          }}
        >
          Thread 1: Edu-venture Posters
        </Typography>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ paddingInline: "10%", marginBottom: "24px" }}
        >
          {thread1Posters.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              subtitle={project.course}
              presenters={project.presenters}
              abstract={project.abstract}
            />
          ))}
        </Stack>
      </Stack>

      <Stack gap={2}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
          }}
        >
          Thread 2: Adventure Posters
        </Typography>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ paddingInline: "10%", marginBottom: "24px" }}
        >
          {thread2Posters.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              presenters={project.presenters}
              abstract={project.description}
            />
          ))}
        </Stack>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ paddingInline: "10%", marginBottom: "24px" }}
        >
          {thread2Posters.slice(3, 6).map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              presenters={project.presenters}
              abstract={project.description}
            />
          ))}
        </Stack>
      </Stack>

      <Footer />
    </Stack>
  );
};

export default Thread1;
