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

const posters = [
  {
    title: "A Film Critique of Farewell My Concubine",
    presenters: ["Bai Zirui"],
    abstract:
      "This final project for RVX1003: Adaptation to Screen is a film critique of Farewell My Concubine, adapted from Lilian Lee's novel with the same name. While the plotline of the film does not deviate much from the novel, the reflection on the destructive impacts of the Cultural Revolution by director Chen Kaige is ubiquitous in the film. This paper discusses the changes made to the novel by Chen as a fifth-generation filmmaker to highlight the historical background of the story, instead of focusing on the troubled romantic relationship between the protagonists. The paper also examines the timeliness of the film production after the opening-up of mainland China.",
  },
  {
    title: "A Note to Migrant Workers",
    presenters: ["Tan Xue Qing"],
    abstract:
      "As part of RVC1001, we were assigned a photo essay to examine how culture impacts social sustainability in Little India through the lens of the SDGs discussed in our coursework. Our investigation consists of 2 excursions to this vibrant neighbourhood. For our first trip, we immersed ourselves in the surroundings, observing and analysing the way of life of Little India’s visitors. For the second trip, we engaged in informal interviews with the community to better understand their perspective of Little India and gain a deeper understanding of the issues and opportunities surrounding social sustainability.",
  },
  {
    title: "Reimagining the Yellow Walkway",
    presenters: [
      "Lim Xin Quan",
      "Ng Chee Fong",
      "Michelle Lam Shiya",
      "Lim Xiu Jia",
    ],
    abstract:
      "Situated between Engineering, Information Technology, Tropical Marine Science Institute, Central Library Building and Yusof Ishak House, the yellow walkway could be a node for interactions to flow freely between different backgrounds. Targeting students and Tropical Marine Science Institute researchers, we envision the area to become a biophilic community of the yellow walkway, proposing multi-use social spaces integrated with nature and energy-efficient measures. Our team features a diverse mix of specialisations - Business (Real Estate), Computer Engineering, Quantitative Finance and Computer Science - bringing our ideas to life, presented to the National University of Singapore's University Campus Infrastructure team.",
  },
  {
    title: "Explicating Depression in Minimal English",
    presenters: ["Zoe Sol"],
    abstract:
      "This paper explores the application of minimal English in improving Singaporeans’ understanding of people with mental disabilities. Existing efforts, such as educational social media content, use language that compromises precision and unambiguity in their attempt to explain complex emotions and thoughts using simple words. Such compromise limits their effectiveness. The objective of this paper is to study how Minimal English can be used to improve both the precision and comprehensibility of language used to describe mental disabilities in these informative social media posts, using a minimal English explication of depression to demonstrate the effectiveness of this intervention. I chose to study depression as it is among the top five most common mental disabilities in Singapore. To understand the experience of depression in a holistic manner, I generated this explication with reference to both research data and descriptions shared by individuals personally experiencing depression first-hand.",
  },
  {
    title: "The Call of Nature",
    presenters: [
      "Gu Haocheng",
      "Sean Wang",
      "Ng Jie Xin",
      "Loh Shi Jie Elaine",
    ],
    abstract:
      'RVN2002 explores environmental conservation in the most pragmatic way possible. Rather than hearing about biodiversity loss through numbers on the screen, we put on our trekking shoes to really experience the essence of life in the various habitats. Seeing the empty forest fragments with invasive species and muddy rivers really drives home the point of unnatural nature destruction. We also met local indigenous guides who are highly attuned to the jungle and play a key role in navigating the complexities of effective conservation. Their sustainable practices, down-to-earth culture, and the challenges their communities face were things we could only truly emphasise after our heartwarming interactions. These experiences rekindled our connection to nature and imbued a passion to give back. "The Call of Nature" is thus a compilation of lessons learnt from our eco-tourism journey that we hope to share with other eco-tourists to improve their experience and others that follow. Amid the rising eco-tourism boom, we wanted to showcase our wonderful experiences and call others to embark on their own nature journeys.',
  },
  {
    title: "What Role does Culture Play in Economic Sustainability?",
    presenters: [
      "Edice Koh",
      "Tan Hewie",
      "Tan Xin Kai",
      "Peck Ern Hui Stephanie",
    ],
    abstract:
      "Work is one of the most essential and universal aspects of life, throughout history and civilisations. Therefore, it is crucial to note that while striving to attain meet our economic needs, our pursuit must not compromise the needs of future generations (Brundtland Report, 1987). Sustainability is often measured via the Sustainable Development Goals framework, and SDG 8 “Decent Work and Economic Growth” in particular underscores the need for inclusive and productive employment for all. Currently, according to the Sustainable Development Report 2023, Malaysia still faces significant challenges and stagnating growth for SDG 8. In East Malaysia, the region’s rich tapestry of culture could be a driving force for economic growth and opportunities for economic sustainability. Through Sabah and Sarawak, we wanted to gain a sensing on the ground how work, culture and economic sustainability interact.",
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
            This thread revolved around RVRC’s academic life and showcased how
            learning activities and engagement opportunities could broaden
            horizons, diversify skills, and enable students in an ever-changing
            complex world. It featured out-of-classroom learning and worked with
            external partners that enable students to achieve a demonstrable
            impact on identified issues in the real-world, while honing their
            workplace readiness skills. Presentations highlighted students’
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
          Named after the Greek primordial Earth goddess, Project Gaia focused
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
          inclusivity. Project Iris focused on inclusivity and social
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
        <p style={{ fontSize: "16pt", fontWeight: "bold" }}>Posters</p>
        <Stack direction={"column"} spacing={2}>
          {posters.map((project) => (
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
