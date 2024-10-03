import React from "react";
import { Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";

import TimelineEvent from "./TimelineEvent";

const ProgrammeHighlights = ({ events }) => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "20pt", md: "26pt" },
          fontFamily: "Jost",
          paddingTop: "30px",
          color: "#1d9077",
        }}
      >
        Programme Highlights
      </Typography>
      <Timeline position="alternate">
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            time={event.time}
            titles={event.titles}
            locations={event.locations}
            icon={event.icon}
            iconBackgroundColor={index % 2 === 0 ? "" : "#592693"}
          />
        ))}
      </Timeline>
    </>
  );
};

export default ProgrammeHighlights;
