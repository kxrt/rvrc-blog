import React from "react";
import { Box, Typography } from "@mui/material";

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
      <Box sx={{ display: { xs: "inline-block", md: "flex" } }}>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <img
            src={
              "https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/24588/thumb_veera_profile_pic.jpg"
            }
            alt="guest speaker"
            width={250}
            style={{marginTop: "40px"}}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "18pt", md: "24pt" },
              paddingInline: "7%",
              paddingTop: "18px",
              fontFamily: "Jost",
              textAlign: "left",
            }}
          >
            Mr Veerappan Swaminathan
          </Typography>
          <Typography
            style={{
              fontSize: { xs: "12pt", md: "16pt" },
              paddingInline: "7%",
              paddingBottom: "0px",
              fontFamily: "Jost",
              textAlign: "left",
            }}
          >
            Founder and Director, Sustainable Living Lab
          </Typography>

          <div>
            <p
              style={{
                fontSize: "14pt",
                paddingInline: "7%",
                textAlign: "justify",
              }}
            >
              NUS Alumnus <b>Mr Veerappan Swaminathan</b> is the founder and
              director of{" "}
              <b>
                <a
                  href="https://www.sustainablelivinglab.org/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Sustainable Living Lab (SL2)
                </a>
              </b>
              , a consultancy which helps organisations innovate for
              environmental, economic, and social sustainability. Recognised as
              a leader of the maker movement in Singapore and Southeast Asia, he
              is also the CEO and director of{" "}
              <b>
                <a
                  href="https://edm8ker.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  edm8ker
                </a>
              </b>
              , which trains teachers to impart “maker education” to youths. He
              was awarded the NUS Outstanding Young Alumni Award in 2019, and
              the 2018 Joseph Jaworski Next Generation Foresight Asia Special
              Award.
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "14pt",
                paddingInline: "7%",
                textAlign: "justify",
              }}
            >
              Mr. Swaminathan is an ideal choice for the opening keynote, given
              the symposium theme. As an undergraduate at the NUS Faculty of
              Engineering and the University Scholar’s Programme, he pivoted
              away from a strictly academic pursuit to explore and acquire an
              education that granted him real experience, exposure, and the room
              to be creative. Aligned with RVRC’s{" "}
              <i>‘World as our classroom’</i> approach to learning and tackling
              real world problems, as a student he too worked on meaningful
              projects that directly addressed sustainability and social issues
              in Singapore and the SEA region. Hence, it is envisioned that he
              would be able to inspire students with relevant and relatable
              ideas on how they too could explore and personalise their
              individual university education.
            </p>
          </div>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src={
              "https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/24588/thumb_veera_profile_pic.jpg"
            }
            alt="guest speaker"
            width={250}
            style={{ marginRight: "45px", marginTop: "45px" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default KeynoteSpeaker;
