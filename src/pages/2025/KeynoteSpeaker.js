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
            CEO & Cofounder, treatsure
          </Typography>

          <div>
            <p
              style={{
                fontSize: "14pt",
                paddingInline: "7%",
                textAlign: "justify",
              }}
            >
              <b>Mr. Preston Wong</b> is the CEO & Cofounder of{" "}
              <a
                href="https://www.treatsure.co/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#592693", fontWeight: "bold" }}
              >
                treatsure
              </a>
              , Singapore's leading app platform linking consumers to surplus
              food offered at hotels, grocers and retailers. Trained in law,
              accountancy and environmental management at NUS, Preston is also
              an adjunct lecturer for sustainability law at Yale-NUS College and
              SMU. In 2023, Preston was conferred the inaugural Leader of the
              Year Award at the UOB-Business Times Sustainability Impact Awards.
              He has also been appointed an ASEAN Youth Fellow and a Youth Panel
              Lead to provide sustainability policy recommendations for the
              Ministry of Sustainability and the Environment.
            </p>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default KeynoteSpeaker;
