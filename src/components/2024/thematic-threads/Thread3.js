import React from "react";
import { Box, Typography } from "@mui/material";
import SpeakerBiography from "../../SpeakerBiography";

import Qiherng from "../../../assets/2024/thread-speakers/kong-qi-herng.png";
import Wanqing from "../../../assets/2024/thread-speakers/yeoh-wan-qing.jpeg";
import Vania from "../../../assets/2024/thread-speakers/xu-vania.jpg";
import Wanting from "../../../assets/2024/thread-speakers/chan-wan-ting.jpg";
import Pranav from "../../../assets/2024/thread-speakers/pranav-kalra.jpg";
import Amira from "../../../assets/2024/thread-speakers/amira-rafi.jpg";

import Thread3Image from "../../../assets/2024/thread-3.jpg";

const thread3Panel1Speakers = [
  {
    name: "Qi Herng Kong",
    title: "Chief Executive Officer & Co-Founder, Moonbeam",
    biography:
      "Kong is the CEO and Co-Founder of the moonbeam co. The former National University of Singapore (NUS) Merit Scholar discovered his passion for sustainability during his BSc. (Pharmaceutical Science) Programme. He met his friends, who share the same ambition of using innovation and business to solve food waste problems, and co-founded Moonbeam together. He later completed his MSc. (Technopreneurship & Innovation) with the Chuan Thian Poh Scholarship to grow his entrepreneurial skills and network. He is currently working on Moonbeam full-time, where he engages businesses and institutions to encourage adoption of brewer's spent grains (BSG) in food products and services.",
    image: Qiherng,
  },
  {
    name: "Wan Qing Yeoh",
    title: "Chief Product Officer & Co-Founder, Hatch",
    biography:
      "Wan Qing is one of the co-founders of Hatch, and graduated from NUS in 2021 with a Bachelors of Arts (Global Studies). After being inspired by her experiences in volunteering and having immersed herself in the startup environment through NOC, she is excited by the possibilities of channeling product and business innovation into work that makes a difference. She co-founded and currently leads product development in Hatch, where she brings together people, private, and public stakeholders to design and implement solutions around digital accessibility. A firm believer in giving every individual the opportunity they deserve, she volunteers her time outside of work running a non-profit mentorship program bridging women into tech. ",
    image: Wanqing,
  },
  {
    name: "Vania Xu",
    title: "Green Materials Co-Director, NUS SAVE",
    biography:
      "Vania is a final year Economics major who completed her RVRC journey in AY21/22. For her, RVRC served as a dynamic experimental ground for student-led events, offering her invaluable experience in initiating and leading new projects. She went on to spearhead Green Action Week, the Parcel Management System with NUS Residences, and InfiniUse, among other projects as part of NUS SAVE, driving environmental impact awareness on a campus-wide level.",
    image: Vania,
  },
];

const thread3Panel2Speakers = [
  {
    name: "Wan Ting Chan",
    title: "Ecologist, Camphora",
    biography:
      "Wan Ting, an NUS graduate in Environmental Engineering, unearthed her passion for environmental advocacy during her academic journey. Her time at RVRC, notably GEQ classes and involvement in FoRestore, deeply influenced her perspective. Surrounded by like-minded individuals and actively engaging in hands-on experiences, Wan Ting cultivated a deep interest in biodiversity. Wan Ting defies conventional career boundaries, proving that her engineering background does not restrict her options as she ventures into the environmental impact assessment industry as an ecologist. With determination and interdisciplinary skills, she continues to play her part in safeguarding our environment.",
    image: Wanting,
  },
  {
    name: "Pranav Kalra",
    title: "Senior Consultant, Steward Redqueen",
    biography:
      "Pranav is a Senior Consultant at Steward Redqueen, where he helps organizations manage their ESG risk and amplify their positive impact. His sustainability journey began with research projects on hydrogen production and organic solar cells during high school. He pursued sustainability at NUS both within RVRC and in his Engineering Science degree by specializing in Energy Science & Technology. However, his experiences during university led him to pivot and focus on sustainability challenges through the lens of policy and business. As a non-practicing engineer, Pranav now works on sustainability topics with organizations ranging from developmental finance institutions to venture capital firms to start-ups in the region. He focuses on developing quantitative methodologies to model socioeconomic risk and impact, and on building the capacity of organizations to drive sustainability efforts on the ground.",
    image: Pranav,
  },
  {
    name: "Amira Rafi",
    title: "Program Executive, WWF Singapore",
    biography:
      "Amira is a biodiversity and nature enthusiast who graduated from the National University of Singapore with a degree in Life Sciences (spec. Environmental Sciences). During her time in NUS, she did research on marine seagrasses around the Southern Islands for two years and was a recipient of the Young Marine Scientist Research Award in 2020. Amira was a nature educator for over two years before moving on to the WWF-Singapore where she now works as a Programme Executive in the Education and Outreach team.",
    image: Amira,
  },
];

const Thread3 = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#e1d0f5" }}>
        <div style={{ paddingInline: "10%", paddingBlock: "20px" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "26pt",
              fontFamily: "Jost",
              color: "#592693",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Thread 3: Venturing Beyond
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "16pt",
              fontFamily: "Jost",
              textAlign: "center",
            }}
          >
            Initiating lasting change, innovation, and entrepreneurship{" "}
          </Typography>
          <p style={{ fontSize: "16pt" }}>
            This thread provided a platform to reflect on how RVRC students
            extend learning meaningfully beyond the College curriculum and their
            formal university education, into creative and innovative
            non-academic pursuits. Diverse initiatives and entrepreneurial
            efforts by current students and alumni were showcased to exemplify
            the impact of the RVRC living-learning experience. The speakers were
            categorised under the panels for ‘Trendsetters’ and ‘Changemakers’.
          </p>
        </div>
      </Box>
      <Box component="img" src={Thread3Image} sx={{ width: "100%" }} />
      <p style={{ fontSize: "16pt", fontWeight: "bold" }}>
        Panel 1: TrendSetters
      </p>
      <p style={{ fontSize: "16pt" }}>Master's Lounge | 11:30am - 12:00pm</p>
      <Box sx={{ paddingInline: "10%" }}>
        {thread3Panel1Speakers.map((speaker) => (
          <SpeakerBiography
            name={speaker.name}
            title={speaker.title}
            biography={speaker.biography}
            image={speaker.image}
            isAlignedLeft={true}
          />
        ))}
        <p style={{ fontSize: "16pt", fontWeight: "bold" }}>
          Panel 2: ChangeMakers
        </p>
        <p style={{ fontSize: "16pt" }}>Master's Lounge | 12:15pm - 12:45pm</p>
        {thread3Panel2Speakers.map((speaker) => (
          <SpeakerBiography
            name={speaker.name}
            title={speaker.title}
            biography={speaker.biography}
            image={speaker.image}
            isAlignedLeft={false}
          />
        ))}
      </Box>
    </>
  );
};

export default Thread3;
