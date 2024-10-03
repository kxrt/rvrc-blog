import {
  AutoAwesomeMosaic,
  Campaign,
  EmojiEvents,
  EmojiPeople,
  Groups,
  HowToReg,
  Restaurant,
} from "@mui/icons-material";

const programmeEvents = [
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

export default programmeEvents;
