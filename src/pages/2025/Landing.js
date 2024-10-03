import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import RVRCStepper from "../../components/SwipeableTextMobileStepper";
// import SignupButton from "../../components/2024/landing/SignupButton";
import SymposiumTheme from "../../components/2024/landing/SymposiumTheme";
import ProgrammeHighlights from "../../components/ProgrammeHighlights";
import PastSymposia from "../../components/PastSymposia";
import StudentPoints from "../../components/2024/landing/StudentPoints";
import programmeEvents from "../../constants/2025/ProgrammeEvents";

import LandingBanner1 from "../../assets/2024/landing-banner-1.jpg";
import LandingBanner2 from "../../assets/2024/landing-banner-2.jpg";
import LandingBanner3 from "../../assets/2024/landing-banner-3.jpg";
import LandingBanner4 from "../../assets/2024/landing-banner-4.jpg";
import LandingBanner5 from "../../assets/2024/landing-banner-5.jpg";

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
      <Box
        sx={{
          bgcolor: "#592693",
          padding: { xs: "3%", md: "1%" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontSize: { xs: "24pt", md: "40pt" },
            fontFamily: "Jost",
            fontWeight: "Bold",
          }}
        >
          RVRC Symposium 2025
        </Typography>
      </Box>

      <RVRCStepper images={images} />

      <StudentPoints />

      <p style={{ fontSize: "16pt", paddingInline: "10%" }}>
        We are honoured to have{" "}
        <Link to="/keynote" style={{ color: "#592693" }}>
          Dr. Adrian Loo
        </Link>{" "}
        as our Keynote Speaker. We believe that his unique story as an innovator
        of solutions for environmental, economic and social sustainability
        issues serve as a powerful inspiration for RVRC students.
      </p>

      <SymposiumTheme />
      <ProgrammeHighlights events={programmeEvents} />

      {/* TODO: Enable when sign up starts */}
      {/* <SignupButton /> */}

      <PastSymposia />
    </>
  );
};

export default Landing;
