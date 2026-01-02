import React from "react";
import { Box, Grow, Stack, Typography } from "@mui/material";

import Title from "../../components/Title";
import Footer from "../../components/Footer";
// import Thread2Image from "../../assets/2026/thread-2.jpeg";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import SpeakerBiography from "../../components/SpeakerBiography";
import { thread2Events } from "../../constants/2026/ProgrammeEvents";
import {
  panelDiscussion1Speakers,
  panelDiscussion2Speakers,
} from "../../constants/2026/PanelDiscussions";

const Thread2 = () => {
  return (
    <Stack spacing={0}>
      <Title title="Thread 2: Adventure" />
      {/* <Box component="img" src={Thread2Image} sx={{ width: "100%" }} /> */}
      <Stack
        spacing={4}
        sx={{
          backgroundColor: "#008080",
          paddingInline: "10%",
          paddingBlock: "20px",
        }}
      >
        <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
          <Stack spacing={1}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Adventure
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { md: "16pt" },
                color: "white",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              Cultivating Curiosity and Stewardship
            </Typography>
          </Stack>
        </Grow>
        <Grow
          in
          timeout={1000}
          style={{ transformOrigin: "center bottom", transitionDelay: "250ms" }}
        >
          <Stack spacing={1}>
          <Typography sx={{ fontSize: { md: "16pt" }, color: "white" }}>
            This thread celebrates the rich array of student-led co-curricular and 
            co-academic initiatives spearheaded by our residents. Discussions in this 
            thread seek to showcase the vibrancy of student life in RVRC and beyond, 
            showcasing how these experiences nurtu re essential workplace soft skills, 
            including leadership, teamwork and cultural awareness. 
          </Typography>
          <Typography sx={{ fontSize: { md: "16pt" }, color: "white"}}>
            While the previous symposium focused solely on sustainability, 
            the 2026 edition will also spotlight RVRC’s other key theme — workplace 
            readiness. Dedicated panel discussions will be held for each theme, 
            providing deeper engagement and diverse perspectives.
          </Typography>
          <Typography sx={{ fontSize: { md: "16pt" }, color: "white"}}>
            Presenters include students from RVRC, NUS and external IHLs, who are invited 
            to share their unique experiences, and foster dialogue and idea exchange 
            across diverse groups. At the same time, this thread will also showcase how 
            RVRC’s distinct living-learning programme cultivates a strong sense of 
            stewardship towards both society and the environment.
          </Typography>
          </Stack>
        </Grow>
      </Stack>
      <ProgrammeHighlights
        title="Thread 2 Programme"
        subtitle="Master's Lounge (Level 3, RVRC Block G)"
        events={thread2Events}
      />

      <Stack gap={2} sx={{ paddingInline: "10%", marginBottom: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#592693",
          }}
        >
          Panel Discussion 1 (Sustainability)
        </Typography>

        {panelDiscussion1Speakers.map((speaker) => (
          <SpeakerBiography
            key={speaker.name}
            name={speaker.name}
            title={speaker.title}
            biography={speaker.biography}
            image={speaker.image}
            isAlignedLeft={true}
          />
        ))}

        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#592693",
            marginTop: 3,
          }}
        >
          Panel Discussion 2 (Workplace Readiness)
        </Typography>

        {panelDiscussion2Speakers.map((speaker) => (
          <SpeakerBiography
            key={speaker.name}
            name={speaker.name}
            title={speaker.title}
            biography={speaker.biography}
            image={speaker.image}
            isAlignedLeft={false}
          />
        ))}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Thread2;
