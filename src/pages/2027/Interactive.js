import React from "react";
import { Box, Stack, Grow, Typography } from "@mui/material";

import Title from "../../components/2027/Title";
import Footer from "../../components/2027/Footer";
import { COLOURS } from "../../constants/Colours";

import SpeakerBiography from "../../components/SpeakerBiography";
import humanLibrarySpeakers from "../../constants/2027/Programme";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import { studentRoundtableEvents, dialogueSessionsEvents } from "../../constants/2027/ProgrammeEvents";

import Movin from "../../assets/2027/movin.webp";

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

      <Box
        sx={{
          backgroundColor: COLOURS.white,
          paddingInline: "10%",
          paddingBlock: { xs: "28px", md: "40px" },
        }}
      >
        <Stack spacing={2}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: COLOURS.brandPurple,
              textAlign: "center",
            }}
          >
            Overview
          </Typography>
          <Typography sx={{ fontSize: "16pt", textAlign: "justify" }}>
            Topic of Roundtable Discussion here: Ecotourism in ASEAN
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          backgroundColor: COLOURS.lightPurple,
          paddingInline: "10%",
          paddingBlock: { xs: "28px", md: "40px" },
        }}
      >
        <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
          <Stack spacing={{ xs: 2.5, md: 3 }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 3, md: 5 }}
              alignItems={{ xs: "center", md: "stretch" }}
            >
              <Stack spacing={1.5} sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: COLOURS.brandPurple,
                    textAlign: "center",
                  }}
                >
                  Moderator
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "18pt", md: "24pt" },
                    color: COLOURS.accentGreen,
                    textAlign: "center",
                    paddingTop: "8px",
                  }}
                >
                  Dr. Movin Nyanasengaran (RVRC Fellow)
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12pt", md: "16pt" },
                    textAlign: "center",
                  }}
                >
                  RVRC Fellow and Professor of Environmental Studies
                </Typography>
                <Typography sx={{ fontSize: "16pt", textAlign: "justify" }}>
                  RVRC Fellow Dr. Movin will serve as the moderator for the Student Roundtable.
                  Dr. Movin's research focuses on biodiversity impact assessments, community-based
                  conservation, and developing regional frameworks for biodiversity. A trained
                  ornithologist and freshwater biologist, he has conducted fieldwork across
                  Southeast Asia, with a particular focus on the Philippines.
                </Typography>
              </Stack>
              <Box
                sx={{
                  width: { xs: "100%", md: "auto" },
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                <Box sx={{ display: "flex", gap: "20px", height: { xs: "220px", md: "300px" } }}>
                  <Box
                    component="img"
                    src={Movin}
                    alt="Moderator"
                    sx={{ height: "100%", borderRadius: "8px" }}
                  />
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Grow>
      </Box>
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
              Off-the-Record Human Library
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
              Dialogue Sessions with RVRC Alumni
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
            In this segment, attendees gain deeper insight into Singapore's career landscape. 
            We are joined by three alumni speakers from different sectors who share their 
            experiences and perspectives within a safe and interactive space. The segment is 
            conducted in a human library format, allowing attendees to engage in one-on-one 
            conversations with the speakers and gain a better understanding of their career paths 
            and experiences. This provides attendees with a unique opportunity to learn from the 
            experiences of our alumni and gain valuable insights into the different career paths 
            available in Singapore.
          </Typography>
          </Stack>
        </Grow>
      </Stack>

      <ProgrammeHighlights
        title="Off-the-Record Human Library"
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
