import React from "react";
import { Grid, Grow, Stack, Typography } from "@mui/material";

import Footer from "../../components/2027/Footer";
import Title from "../../components/2027/Title";
// import Thread1Image from "../../assets/2026/thread-1.webp";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import ProjectCard from "../../components/ProjectCard";
import {
  thread1Events,
} from "../../constants/2027/ProgrammeEvents";
import { COLOURS } from "../../constants/Colours";

const Thread1 = () => {
  return (
    <Stack spacing={0}>
      <Title title="Thread 1: Re-Synergy" />
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
              Re-Synergy
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
              Reimagining Resilient Futures
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
              Focused on environmental sustainability in Singapore and across the region, presentations 
              in this thread explore the nexus between biodiversity conservation and sustainable development, 
              while examining how policymaking can strengthen community and environmental resilience. 
              The thread further showcases student workplace readiness through internships and industry-partnered 
              projects that provide authentic learning experiences beyond the classroom. By applying 
              their knowledge to real-world challenges, students are empowered to think critically, 
              develop professional skills, and develop their capacity to drive meaningful change in support 
              of the sustainable development goals.  
            </Typography>
          </Stack>
        </Grow>
      </Stack>

      <div id="MPR1">
        <ProgrammeHighlights
          title="Thread 1 Presentations"
          subtitle="MPR 1 (Level 3, RVRC Block G)"
          events={thread1Events}
        />

        <Grid container 
          spacing={2} 
          justifyContent="center" 
          sx={{ paddingInline: "10%" }}>
          {thread1Events.filter(e => e.abstract) // ignore breaks in timeline
          .map((project) => (
            <Grid item sm={12} md={6} lg={4}
              sx={{ display: "flex", width: "100%" }}>
              <ProjectCard
                key={project.titles[0]}
                title={project.titles[0]}
                subtitle={project.course}
                presenters={project.locations}
                abstract={project.abstract}
              />
            </Grid>
          ))}
        </Grid>
      </div>

      <Footer />
    </Stack>
  );
};

export default Thread1;
