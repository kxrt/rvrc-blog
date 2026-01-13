import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import keynoteSpeaker from "../../assets/2026/keynote-speaker.webp";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

const KeynoteSpeaker = () => {
  return (
    <Stack spacing={2}>
      <Title title="Keynote Speaker" />
      <Box sx={{ display: { xs: "inline-block" } }}>
        <Box sx={{ display: "inline-block" }}>
          <Box component="img" src={keynoteSpeaker} alt="Keynote Speaker" sx={{ width: 250, borderRadius: "8px" }} />
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
      <Footer />
    </Stack>
  );
};

export default KeynoteSpeaker;
