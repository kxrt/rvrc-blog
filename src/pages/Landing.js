import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Zoom } from "@mui/material";
import {
  ForestOutlined,
  LibraryBooksOutlined,
  SchoolOutlined,
  TungstenOutlined,
  EmojiEventsOutlined,
} from "@mui/icons-material";
import { useInView } from "react-intersection-observer";

import links from "../components/PastLinks";
import ProgrammeHighlights from "../components/Timeline";
import RVRCStepper from "../components/SwipeableTextMobileStepper";
import learn from "../assets/learn.png";

const points = [
  {
    desc: "Share their ideas, reflections, and learning from the RVRCP Modules.",
    icon: <TungstenOutlined fontSize="60pt" />,
  },
  {
    desc: "Engage in academic conversations about their RVRC learning experience.",
    icon: <LibraryBooksOutlined fontSize="large" />,
  },
  {
    desc: "Demonstrate, through projects relevant to real-world contexts, how the “world as our classroom” impacted their learning.",
    icon: <SchoolOutlined fontSize="large" />,
  },
  {
    desc: "Identify relevant opportunities to apply classroom learning to impact the real-world.",
    icon: <ForestOutlined fontSize="large" />,
  },
];

const winners = [
  {
    topic: "Re-envisioning Labrador Park in the Greater Southern Waterfront",
    presentedBy: "Charis Chow Hui Ning, Chloe Sau, Khin Hnin Su, Tan Yanni",
    module: "RVSS1000 Exploring Sense of Place",
  },
  {
    topic:
      "On Objectivism and the Fall of Rapture: A Critical Inquiry of Rational Egoism and Negative Libertarianism",
    presentedBy: "Jonathan Derryl Kartjito",
    module: "RVX1001 Science Fiction and Society",
  },
  {
    topic:
      "Usage of medical jargon in clinician and patient communication and Minimal English as the solution",
    presentedBy: "Yoon Su Lin",
    module:
      "RVX1002 ‘What do you mean?’ Meaning and communication in intercultural contexts",
  },
];

