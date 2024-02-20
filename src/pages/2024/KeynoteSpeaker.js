import React from "react";
import { Box, Typography } from "@mui/material";
import keynoteSpeaker from "../../assets/2024/keynote-speaker.jpg";

const KeynoteSpeaker = () => {
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
          Keynote Speaker
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "inline-block" } }}>
        <Box sx={{ display: "inline-block" }}>
          <img
            src={keynoteSpeaker}
            alt="Keynote Speaker"
            width={250}
            style={{ marginTop: "40px" }}
          />
        </Box>
        <Box sx={{ textAlign: { xs: "center" } }}>
          <Typography
            sx={{
              fontSize: { xs: "18pt", md: "24pt" },
              paddingInline: "7%",
              paddingTop: "18px",
              fontFamily: "Jost",
              color: "#1d9077",
            }}
          >
            Mr. Victor Zhu
          </Typography>
          <Typography
            style={{
              fontSize: { xs: "12pt", md: "16pt" },
              paddingInline: "7%",
              paddingBottom: "0px",
              fontFamily: "Jost",
            }}
          >
            Founder and CEO, Hatch
          </Typography>

          <div>
            <p
              style={{
                fontSize: "14pt",
                paddingInline: "7%",
                textAlign: "justify",
              }}
            >
              RVRC Alumnus <b>Mr. Victor Zhu</b> is the Founder and CEO of{" "}
              <b>
                <a
                  href="https://www.hatch.sg/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#592693" }}
                >
                  Hatch
                </a>
              </b>
              , an impact-driven business with the mission to leverage digital
              as a tool for intentional impact. The business comprises two arms
              - Hatch Academy, which runs skills and employability programs in
              Digital Marketing and User Interface, User Experience (UI/UX)
              Design for learners from all walks of life, as well as Hatch
              Mediahouse, which provides a suite of digital and design services
              to help small and medium-sized businesses and non-profits
              digitalise. In his work, he brings in partnerships and resources
              to make the dreams of social innovation a reality, such as
              creating Singapore’s first digital employability program for
              out-of-school and at-risk youths, and more recently, for persons
              with disabilities.
            </p>
          </div>
          <div>
            {/* <p
              style={{
                fontSize: "14pt",
                paddingInline: "7%",
                textAlign: "justify",
              }}
            >
              Mr. Swaminathan was an ideal choice for the opening keynote, given
              the symposium theme. As an undergraduate at the NUS Faculty of
              Engineering and the University Scholar’s Programme, he pivoted
              away from a strictly academic pursuit to explore and acquire an
              education that granted him real experience, exposure, and the room
              to be creative. Aligned with RVRC’s{" "}
              <i>‘World is our classroom’</i> approach to learning and tackling
              real world problems, as a student he too worked on meaningful
              projects that directly addressed sustainability and social issues
              in Singapore and the SEA region. Hence, it was envisioned that he
              would be able to inspire students with relevant and relatable
              ideas on how they too could explore and personalise their
              individual university education.
            </p> */}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default KeynoteSpeaker;
