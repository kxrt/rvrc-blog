import React from "react";
import { Box, Grow, Stack, Typography } from "@mui/material";

import RVRCStepper from "../../components/SwipeableTextMobileStepper";
import SignupButton from "../../components/SignupButton";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import PastSymposia from "../../components/PastSymposia";
import { programmeEvents } from "../../constants/2026/ProgrammeEvents";

import LandingBanner1 from "../../assets/rvrc_bg.webp";
import Footer from "../../components/Footer";

const images = [
  {
    label: "Banner 1",
    imgPath: LandingBanner1,
  },
];

const Landing = () => {
  return (
    <Stack spacing={0}>
      <Box
        component="div"
        sx={{
          position: "relative",
          background: "black",
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
              bottom: { xs: "5px", md: "80px" },
              width: "100%",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontSize: { xs: "24pt", md: "50pt" },
                fontWeight: "bold",
              }}
            >
              RVRC Symposium 2026
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "16pt", md: "18pt" },
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
          The Ridge View Residential College (RVRC) Symposium 2026, themed {" "}
          <b style={{ color: "#1d9077" }}>
            ‘Living and Learning for a Shared Future’
          </b>{" "}
          will be held on 7 February 2026. This student-led symposium provides a 
          formal platform for the presentation of exemplary student projects and 
          the diverse range of co-curricular activities undertaken within the 
          College. It is designed to facilitate meaningful networking, reflection 
          and shared learning among participants. The Symposium is also foregrounding 
          the RVRC’s integrated themes of sustainability and workplace readiness.
        </p>

        <p style={{ fontSize: "16pt", textAlign: "justify" }}>
          We are honoured to have{" "}
          <a href="/keynote" style={{ color: "#592693", fontWeight: "bold" }}>
            Mr. Sean Lam
          </a>{" "}
          as our Keynote Speaker. We believe that his leadership in environmental 
          innovation and his engagement with the RVRC community will make his insights 
          meaningful for our participants.
        </p>
      </Box>

      <Box sx={{ backgroundColor: "#008080" }}>
        <Stack py="32px" px="10%" spacing={3}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "20pt", md: "26pt" },
              color: "white",
              textAlign: "center",
            }}
          >
            Symposium Theme
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "24pt",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            'Living and Learning for a Shared Future'
          </Typography>
          <p style={{ fontSize: "16pt", color: "white", textAlign: "justify" }}>
            Retained from the RVRC Symposium 2024, the theme continues to underscore 
            RVRC’s commitment to experiential learning and the extension of the world 
            as a classroom. This approach empowers students to address complex challenges 
            in social and environmental sustainability by collaborating with community 
            stakeholders and translating innovative ideas into meaningful action.

            In 2026, the symposium places renewed emphasis on sustainability and workplace 
            readiness — key pillars for building a shared future. By showcasing student projects, 
            sharing best practices, and fostering capacity building, the symposium equips 
            students with the skills, perspectives, and adaptability needed to thrive in diverse 
            professional environments while contributing to a more sustainable, inclusive, and 
            equitable world.
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
