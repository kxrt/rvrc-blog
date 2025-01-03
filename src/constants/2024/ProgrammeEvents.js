import {
  Campaign,
  EmojiEvents,
  EmojiFoodBeverage,
  Group,
  Groups,
  HowToReg,
  Restaurant,
  Star,
} from "@mui/icons-material";

const programmeEvents = [
  {
    time: "8:30 am",
    titles: ["Registration Opens"],
    locations: ["Atrium (Level 3, RVRC Block G)"],
    icon: <HowToReg />,
    iconBackgroundColor: "",
  },
  {
    time: "9:00 am",
    titles: ["Welcome Remarks by College Master"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <Campaign />,
    iconBackgroundColor: "#592693",
  },
  {
    time: "9:10 am",
    titles: ["Opening Address by Guest of Honour"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <Campaign />,
    iconBackgroundColor: "",
  },
  {
    time: "9:25 am",
    titles: ["Keynote Address"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <Campaign />,
    iconBackgroundColor: "#592693",
  },
  {
    time: "9:45 am",
    titles: ["Symposium Introduction by Symposium Chairs"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <Group />,
    iconBackgroundColor: "",
  },
  {
    time: "10:00 am",
    titles: ["Thematic Thread Highlights"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <Star />,
    iconBackgroundColor: "#592693",
  },
  {
    time: "10:30 am",
    titles: ["Tea Break / Poster Session / Networking with Partners"],
    locations: ["Atrium (Level 3, RVRC Block G)"],
    icon: <EmojiFoodBeverage />,
    iconBackgroundColor: "",
  },
  {
    type: "custom",
    time: "11:15 am",
    titles: [
      "Thread 1: Edu-venture",
      "Thread 2: Adventure",
      "Thread 3: Venturing Beyond",
    ],
    locations: [
      "MPR 1 (Level 3, RVRC Block G)",
      "MPR 2 (Level 3, RVRC Block G)",
      "Master's Lounge (Level 3, RVRC Block G)",
    ],
    icon: <Groups />,
    iconBackgroundColor: "#592693",
  },
  {
    time: "1:00 pm",
    titles: ["Symposium Recognition Awards"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <EmojiEvents />,
    iconBackgroundColor: "",
  },
  {
    time: "1:15 pm",
    titles: ["Closing Remarks by Symposium Chairs"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <Group />,
    iconBackgroundColor: "#592693",
  },
  {
    time: "1:30 pm onwards",
    titles: ["Networking Lunch"],
    locations: ["Atrium (Level 3, RVRC Block G)"],
    icon: <Restaurant />,
    iconBackgroundColor: "",
  },
];

export default programmeEvents;
