import React from "react";
import { Box, Typography } from "@mui/material";
import guestOfHonour from "../../assets/2024/guest-of-honour.jpg";

const GuestOfHonour = () => {
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
          Guest of Honour
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "inline-block" } }}>
        <Box sx={{ display: "inline-block" }}>
          <img
            src={guestOfHonour}
            alt="Guest of Honour"
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
            Dr. Adrian Loo
          </Typography>
          <Typography
            style={{
              fontSize: { xs: "12pt", md: "16pt" },
              paddingInline: "7%",
              paddingBottom: "0px",
              fontFamily: "Jost",
            }}
          >
            Educator, Conservation Biologist, Wildlife Ecologist
          </Typography>

          <div>
            <p
              style={{
                fontSize: "14pt",
                paddingInline: "7%",
                textAlign: "justify",
              }}
            >
              <b>Dr. Adrian Loo</b> graduated with a PhD from the National
              University of Singapore (NUS) studying palms in the montane
              forests of Peninsular Malaysia and was a post-doctoral fellow in
              Kew Gardens and then the National University of Singapore
              researching population genetics and biodiversity. He was formerly
              NPark's Group Director for Wildlife Management and Senior Director
              for Community Projects where he led a team in the management of
              wildlife in Singapore, in particular, to reduce human-wildlife
              conflicts through science-based management, education and
              community stewardship. He also led efforts in fighting illegal
              wildlife trade, such as the illegal trafficking of ivory, pangolin
              scales and wild animals. As Senior Director for Community
              Projects, he led engagement with stakeholders in the One Million
              Trees movement in Singapore to plant more native trees to restore
              habitats, fight climate change through carbon sequestration,
              enhance well-being, and utilise trees as Nature-based Solutions
              for coastal protection and species conservation. He continues to
              work with the Centre for Wildlife Forensics at NParks, recently
              set up to combat illegal wildlife trade through DNA and other
              molecular technologies. He is also the mentor for the CITES Global
              Youth Network which engages youth in ensuring the protection of
              endangered species from unsustainable trade and illegal wildlife
              trade. Adrian also lectures part-time in NUS on an MSc course in
              Environmental Science.
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

export default GuestOfHonour;
