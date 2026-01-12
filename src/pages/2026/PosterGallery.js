import React from "react";
import { Box, Breadcrumbs, Grid, Grow, Link, Stack, Typography } from "@mui/material";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
// import PosterGalleryImage from "../../assets/2025/poster-gallery.webp";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import ProjectCard from "../../components/ProjectCard";
import { posterGalleryEvents } from "../../constants/2026/ProgrammeEvents";
import { thread1Posters, thread2Posters, thread2FundingPosters } from "../../constants/2026/Posters";

const PosterGallery = () => {
  return (
    <Stack spacing={0}>
      <Title title="Poster Gallery" />
      {/* <Box component="img" src={PosterGalleryImage} sx={{ width: "100%" }} /> */}
      
      <Stack
        spacing={4}
        sx={{
          backgroundColor: "#008080",
          paddingInline: "10%",
          paddingBlock: "20px",
        }}
      >
        <Grow
          in
          timeout={1000}
          style={{ transformOrigin: "center bottom"}}
        > 
          <Stack spacing={1}>
            <Typography sx={{ fontSize: { md: "16pt" }, color: "white", textAlign: "justify" }}>
              Featuring posters from Threads 1 and 2, the Poster Gallery showcases both 
              academic learning and student-led initiatives. Attendees are able to explore 
              the projects at their own pace, engage with the materials and interact directly 
              with the presenters, fostering deeper understanding and personalised insights 
              into each initiative.
            </Typography>
            <Typography sx={{ fontSize: { md: "16pt" }, color: "white", textAlign: "justify" }}>
              Alongside the Poster Gallery, Interactive Booths hosted by our community partners, 
              WWF Singapore, NTUC Youth, MINDS and SG Cares, provide attendees with opportunities 
              to learn about their work in advancing environmental conservation, social inclusion 
              and youth advocacy. These parallel sessions are held within a shared space during the 
              tea break, creating a vibrant environment that encouraged meaningful learning, dialogue 
              and networking among participants.
            </Typography>
          </Stack>
        </Grow>
      </Stack>
      
      <ProgrammeHighlights
        title="Poster Gallery Programme"
        events={posterGalleryEvents}
      />

      <Stack gap={2} marginBottom={4}>
        <Stack id="thread1-posters" gap={2}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#1d9077",
              marginTop: 2,
            }}
          >
            Thread 1: Edu-venture Posters
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginX: "10%" }}>
            <Breadcrumbs>
              <Typography sx={{ color: 'text.primary' }}>Thread 1 Edu-venture</Typography>
              <Link underline="hover" color="inherit" href="#thread2-posters">
                Thread 2 Adventure
              </Link>
              <Link underline="hover" color="inherit" href="#thread2-funding-posters">
                Thread 2 MAC3 Funded
              </Link>
            </Breadcrumbs>
          </Box>
          <Grid container 
            spacing={2} 
            justifyContent="center" 
            sx={{ paddingInline: "10%" }}>
            {thread1Posters.map((project) => (
              <Grid item sm={12} md={6} lg={4}
                key={project.title}
                sx={{ display: "flex", width: "100%" }}>
                <ProjectCard
                  title={project.title}
                  subtitle={project.course}
                  presenters={project.presenters}
                  abstract={project.abstract}
                />
              </Grid>
            ))}
          </Grid> 
        </Stack>
        <Stack id="thread2-posters" gap={2}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#1d9077",
              marginTop: 2,
            }}
          >
            Thread 2: Adventure Posters
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginX: "10%" }}>
            <Breadcrumbs>
              <Link underline="hover" color="inherit" href="#thread1-posters">
                Thread 1 Edu-venture
              </Link>
              <Typography sx={{ color: 'text.primary' }}>Thread 2 Adventure</Typography>
              <Link underline="hover" color="inherit" href="#thread2-funding-posters">
                Thread 2 MAC3 Funded
              </Link>
            </Breadcrumbs>
          </Box>
          <Grid container 
            spacing={2} 
            justifyContent="center" 
            sx={{ paddingInline: "10%" }}>
            {thread2Posters.map((project) => (
              <Grid item sm={12} md={6} lg={4}
                sx={{ display: "flex", width: "100%"}}
                key={project.title}>
                <ProjectCard
                  title={project.title}
                  presenters={project.presenters}
                  abstract={project.abstract}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Stack id="thread2-funding-posters" gap={2}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#1d9077",
              marginTop: 2,
            }}
          >
            Thread 2: Recipients of MAC3 Funding
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginX: "10%" }}>
            <Breadcrumbs>
              <Link underline="hover" color="inherit" href="#thread1-posters">
                Thread 1 Edu-venture
              </Link>
              <Link underline="hover" color="inherit" href="#thread2-posters">
                Thread 2 Adventure
              </Link>
              <Typography sx={{ color: 'text.primary' }}>Thread 2 MAC3 Funded</Typography>
            </Breadcrumbs>
          </Box>
          <Box sx={{ 
            marginX: "8%", 
            marginBottom: "10px",
            }}
          >
            <Stack spacing={1} 
              sx={{
                padding: "20px",
                backgroundColor: "#e1d4f0ff",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <Typography variant="h7" sx={{ textAlign: "justify" }}>
                <span
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
                >
                  MAC3 Impact Philanthropies Singapore,
                </span>
                {" "}co-founded by Dr. Antoine Firmenich and Mr. Christopher Louis Franck, is a 
                giving and impact organization that finances 
                activities and investments to achieve large-scale, sustainable change. It 
                supports Early Childhood, Health & Education (EHE), and Environmental 
                initiatives, including ocean-focused work, and collaborates with donors and 
                partners to scale proven, systemic solutions across countries in Asia.
              </Typography>
              <Typography variant="h7" sx={{ textAlign: "justify" }}>
                Since 2018, RVRC has received MAC3 funding for a range of impactful sustainability 
                initiatives and expeditions co-facilitated by RVRC Fellows and students, 
                including the Kayak and Clean Programme, Intertidal Walk and Clean, Heritage Walks, 
                RVForestore's Chestnut Reforestation Programme, and the Leopard Cat Quest. RVRC 
                records its deep gratitude to MAC3 and its donors, whose support continues to 
                enable sustained sustainability education and meaningful environmental impact 
                learning for our students.
              </Typography>
            </Stack>
          </Box>
          <Grid container 
            spacing={2} 
            justifyContent="center" 
            sx={{ paddingInline: "10%" }}>
            {thread2FundingPosters.map((project) => (
              <Grid item sm={12} md={6} lg={4}
                key={project.title}
                sx={{ display: "flex", width: "100%" }}>
                <ProjectCard
                  title={project.title}
                  abstract={project.abstract}
                />
              </Grid>
            ))}
          </Grid> 
        </Stack>
      </Stack>

      <Footer />
    </Stack>
  );
};

export default PosterGallery;
