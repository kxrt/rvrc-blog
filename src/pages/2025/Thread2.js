import React from "react";
import { Box, Grow, Stack, Typography } from "@mui/material";

import Title from "../../components/Title";
import Footer from "../../components/Footer";
import Thread2Image from "../../assets/2025/thread-2.webp";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import SpeakerBiography from "../../components/SpeakerBiography";
import { thread2Events } from "../../constants/2025/ProgrammeEvents";
import {
  firesideChat1Speakers,
  firesideChat2Speakers,
} from "../../constants/2025/Speakers";

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
          <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
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
          </Grow>
          <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
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
          </Grow>
        </Stack>
        <Grow
          in
          timeout={1000}
          style={{ transformOrigin: "center bottom", transitionDelay: "250ms" }}
        >
          <Typography sx={{ fontSize: { md: "16pt" }, color: "white" }}>
            Highlighting student-led co-curricular endeavours, discussions in
            this thread evidenced the crucial acquisition of soft skills, such
            as leadership and cultural awareness, towards the cause of building
            a shared future that is more sustainable and equitable for all.
            Presenters include students from RVRC, NUS, and other IHLs were
            invited to share their unique experiences and exchange ideas with
            one another to discover new insights. The thread also showcased how
            the distinct RVRC living-learning experience instils stewardship of
            society and environment.
          </Typography>
        </Grow>
      </Stack>
      <ProgrammeHighlights
        title="Thread 2 Programme"
        subtitle="Master's Lounge (Level 3, RVRC Block G)"
        events={thread2Events}
      />

      <Stack gap={2} sx={{ paddingInline: "10%" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
          }}
        >
          Fireside Chat 1
        </Typography>

        {firesideChat1Speakers.map((speaker) => (
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
          }}
        >
          Fireside Chat 2
        </Typography>

        {firesideChat2Speakers.map((speaker) => (
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
