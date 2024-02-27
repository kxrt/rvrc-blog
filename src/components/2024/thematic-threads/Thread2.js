import React from "react";
import { Box, Typography } from "@mui/material";
import SpeakerBiography from "../../SpeakerBiography";

import Licher from "../../../assets/2024/thread-speakers/licher.jpg";
import Youngkyu from "../../../assets/2024/thread-speakers/youngkyu.jpg";
import Nicholas from "../../../assets/2024/thread-speakers/nicholas.jpg";
import Jean from "../../../assets/2024/thread-speakers/jean.png";
import Edice from "../../../assets/2024/thread-speakers/edice.jpg";
import Cassandra from "../../../assets/2024/thread-speakers/cassandra.jpg";
import Jiayu from "../../../assets/2024/thread-speakers/jiayu.jpg";
import Jiayi from "../../../assets/2024/thread-speakers/jiayi.jpg";
import Yograrajan from "../../../assets/2024/thread-speakers/yogarajan.jpg";
import Emmanuel from "../../../assets/2024/thread-speakers/emmanuel.jpg";

const thread2Panel1Speakers = [
  {
    name: "Li Cher",
    title: "Senior Programme, Peer Student Supporter",
    biography:
      "Li Cher is a final year undergraduate, majoring in Mechanical Engineering. As one of the members of RVRC’s Peer Student Supporters, he has been actively contributing back to RVRC by promoting positive mental wellness among students. In his free time, he enjoys cooking and playing floorball!",
    image: Licher,
  },
  {
    name: "Youngkyu",
    title: "Athlete, Inter College Games",
    biography:
      "Youngkyu is a Year 2 student from Block A, Manis. Proudly serving as the captain of RV Volleyball and vice-captain of RV Squash, he is passionate about sports. This year, he had the honour of representing RV in four different sports games at ICG. He hopes to inspire more RV people to embrace the joy of sports.",
    image: Youngkyu,
  },
  {
    name: "Nicholas",
    title: "Head, RV XinChao 2022",
    biography:
      "Nicholas is a Y4 resident staying in Blk A, Manis. For him, being able to find like-minded individuals to participate in an Overseas Community Involvement Project (OCIP) was definitely an interesting and exciting project to undertake. With the support of RVRC, he reached out to over 40 underprivileged children in Vietnam to teach subjects such as English, Maths, and some basic coding!",
    image: Nicholas,
  },
  {
    name: "Jean",
    title: "Senior Programme, Jukebox, RV Musical",
    biography:
      "Jean is a Y4 resident from Manis (Block A). Previously, she was the president of Jukebox, RVRC's music IG, and project director of Concert by the Ridge 2022: Graffiti, the college's flagship performing arts event. This fall, she will be directing RV10: The Musical, RVRC's inaugural musical production. Beyond the arts scene, she hosts podcasts and enjoy experimenting with different hair colours!",
    image: Jean,
  },
  {
    name: "Edice",
    title: "Project Director, Freshmen Orientation Programme",
    biography:
      "Edice is a Year 2 student, from Panthera. She loves the outdoors, organising meaningful events and hearing the stories of people. In RVRC, she was the project director of the freshmen orientation programme, which organised tree planting as part of our amazing race activity.",
    image: Edice,
  },
];

const thread2Panel2Speakers = [
  {
    name: "Cassandra",
    title: "Organiser, Kayak and Clean",
    biography:
      "Cassandra is a year 3 Resident Assistant in Aonyx who enjoys playing sports and interacting with animals. Following her interest and experience in canoeing, she took up the role as student leader for Kayak and Clean. She hopes to introduce more residents to the sport through this adventurous yet meaningful activity, and foster closer bonds with their blockmates.",
    image: Cassandra,
  },
  {
    name: "Jia Yu",
    title: "Teaching Assistant, Southwest Asia Friendship Initiative",
    biography:
      "From hiking through forests and hills in Malaysia, to kayaking around Singapore's offshore islands, Jia Yu has been on his fair share of adventure. Yet, every splash of seawater, every footstep through the mud, has been for sustainability: Jia Yu has brought students on many journeys of discovery, and did not forget to do altruistic acts like tree planting and trash collection through his adventures.",
    image: Jiayu,
  },
  {
    name: "Jia Yi",
    title: "Organiser, Learning Forest",
    biography:
      "Jia Yi is a Year 2 Business major from Chelonia. Her passion in design led her to serve in various publicity head roles, such as for NUS Business Student Club’s Community Engagement team and Project Cebu. As her term in these roles conclude, she has embraced a new opportunity as a publicity member in RV's Learning Forest, where she aims to continue leveraging on her design skills to contribute to society, particularly to RV and wildlife conservation efforts.",
    image: Jiayi,
  },
  {
    name: "Yogarajan",
    title: "Organiser, Industry Engagements",
    biography:
      "Yogarajan is currently involved in leading industry engagements to allow students to bridge the gap between academic and professional realms. Such engagements provide students with real-word insights, networking opportunities, career guidance, enhanced employability, a global perspective and inspiration. Working in collaboration with RV faculty, he is in charge of publicizing talks with industry leaders as well as industry visits, and occasionally helps liaise with external organizations. ",
    image: Yograrajan,
  },
  {
    name: "Emmanuel",
    title: "Organiser, Study Trips for Engagement and Enrichment (STEER)",
    biography:
      "Emmanuel is currently a third year studying Business Administration at RVRC. One of the most memorable experiences for him during his time at RVRC was being part of the team that organized the RVRC Taiwan STEER Trip. It was an enriching journey that taught him so much about teamwork and cultural exchange. His passion for exploring and seeking out new experiences runs deep. Whether it's sampling exotic foods or immersing himself in the customs of a different culture, he is always eager to broaden his horizons and embrace the diversity of the world.",
    image: Emmanuel,
  },
];

const Thread2 = () => {
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
            Thread 2: Adventure
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "16pt",
              fontFamily: "Jost",
              textAlign: "center",
            }}
          >
            Exploring interests, cultivating curiosity, and stewardship
          </Typography>
          <p style={{ fontSize: "16pt" }}>
            This thread showcased the importance and impact of diverse
            co-curricular and student life activities at RVRC that enable
            students to boldly, yet, curiously, pursue their passion, explore
            new interests, and connect with like-minded members in the broader
            university community.​ Presentations from this thread also
            highlighted how the RVRC living-learning experience cultivates
            stewardship of our society and environmental issues, as students
            strive towards the cause of building a shared future that is more
            sustainable and equitable.
          </p>
        </div>
      </Box>
      <Box sx={{ paddingInline: "10%" }}>
        <p style={{ fontSize: "16pt", fontWeight: "bold" }}>
          Panel 1: Student-initiated Endeavors
        </p>
        <p style={{ fontSize: "16pt" }}>
          Multipurpose Room 1 | 11:15am - 12:00pm
        </p>
        {thread2Panel1Speakers.map((speaker) => (
          <SpeakerBiography
            name={speaker.name}
            title={speaker.title}
            biography={speaker.biography}
            image={speaker.image}
            isAlignedLeft={true}
          />
        ))}
        <p style={{ fontSize: "16pt", fontWeight: "bold" }}>
          Panel 2: College-initiated Activities
        </p>
        <p style={{ fontSize: "16pt" }}>
          Multipurpose Room 1 | 12:00pm - 12:45pm
        </p>
        {thread2Panel2Speakers.map((speaker) => (
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

export default Thread2;
