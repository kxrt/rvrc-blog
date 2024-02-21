import React from "react";
import {
  AutoAwesomeMosaic,
  Campaign,
  EmojiEvents,
  EmojiPeople,
  Groups,
  HowToReg,
  Restaurant,
} from "@mui/icons-material";
import Timeline from "@mui/lab/Timeline";
import { Typography } from "@mui/material";

import TimelineEvent from "../../landing/TimelineEvent";

const events = [
  {
    time: "9:40 am",
    titles: ["Registration Opens"],
    locations: ["Atrium (Level 3, RVRC Block G)"],
    icon: <HowToReg />,
    iconBackgroundColor: "",
  },
  {
    time: "10:00 am",
    titles: ["Welcome Remarks by College Master"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <Campaign />,
    iconBackgroundColor: "#592693",
  },
  {
    time: "10:10 am",
    titles: ["Opening Keynote by Guest of Honour"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <Campaign />,
    iconBackgroundColor: "",
  },
  {
    time: "10:30 am",
    titles: ["Refreshments & interaction with Guest of Honour"],
    locations: ["Atrium (Level 3, RVRC Block G)"],
    icon: <AutoAwesomeMosaic />,
    iconBackgroundColor: "#592693",
  },
  {
    time: "11:10 am",
    titles: ["Thematic Thread 1 (Oral Presentations)"],
    locations: ["MPR 1 (Level 3, RVRC Block G)"],
    icon: <Groups />,
    iconBackgroundColor: "",
  },
  {
    time: "11:10 am",
    titles: ["Thematic Thread 2 (Oral Presentations)"],
    locations: ["MPR 2 (Level 3, RVRC Block G)"],
    icon: <Groups />,
    iconBackgroundColor: "#592693",
  },
  {
    time: "12:30 pm",
    titles: ["Closing Remarks & Symposium Awards"],
    locations: ["MPR 1 (Level 3, RVRC Block G)"],
    icon: <EmojiEvents />,
    iconBackgroundColor: "",
  },
  {
    time: "1:00 pm",
    titles: ["Networking Lunch"],
    locations: ["Master's Lounge (Level 3, RVRC Block G)"],
    icon: <Restaurant />,
    iconBackgroundColor: "#592693",
  },
  {
    time: "2:00 pm",
    titles: ["Symposium Closes"],
    locations: [],
    icon: <EmojiPeople />,
    iconBackgroundColor: "",
  },
];

const ProgrammeHighlights = () => {
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
        {events.map((event) => (
          <TimelineEvent
            time={event.time}
            titles={event.titles}
            locations={event.locations}
            icon={event.icon}
            iconBackgroundColor={event.iconBackgroundColor}
          />
        ))}
      </Timeline>
    </>
  );
};

export default ProgrammeHighlights;
