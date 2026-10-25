import React from "react";
import { Grow, Stack, Typography } from "@mui/material";

import Footer from "../../components/2027/Footer";
import Title from "../../components/2027/Title";
// import Thread1Image from "../../assets/2026/thread-1.webp";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import {
  thread2Events,
} from "../../constants/2027/ProgrammeEvents";
import { COLOURS } from "../../constants/Colours";

const Thread2 = () => {
  return (
    <Stack spacing={0}>
      <Title title="Thread 2: In-Synergy" />
      {/* <Box component="img" src={Thread1Image} sx={{ width: "100%" }} /> */}
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
              In-Synergy
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
              Co-Creating Inclusive Futures
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
              Highlighting how heritage and culture shape communities in a rapidly changing world, 
              this thread explores the importance of developing soft skills and cultural awareness 
              in building a more equitable shared future. Through conversations on cultural expressions 
              and preservation, this thread aims to foster meaningful interactions between people and 
              places while deepening understanding of the diverse perspectives across ASEAN. The thread 
              also showcases student workplace readiness through internships and projects with industry 
              and community partners, where students develop professional, communication, and intercultural 
              competencies while applying their learning to real-world contexts. 
            </Typography>
          </Stack>
        </Grow>
      </Stack>

      <div id="MPR2" style={{ marginBottom: "32px" }}>
        <ProgrammeHighlights
          title="Thread 2 Presentations"
          subtitle="MPR 2 (Level 3, RVRC Block G)"
          events={thread2Events}
        />

        <Stack component="ul" spacing={2} sx={{ listStyle: "none", m: 0, p: 0, px: "10%" }}>
          <Typography variant="h5" sx={{ mx: "5%", fontWeight: "bold" }}>
            Oral Presentations
          </Typography>
          {thread2Events.filter(e => e.abstract) // ignore breaks in timeline
          .map((project) => (
            <Stack component="li" key={project.titles[0]} spacing={0.5}>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "#592693" }}>
                {project.titles[0]}
              </Typography>
              <Typography color="text.secondary">
                {project.locations.join(", ")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.course}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </div>

      <Footer />
    </Stack>
  );
};

export default Thread2;
