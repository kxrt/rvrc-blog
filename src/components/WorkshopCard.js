import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { COLOURS } from "../constants/Colours";

const WorkshopCard = ({ partner, title, description, image }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      alignItems: "center",
      width: "100%",
      p: 2,
      "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0px 12px 24px rgba(0,0,0,0.12)",
        backgroundColor: "#f4f9f8",
      },
    }}
  >
    <Box
      component="img"
      src={image}
      alt={`${partner} logo`}
      sx={{ width: 120, height: 120, objectFit: "contain", flexShrink: 0, mr: { sm: 2 } }}
    />
    <CardContent sx={{ p: "12px !important", flexGrow: 1 }}>
      <Typography variant="h5" sx={{ color: COLOURS.brandTeal, fontWeight: "bold" }}>
        {partner}
      </Typography>
      <Typography
        variant="h5"
        sx={{ color: COLOURS.brandPurple, fontWeight: "bold", lineHeight: 1.2, mb: 1 }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: { xs: "10pt", md: "12pt", lg: "14pt" }, fontFamily: "Jost" }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default WorkshopCard;
