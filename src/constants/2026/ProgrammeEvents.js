import {
  AutoAwesome,
  Campaign,
  Collections,
  CoPresent,
  EmojiEvents,
  EmojiFoodBeverage,
  EmojiPeople,
  Fireplace,
  Groups,
  HowToReg,
  LocalCafe,
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
    titles: ["Symposium Introduction by RVRC Symposium 2026 Co-Chairs (Bai Zirui and Jeong Youngkyu)"],
    locations: ["??"],
    icon: <CoPresent />,
  },
  {
    time: "9:10 am",
    titles: ["Welcome Address by RVRC College Master A/P Sim Tick Ngee"],
    locations: ["??"],
    icon: <Person />,
  },
  {
    time: "9:20 am",
    titles: ["Keynote Address by Mr. Sean Lam (Founder & CEO, Ecoworks)"],
    locations: ["??"],
    icon: <Lightbulb />,
  },
  {
    time: "9:40 am",
    titles: ["Thematic Thread Highlights"],
    locations: ["??"],
    icon: <AutoAwesome />,
  },
  {
    time: "10:00 am",
    titles: ["Poster Presentations and Interactive Booths / Networking Tea Session"],
    locations: ["Community Partners - NTUC Youth, NYC (YEP), MINDS, WWF Singapore"],
    icon: <EmojiFoodBeverage />,
  },
  {
    time: "11:00 am",
    titles: ["Announcement for Parallel Thematic Threads and Their Venues"],
    locations: ["??"],
    icon: <Campaign />,
  },
  {
    time: "11:10 am",
    titles: ["Presentations and Panels (Multiple venues with staggered timing)"],
    locations: ["??"],
    icon: <Groups />,
  },
  {
    time: "1:00 pm",
    titles: ["Announcement for Symposium Recognition Awards"],
    locations: ["??"],
    icon: <Campaign />,
  },
  {
    time: "1:10 pm",
    titles: ["Presentation of Symposium Recognition Awards by RVRC Rector, Dr. Noeleen Heyzer"],
    locations: ["??"],
    icon: <EmojiEvents />,
  },
  {
    time: "1:20 pm",
    titles: ["Closing Remarks by RVRC Symposium 2026 Co-Chairs"],
    locations: ["??"],
    icon: <EmojiPeople />,
  },
  {
    time: "1:30 pm",
    titles: ["Networking Lunch"],
    locations: ["??"],
    icon: <Restaurant />,
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
