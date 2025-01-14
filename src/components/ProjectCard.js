import React from "react";
import { Box, Card, Divider, Typography } from "@mui/material";

const ProjectCard = ({ title, subtitle, presenters, abstract }) => {
  const presentersString = presenters.join(", ");

  return (
    <>
      <Card
        sx={{
          flex: 1,
          fontFamily: "Jost",
          fontSize: "16pt",
        }}
      >
        <Box
          sx={{
            color: "#592693",
            fontWeight: "bold",
            padding: "5px",
          }}
        >
          {title}
        </Box>
        {subtitle && (
          <Box>
            <Typography variant="subtitle1">{subtitle}</Typography>
          </Box>
        )}
        <Box sx={{ padding: "5px" }}>
          <Typography>{abstract}</Typography>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ padding: "5px" }}>
          <Typography color="text.secondary" sx={{}}>
            {presentersString}
          </Typography>
        </Box>
      </Card>
    </>
  );
};

export default ProjectCard;
