import React from "react";
import { Box, Fade,Grid, Grow, Stack, Typography } from "@mui/material";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
// import PosterGalleryImage from "../../assets/2025/poster-gallery.jpeg";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import ProjectCard from "../../components/ProjectCard";
import { posterGalleryEvents } from "../../constants/2026/ProgrammeEvents";
import { thread1Posters, thread2Posters } from "../../constants/2026/Posters";

const PosterGallery = () => {
  return (
    <Stack spacing={0}>
      <Title title="Poster Gallery" />
      {/* <Box component="img" src={PosterGalleryImage} sx={{ width: "100%" }} /> */}
      
      <Stack
        spacing={4}
        sx={{
          backgroundColor: "#008080",
          paddingInline: "10%",
          paddingBlock: "20px",
        }}
      >
        <Grow
          in
          timeout={1000}
          style={{ transformOrigin: "center bottom"}}
        > 
          <Stack spacing={1}>
            <Typography sx={{ fontSize: { md: "16pt" }, color: "white", textAlign: "justify" }}>
              Featuring posters from Threads 1 and 2, the Poster Gallery showcases both 
              academic learning and student-led initiatives. Attendees are able to explore 
              the projects at their own pace, engage with the materials and interact directly 
              with the presenters, fostering deeper understanding and personalised insights 
              into each initiative.
            </Typography>
            <Typography sx={{ fontSize: { md: "16pt" }, color: "white", textAlign: "justify" }}>
              Alongside the Poster Gallery, Interactive Booths hosted by our community partners, 
              WWF, MINDS, and NTUC Youth, provide attendees with opportunities to learn about 
              their work in advancing environmental conservation, social inclusion and youth 
              advocacy. These parallel sessions are held within a shared space during the tea break, 
              creating a vibrant environment that encouraged meaningful learning, dialogue and 
              networking among participants.
            </Typography>
          </Stack>
        </Grow>
      </Stack>
      
      <ProgrammeHighlights
        title="Poster Gallery Programme"
        events={posterGalleryEvents}
      />

      <Stack gap={2} marginBottom={4}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#1d9077",
          }}
        >
          Thread 1: Edu-venture Posters
        </Typography>
        <Grid container 
          spacing={2} 
          justifyContent="center" 
          sx={{ paddingInline: "10%" }}>
          {thread1Posters.map((project) => (
            <Grid item sm={12} md={6} lg={4}
              key={project.title}
              sx={{ display: "flex", width: "100%" }}>
              <ProjectCard
                title={project.title}
                subtitle={project.course}
                presenters={project.presenters}
                abstract={project.abstract}
              />
            </Grid>
          ))}
        </Grid> 
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#1d9077",
            marginTop: 3,
          }}
        >
          Thread 2: Adventure Posters
        </Typography>
        <Grid container 
          spacing={2} 
          justifyContent="center" 
          sx={{ paddingInline: "10%" }}>
          {thread2Posters.map((project) => (
            <Grid item sm={12} md={6} lg={4}
              sx={{ display: "flex", width: "100%"}}>
              <ProjectCard
                key={project.title}
                title={project.title}
                presenters={project.presenters}
                abstract={project.abstract}
                sx={{ flex: 1 }}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Footer />
    </Stack>
  );
};

export default PosterGallery;
