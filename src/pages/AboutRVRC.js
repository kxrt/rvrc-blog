import React from "react";
import { Box, Typography } from "@mui/material";
import rvrc_walk from "../assets/rvrc_walk_for_rice.jpg";
import rvrc_outdoor from "../assets/rvrc_outdoor_learning.png";

const AboutRVRC = () => {
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
          About RVRC
        </Typography>
      </Box>
      <img
        src={rvrc_walk}
        alt="rvrc-bg"
        style={{
          maxWidth: "100%",
        }}
      />
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "20pt", md: "26pt" },
          fontFamily: "Jost",
          paddingTop: "20px",
          color: "#1d9077",
          paddingInline: "7%",
        }}
      >
        RVRC Programme
      </Typography>
      <div>
        <p
          style={{
            fontSize: "14pt",
            paddingInline: "7%",
            textAlign: "justify",
          }}
        >
          RVRC offers a two-year programme, aligned with the enhanced NUS
          General Education Curriculum. RVRC modules are map to four of the six
          General Education pillars, namely: Community and Engagement, Critique
          and Expression, Cultures and Connections, and Singapore Studies. All
          modules will be taught for one semester and carry 4 Modular Credits
          each.
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
          RVRC students have the choice to select one module from each of the
          four pillars. Over two years, students will be expected to read one
          module from each of the four pillars to fulfil the requirements of the
          RVRC Programme and achieve certification. The curriculum for the RVRC
          Programme will be worth 16 Modular Credits, and RVRC students
          completing the two-year RVRC Programme will receive this recognition
          on their official NUS transcript as well.
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
          Students have to read the remaining two General Education pillars of
          Data Literacy and Digital Literacy outside the RVRC Programme, as
          offered by the university or their faculty. More information on how
          the RVRC curriculum fulfils further graduation requirements may be
          specified by your faculty.
        </p>
      </div>
      <Box>
        <img
          src={
            "https://rvrc.nus.edu.sg/wp-content/uploads/2021/06/RVRC-GE-MODULES.jpg"
          }
          alt="RVRC"
          width={"100%"}
        />
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "20pt", md: "26pt" },
            fontFamily: "Jost",
            paddingTop: "20px",
            color: "#1d9077",
            paddingInline: "7%",
          }}
        >
          Outdoor Learning
        </Typography>
        <div>
          <p
            style={{
              fontSize: "14pt",
              paddingTop: "20px",
              paddingInline: "7%",
              paddingBottom: "30px",
              textAlign: "justify",
              margin: 0,
            }}
          >
            RVRC has a strong focus on outdoor education based on the foundation
            of experiential learning, with a strong focus on environmental
            stewardship. This focus is embedded in our academic modules, while
            also being the foundation for our RVRC experiential learning
            activities offered beyond the academic curriculum. All RVRC students
            are encouraged to participate in a range of outdoor learning
            experiences to engage with various causes in order to diversify
            their learning journey and to become active members of the society.
            We oﬀer our students a range of local and overseas opportunities to
            learn and participate in. <br /> <br /> Students can choose to
            champion local conservation programmes, or join overseas expeditions
            to countries such as Malaysia, Nepal, and India.
          </p>
        </div>
        <img src={rvrc_outdoor} alt="RVRC" width={"100%"} />
      </Box>
      {/* https://rvrc.nus.edu.sg/rvrc-programme/ */}
    </>
  );
};

export default AboutRVRC;
