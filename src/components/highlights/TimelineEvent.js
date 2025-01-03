import * as React from "react";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { Stack, Typography } from "@mui/material";

const TimelineEvent = ({
  time,
  titles,
  locations,
  icon,
  iconBackgroundColor,
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="text.secondary"
        fontFamily={"Jost"}
        fontSize={"16px"}
      >
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot sx={{ background: iconBackgroundColor }}>
          {icon}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        {zipParallelSessions(titles, locations)}
      </TimelineContent>
    </TimelineItem>
  );
};

const zipParallelSessions = (titles, locations) =>
  titles.map((title, i) => {
    const location = locations[i];
    return (
      <Stack key={i}>
        <Typography variant="h6" fontSize="18px" fontWeight="bold">
          {title}
        </Typography>
        <Typography mb="10px">{location}</Typography>
      </Stack>
    );
  });

export default TimelineEvent;
