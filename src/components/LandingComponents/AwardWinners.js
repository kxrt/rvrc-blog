import React from "react";
import { Box, Typography } from "@mui/material";
import { EmojiEventsOutlined } from "@mui/icons-material";

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

const AwardWinners = () => {
  return (
    <>
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
                key={index}
                sx={{
                  paddingInline: "28px",
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
                  boxShadow: "1px 2px 15px 1px rgba(89,38,147,0.2)",
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
    </>
  );
};

export default AwardWinners;
