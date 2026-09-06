import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const PartnerUniversityCard = ({ image, name, country }) => {
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
          width: "540px",
          height: "150px",
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
      <Typography>{country}</Typography>
    </Stack>
  );
};

export default PartnerUniversityCard;
