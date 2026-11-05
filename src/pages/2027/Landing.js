import React from "react";
import { Box, Grow, Stack, Typography } from "@mui/material";

import RVRCStepper from "../../components/SwipeableTextMobileStepper";
import SignupButton from "../../components/2027/SignupButton";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import PastSymposia from "../../components/2027/PastSymposia";
import { programmeEvents } from "../../constants/2027/ProgrammeEvents";
import { COLOURS } from "../../constants/Colours";

import LandingBanner1 from "../../assets/2027/landing-banner-1.webp";
import LandingBanner2 from "../../assets/2027/landing-banner-2.webp";
import LandingBanner3 from "../../assets/2027/landing-banner-3.webp";
import LandingBanner4 from "../../assets/2027/landing-banner-4.webp";
import Footer from "../../components/2027/Footer";

import Anne from "../../assets/2027/anne.webp";
import Rector from "../../assets/2027/rector.webp";

import { ELEMENT_PADDING } from "../../constants/SIZES";

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
            <SignupButton link="https://forms.cloud.microsoft/r/yjxvJVyPPS" />
            <Typography
              sx={{
                color: COLOURS.white,
                fontSize: { xs: "12pt", md: "14pt" },
              }}
            >
              30 January 2027 | Ridge View Residential College
            </Typography>
          </Stack>
        </Grow>
      </Box>

      <Box sx={{paddingBlock: ELEMENT_PADDING, paddingInline: "10%"}}>
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

      <Box sx={{ backgroundColor: COLOURS.lightPurple, paddingBlock: ELEMENT_PADDING, paddingInline: "10%" }}>
        <Stack spacing={4}>
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

      <Box
        id="keynote"
        sx={{
          backgroundColor: COLOURS.brandTeal,
          paddingInline: "10%",
          paddingBlock: { xs: "28px", md: "40px" },
        }}
      >
        <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
          <Stack spacing={{ xs: 3, md: 4 }}>
            <Typography
              variant="h4"
              sx={{
                color: COLOURS.white,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Keynote Speaker
            </Typography>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 4, md: 6 }}
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Stack spacing={1.5} sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "18pt", md: "24pt" },
                    color: COLOURS.brandYellow,
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Anne Langourieux
                </Typography>

                <Stack spacing={0.5}>
                  <Typography
                    sx={{
                      fontSize: { xs: "12pt", md: "14pt" },
                      color: COLOURS.white,
                      textAlign: "left",
                      fontWeight: "500",
                    }}
                  >
                    Founding Member & Leader, The Matcha Initiative | Co-Founder, AlterCOP Singapore
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    fontSize: "16pt",
                    color: COLOURS.white,
                    textAlign: "justify",
                    paddingTop: "8px",
                  }}
                >
                  <b>Dr. Anne Langourieux</b> is a seasoned professional with over two 
                  decades of experience living and working across Asia. Her career spans 
                  two distinct yet complementary fields: the digital and e-commerce industry, 
                  and the humanitarian non-governmental sector, a dual background that 
                  informs her deep commitment to purpose-driven leadership. As Founding Member and Leader of {" "}
                  <a
                    href="https://www.thematchainitiative.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: COLOURS.white, fontWeight: "bold" }}
                  >
                    The Matcha Initiative
                  </a>, 
                  Anne bridges the worlds of business and social impact. The initiative brings together 
                  volunteers who generously contribute their expertise, experience, and personal 
                  journeys towards sustainability, creating a platform where professional knowledge 
                  meets meaningful community action. Anne is also the Co-Founder of {" "}
                  <a
                    href="https://www.altercop.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: COLOURS.white, fontWeight: "bold" }}
                  >
                    Altercop Singapore
                  </a>
                  , a cooperative initiative designed to foster alternative economic models rooted in 
                  solidarity, collaboration, and shared value. Through Altercop, she works to promote 
                  cooperative principles within the Singapore community, supporting individuals and 
                  organisations seeking to build more equitable and sustainable ways of working and 
                  doing business.
                </Typography>
              </Stack>

              <Box
                sx={{
                  width: { xs: "100%", md: "auto" },
                  display: "flex",
                  justifyContent: "center",
                  pt: { md: 1 },
                }}
              >
                <Box
                  component="img"
                  src={Anne}
                  alt="Keynote Speaker"
                  sx={{
                    width: { xs: "100%", sm: "280px", md: "320px" },
                    height: "auto",
                    aspectRatio: "4 / 5",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            </Stack>
          </Stack>
        </Grow>
      </Box>

      <Box
        id="guest-of-honour"
        sx={{
          backgroundColor: COLOURS.lightPurple,
          paddingInline: "10%",
          paddingBlock: ELEMENT_PADDING,
        }}
      >
        <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
          <Stack
            spacing={{ xs: 3, md: 4 }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ color: COLOURS.brandPurple, fontWeight: "bold" }}
            >
              Guest of Honour
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 3, md: 6 }}
              alignItems="center"
            >
              <Box
                component="img"
                src={Rector}
                alt="Guest of Honour"
                sx={{
                  width: { xs: "100%", sm: "280px", md: "320px" },
                  height: "auto",
                  aspectRatio: "5 / 6",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <Stack
                spacing={1.5}
                alignItems="flex-end"
                sx={{ flex: 1 }}
              >
              <Typography
                textAlign="right"
                sx={{
                  color: COLOURS.brandTeal,
                  fontSize: { xs: "18pt", md: "24pt" },
                  fontWeight: "bold",
                }}
              >
                Dr Noeleen Heyzer
              </Typography>
              <Typography sx={{ color: COLOURS.brandPurple, fontSize: { xs: "12pt", md: "14pt" }, textAlign: "right" }}>
                NUS Pro-Chancellor | Rector of Ridge View Residential College
                <br />
                Former UN Under-Secretary-General
              </Typography>
              <Typography sx={{ color: COLOURS.black, fontSize: "16pt", textAlign: "justify" }}>
                It is an immense honour to invite Dr. Noeleen Heyzer as our Guest of Honour for the RVRC Symposium 2027. 
                Dr. Heyzer is a distinguished social scientist, diplomat, and the Pro-Chancellor of the National 
                University of Singapore (NUS), as well as the Rector of Ridge View Residential College (RVRC). 
                Dr. Heyzer served as the United Nations Under-Secretary-General and Executive Secretary 
                of the UN Economic and Social Commission for Asia and the Pacific (ESCAP). During her tenure, 
                she was the highest-ranking Singaporean in the UN system, and subsequently served as 
                the UN Special Envoy on Myanmar from 2021 to 2023. She led the United Nations Development Fund for Women 
                (UNIFEM) for over a decade, playing an instrumental role in establishing UN Women to ensure 
                a permanent institutional voice for women at the highest global decision-making tables. 
                In recognition of her lifelong advocacy for peace, justice, and the empowerment of women, 
                she was nominated for the Nobel Peace Prize in 2005. 
              </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grow>
      </Box>

      <ProgrammeHighlights title="Programme" events={programmeEvents} />

      <PastSymposia />

      <Footer />
    </Stack>
  );
};

export default Landing;
