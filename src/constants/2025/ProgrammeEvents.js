import {
  AutoAwesome,
  CoPresent,
  EmojiEvents,
  EmojiFoodBeverage,
  EmojiPeople,
  HowToReg,
  Lightbulb,
  Person,
  Restaurant,
} from "@mui/icons-material";

const programmeEvents = [
  {
    time: "8:30 am",
    titles: ["Registration Opens"],
    locations: ["Atrium (Level 3, RVRC Block G)"],
    icon: <HowToReg />,
  },
  {
    time: "9:00 am",
    titles: ["Symposium Introduction by Symposium Chair"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <Person />,
  },
  {
    time: "9:10 am",
    titles: ["Welcome Remarks by RVRC College Master"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <Person />,
  },
  {
    time: "9:20 am",
    titles: ["Keynote Address"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <Lightbulb />,
  },
  {
    time: "9:40 am",
    titles: ["Thematic Thread Highlights"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <AutoAwesome />,
  },
  {
    time: "10:00 am",
    titles: [
      "Interactive Booths / Poster Presentations / Networking Tea Session",
    ],
    locations: ["Atrium (Level 3, RVRC Block G)"],
    icon: <EmojiFoodBeverage />,
  },
  {
    time: "11:10 am",
    titles: ["Thread 1: Edu-venture", "Thread 2: Adventure"],
    locations: [
      "MPR 1 & 2 (Level 3, RVRC Block G)",
      "Master's Lounge (Level 3, RVRC Block G)",
    ],
    icon: <CoPresent />,
  },
  {
    time: "1:00 pm",
    titles: ["Symposium Recognition Awards"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <EmojiEvents />,
  },
  {
    time: "1:20 pm",
    titles: ["Closing Remarks by Symposium Chair"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <EmojiPeople />,
  },
  {
    time: "1:30 pm onwards",
    titles: ["Networking Lunch / Interactive Booths"],
    locations: ["Atrium (Level 3, RVRC Block G)"],
    icon: <Restaurant />,
  },
];

export default programmeEvents;