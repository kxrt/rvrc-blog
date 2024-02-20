import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  AutoAwesomeMosaic,
  Campaign,
  EmojiEvents,
  EmojiPeople,
  Groups,
  HowToReg,
  Restaurant,
} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const ProgrammeHighlights = () => {
  return (
    <Timeline position="alternate">
      {/* Right */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontFamily={"Jost"}
          fontSize={"16px"}
        >
          9:40 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <HowToReg />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontSize={"18px"}
            fontWeight={"bold"}
            fontFamily={"Jost"}
          >
            Registration Opens TKLEJKST
          </Typography>
          <Typography fontFamily={"Jost"}>
            Atrium (Level 3, RVRC Block G)
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Left */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          fontFamily={"Jost"}
          fontSize={"16px"}
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#592693" }}>
            <Campaign />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontSize={"18px"}
            fontWeight={"bold"}
            fontFamily={"Jost"}
          >
            Welcome Remarks by College Master
          </Typography>
          <Typography fontFamily={"Jost"}>
            MPR 1 & 2 (Level 3, RVRC Block G)
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Right */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontFamily={"Jost"}
          fontSize={"16px"}
        >
          10:10 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <Campaign />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontSize={"18px"}
            fontWeight={"bold"}
            fontFamily={"Jost"}
          >
            Opening Keynote by Guest of Honour
          </Typography>
          <Typography fontFamily={"Jost"}>
            MPR 1 & 2 (Level 3, RVRC Block G)
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Left */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          fontFamily={"Jost"}
          fontSize={"16px"}
        >
          10:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#592693" }}>
            <AutoAwesomeMosaic />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontSize={"18px"}
            fontWeight={"bold"}
            fontFamily={"Jost"}
          >
            Refreshments & interaction with Guest of Honour
          </Typography>
          <Typography fontFamily={"Jost"}>
            Atrium (Level 3, RVRC Block G)
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Right */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontFamily={"Jost"}
          fontSize={"16px"}
        >
          11:10 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <Groups />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontSize={"18px"}
            fontWeight={"bold"}
            fontFamily={"Jost"}
          >
            Thematic Thread 1 (Oral Presentations)
          </Typography>
          <Typography fontFamily={"Jost"}>
            MPR 1 (Level 3, RVRC Block G)
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Left */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          fontFamily={"Jost"}
          fontSize={"16px"}
        >
          11:10 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#592693" }}>
            <Groups />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontSize={"18px"}
            fontWeight={"bold"}
            fontFamily={"Jost"}
          >
            Thematic Thread 2 (Oral Presentations)
          </Typography>
          <Typography fontFamily={"Jost"}>
            MPR 2 (Level 3, RVRC Block G)
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Right */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontFamily={"Jost"}
          fontSize={"16px"}
        >
          12:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <EmojiEvents />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontSize={"18px"}
            fontWeight={"bold"}
            fontFamily={"Jost"}
          >
            Closing Remarks & Symposium Awards
          </Typography>
          <Typography fontFamily={"Jost"}>
            MPR 1 (Level 3, RVRC Block G)
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Left */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          fontFamily={"Jost"}
          fontSize={"16px"}
        >
          1:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#592693" }}>
            <Restaurant />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontSize={"18px"}
            fontWeight={"bold"}
            fontFamily={"Jost"}
          >
            Networking Lunch
          </Typography>
          <Typography fontFamily={"Jost"}>
            Masters Lounge (Level 3, RVRC Block G)
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Right */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontFamily={"Jost"}
          fontSize={"16px"}
        >
          2:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <EmojiPeople />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontSize={"18px"}
            fontWeight={"bold"}
            fontFamily={"Jost"}
          >
            Symposium Closes
          </Typography>
          {/* <Typography fontFamily={"Jost"}>RVRC</Typography> */}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default ProgrammeHighlights;
