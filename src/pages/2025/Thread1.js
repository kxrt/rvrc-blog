import React from "react";
import { Box, Grow, Stack, Typography } from "@mui/material";

import Footer from "../../components/Footer";
import Title from "../../components/Title";
import Thread1Image from "../../assets/2025/thread-1.jpeg";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import ProjectCard from "../../components/ProjectCard";
import {
  thread1MPR1Projects,
  thread1MPR2Projects,
} from "../../constants/2025/Speakers";
import {
  thread1MPR1Events,
  thread1MPR2Events,
} from "../../constants/2025/ProgrammeEvents";

const Thread1 = () => {
  return (
    <Stack spacing={0}>
      <Title title="Thread 1: Edu-venture" />
      <Box component="img" src={Thread1Image} sx={{ width: "100%" }} />
      <Stack
        spacing={4}
        sx={{
          backgroundColor: "#008080",
          paddingInline: "10%",
          paddingBlock: "20px",
        }}
      >
        <Stack spacing={1}>
          <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
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
          </Grow>
          <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
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
          </Grow>
        </Stack>
        <Grow
          in
          timeout={1000}
          style={{ transformOrigin: "center bottom", transitionDelay: "250ms" }}
        >
          <Typography sx={{ fontSize: { md: "16pt" }, color: "white" }}>
            Focused on academic learning at RVRC, presentations in this thread
            demonstrated how the RVRC Programme's courses enable students to
            hone their skills in navigating a dynamic and increasingly complex
            world. The thread also featured experiential learning beyond the
            classroom, such as partnering with external organizations,
            empowering students to identify real-world issues and effect
            meaningful change. Students showcased the learning process and
            successful application of skills like critical thinking and creative
            problem-solving.
          </Typography>
        </Grow>
        <Grow
          in
          timeout={1000}
          style={{ transformOrigin: "center bottom", transitionDelay: "250ms" }}
        >
          <Typography sx={{ fontSize: { md: "16pt" }, color: "white" }}>
            Thread 1 was hosted separately in MPR 1 and 2. Presentations in{" "}
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
            were from the RVC Cultures and Connections pillar and the RVN
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
            were from the RVSS Singapore Studies pillar and the RVX Critique and
            Expression pillar.
          </Typography>
        </Grow>
      </Stack>

      <div id="MPR1"></div>
      <ProgrammeHighlights
        title="Thread 1 Programme"
        subtitle="MPR 1 (Level 3, RVRC Block G)"
        events={thread1MPR1Events}
      />

      <Stack
        direction={{ xs: "column", lg: "row" }}
        spacing={2}
        justifyContent="center"
        sx={{ paddingInline: "10%" }}
      >
        {thread1MPR1Projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subtitle={project.course}
            presenters={project.presenters}
            abstract={project.abstract}
          />
        ))}
      </Stack>

      <div id="MPR2"></div>
      <ProgrammeHighlights
        subtitle="MPR 2 (Level 3, RVRC Block G)"
        events={thread1MPR2Events}
      />

      <Stack
        direction={{ xs: "column", lg: "row" }}
        spacing={2}
        justifyContent="center"
        sx={{ paddingInline: "10%", marginBottom: "24px" }}
      >
        {thread1MPR2Projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subtitle={project.course}
            presenters={project.presenters}
            abstract={project.abstract}
          />
        ))}
      </Stack>

      <Footer />
    </Stack>
  );
};

export default Thread1;
