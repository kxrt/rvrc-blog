import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import RVRCStepper from "../../components/SwipeableTextMobileStepper";
// import SignupButton from "../../components/2024/landing/SignupButton";
import SymposiumTheme from "../../components/2024/landing/SymposiumTheme";
import ProgrammeHighlights from "../../components/2024/landing/ProgrammeHighlights";
import PastSymposia from "../../components/PastSymposia";
import StudentPoints from "../../components/2024/landing/StudentPoints";

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
          RVRC Symposium 2024
        </Typography>
      </Box>
      <RVRCStepper />
      <StudentPoints />
      <p style={{ fontSize: "16pt", paddingInline: "10%" }}>
        We were honoured that{" "}
        <Link to="/guest-of-honour" style={{ color: "#592693" }}>
          Dr. Adrian Loo
        </Link>{" "}
        graced the occasion as the Guest of Honour and delivered the opening
        address. We were also privileged to welcome back RVRC alumnus{" "}
        <Link to="/keynote" style={{ color: "#592693" }}>
          Mr. Victor Zhu
        </Link>
        , who shared his insights as our Keynote Speaker. We believe that their
        unique stories as innovators of solutions for environmental, economic
        and social sustainability issues serve as powerful inspirations for RVRC
        students.
      </p>
      <SymposiumTheme />
      <ProgrammeHighlights />

      {/* SignupButton disabled, since event ended. */}
      {/* <SignupButton /> */}

      <PastSymposia />
    </>
  );
};

export default Landing;
