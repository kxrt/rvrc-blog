import React from "react";
import { Box, Typography } from "@mui/material";

import AwardCard from "../../components/2024/AwardCard";
import Title from "../../components/Title";

const popularChoiceAwardWinners = [
  {
    thread: "Thread 1",
    award: "Popular Choice Award for Best Presentation",
    topic: "ReseRVe your Food",
    presentedBy: "Wynnie Chia, Sourick Paul",
    course: "RVN2000 Engaging Communities in Sustainability",
  },
  {
    thread: "Thread 1",
    award: "Popular Choice Award for Best Poster",
    topic: "The Call of Nature",
    presentedBy: "Gu Haocheng, Ng Jie Xin, Loh Shi Jie, Elaine, Sean Wang",
    course: "RVN2002 Wild Asia: Conservation Matters",
  },
  {
    thread: "Thread 2",
    award: "Popular Choice Award for Best Speaker",
    topic: "Jeong Youngkyu",
    explanation: "RVRC Representative in the NUS Inter-College Games",
  },
];

const judgesAwardWinners = [
  {
    thread: "Thread 1",
    award: "Judge's Award for Best Presentation",
    topic: "Reducing Food Waste in RVRC",
    presentedBy:
      "Higashi Shion, Daniel Christopher Chan, Ryan Lim Guan Quan, Beatrice Chen Sung Ting",
    course: "RVN2000 Engaging Communities in Sustainability",
  },
  {
    thread: "Thread 1",
    award: "Judge's Award for Best Poster",
    topic: "A Biophilic Yellow Walkway",
    presentedBy: "Lim Xin Quan, Ng Chee Fong, Michelle Lam Shiya, Lim Xiu Jia",
    course: "RVSS1001 Imagining Wakanda: Cities for Work, Life and Play",
  },
];

const Awards = () => {
  return (
    <>
      <Title title="Symposium Awards" />

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
          Popular Choice Award
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
              textAlign: "center",
            }}
          >
            The symposium audience, comprising RVRC students, staff, and invited
            NUS partners, nominated the best presentations, posters, and
            speakers. Certificates of merit were awarded to the following
            projects:
          </Typography>
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {popularChoiceAwardWinners.map((winner) => (
              <AwardCard
                thread={winner.thread}
                award={winner.award}
                topic={winner.topic}
                explanation={winner.explanation}
                presentedBy={winner.presentedBy}
                course={winner.course}
              />
            ))}
          </Box>
        </Box>
      </Box>
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
          Judge's Award
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
              textAlign: "center",
            }}
          >
            Based on the scoring of 3 senior student judges, certificates of
            merit were awarded to the following projects:
          </Typography>
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {judgesAwardWinners.map((winner) => (
              <AwardCard
                thread={winner.thread}
                award={winner.award}
                topic={winner.topic}
                presentedBy={winner.presentedBy}
                course={winner.course}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Awards;
