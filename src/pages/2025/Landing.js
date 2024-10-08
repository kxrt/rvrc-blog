import React from "react";
// import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import RVRCStepper from "../../components/SwipeableTextMobileStepper";
// import SignupButton from "../../components/2024/landing/SignupButton";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import PastSymposia from "../../components/PastSymposia";
// import StudentPoints from "../../components/2024/landing/StudentPoints";
import programmeEvents from "../../constants/2025/ProgrammeEvents";
import Title from "../../components/Title";

import LandingBanner1 from "../../assets/2024/landing-banner-1.jpg";
import LandingBanner2 from "../../assets/2024/landing-banner-2.jpg";
import LandingBanner3 from "../../assets/2024/landing-banner-3.jpg";
import LandingBanner4 from "../../assets/2024/landing-banner-4.jpg";
import LandingBanner5 from "../../assets/2024/landing-banner-5.jpg";
import LandingThemeBanner from "../../assets/2024/landing-theme-banner.jpg";
import Footer from "../../components/Footer";

const images = [
  {
    label: "Guest of Honour",
    imgPath: LandingBanner1,
  },
  {
    label: "Participants",
    imgPath: LandingBanner2,
  },
  {
    label: "College Master",
    imgPath: LandingBanner3,
  },
  {
    label: "Lunch",
    imgPath: LandingBanner4,
  },
  {
    label: "Keynote Speaker",
    imgPath: LandingBanner5,
  },
];

const Landing = () => {
  return (
    <>
      <Title title="RVRC Symposium 2025" />

      <RVRCStepper images={images} />

      <Box py="20px" px="10%">
        <p style={{ fontSize: "16pt" }}>
          The Ridge View Residential College (RVRC) Symposium 2025{" "}
          <b style={{ color: "#1d9077" }}>
            ‘Living and Learning for a Shared Future’
          </b>{" "}
          will be held on 8 February 2025. The symposium will be a dynamic
          showcase of exemplary student projects and the empowering tapestry of
          co-curricular activities at our College. This event is designed as a
          platform for networking, reflection, and mutual learning, focusing on
          the crucial themes of sustainability education and workplace readiness
          by garnering a diverse audience of 200 students, faculty members,
          industry collaborators and community partners.
        </p>
      </Box>
      {/* <StudentPoints /> */}

      {/* <p style={{ fontSize: "16pt", paddingInline: "10%" }}>
        We are honoured to have{" "}
        <Link to="/keynote" style={{ color: "#592693" }}>
          Dr. Adrian Loo
        </Link>{" "}
        as our Keynote Speaker. We believe that his unique story as an innovator
        of solutions for environmental, economic and social sustainability
        issues serve as a powerful inspiration for RVRC students.
      </p> */}

      <Box sx={{ backgroundColor: "#e1d0f5" }}>
        <Box component="img" src={LandingThemeBanner} sx={{ width: "100%" }} />

        <Stack py="32px" px="10%" spacing={3}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "20pt", md: "26pt" },
              color: "#592693",
              textAlign: "center",
            }}
          >
            Symposium Theme
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "24pt",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            'Living and Learning for a Shared Future'
          </Typography>
          <p style={{ fontSize: "16pt" }}>
            First crafted by the organising committee for the RVRC Symposium
            2024, the theme highlights how RVRC’s adoption of experiential
            learning pedagogies and extension of the world as a classroom
            encourages students to tackle complex socio-environmental issues by
            engaging directly with community stakeholders and driving the
            implementation of novel ideas for meaningful impact. The symposium
            enables the college to scale the impact of student projects through
            sharing of best practices and capacity building, enabling students
            to strive towards building a shared future that is more sustainable
            and equitable for all.
          </p>
        </Stack>
      </Box>

      <ProgrammeHighlights events={programmeEvents} />

      {/* TODO: Enable when sign up starts */}
      {/* <SignupButton /> */}

      <PastSymposia />

      <Footer />
    </>
  );
};

export default Landing;
