import React from "react";
import { Box, Stack, Typography } from "@mui/material";
// import keynoteSpeaker from "../../assets/2026/___.jpg";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

const KeynoteSpeaker = () => {
  return (
    <Stack spacing={2}>
      <Title title="Keynote Speaker" />
      <Box sx={{ display: { xs: "inline-block" } }}>
        {/* <Box sx={{ display: "inline-block" }}>
          <img src={keynoteSpeaker} alt="Keynote Speaker" width={250} />
        </Box> */}
        <Box sx={{ textAlign: { xs: "center" } }}>
          <Typography
            sx={{
              fontSize: { xs: "18pt", md: "24pt" },
              paddingInline: "7%",
              paddingTop: "18px",
              color: "#1d9077",
            }}
          >
            Name
          </Typography>
          <Typography
            style={{
              fontSize: { xs: "12pt", md: "16pt" },
              paddingInline: "7%",
              paddingBottom: "0px",
            }}
          >
            Role, Company
          </Typography>

          <div>
            <p
              style={{
                fontSize: "14pt",
                paddingInline: "7%",
                textAlign: "justify",
              }}
            >
              <b>Name</b> is the (Role) of{" "}
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                style={{ color: "#592693", fontWeight: "bold" }}
              >
                link
              </a>
              , description...
            </p>
          </div>
        </Box>
        {/* <Box
          sx={{
            display: "inline-block",
            maxWidth: "600px",
            paddingInline: "7%",
          }}
        >
          <img src={keynoteSpeaker2} alt="Keynote Speaker 2" width="100%" />
        </Box> */}
      </Box>
      <Footer />
    </Stack>
  );
};

export default KeynoteSpeaker;
