import React from "react";
import { Box, Stack, Grow, Typography } from "@mui/material";

import Title from "../../components/2027/Title";
import Footer from "../../components/2027/Footer";
import { COLOURS } from "../../constants/Colours";

import SpeakerBiography from "../../components/SpeakerBiography";
import humanLibrarySpeakers from "../../constants/2027/Programme";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import { studentRoundtableEvents, dialogueSessionsEvents } from "../../constants/2027/ProgrammeEvents";

import keynoteSpeaker from "../../assets/2026/keynote-speaker.webp";
import keynoteSpeaker2 from "../../assets/2026/keynote-speaker-2.webp";

const Interactive = () => {
  return (
    <Stack>
      <Title title="Interactive" />
      <Stack
        spacing={2}
        sx={{
          backgroundColor: COLOURS.brandTeal,
          paddingInline: "10%",
          paddingBlock: "20px",
        }}
        id="roundtable"
      >
        <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
          <Stack spacing={1}>
            <Typography
              variant="h4"
              sx={{
                color: COLOURS.white,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Student Roundtable
            </Typography>
          </Stack>
        </Grow>
        <Grow
          in
          timeout={1000}
          style={{ transformOrigin: "center bottom", transitionDelay: "250ms" }}
        >
          <Stack spacing={1}>
          <Typography sx={{ fontSize: { md: "16pt" }, color: COLOURS.white, textAlign: "justify" }}>
            The Student Roundtable will introduce a distinctive forum for engaging with pressing 
            global sustainability challenges. In place of a traditional white paper format, 
            delegates will participate in a structured discussion examining the benefits and 
            drawbacks of ecotourism on Southeast Asian economies, as well as the varying approaches 
            to its promotion across the region. Under the guidance of an experienced moderator 
            and subject-matter expert, student participants and international delegates will be 
            encouraged to engage in substantive dialogue and develop innovative, evidence-informed 
            responses to the challenges under consideration.
          </Typography>
          </Stack>
        </Grow>
      </Stack>

      <ProgrammeHighlights
        title="Student Roundtable Programme"
        events={studentRoundtableEvents}
      />

      <Stack spacing={2}>
          <Box sx={{ display: { xs: "inline-block", md: "block" } }}>
              <Box sx={{ textAlign: { xs: "center" } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: COLOURS.brandPurple,
                }}
              >
                Moderator
              </Typography>
              <Box sx={{ display: "inline-block", height: "250px", marginTop: "20px" }}>
              <Box component="img" src={keynoteSpeaker} alt="Keynote Speaker" sx={{ height: "100%", borderRadius: "8px" }} />
              <Box component="img" src={keynoteSpeaker2} alt="Keynote Speaker 2" sx={{ height: "100%", marginLeft: "20px", borderRadius: "8px" }} />
              </Box>
              <Typography
                  sx={{
                  fontSize: { xs: "18pt", md: "24pt" },
                  paddingInline: "7%",
                  paddingTop: "18px",
                  color: "#1d9077",
                  }}
              >
                  Dr. Movin N (RVRC Fellow) 
              </Typography>
              <Typography
                  style={{
                  fontSize: { xs: "12pt", md: "16pt" },
                  paddingInline: "7%",
                  paddingBottom: "0px",
                  }}
              >
                  RVRC Fellow and Professor of Environmental Studies
              </Typography>

              <div>
                  <p
                    style={{
                        fontSize: "14pt",
                        paddingInline: "7%",
                        textAlign: "justify",
                    }}
                  >
                  RVRC Fellow Dr Movin will serve as the moderator for the Student Roundtable. Dr. Movin's research 
                  focuses on biodiversity impact assessments, community-based conservation, and developing regional 
                  frameworks for biodiversity. A trained ornithologist and freshwater biologist,he has conducted 
                  fieldwork across Southeast Asia, with a particular focus on the Philippines. 
                  </p>
              </div>
              </Box>
          </Box>
      </Stack>
      <Stack
        spacing={2}
        sx={{
          backgroundColor: COLOURS.brandTeal,
          paddingInline: "10%",
          paddingBlock: "20px",
        }}
      >
        <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
          <Stack spacing={1}>
            <Typography
              variant="h4"
              sx={{
                color: COLOURS.white,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Off-the-Record Dialogues
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { md: "16pt" },
                color: COLOURS.white,
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              Human Library with RVRC Alumni
            </Typography>
          </Stack>
        </Grow>
        <Grow
          in
          timeout={1000}
          style={{ transformOrigin: "center bottom", transitionDelay: "250ms" }}
        >
          <Stack spacing={1}>
          <Typography sx={{ fontSize: { md: "16pt" }, color: COLOURS.white, textAlign: "justify" }}>
            In this segment, we are planning to provide a comfortable and interactive environment for our 
            attendees to gain deeper insight regarding Singapore's career landscape. We plan to invite 
            three different alumni speakers from three different sectors to share their experiences.  
            This will be conducted in a human library manner, where attendees can have one-on-one 
            conversations with the speakers to gain a better understanding of their career paths and 
            experiences. This will provide attendees with a unique opportunity to learn from the experiences 
            of our alumni and gain valuable insights into the different career paths available in Singapore.
          </Typography>
          </Stack>
        </Grow>
      </Stack>

      <ProgrammeHighlights
        title="Off-the-Record Dialogues"
        events={dialogueSessionsEvents}
      />

      <Stack gap={2} sx={{ paddingInline: "10%", marginBottom: 4, marginTop: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: COLOURS.brandPurple,
          }}
        >
          Alumni Speakers
        </Typography>

        {humanLibrarySpeakers.map((speaker) => (
          <SpeakerBiography
            key={speaker.name}
            name={speaker.name}
            title={speaker.title}
            biography={speaker.biography}
            image={speaker.image}
            isAlignedLeft={true}
          />
        ))}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Interactive;
