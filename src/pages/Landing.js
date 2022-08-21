import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import rvrc_bg from "../assets/rvrc_bg.png";
import links from "../components/PastLinks";
import ProgrammeHighlights from "../components/Timeline";
import { Lightbulb } from "@mui/icons-material";

const points = [
  "Share their ideas, reflections, and learning from the RVRCP Modules.",
  "Engage in academic conversations about their RVRC learning experience.",
  "Demonstrate, through projects relevant to real-world contexts, how the “world as our classroom” impacted their learning.",
  "Identify relevant opportunities to apply classroom learning to impact the real-world.",
];

const Landing = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#592693", padding: { xs: "5%", md: "1.5%" } }}>
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontSize: { xs: "24pt", md: "40pt" },
            fontFamily: "Jost",
          }}
        >
          RVRC Symposium 2022
        </Typography>
      </Box>
      <img
        src={rvrc_bg}
        alt="rvrc-bg"
        style={{
          maxWidth: "100%",
          // marginTop: "32px",
          borderRadius: "0px",
        }}
      />
      <p style={{ fontSize: "16pt", paddingInline: "10%" }}>
        The RVRC Symposium 2022 ‘Learning to Learn: The World as our Classroom’
        will showcase exemplary student work nominated from the RVRCP Academic
        Year 21/22. It will also provide a learner-centric platform for students
        to:
      </p>
      {/* <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
        }}
      >
        {points.map((point, index) => (
          <>
            <Box
              sx={{
                bgcolor: "#e1d0f5",
                borderRadius: "16px",
                minWidth: "250px",
                maxWidth: "250px",
                minHeight: "250px",
                maxHeight: "250px",
                marginInline: "20px",
              }}
            >
              <Lightbulb sx={{ paddingTop: "20px" }} />
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "14pt",
                  padding: "15px",
                }}
              >
                {point}
              </Typography>
            </Box>
          </>
        ))}
      </Box> */}
      <Box
        sx={{ bgcolor: "#e1d0f5", marginInline: "6%", borderRadius: "16px" }}
      >
        <p
          style={{
            textAlign: "left",
            padding: "32px",
            fontSize: "16pt",
          }}
        >
          1. Share their <b>ideas, reflections, and learning</b> from the RVRCP
          Modules. <br />
          2. Engage in <b>academic conversations</b> about their RVRC learning
          experience. <br />
          3. Demonstrate, through projects relevant to{" "}
          <b>real-world contexts</b>, how the “world as our classroom” impacted
          their learning. <br />
          4. Identify relevant opportunities to apply classroom learning to{" "}
          <b>impact the real-world</b>. <br />
          <br />
          View their project abstracts <Link to="/abstracts">here</Link>.
        </p>
      </Box>
      <p style={{ fontSize: "16pt", paddingInline: "10%" }}>
        We are greatly honoured that{" "}
        <Link to="/keynote">Mr Veerappan Swaminathan</Link> will grace the
        occasion with a keynote address. Given his work to innovate for
        environmental, economic and social sustainaility, he is the ideal
        speaker for the opening keynote for RVRC Symposium 2022.
      </p>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "20pt", md: "26pt" },
          fontFamily: "Jost",
          paddingTop: "2%",
          color: "#1d9077",
          textAlign: "center",
          paddingInline: "8%",
        }}
      >
        Symposium Theme
      </Typography>
      <Box
        sx={{
          bgcolor: "#e1d0f5",
          marginInline: "6%",
          borderRadius: "16px",
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "16pt", md: "18pt" },
            fontFamily: "Jost",
            paddingTop: "32px",
            // color: "#592693",
            textAlign: "center",
          }}
        >
          "Learning to Learn: The world as our classroom"
        </Typography>
        <Typography
          sx={{
            color: "black",
            paddingTop: "16px",
            paddingInline: "32px",
            paddingBottom: "32px",
            fontFamily: "Jost",
            fontSize: "16pt",
            textAlign: "justify",
          }}
        >
          The working world today is in constant flux, defined by emerging
          business models, new technologies, and evolving consumer behaviour.
          The ability to acquire knowledge and skills continually is crucial to
          success in such a world. For new graduates, this rapid pace of change
          can be especially demanding. Hence, students must cultivate the
          aspiration to be effective learners; they must ‘Learn to learn’ by
          acquiring diverse capabilities, participating in meaningful growth
          opportunities, and become willing to experiment with new ideas. The
          symposium theme explores how the RVRCP fosters these attributes by
          presenting the world as a classroom, with a focus on authentic
          out-of-classroom and experiential learning.
        </Typography>
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "20pt", md: "26pt" },
          fontFamily: "Jost",
          paddingTop: "2%",
          // color: "#592693",
          color: "#1d9077",
        }}
      >
        Programme Highlights
      </Typography>
      <ProgrammeHighlights />
      <Box>
        <Button
          variant="contained"
          onClick={() =>
            window.open("https://forms.office.com/r/AMJWqM5Dkt", "_black")
          }
          sx={{
            width: "250px",
            height: "75px",
            fontSize: "18px",
            backgroundColor: "#1d9077",
            color: "white",
            borderRadius: "16px",
            marginInline: "auto",
            marginTop: "20px",
          }}
        >
          Click here to RSVP
        </Button>
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "20pt", md: "26pt" },
          fontFamily: "Jost",
          paddingTop: { xs: "3%", md: "3%" },
          // color: "#592693",
          color: "#1d9077",
        }}
      >
        Links to Past Symposia
      </Typography>
      <Box
        sx={{
          marginBlock: "1%",
          marginBottom: "3%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {links.map((item) => (
          <Box
            sx={{
              padding: "2%",
              margin: "1%",
              border: "0.5px solid gray",
              width: "150px",
              borderRadius: "12px",
            }}
          >
            <Typography sx={{ fontFamily: "Jost" }}>
              <a
                href={item.href}
                target={"_blank"}
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                {item.title}
              </a>{" "}
              <br />
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Landing;
