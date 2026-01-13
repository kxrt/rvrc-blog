import React from "react";
import { Grid, Grow, Stack, Typography } from "@mui/material";

import Footer from "../../components/Footer";
import Title from "../../components/Title";
// import Thread1Image from "../../assets/2026/thread-1.webp";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import ProjectCard from "../../components/ProjectCard";
import {
  thread1MPR1Events,
  thread1MPR2Events,
} from "../../constants/2026/ProgrammeEvents";

const Thread1 = () => {
  return (
    <Stack spacing={0}>
      <Title title="Thread 1: Edu-venture" />
      {/* <Box component="img" src={Thread1Image} sx={{ width: "100%" }} /> */}
      <Stack
        spacing={2}
        sx={{
          backgroundColor: "#008080",
          paddingInline: "10%",
          paddingBlock: "20px",
        }}
      >
        <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
          <Stack spacing={1}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Edu-venture
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { md: "16pt" },
                color: "white",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              Cultivating Skills through Experiential Learning
            </Typography>
          </Stack>
        </Grow>
        <Grow
          in
          timeout={1000}
          style={{ transformOrigin: "center bottom", transitionDelay: "250ms" }}
        >
          <Stack spacing={1}>
            <Typography sx={{ fontSize: { md: "16pt" }, color: "white", textAlign: "justify" }}>
              Focused on academic learning at RVRC, presentations in this thread demonstrate 
              how RVRC Programme's (RVRCP) courses enable students to hone their skills and equip 
              them with professional competencies to navigate a dynamic and increasingly 
              complex world.
            </Typography>
            <Typography sx={{ fontSize: { md: "16pt" }, color: "white", textAlign: "justify"}}>
              Thread 1 will be hosted separately in MPR 1 and 2. Presentations in{" "}
              <a
                href="#MPR1"
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                MPR 1
              </a>{" "}
              are from the RVC Cultures and Connections pillar and the RVN 
              Communities and Engagement pillar. Presentations in{" "}
              <a
                href="#MPR2"
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                MPR 2
              </a>{" "}
              are from the RVSS Singapore Studies pillar and the RVX Critique and Expression pillar.
            </Typography>
            <Typography sx={{ fontSize: { md: "16pt" }, color: "white", textAlign: "justify" }}>
              In addition to poster and oral presentations, interactive sessions are introduced to 
              better reflect the experiential and participatory nature of RVRCP course projects, 
              many of which involve showcases and peer teaching. This addition will offer a more 
              authentic and comprehensive representation of the diversity within RVRCP courses. 
              These interactive sessions will be held at the end of the programme in each MPR.
            </Typography>
          </Stack>
        </Grow>
      </Stack>

      <div id="MPR1">
        <ProgrammeHighlights
          title="RVC and RVN Projects"
          subtitle="MPR 1 (Level 3, RVRC Block G)"
          events={thread1MPR1Events}
        />

        <Grid container 
          spacing={2} 
          justifyContent="center" 
          sx={{ paddingInline: "10%" }}>
          {thread1MPR1Events.filter(e => e.abstract) // ignore breaks in timeline
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

      <div id="MPR2" style={{ marginBottom: "32px" }}>
        <ProgrammeHighlights
          title="RVSS and RVX Projects"
          subtitle="MPR 2 (Level 3, RVRC Block G)"
          events={thread1MPR2Events}
        />

        <Grid container 
          spacing={2} 
          justifyContent="center" 
          sx={{ paddingInline: "10%" }}>
          {thread1MPR2Events.filter(e => e.abstract) // ignore breaks in timeline
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
