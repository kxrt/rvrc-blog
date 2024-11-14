import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const TeamMemberCard = ({ image, name, position }) => {
  return (
    <Stack spacing={1} direction="column">
      <Box component="img" src={image} sx={{ width: 300 }} />
      <Typography
        sx={{
          fontSize: "16pt",
          color: "#592693",
          fontWeight: "bold",
        }}
      >
        {name}
      </Typography>
      <Typography>{position}</Typography>
    </Stack>
  );
};

export default TeamMemberCard;
