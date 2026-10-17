import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProjectCard from "../ProjectCard";

const PosterTypeAccordion = ({ id, title, projects, expanded, onChange }) => (
  <Accordion
    disableGutters
    expanded={expanded}
    onChange={onChange}
    sx={{
      mx: "5%",
      borderRadius: "8px !important",
      "&:before": { display: "none" },
    }}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${id}-content`}
      id={`${id}-header`}
    >
      <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails id={`${id}-content`}>
      <Grid container spacing={2} justifyContent="center">
        {projects.map((project) => (
          <Grid
            item
            sm={12}
            md={6}
            lg={4}
            key={project.title}
            sx={{ display: "flex", width: "100%" }}
          >
            <ProjectCard
              title={project.title}
              subtitle={project.course}
              presenters={project.presenters}
              abstract={project.abstract}
            />
          </Grid>
        ))}
      </Grid>
    </AccordionDetails>
  </Accordion>
);

export default PosterTypeAccordion;
