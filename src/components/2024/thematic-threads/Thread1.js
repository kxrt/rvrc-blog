import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ProjectCard from "../../ProjectCard";

const projectGaiaProjects = [
  {
    title: "Reducing Food Waste in RVRC",
    presenters: [
      "Beatrice Chen Sung Ting",
      "Daniel Christopher Chan",
      "Higashi Shion",
      "Ryan Lim Guan Quan",
    ],
    abstract:
      "The project looks into the leftover food that is discarded after meal times in RVRC dining hall, and how it can be reduced.",
  },
  {
    title: "ReseRVe your Food",
    presenters: [
      "Lee Seng Kitt",
      "Sourick Paul",
      "Tay Qi Ping, Natalyn",
      "Wynnie Chia",
    ],
    abstract:
      "The project looks into possible improvements to be made to the current existing food reservation system in order to help caterers better estimate how much food to produce per day.",
  },
  {
    title: "Searching for the Secrets to Sustainable Local Farming",
    presenters: [
      "Kuek Hanyang",
      "Lisa Lim Yu Qi",
      "Li Yuxuan",
      "Lee Xi Zhe",
      "Tan Xuan Zheng",
    ],
    abstract:
      "The project investigates the tension and complexities of sustainability across its different aspects through a visit to Bollywood Farm which is lauded as sustainable.",
  },
];

const projectIrisProjects = [
  {
    title: "Gender Modification and Language in the Handmaid's Tale",
    presenters: ["Arya Muthukumar"],
    abstract:
      "The project looks into how the use of language to identify and in determining the treatment of women through the lens of speculative fiction.",
  },
  {
    title: "Breaking the Glass Ceiling",
    presenters: [
      "He Xing Hua",
      "Loh Hui Xin Cheryl",
      "Pakhale Advay Dilip",
      "Teo Siew Guan, George",
    ],
    abstract:
      "The project looks into research to better understand where does misogyny stem from and what are good practices corporate entities can adopt in order to address it.",
  },
  {
    title: "Food as a Light of Hope",
    presenters: [
      "Maisarah Binti Ishak",
      "Anselm Pius Long",
      "Wong Jun Sheng",
      "Callanta Rye Nelle Faminialagao",
      "Ng Jun Heng",
    ],
    abstract:
      "The project investigates the challenges and opportunities afforded to differently-abled individuals through the medium of food and how corporations can empower and help them achieve financial independence.",
  },
];

const Thread1 = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#e1d0f5" }}>
        <div style={{ paddingInline: "10%", paddingBlock: "20px" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "26pt",
              fontFamily: "Jost",
              color: "#592693",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Thread 1: Edu-venture
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "16pt",
              fontFamily: "Jost",
              textAlign: "center",
            }}
          >
            Fostering a learning ecosystem that scales impact
          </Typography>
          <p style={{ fontSize: "16pt" }}>
            This thread revolves around RVRC’s academic life and showcases how
            learning activities and engagement opportunities can broaden
            horizons, diversify skills, and enable students in an ever-changing
            complex world. It features out-of-classroom learning and work with
            external partners that enable students to achieve a demonstrable
            impact on identified issues in the real-world, while honing their
            workplace readiness skills. Presentations highlight students’
            learning process and application of complex skills such as
            reflective and critical thinking.
          </p>
        </div>
      </Box>
      <Box sx={{ paddingInline: "10%", paddingBottom: "20px" }}>
        <p style={{ fontSize: "16pt", fontWeight: "bold" }}>Project Gaia</p>
        <p style={{ fontSize: "16pt" }}>
          Multipurpose Room 2 | 11:15am - 12:00pm
        </p>
        <p style={{ fontSize: "16pt" }}>
          Named after the Greek primordial Earth goddess, Project Gaia focuses
          on environmental stewardship and conservation.
        </p>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={2}
          justifyContent="center"
        >
          {projectGaiaProjects.map((project) => (
            <ProjectCard
              title={project.title}
              presenters={project.presenters}
              abstract={project.abstract}
            />
          ))}
        </Stack>
        <p style={{ fontSize: "16pt", fontWeight: "bold" }}>Project Iris</p>
        <p style={{ fontSize: "16pt" }}>
          Multipurpose Room 2 | 12:00pm - 12:45pm
        </p>
        <p style={{ fontSize: "16pt" }}>
          As the bridge of communication between divinity and mortals, Iris, the
          Greek goddess of rainbows, symbolizes crucial elements in fostering
          inclusivity. Project Iris focuses on inclusivity and social
          engagement.
        </p>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={2}
          justifyContent="center"
        >
          {projectIrisProjects.map((project) => (
            <ProjectCard
              title={project.title}
              presenters={project.presenters}
              abstract={project.abstract}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Thread1;
