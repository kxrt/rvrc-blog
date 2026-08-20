import React from "react";
import { Box, Grow, Stack, Typography } from "@mui/material";

import Title from "../../components/2027/Title";
import Footer from "../../components/2027/Footer";
// import Thread2Image from "../../assets/2026/thread-2.webp";
import SpeakerBiography from "../../components/SpeakerBiography";
import communityPartners from "../../constants/2027/ExternalPartners";
import { COLOURS } from "../../constants/Colours";

import keynoteSpeaker from "../../assets/2026/keynote-speaker.webp";
import keynoteSpeaker2 from "../../assets/2026/keynote-speaker-2.webp";

const ExternalPartners = () => {
  return (
    <Stack spacing={0}>
      <Title title="External Partners" />
      {/* <Box component="img" src={Thread2Image} sx={{ width: "100%" }} /> */}
      <Stack
        spacing={2}
        sx={{
          backgroundColor: COLOURS.brandTeal,
          paddingInline: "10%",
          paddingBlock: "20px",
        }}
      >
        <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
          <Stack spacing={1}>
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
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { md: "16pt" },
                color: COLOURS.white,
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              Mr Name Here
            </Typography>
          </Stack>
        </Grow>
        <Grow
          in
          timeout={1000}
          style={{ transformOrigin: "center bottom", transitionDelay: "250ms" }}
        >
          <Stack spacing={1}>
          <Typography sx={{ fontSize: { md: "16pt" }, color: COLOURS.white, textAlign: "justify" }}>
            We are pleased to invite Mr Name Here, a distinguished leader in environmental innovation, 
            as our Keynote Speaker for the RVRC Symposium 2027. His extensive experience and commitment 
            to sustainability have made significant contributions to the field, and we are honoured 
            to have him share his insights with our community.
          </Typography>
          </Stack>
        </Grow>
      </Stack>
      <Stack spacing={2}>
        <Box sx={{ display: { xs: "inline-block", md: "block" } }}>
            <Box sx={{ display: "inline-block", height: "250px", marginTop: "20px" }}>
            <Box component="img" src={keynoteSpeaker} alt="Keynote Speaker" sx={{ height: "100%", borderRadius: "8px" }} />
            <Box component="img" src={keynoteSpeaker2} alt="Keynote Speaker 2" sx={{ height: "100%", marginLeft: "20px", borderRadius: "8px" }} />
            </Box>
            <Box sx={{ textAlign: { xs: "center" } }}>
            <Typography
                sx={{
                fontSize: { xs: "18pt", md: "24pt" },
                paddingInline: "7%",
                paddingTop: "18px",
                color: "#1d9077",
                }}
            >
                Mr. Sean Lam
            </Typography>
            <Typography
                style={{
                fontSize: { xs: "12pt", md: "16pt" },
                paddingInline: "7%",
                paddingBottom: "0px",
                }}
            >
                Founder and CEO, Ecoworks
            </Typography>

            <div>
                <p
                style={{
                    fontSize: "14pt",
                    paddingInline: "7%",
                    textAlign: "justify",
                }}
                >
                <b>Mr. Sean Lam</b> is the Founder and CEO of{" "}
                <a
                    href="https://www.ecoworks.sg/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#592693", fontWeight: "bold" }}
                >
                    Ecoworks
                </a>
                , a social enterprise in Singapore that tackles single-use plastic 
                waste by providing a network of automated refill stations for household 
                cleaning products. His mission is to promote a packaging-free lifestyle 
                and eliminate millions of plastic bottles annually. He is also recognised 
                as a Philip Yeo Innovation Fellow (a "MAD COW" - Make A Difference, 
                Change Our World) for his innovative environmental solutions and is 
                active as a community leader and Volunteer Police Officer.
                </p>
            </div>
            </Box>
        </Box>
    </Stack>
      <Stack
        spacing={2}
        sx={{
          backgroundColor: COLOURS.brandTeal,
          paddingInline: "10%",
          paddingBlock: "20px",
        }}
      >
        <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
          <Stack spacing={1}>
            <Typography
              variant="h4"
              sx={{
                color: COLOURS.white,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Community Partners
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { md: "16pt" },
                color: COLOURS.white,
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              Cultivating Curiosity and Stewardship
            </Typography>
          </Stack>
        </Grow>
        <Grow
          in
          timeout={1000}
          style={{ transformOrigin: "center bottom", transitionDelay: "250ms" }}
        >
          <Stack spacing={1}>
          <Typography sx={{ fontSize: { md: "16pt" }, color: COLOURS.white, textAlign: "justify" }}>
            Many thanks to the Partners of the RVRC Symposium 2027, WWF Singapore, NTUC Youth, MINDS and SG Cares. 
            Our community partners will provide Interactive Booths to bring attendees opportunities 
            to learn about their work in advancing environmental conservation, social inclusion 
            and youth advocacy. These parallel sessions are held within a shared space during the 
            tea break, creating a vibrant environment that encouraged meaningful learning, dialogue 
            and networking among participants.
          </Typography>
          </Stack>
        </Grow>
      </Stack>

      <Stack gap={2} sx={{ paddingInline: "10%", marginBottom: 4, marginTop: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: COLOURS.brandPurple,
          }}
        >
          Community Partners
        </Typography>

        {communityPartners.map((partner) => (
          <SpeakerBiography
            key={partner.name}
            name={partner.name}
            title={partner.title}
            biography={partner.biography}
            image={partner.image}
            isAlignedLeft={true}
          />
        ))}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default ExternalPartners;
