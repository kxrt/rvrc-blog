import React from "react";
import { Box, Typography } from "@mui/material";

const SpeakerBiographyItem = ({
  name,
  title,
  biography,
  image,
  isAlignedLeft,
}) => {
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
        }}
      >
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
            style={{
              fontSize: { xs: "12pt", md: "16pt" },
              fontFamily: "Jost",
            }}
          >
            {title}
          </Typography>
          <p>{biography}</p>
        </Box>
      </Box>
    </>
  );
};

export default SpeakerBiographyItem;
