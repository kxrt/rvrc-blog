import * as React from "react";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import Typography from "@mui/material/Typography";

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
        <TimelineDot sx={{ bgcolor: iconBackgroundColor }}>{icon}</TimelineDot>
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
      <>
        <Typography
          variant="h6"
          component="span"
          fontSize={"18px"}
          fontWeight={"bold"}
          fontFamily={"Jost"}
        >
          {title}
        </Typography>
        <Typography fontFamily={"Jost"} marginBottom="10px">
          {location}
        </Typography>
      </>
    );
  });

export default TimelineEvent;
