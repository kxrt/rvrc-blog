import {
  Add,
  Collections,
  CoPresent,
  HowToReg,
  LocalCafe,
  Fireplace,
} from "@mui/icons-material";

export const programmeEvents = [
  {
    time: "8:30 am",
    titles: ["Registration Opens"],
    locations: ["Atrium (Level 3, RVRC Block G)"],
    icon: <HowToReg />,
  },
  {
    time: "9:00 am",
    titles: ["TO UPDATE"],
    locations: ["??"],
    icon: <Add />,
  },
];

export const thread1MPR1Events = [
  {
    time: "11:10 am",
    titles: ["Talk 1"],
    locations: ["Speakers"],
    icon: <CoPresent />,
  },
  {
    time: "11:50 pm",
    titles: ["Break"],
    locations: ["MPR 1"],
    icon: <LocalCafe />,
  },
  {
    time: "12:40 pm",
    titles: ["Talk 2"],
    locations: ["Speakers"],
    icon: <CoPresent />,
  },
];

export const thread1MPR2Events = [
  {
    time: "11:10 am",
    titles: ["Talk 1"],
    locations: ["Speakers"],
    icon: <CoPresent />,
  },
  {
    time: "11:50 pm",
    titles: ["Break"],
    locations: ["MPR 2"],
    icon: <LocalCafe />,
  },
  {
    time: "12:40 pm",
    titles: ["Talk 2"],
    locations: ["Speakers"],
    icon: <CoPresent />,
  },
];

export const thread2Events = [
  {
    time: "11:10 am",
    titles: ["Fireside Chat 1"],
    locations: ["Speakers"],
    icon: <Fireplace />,
  },
  {
    time: "11:50 am",
    titles: ["Break"],
    locations: ["Master's Lounge"],
    icon: <LocalCafe />,
  },
  {
    time: "12:00 pm",
    titles: ["Fireside Chat 2"],
    locations: ["Speakers"],
    icon: <Fireplace />,
  },
];

export const posterGalleryEvents = [
  {
    time: "10:00 am",
    titles: [
      "Poster Gallery / Interactive Booths by Community Partners / Networking Tea Session",
    ],
    locations: ["Atrium (Level 3, RVRC Block G)"],
    icon: <Collections />,
  },
];
