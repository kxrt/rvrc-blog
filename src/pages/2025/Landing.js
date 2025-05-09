import React from "react";
import { Box, Grow, Stack, Typography } from "@mui/material";

// import SignupButton from "../../components/SignupButton";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import PastSymposia from "../../components/PastSymposia";
import { programmeEvents } from "../../constants/2025/ProgrammeEvents";

import LandingBanner1 from "../../assets/2024/landing-banner-1.jpg";
import Footer from "../../components/Footer";

const Landing = () => {
  return (
    <Stack spacing={0}>
      <Box
        component="div"
        sx={{
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={LandingBanner1}
          sx={{
            display: "block", // Ensures no extra space below the image
            width: "100%",
            height: "auto",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to top, rgb(0,0,0,1), rgb(0,0,0,0) 80%)",
            pointerEvents: "none", // Ensures the gradient layer doesn’t block interactions
          }}
        />
        <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
          <Typography
            variant="h1"
            sx={{
              position: "absolute",
              bottom: { xs: 0, md: "32px" },
              width: "80%",
              mx: "10%",
              color: "white",
              fontSize: { xs: "24pt", md: "50pt" },
              fontWeight: "bold",
            }}
          >
            RVRC Symposium 2025
          </Typography>
        </Grow>
      </Box>

      <Stack
        direction="column"
        spacing={4}
        sx={{
          paddingTop: { xs: "32px", md: "0" },
          paddingBottom: "32px",
          px: "10%",
          background: "black",
          alignItems: "center",
        }}
      >
        <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "16pt", md: "18pt" },
              maxWidth: "500px",
            }}
          >
            Empowering youth to shape a sustainable and equitable future
            together
          </Typography>
        </Grow>
        {/* <SignupButton link="https://tinyurl.com/RVRCSymposium2025" /> */}
      </Stack>

      <Box py="20px" px="10%">
        <p style={{ fontSize: "16pt" }}>
          The Ridge View Residential College (RVRC) Symposium 2025{" "}
          <b style={{ color: "#1d9077" }}>
            ‘Living and Learning for a Shared Future’
          </b>{" "}
          was held on 8 February 2025. The student-led symposium was a dynamic
          showcase of exemplary student projects and the empowering tapestry of
          co-curricular activities at our College. This event was designed as a
          platform for networking, reflection, and mutual learning, focusing on
          the crucial themes of sustainability education and workplace readiness
          by garnering a diverse audience of 200 students, faculty members,
          industry collaborators and community partners.
        </p>

        <p style={{ fontSize: "16pt" }}>
          We were honoured to have{" "}
          <a href="/keynote" style={{ color: "#592693", fontWeight: "bold" }}>
            Mr. Preston Wong
          </a>{" "}
          as our Keynote Speaker. We believe that his unique story as an
          innovator of solutions for environmental, economic and social
          sustainability issues serves as a powerful inspiration for our
          participants.
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
          <p style={{ fontSize: "16pt", color: "white" }}>
            First crafted by the organising committee for the RVRC Symposium
            2024, the theme highlights how RVRC’s adoption of experiential
            learning pedagogies and extension to the world as a classroom
            encourages students to tackle complex socio-environmental issues by
            engaging directly with community stakeholders and driving the
            implementation of novel ideas for meaningful impact. The symposium
            enables the College to scale the impact of student projects through
            sharing of best practices and capacity building, enabling students
            to strive towards building a shared future that is more sustainable
            and equitable for all.
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
        This event was made possible through the generous support of the Mrs Lee
        Choon Guan Trust Fund.
      </p>

      <PastSymposia />

      <Footer />
    </Stack>
  );
};

export default Landing;
