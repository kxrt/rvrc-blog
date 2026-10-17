import React from "react";
import { useState } from "react";
import {
  Box,
  Breadcrumbs,
  Grow,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Footer from "../../components/2027/Footer";
import Title from "../../components/2027/Title";
import PosterTypeAccordion from "../../components/2027/PosterTypeAccordion";
// import PosterGalleryImage from "../../assets/2027/poster-gallery.webp";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import { posterGalleryEvents } from "../../constants/2027/ProgrammeEvents";
import {
  thread1InteractivePosters,
  thread1Posters,
  thread2InteractivePosters,
  thread2Posters,
} from "../../constants/2027/Posters";
import { COLOURS } from "../../constants/Colours";

const PosterGallery = () => {
  const [thread1Expanded, setThread1Expanded] = useState(null);
  const [thread2Expanded, setThread2Expanded] = useState(null);

  const handleAccordionChange = (setExpanded, section) => (_event, isExpanded) => {
    setExpanded(isExpanded ? section : null);
  };

  return (
    <Stack spacing={0}>
      <Title title="Poster Gallery" />
      {/* <Box component="img" src={PosterGalleryImage} sx={{ width: "100%" }} /> */}
      
      <Stack
        spacing={4}
        sx={{
          backgroundColor: COLOURS.brandTeal,
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
              The Poster Gallery, featuring works from Threads 1 and 2, will showcase the breadth 
              of students' academic learning and student-led initiatives. Attendees will have the 
              opportunity to explore the exhibited projects at their own pace, engage with the 
              presented materials, and interact directly with student presenters, fostering a 
              deeper understanding of and personalised insight into each initiative.
            </Typography>
            <Typography sx={{ fontSize: { md: "16pt" }, color: "white", textAlign: "justify" }}>
              Alongside the Poster Gallery, Interactive Booths hosted by community partners 
              will provide attendees with the opportunity to learn about their respective work 
              in advancing environmental conservation, social inclusion, and youth advocacy. 
              These parallel sessions will be held within a shared space during the Networking Tea, 
              cultivating a vibrant and conducive environment for meaningful learning, dialogue, 
              and networking among all participants.
            </Typography>
          </Stack>
        </Grow>
      </Stack>
      
      <ProgrammeHighlights
        title="Poster Gallery Programme"
        events={posterGalleryEvents}
      />

      <Stack gap={2} marginBottom={4}>
        <Stack id="thread1-posters" gap={2}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#1d9077",
              marginTop: 2,
            }}
          >
            Thread 1: Re-Synergy Posters
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginX: "10%" }}>
            <Breadcrumbs>
              <Typography sx={{ color: 'text.primary' }}>Thread 1 Re-Synergy</Typography>
              <Link underline="hover" color="inherit" href="#thread2-posters">
                Thread 2 In-Synergy
              </Link>
            </Breadcrumbs>
          </Box>
          <PosterTypeAccordion
            id="thread1-interactive-posters"
            title="Interactive Display Posters"
            projects={thread1InteractivePosters}
            expanded={thread1Expanded === "interactive"}
            onChange={handleAccordionChange(setThread1Expanded, "interactive")}
          />
          <PosterTypeAccordion
            id="thread1-standard-posters"
            title="Standard Posters"
            projects={thread1Posters}
            expanded={thread1Expanded === "standard"}
            onChange={handleAccordionChange(setThread1Expanded, "standard")}
          />
        </Stack>
        <Stack id="thread2-posters" gap={2}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#1d9077",
              marginTop: 2,
            }}
          >
            Thread 2: In-Synergy Posters
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginX: "10%" }}>
            <Breadcrumbs>
              <Link underline="hover" color="inherit" href="#thread1-posters">
                Thread 1 Re-Synergy
              </Link>
              <Typography sx={{ color: 'text.primary' }}>Thread 2 In-Synergy</Typography>
            </Breadcrumbs>
          </Box>
          <PosterTypeAccordion
            id="thread2-interactive-posters"
            title="Interactive Display Posters"
            projects={thread2InteractivePosters}
            expanded={thread2Expanded === "interactive"}
            onChange={handleAccordionChange(setThread2Expanded, "interactive")}
          />
          <PosterTypeAccordion
            id="thread2-standard-posters"
            title="Standard Posters"
            projects={thread2Posters}
            expanded={thread2Expanded === "standard"}
            onChange={handleAccordionChange(setThread2Expanded, "standard")}
          />
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default PosterGallery;
