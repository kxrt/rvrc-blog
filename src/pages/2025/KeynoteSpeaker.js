import React from "react";
import { Box, Typography } from "@mui/material";
import keynoteSpeaker from "../../assets/2025/keynote-speaker.jpeg";
import Title from "../../components/Title";

const KeynoteSpeaker = () => {
  return (
    <>
      <Title title="Keynote Speaker" />
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
              color: "#1d9077",
            }}
          >
            Mr. Preston Wong
          </Typography>
          <Typography
            style={{
              fontSize: { xs: "12pt", md: "16pt" },
              paddingInline: "7%",
              paddingBottom: "0px",
            }}
          >
            CEO and Cofounder, treatsure
          </Typography>

          <div>
            <p
              style={{
                fontSize: "14pt",
                paddingInline: "7%",
                textAlign: "justify",
              }}
            >
              <b>Mr. Preston Wong</b> is the CEO and Cofounder of{" "}
              <a
                href="https://www.treatsure.co/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#592693", fontWeight: "bold" }}
              >
                treatsure
              </a>
              , Singapore's leading mobile app linking consumers to businesses
              with surplus and sustainable food since 2017. Prior to his
              entrepreneurship journey, Preston graduated from NUS Faculty of
              Law and NUS Business School. He is currently also an Adjunct
              Faculty for Sustainability Law and Policy at SMU Yong Pung How
              School of Law and has been featured in various media and
              conferences on his sustainability perspectives.
            </p>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default KeynoteSpeaker;
