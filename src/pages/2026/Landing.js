import React from "react";
import { Box, Grow, Stack, Typography } from "@mui/material";

import RVRCStepper from "../../components/SwipeableTextMobileStepper";
// import SignupButton from "../../components/SignupButton";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import PastSymposia from "../../components/PastSymposia";
import { programmeEvents } from "../../constants/2026/ProgrammeEvents";

import LandingBanner1 from "../../assets/rvrc_bg.jpeg";
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
              Add description here
            </Typography>
            {/* <SignupButton link="https://tinyurl.com/RVRCSymposium2025" /> */}
          </Stack>
        </Grow>
      </Box>

      <Box py="20px" px="10%">
        <p style={{ fontSize: "16pt" }}>
          The Ridge View Residential College (RVRC) Symposium 2026{" "}
          <b style={{ color: "#1d9077" }}>
            ‘Add Theme'
          </b>{" "}
          will be held on ____ 2026. Add description.
        </p>

        <p style={{ fontSize: "16pt" }}>
          We are honoured to have{" "}
          <a href="/keynote" style={{ color: "#592693", fontWeight: "bold" }}>
            Special Guest Name
          </a>{" "}
          as our Keynote Speaker. Add description here.
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
            'Add Theme'
          </Typography>
          <p style={{ fontSize: "16pt", color: "white" }}>
            Describe theme.
          </p>
        </Stack>
      </Box>

      <ProgrammeHighlights title="Programme" events={programmeEvents} />

      <p
        style={{
          fontSize: "14pt",
          fontStyle: "italic",
          paddingBlock: "20px",
          margin: "0",
        }}
      >
        This event was made possible through the generous support of ___. (Add sponsors here)
      </p>

      <PastSymposia />

      <Footer />
    </Stack>
  );
};

export default Landing;
