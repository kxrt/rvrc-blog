import React from "react";
import { Box, Typography } from "@mui/material";

const SpeakerBiography = ({ name, title, biography, image, isAlignedLeft }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: isAlignedLeft ? "row" : "row-reverse",
          },
          padding: "20px",
          boxShadow: 1,
          borderRadius: 2,
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0px 12px 24px rgba(0,0,0,0.12)",
            backgroundColor: "#f4f9f8",
          },
        }}
      >
        {image && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={image}
              alt={name}
              style={{ width: "175px", height: "250px", objectFit: "cover" }}
            />
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: { xs: "center", sm: isAlignedLeft ? "left" : "right" },
            marginLeft: { xs: "0px", sm: isAlignedLeft ? "20px" : "0px" },
            marginRight: { xs: "0px", sm: isAlignedLeft ? "0px" : "20px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18pt", md: "24pt" },
              fontFamily: "Jost",
              color: "#1d9077",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12pt", md: "16pt" },
              fontFamily: "Jost",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "10pt", md: "14pt" },
              fontFamily: "Jost",
            }}
          >
            {biography}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SpeakerBiography;
