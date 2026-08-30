import React from "react";
import { Box, Grow, Stack, Typography } from "@mui/material";

import RVRCStepper from "../../components/SwipeableTextMobileStepper";
import SignupButton from "../../components/2027/SignupButton";
import ImageHeader from "../../components/2027/ImageHeader";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import PastSymposia from "../../components/PastSymposia";
import { programmeEvents } from "../../constants/2027/ProgrammeEvents";
import { COLOURS } from "../../constants/Colours";

import LandingBanner1 from "../../assets/2026/landing-banner-1.webp";
import LandingBanner2 from "../../assets/2026/landing-banner-2.webp";
import LandingBanner3 from "../../assets/2026/landing-banner-3.webp";
import LandingBanner4 from "../../assets/2026/landing-banner-4.webp";
import Footer from "../../components/2027/Footer";

const images = [
  {
    label: "Banner 1",
    imgPath: LandingBanner1,
  },
  {
    label: "Banner 2",
    imgPath: LandingBanner2,
  },
  {
    label: "Banner 3",
    imgPath: LandingBanner3,
  },
  {
    label: "Banner 4",
    imgPath: LandingBanner4,
  },
];

const Landing = () => {
  return (
    <Stack spacing={0}>
      { /* <ImageHeader /> */ }

      <Box
        component="div"
        sx={{
          position: "relative",
          background: COLOURS.black,
        }}
      >
        <RVRCStepper images={images} />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to top, rgb(0,0,0,1), rgb(0,0,0,0) 80%)",
            pointerEvents: "none", // Ensures the gradient layer doesn't block interactions
            zIndex: 1,
          }}
        />
        <Grow in timeout={2000} style={{ transformOrigin: "center bottom" }}>
          <Stack
            direction="column"
            spacing={{ xs: 1, md: 2 }}
            sx={{
              position: "absolute",
              bottom: { xs: "10px", md: "80px" },
              width: "100%",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: COLOURS.white,
                fontSize: { xs: "22pt", md: "50pt" },
                fontWeight: "bold",
              }}
            >
              RVRC Symposium 2027
            </Typography>
            <Typography
              sx={{
                color: COLOURS.white,
                fontSize: { xs: "14pt", md: "18pt" },
              }}
            >
              Empowering youth to shape a sustainable and equitable future
              together
            </Typography>
            <SignupButton link="https://forms.office.com/Pages/ResponsePage.aspx?id=Xu-lWwkxd06Fvc_rDTR-grzkewHkqIpDniq8iCMLTwdURDAwNjFHUFQyM09YM0s5RkxTSVRRVzJUUy4u" />
          </Stack>
        </Grow>
      </Box>

      <Box py="20px" px="10%">
        <p style={{ fontSize: "16pt", textAlign: "justify" }}>
          The Ridge View Residential College (RVRC) Symposium 2027, themed {" "}
          <b style={{ color: COLOURS.accentGreen }}>
            ‘Beyond Borders: Shaping Sustainable Futures Together’
          </b>{" "}
          is held on 30 January 2027. This student-led symposium provides a 
          formal platform for the presentation of exemplary student projects and 
          the diverse range of co-curricular activities undertaken within the 
          College. It is designed to facilitate meaningful networking, reflection 
          and shared learning among participants. The Symposium also foregrounds 
          the RVRC’s integrated themes of sustainability and workplace readiness.
        </p>

        <p style={{ fontSize: "16pt", textAlign: "justify" }}>
          We were honoured to have{" "}
          <a href="/external-partners#keynote" style={{ color: COLOURS.brandPurple, fontWeight: "bold" }}>
            Keynote Speaker 
          </a>{" "}
          as our Keynote Speaker. We believe that his leadership in environmental 
          innovation and his engagement with the RVRC community made his insights 
          meaningful for our participants.
        </p>
      </Box>

      <Box sx={{ backgroundColor: COLOURS.brandTeal }}>
        <Stack py="32px" px="10%" spacing={3}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "20pt", md: "26pt" },
              color: COLOURS.white,
              textAlign: "center",
            }}
          >
            Symposium Theme
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "24pt",
              color: COLOURS.white,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            'Beyond Borders: Shaping Sustainable Futures Together'
          </Typography>
          <p style={{ fontSize: "16pt", color: COLOURS.white, textAlign: "justify" }}>
            Beyond Borders: Forging Sustainable Futures Together marks a new chapter for the RVRC Symposium, evolving 
            from a college platform into a regional stage for cross-institutional dialogue and collective action. 
            Grounded in RVRC's commitment to experiential learning and its established foundations in sustainability 
            and workplace readiness, this edition brings together students, educators, and industry experts from RVRC 
            and across ASEAN to exchange research, practice, and lived experience in social and environmental resilience. 
            Through project presentations, sharing sessions, and student roundtables, Beyond Borders puts conversation 
            at the heart of how participants and partners come together and co-create resilient, sustainable futures.
          </p>
        </Stack>
      </Box>

      <ProgrammeHighlights title="Programme" events={programmeEvents} />

      <PastSymposia />

      <Footer />
    </Stack>
  );
};

export default Landing;