const Landing = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  return (
    <>
      <Box sx={{ bgcolor: "#592693", padding: { xs: "3%", md: "1%" } }}>
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
      <p style={{ fontSize: "16pt", paddingInline: "10%" }}>
        The Ridge View Residential College (RVRC) Symposium 2022{" "}
        <b style={{ color: "#1d9077" }}>
          ‘Learning to Learn: The World as our Classroom’
        </b>{" "}
        will showcase exemplary student work nominated from the new Ridge View
        Residential College Programme (RVRCP) launched in Academic Year 21/22.
        It will also provide a learner-centric platform for students to:
      </p>
      <Box ref={ref}></Box>
      <Zoom in={inView} style={{ transitionDelay: "100ms" }}>
        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {points.map((point, index) => (
            <>
              <Box
                key={index}
                sx={{
                  bgcolor: "#e1d0f5",
                  borderRadius: "16px",
                  minWidth: "250px",
                  maxWidth: "250px",
                  minHeight: "250px",
                  maxHeight: "250px",
                  marginInline: "20px",
                  marginBlock: "10px",
                  boxShadow: "1px 2px 15px 1px rgba(89,38,147,0.15)",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "190pt",
                    fontWeight: "bold",
                    color: "rgba(89,38,147,0.08)",
                    position: "absolute",
                    right: "50px",
                    bottom: "-70px",
                  }}
                >
                  {index + 1}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "30pt",
                    paddingTop: "20px",
                    color: "#592693",
                  }}
                >
                  {point.icon}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "14pt",
                    paddingBottom: "15px",
                    paddingInline: "15px",
                    paddingTop: "5px",
                  }}
                >
                  {point.desc}
                </Typography>
              </Box>
            </>
          ))}
        </Box>
      </Zoom>
      <p style={{ fontSize: "16pt", paddingInline: "10%" }}>
        Project abstracts can be viewed <Link to="/interactive">here</Link>.
      </p>
      <p style={{ fontSize: "16pt", paddingInline: "10%" }}>
        We are honoured that NUS Alumnus{" "}
        <Link to="/keynote">Mr Veerappan Swaminathan</Link> will grace the
        occasion with a keynote address. We believe that his unique story that
        began as an NUS undergraduate, and continues as an innovator of
        solutions for environmental, economic and social sustainability issues,
        is ideally placed to inspire RVRC students.
      </p>
      <Box sx={{ backgroundColor: "#e1d0f5" }}>
        <Box component="img" src={learn} sx={{ width: "100%" }} />
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "20pt", md: "26pt" },
            fontFamily: "Jost",
            paddingTop: "30px",
            color: "#592693",
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
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "16pt", md: "18pt" },
              fontFamily: "Jost",
              paddingTop: "32px",
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
              fontSize: { xs: "14pt", md: "16pt" },
              textAlign: "justify",
            }}
          >
            The working world today is in constant flux, defined by emerging
            business models, new technologies, and evolving consumer behaviour.
            The ability to acquire knowledge and skills continually is crucial
            to success in such a world. For new graduates, this rapid pace of
            change can be especially demanding. Hence, students must cultivate
            the aspiration to be effective learners; they must ‘Learn to learn’
            by acquiring diverse capabilities, participating in meaningful
            growth opportunities, and become willing to experiment with new
            ideas. The symposium theme explores how the RVRCP fosters these
            attributes by presenting the world as a classroom, with a focus on
            authentic out-of-classroom and experiential learning.
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "20pt", md: "26pt" },
          fontFamily: "Jost",
          paddingTop: "30px",
          color: "#1d9077",
        }}
      >
        Programme Highlights
      </Typography>
      <ProgrammeHighlights />
      {/* Sign up form removed as event has ended. */}
      {/* <Box>
        <Button
          disableElevation
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
            marginBottom: "20px",
          }}
        >
          Click here to RSVP
        </Button>
      </Box> */}
      <Box sx={{ backgroundColor: "#e1d0f5" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "20pt", md: "26pt" },
            fontFamily: "Jost",
            paddingTop: { xs: "30px", md: "30px" },
            color: "#592693",
          }}
        >
          Symposium Award Winners
        </Typography>
        <Box
          sx={{
            bgcolor: "#e1d0f5",
            marginInline: "6%",
            borderRadius: "16px",
            paddingBottom: "32px",
          }}
        >
          <Typography
            sx={{
              color: "black",
              paddingTop: "16px",
              paddingInline: "32px",
              paddingBottom: "32px",
              fontFamily: "Jost",
              fontSize: { xs: "14pt", md: "16pt" },
              textAlign: "justify",
            }}
          >
            The symposium audience, comprising RVRC students, staff, and invited
            NUS partners, also had the opportunity to nominate the best
            presentation from each thematic thread. After shortlisting the top
            scorers, certificates of merit were awarded to the following three
            presentations:
          </Typography>
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {winners.map((winner, index) => (
              <Box
                sx={{
                  paddingInline: "32px",
                  marginInline: "32px",
                  border: "1px solid #592693",
                  paddingBlock: "32px",
                  marginBottom: "20px",
                  bgcolor: "#fcfcfc",
                  minHeight: "300px",
                  maxHeight: "300px",
                  minWidth: "290px",
                  maxWidth: "290px",
                  borderRadius: "16px",
                  position: "relative",
                  boxShadow: "1px 2px 15px 1px rgba(89,38,147,0.25)",
                }}
              >
                <Typography sx={{ color: "#1d9077", marginBottom: "10px" }}>
                  <EmojiEventsOutlined fontSize="large" />
                </Typography>
                <Typography sx={{ fontSize: "14pt" }}>
                  {winner.topic}
                </Typography>
                <Typography sx={{ fontSize: "12pt", marginBlock: "16px" }}>
                  <i>{winner.presentedBy}</i>
                </Typography>
                <Typography sx={{ fontSize: "12pt", marginBlock: "16px" }}>
                  <b>Module:</b> {winner.module}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "20pt", md: "26pt" },
            fontFamily: "Jost",
            paddingTop: { xs: "30px", md: "30px" },
            color: "#1d9077",
          }}
        >
          Links to Past Symposia
        </Typography>
        <Box
          sx={{
            paddingBlock: "20px",
            paddingBottom: "20px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {links.map((item) => (
            <Box
              key={item.title}
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
      </Box>
    </>
  );
};

export default Landing;
