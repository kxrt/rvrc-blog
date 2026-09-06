import React from "react";
import { Box, Grow, Stack, Typography } from "@mui/material";

import RVRCStepper from "../../components/SwipeableTextMobileStepper";
import SignupButton from "../../components/2027/SignupButton";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import PastSymposia from "../../components/PastSymposia";
import { programmeEvents } from "../../constants/2027/ProgrammeEvents";
import { COLOURS } from "../../constants/Colours";

import LandingBanner1 from "../../assets/2026/landing-banner-1.webp";
import LandingBanner2 from "../../assets/2026/landing-banner-2.webp";
import LandingBanner3 from "../../assets/2026/landing-banner-3.webp";
import LandingBanner4 from "../../assets/2026/landing-banner-4.webp";
import Footer from "../../components/2027/Footer";

import keynoteSpeaker from "../../assets/2026/keynote-speaker.webp";

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
          will be held on 30 January 2027. This annual student-led symposium provides a 
          formal platform for the presentation of exemplary projects and 
          the diverse range of co-curricular activities undertaken by the students of the 
          college, foregrounding RVRC’s integrated themes of sustainability and workplace 
          readiness. It is designed to facilitate meaningful networking, reflection and 
          shared learning among participants.
        </p>
      </Box>

      {/* <Box component="img" src={Thread2Image} sx={{ width: "100%" }} /> */}
      <Box
        id="keynote"
        sx={{
          backgroundColor: COLOURS.brandTeal,
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
                    color: COLOURS.white,
                    textAlign: { xs: "center", md: "center" },
                    fontWeight: "bold",
                  }}
                >
                  Keynote Speaker
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "18pt", md: "24pt" },
                    color: COLOURS.white,
                    textAlign: { xs: "center", md: "center" },
                    paddingTop: "8px",
                  }}
                >
                  Mr. Sean Lam
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12pt", md: "16pt" },
                    color: COLOURS.white,
                    textAlign: { xs: "center", md: "center" },
                  }}
                >
                  Founder and CEO, Ecoworks
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16pt",
                    color: COLOURS.white,
                    textAlign: "justify",
                  }}
                >
                  <b>Mr. Sean Lam</b> is the Founder and CEO of{" "}
                  <a
                    href="https://www.ecoworks.sg/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: COLOURS.white, fontWeight: "bold" }}
                  >
                    Ecoworks
                  </a>
                  , a social enterprise in Singapore that tackles single-use plastic
                  waste by providing a network of automated refill stations for
                  household cleaning products. His mission is to promote a
                  packaging-free lifestyle and eliminate millions of plastic bottles
                  annually. He is also recognised as a Philip Yeo Innovation Fellow
                  (a "MAD COW" - Make A Difference, Change Our World) for his
                  innovative environmental solutions and is active as a community
                  leader and Volunteer Police Officer.
                </Typography>
              </Stack>
              <Box sx={{ width: { xs: "100%", md: "auto" }, display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                    height: { xs: "220px", md: "300px" },
                  }}
                >
                  <Box
                    component="img"
                    src={keynoteSpeaker}
                    alt="Keynote Speaker"
                    sx={{ height: "100%", borderRadius: "8px" }}
                  />
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Grow>
      </Box>

      <Box sx={{ backgroundColor: "#e1d0f5" }}>
        <Stack py="32px" px="10%" spacing={3}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "20pt", md: "26pt" },
              color: COLOURS.brandPurple,
              textAlign: "center",
            }}
          >
            Symposium Theme
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "24pt",
              color: COLOURS.accentGreen,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            'Beyond Borders: Shaping Sustainable Futures Together'
          </Typography>
          <p style={{ fontSize: "16pt", color: COLOURS.black, textAlign: "justify" }}>
            Beyond Borders: Forging Sustainable Futures Together marks a new chapter for the annual RVRC Symposium, evolving 
            from a college platform into a regional stage for cross-institutional dialogue and collective action. 
            Grounded in RVRC's commitment to experiential learning and its established foundations in sustainability 
            and workplace readiness, the 2027 edition brings together students, educators, and industry experts from RVRC, 
            ASEAN, and Asia to exchange research, practice, and lived experience centered on socio-environmental sustainable futures. 
            Through project presentations, interactive sessions, and student roundtables, Beyond Borders puts conversation 
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
