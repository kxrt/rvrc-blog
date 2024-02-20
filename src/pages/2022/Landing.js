import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import RVRCStepper from "../../components/SwipeableTextMobileStepper";
import SymposiumTheme from "../../components/2022/landing/SymposiumTheme";
import ProgrammeHighlights from "../../components/2022/landing/ProgrammeHighlights";
import AwardWinners from "../../components/2022/landing/AwardWinners";
// import PastSymposia from "../components/LandingComponents/PastSymposia";
import StudentPoints from "../../components/2022/landing/StudentPoints";

const Landing = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#592693",
          padding: { xs: "3%", md: "1%" },
          paddingBottom: { md: "20px" },
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
          RVRC Symposium 2022
        </Typography>
      </Box>
      <RVRCStepper />
      <StudentPoints />
      <p style={{ fontSize: "16pt", paddingInline: "10%" }}>
        Project abstracts can be viewed{" "}
        <Link to="/2022/interactive" style={{ color: "#592693" }}>
          here
        </Link>
        .
      </p>
      <p style={{ fontSize: "16pt", paddingInline: "10%" }}>
        We were honoured that NUS Alumnus{" "}
        <Link to="/2022/keynote" style={{ color: "#592693" }}>
          Mr Veerappan Swaminathan
        </Link>{" "}
        graced the occasion with a keynote address. We believe that his unique
        story that began as an NUS undergraduate, and continues as an innovator
        of solutions for environmental, economic and social sustainability
        issues, is ideally placed to inspire RVRC students.
      </p>
      <SymposiumTheme />
      <ProgrammeHighlights />
      {/* Sign up button disabled as event has ended. */}
      {/* <SignupButton />  */}
      <AwardWinners />
      {/* <PastSymposia /> */}
    </>
  );
};

export default Landing;
