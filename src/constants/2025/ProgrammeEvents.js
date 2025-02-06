import {
  AutoAwesome,
  Collections,
  CoPresent,
  EmojiEvents,
  EmojiFoodBeverage,
  EmojiPeople,
  HowToReg,
  Lightbulb,
  Person,
  Restaurant,
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
    titles: ["Keynote Address by Mr. Preston Wong"],
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
      "Interactive Booths by Community Partners / Poster Gallery / Networking Tea Session",
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

export const thread1MPR1Events = [
  {
    time: "11:10 am",
    titles: ["The Feng Shui Culture in Hong Kong"],
    locations: ["Wu Yuxuan, Lee Dian Han Xavier, Kwa Cheng Jing, Shi Xinrui"],
    icon: <CoPresent />,
  },
  {
    time: "11:30 am",
    titles: [
      "The Contribution of Homestays in Malaysia to Sustainable Tourism",
    ],
    locations: [
      "Chye Yi De, Eugene Poa, Lai Woh Jon, Zhuang Ying'En (Shanice)",
    ],
    icon: <CoPresent />,
  },
  {
    time: "11:50 pm",
    titles: ["Break"],
    locations: ["MPR 1"],
    icon: <LocalCafe />,
  },
  {
    time: "12:00 pm",
    titles: ["Small Steps: Nudging the Recycling Mindset"],
    locations: ["Basil Tan Song Sze, Wang Yuting"],
    icon: <CoPresent />,
  },
  {
    time: "12:20 pm",
    titles: ["Rewilding & Conservation: Admiralty Park​"],
    locations: ["Pan Yongjing"],
    icon: <CoPresent />,
  },
  {
    time: "12:40 pm",
    titles: ["Conservation Conversation - We Can Do Better"],
    locations: ["He Xinghua, Ng Jing Yi Hannah, Tania Ho Kaye Wee"],
    icon: <CoPresent />,
  },
];

export const thread1MPR2Events = [
  {
    time: "11:10 am",
    titles: ["Sylvan Symphonies @ YIH-CLB Yellow Corridor"],
    locations: ["Gu Junhui"],
    icon: <CoPresent />,
  },
  {
    time: "11:30 am",
    titles: ["Food as an Asset "],
    locations: ["Paul Khoo Bob June"],
    icon: <CoPresent />,
  },
  {
    time: "11:50 am",
    titles: [
      "The Discursive Construction of the Apple Owner: An Exclusionary Game of Catch Up",
    ],
    locations: ["Amias Goh Khee Guan"],
    icon: <CoPresent />,
  },
  {
    time: "12:10 pm",
    titles: ["Break"],
    locations: ["MPR 2"],
    icon: <LocalCafe />,
  },
  {
    time: "12:20 pm",
    titles: ["Talking about Climate Change​"],
    locations: ["See Rui Ting Rachel"],
    icon: <CoPresent />,
  },
  {
    time: "12:40 pm",
    titles: ["A Film Critique of Kim Ji-young: Born 1982"],
    locations: ["Hazel Yew Jintong"],
    icon: <CoPresent />,
  },
];

export const thread2Events = [
  {
    time: "11:10 am",
    titles: ["Fireside Chat 1"],
    locations: ["Nguyen Tram Anh, Amanda Toh Lok Wun, Lim Ruey Shuane"],
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
    locations: ["Lee Ru Xuan (Hazel), Ou Foong Ye, Cassandra, Nadya Heryanto"],
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
