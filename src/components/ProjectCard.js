import React from "react";
import { Box, Card, Divider, Stack, Typography } from "@mui/material";

const ProjectCard = ({ title, subtitle, presenters, abstract }) => {
  const presentersString = presenters ? presenters.join(", "): "";

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Jost",
          fontSize: "16pt",
          "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
        }}
      >
        <Box
          sx={{
            color: "#592693",
            fontWeight: "bold",
            padding: "5px",
            marginX: "10px",
          }}
        >
          {title}
        </Box>
        {subtitle && (
          <Box>
            <Typography variant="subtitle1">{subtitle}</Typography>
          </Box>
        )}
        <Box sx={{ padding: "10px", marginX: "10px", flexGrow: 1 }}>
          <Typography sx={{ textAlign: "justify" }}>{abstract}</Typography>
        </Box>
        {presenters && (
          <Stack sx={{ marginTop: "auto" }}>
            <Divider variant="middle" />
            <Box sx={{ padding: "5px", marginX: "10px" }}>
              <Typography color="text.secondary" sx={{}}>
                {presentersString}
              </Typography>
            </Box>
          </Stack>
        )}
      </Card>
    </>
  );
};

export default ProjectCard;
