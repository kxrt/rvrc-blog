import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const TeamMemberCard = ({ image, name, position }) => {
  return (
    <Stack spacing={1} direction="column" 
      sx={{ 
        width: "100%",
        borderRadius: "8px",
       }}>
      <Box
        component="img"
        src={image}
        sx={{
          width: "100%",
          maxWidth: "300px",
          height: "100%",
          alignSelf: "center",
          objectFit: "cover",
          borderRadius: "8px",
          "&:hover": {
            boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
          },
        }}
      />
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
