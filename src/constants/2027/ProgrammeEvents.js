import {
  AutoAwesome,
  Collections,
  CoPresent,
  EmojiEvents,
  EmojiFoodBeverage,
  EmojiPeople,
  Groups,
  HowToReg,
  Lightbulb,
  Person,
  Restaurant,
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
    titles: ["Symposium Introduction by RVRC Symposium 2027 Chair"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <CoPresent />,
  },
  {
    time: "9:10 am",
    titles: ["Welcome Address by Guest-of-Honour"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <Person />,
  },
  {
    time: "9:20 am",
    titles: ["Keynote Address by [tbc]"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <Lightbulb />,
  },
  {
    time: "9:35 am",
    titles: ["Thematic Thread Highlights"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <AutoAwesome />,
  },
  {
    time: "9:50 am",
    titles: ["Poster Presentations and Interactive Booths / Networking Tea Session", "Lightning Workshops"],
    locations: ["Atrium (Level 3, RVRC Block G)", "MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <EmojiFoodBeverage />,
  },
  {
    time: "11:00 am",
    titles: ["Thread 1: Re-Synergy", "Thread 2: In-Synergy"],
    locations: [
      "MPR 1 (Level 3, RVRC Block G)",
      "MPR 2 (Level 3, RVRC Block G)",
    ],
    icon: <Groups />,
  },
{
    time: "12:15 pm",
    titles: ["Student Roundtable", "Off-the-Record Dialogue Sessions"],
    locations: [
      "MPR 1 & 2 (Level 3, RVRC Block G)",
      "Master's Lounge (Level 3, RVRC Block G)",
    ],
    icon: <Groups />,
  },
  {
    time: "1:00 pm",
    titles: ["Presentation of Symposium Recognition Awards by RVRC Rector"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <EmojiEvents />,
  },
  {
    time: "1:20 pm",
    titles: ["Closing Remarks by RVRC Symposium 2027 Chair"],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <EmojiPeople />,
  },
  {
    time: "1:30 pm",
    titles: ["Networking Lunch"],
    locations: ["Atrium (Level 3, RVRC Block G)"],
    icon: <Restaurant />,
  },
];

export const lightningWorkshopEvents = [
    // time, course, titles, abstract, locations, icon
];

export const thread1Events = [
    // time, course, titles, abstract, locations, icon
];

export const thread2Events = [
    // time, course, titles, abstract, locations, icon
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
