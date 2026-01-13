import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import RVRCStepper from "../../components/SwipeableTextMobileStepper";
import SymposiumTheme from "../../components/2022/landing/SymposiumTheme";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import AwardWinners from "../../components/2022/landing/AwardWinners";
import StudentPoints from "../../components/2022/landing/StudentPoints";

import event2 from "../../assets/2022/event2.webp";
import event3 from "../../assets/2022/event3.webp";
import event4 from "../../assets/2022/event4.webp";
import event5 from "../../assets/2022/event5.webp";
import event6 from "../../assets/2022/event6.webp";
import programmeEvents from "../../constants/2022/ProgrammeEvents";

const images = [
  {
    label: "event2",
    imgPath: event2,
  },
  {
    label: "event3",
    imgPath: event3,
  },
  {
    label: "event4",
    imgPath: event4,
  },
  {
    label: "event5",
    imgPath: event5,
  },
  {
    label: "event6",
    imgPath: event6,
  },
];

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
      <RVRCStepper images={images} />
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
      <ProgrammeHighlights
        title="Programme Highlights"
        events={programmeEvents}
      />
      <AwardWinners />
    </>
  );
};

export default Landing;
