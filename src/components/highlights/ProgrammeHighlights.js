import React from "react";
import { Typography, Stack } from "@mui/material";
import Timeline from "@mui/lab/Timeline";

import TimelineEvent from "./TimelineEvent";

const ProgrammeHighlights = ({ title, subtitle, events }) => {
  return (
    <>
      <Stack spacing={3} py="32px">
        <Stack spacing={1}>
          {title && (
            <Typography
              variant="h4"
              sx={{
                color: "#1d9077",
              }}
            >
              {title}
            </Typography>
          )}

          {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
        </Stack>

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
      </Stack>
    </>
  );
};

export default ProgrammeHighlights;
