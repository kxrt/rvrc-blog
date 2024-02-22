import React from "react";
import { Box, Card, Divider, Typography } from "@mui/material";

const ProjectCard = ({ title, presenters, abstract }) => {
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
        <Box sx={{ padding: "5px" }}>
          <Typography sx={{}}>{abstract}</Typography>
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
