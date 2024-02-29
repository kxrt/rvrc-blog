import React from "react";

import { Box, Typography } from "@mui/material";

import { EmojiEventsOutlined } from "@mui/icons-material";

const AwardCard = ({
  thread,
  award,
  topic,
  explanation,
  presentedBy,
  course,
}) => {
  return (
    <Box
      sx={{
        paddingInline: "32px",
        marginInline: "28px",
        border: "1px solid #592693",
        paddingBlock: "20px",
        marginBottom: "20px",
        bgcolor: "#fcfcfc",
        minHeight: "300px",
        maxHeight: "320px",
        minWidth: "290px",
        maxWidth: "290px",
        borderRadius: "16px",
        boxShadow: "1px 2px 15px 1px rgba(89,38,147,0.2)",
      }}
    >
      <Typography sx={{ color: "#1d9077", marginBottom: "10px" }}>
        <EmojiEventsOutlined fontSize="large" />
      </Typography>
      <Typography color="text.secondary">{thread}</Typography>
      <Typography sx={{ fontSize: "14pt" }}>{award}</Typography>
      <Typography
        sx={{
          fontSize: "14pt",
          fontWeight: "bold",
          marginBlock: "16px",
        }}
      >
        {topic}
      </Typography>
      {explanation && (
        <Typography sx={{ fontSize: "12pt", marginBlock: "16px" }}>
          {explanation}
        </Typography>
      )}
      {presentedBy && (
        <Typography sx={{ fontSize: "12pt", marginBlock: "16px" }}>
          <i>{presentedBy}</i>
        </Typography>
      )}
      {course && (
        <Typography sx={{ fontSize: "12pt", marginBlock: "16px" }}>
          <b>Course:</b> {course}
        </Typography>
      )}
    </Box>
  );
};

export default AwardCard;
