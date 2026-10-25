import {
  AutoAwesome,
  AutoStories,
  Collections,
  CoPresent,
  EmojiEvents,
  EmojiFoodBeverage,
  EmojiPeople,
  Forest,
  Groups,
  Hiking,
  HowToReg,
  Lightbulb,
  LocationCity,
  Map,
  MicExternalOn,
  NightShelter,
  PedalBike,
  Person,
  Public,
  Restaurant,
  TableBar,
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
    titles: ["Keynote Address"],
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
    titles: ["Poster Presentations / Interactive Booths / Networking Tea Session", "Lightning Workshops"],
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
    titles: ["Student Roundtable", "Off-the-Record Human Library"],
    locations: [
      "MPR 1 & 2 (Level 3, RVRC Block G)",
      "Master's Lounge (Level 3, RVRC Block G)",
    ],
    icon: <TableBar />,
  },
  {
    time: "1:00 pm",
    titles: ["Presentation of Symposium Recognition Awards"],
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
        {
      time: "11:00am",
      course: "Ridge View Residential College, National University of Singapore",
      titles: ["Stride by Side"],
      abstract: "This project analyses the environmental organisation Stridy and evaluates its role in addressing littering, waste management, and community participation in Singapore. Through an assessment of Stridy’s mission, internal capabilities, and external operating environment, the study identifies both strengths and challenges influencing its long-term impact. Key strengths include its technology-enabled, data-driven approach, strong community networks, and alignment with national sustainability goals. However, public litter apathy, limited accountability, and reliance on unstable funding sources present significant barriers to growth.  Building on these findings, the project proposes Silver Striders, an initiative that engages older adults through community clean-up activities integrated with active ageing programmes. The proposal combines age-friendly app enhancements, social and recreational elements during clean-ups, and partnerships with Active Ageing Centres, community organisations, and volunteer networks to encourage sustained participation and environmental stewardship. By empowering seniors to take ownership of local environmental efforts, Silver Striders aims to transform litter picking from a one-off activity into a meaningful community habit. The project demonstrates how leveraging existing social infrastructure can strengthen civic engagement, promote active ageing, and support more sustainable and cleaner communities.",
      locations: ["Yap Rui Hao Augustine, Kaitlynne Maree Ang Chua, Teo Gui Jun Vera, Jaron Ng Jin Rui, Yap Yu Ning"],
      icon: <Hiking />,
    },
    {
      time: "11:15am",
      course: "Ridge View Residential College, National University of Singapore",
      titles: ["Framing the Land-Use Dilemma in Singapore: A Corpus Assisted Framing Analysis"],
      abstract: "This study investigates how the Singapore government rhetorically frames the land-use dilemma between national development and biodiversity conservation in official communications. Using a corpus-assisted framing analysis, the author evaluated 1,670 sentences extracted from 49 filtered press releases and speeches published by the Urban Redevelopment Authority (URA) and the National Parks Board (NParks) between 2021 and 2025. Applying BERTopic for topic modeling alongside Robert Entman’s framing framework, the paper identifies four primary thematic frames corresponding to the broad pillars of sustainability: urban development, communal services, ecological conservation, and heritage preservation.   The findings reveal a significant structural imbalance in government messaging. Despite a deliberate selection bias toward sustainability-focused texts, socioeconomic considerations heavily dominate state discourse. The urban development frame—centered on housing and infrastructure needs—represents the largest proportion of communications, while green spaces are frequently framed through an anthropocentric lens as communal amenities for human recreation and bonding. Although NParks independently utilizes ecocentric framing grounded in ecological conservation science, overall official rhetoric prioritizes economic pragmatism and human utility. The paper concludes that this systemic anthropocentric orientation risks sidelining critical ecological trade-offs in public discourse.",
      locations: ["Qiu Ziming"],
      icon: <Forest />,
    },
    {
      time: "11:30am",
      course: "Ridge View Residential College, National University of Singapore",
      titles: ["Designing at the Nexus of Biodiversity, Sustainability, and Community Resilience"],
      abstract: "University campuses are living ecosystems where the choices we make about space, nature, and community directly shape our collective future. Empowered as change agents through fieldtrips and coursework, our team engaged a real-world design challenge commissioned as part of the Campus Masterplan redevelopment, to reimagine an underutilised precinct into a vibrant, multi-functional hub. Anchored at the nexus of heritage, biodiversity conservation and sustainable development, our project drew intentionally from the site's layered historical and ecological richness to develop design solutions that are both environmentally responsive and community-centred. Through iterative stakeholder engagement with campus policymakers and a broad spectrum of end-users, we interrogated how thoughtful spatial intervention can strengthen environmental and community resilience. Critically, AI-powered visualisations enabled us to rapidly explore multiple creative alternatives, test concepts in real time, and refine our proposals with greater precision, equipping us with future-ready competencies increasingly valued in professional practice. Our proposed interventions address entrenched deficits in campus walkability, stakeholder inclusivity, and spatial vitality, directly advancing the SDG#11 goals among others. This project affirms that when students are trusted with authentic challenges and equipped with contemporary tools, we rise as critical thinkers, emerging professionals, and genuine drivers of meaningful, sustainable change.",
      locations: ["Tang Yu John, Pang Wei Quan Wilber, See Weixuan Ryan, Tan Soon Ting Emma"],
      icon: <LocationCity />,
    },
    {
      time: "11:45am",
      course: "University of Macau",
      titles: ["UNESCO-Listed Historic Landscape AI Tandem Cycling for InSynergy"],
      abstract: "Situated in Macau's UNESCO-listed historic landscape and campuses, this student-initiated project explores how heritage and culture shape communities. It integrates tandem cycling with Umi, a smart glasses-based AI agent, transforming heritage sites into interactive living classrooms for cultural expression and preservation. Requiring continuous coordination and shared accountability between riders, tandem cycling embodies collaborative and inclusive values and deepens meaningful people-place interactions. Providing on-site contextual heritage guidance at key checkpoints, Umi connects cultural knowledge to sustainable practices and delivers inclusive, cross-cultural shared values. Integrating academic learning, physical activity and collective participation, the project cultivates students’ cultural awareness and soft skills, advancing SDG 3, SDG 4, SDG 11 and SDG 13 through healthy lifestyles, inclusive engagement and sustainable collaboration. In partnership with Macao’s tourism and community sectors, students apply knowledge to real-world scenarios and build professional, communicative and technical capacities. The end-to-end development of the Umi system enhances interdisciplinary problem-solving skills, validating how accessible digital tools and low-carbon cycling strengthen social bonds and build resilient, inclusive communities.",
      locations: ["Xue Hecheng"],
      icon: <PedalBike />,
    },
];

export const thread2Events = [
    // time, course, titles, abstract, locations, icon
    {
      time: "11:00am",
      course: "Seoul National University",
      titles: ["From Labor to Belonging: Rethinking Migrant Inclusion in El Ejido"],
      abstract: "El Ejido, Spain, is a major European greenhouse-farming region that relies heavily on migrant workers. Yet economic participation does not necessarily lead to social belonging. Migrant workers may remain separated from local communities by insecure housing, spatial isolation, limited mobility, and restricted access to decision-making. Building on my 2026 fieldwork, this project examines the gap between economic inclusion and community membership. Interviews with migrant-support organizations, researchers, agricultural stakeholders, and residents revealed contrasting views of migration: some emphasized cultural distance and social tension, while others considered diversity part of the region’s identity. Rather than treating either perspective as definitive, the project will analyze how social position and everyday experience shape these views. The project seeks to identify the conditions under which migrant workers can be recognized not merely as labor inputs or recipients of support, but as members who help shape their community. Rather than proposing a one-size-fits-all policy, it will develop three practical principles for migrant inclusion: representation, shared decision-making, and access to common spaces. The resulting principles will form an assessment tool that may help other migrant-dependent regions, including Asian contexts, examine gaps between economic reliance and social inclusion.",
      locations: ["Dongyun Lee"],
      icon: <NightShelter />,
    },
    {
      time: "11:15am",
      course: "Ridge View Residential College, National University of Singapore",
      titles: ["Mapping Belonging for User-Centred Placemaking in Asian Cities"],
      abstract: "Placemaking shapes how communities inhabit, navigate, and find belonging in shared environments. Yet in Asia's fast-evolving cities, top-down, functionality-driven urban development frequently sidelines the lived experiences of the very users these spaces are meant to serve. Drawing on methods and frameworks that span geography, urban theory, and environmental psychology, this study investigates how mental mapping can surface the spatial perceptions, navigation patterns, and emotional connections of urban users. By analysing mental maps through Lynch's (1960) framework of salient environmental elements, we identify how physical structures and social functions are experienced on the ground, and where targeted interventions can better align urban environments with authentic user needs. This interdisciplinary approach mirrors the collaborative, evidence-based methods increasingly demanded of policymakers and built environment professionals navigating complex real-world challenges. Beyond the urban setting, our findings carry direct implications for community-based placemaking practices as Asian cities undergo rapid urbanisation, offering practitioners and policymakers a replicable, user-centred toolkit for designing more resilient and inclusive spaces in support of sustainable development goals.",
      locations: ["Jo Anna Wong Shi Ling, Ong Kai Siang Lionel"],
      icon: <Map />,
    },
    {
      time: "11:30am",
      course: "University of Malaya",
      titles: ["From Green-Blue Spaces to Youth Agency: Empowering Young People to Connect Place, People and Planet in Kuala Lumpur"],
      abstract: "Urban green-blue spaces (UGBS) are more than ecological infrastructure. They can serve as places for learning, social connection, civic participation, and youth-led action. This presentation shares experiences from the Kuala Lumpur Urban Green Blue Spaces Youth Empowerment Programme (KL UGBS YEP), an initiative that explores how young people can be empowered to understand, value, and actively engage with urban socio-ecological spaces. Through a series of community-based activities including place-based learning workshops, Eco-Heart activities, participatory mapping, photovoice, and deliberative workshops, the programme connects sustainability education with direct experiences of local places. Rather than positioning young people simply as beneficiaries or volunteers, the programme seeks to strengthen their agency as knowledge holders and communicators of sustainability action. The presentation will reflect on emerging lessons from working with youths in Kuala Lumpur, with particular attention to how place-based and participatory approaches can cultivate environmental values, belonging, and stewardship. It will also discuss opportunities and challenges in sustaining youth engagement beyond individual activities and translating learning into longer-term action.",
      locations: ["Sanjeef Kumr Subramaniam"],
      icon: <Collections />,
    },
    {
      time: "11:45am",
      course: "Ridge View Residential College, National University of Singapore",
      titles: ["Evolution of Dayak Culture amidst Sustainable Development in Borneo"],
      abstract: "This interactive poster obtained the highest score for the Field Project assignment, which is based on the students’ engagements and experiences during the study trip to East Malaysia. The poster presents their insights on the topic of culture and the discourse surrounding its ‘preservation’, ‘dilution’ and ‘authenticity’ by unpacking what cultural change looks like for the Dayak community in Borneo through the diverse perspectives and voices from Sabah and Sarawak.",
      locations: ["Iris Kok Yu Xi, Lim Kai Jie Zachary, Tara-Jade Sim, Vishesh Jally "],
      icon: <Public />,
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

export const studentRoundtableEvents = [
  {
    time: "12:15 pm",
    titles: [
      "Introduction by Moderator",
    ],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <MicExternalOn />,
  },
  {
    time: "12:20 pm",
    titles: [
      "Student Roundtable Discussion",
    ],
    locations: ["MPR 1 & 2 (Level 3, RVRC Block G)"],
    icon: <Collections />,
  },
];

export const dialogueSessionsEvents = [
  {
    time: "12:25 pm",
    titles: [
      "Human Library Sessions",
    ],
    locations: ["Master's Lounge (Level 3, RVRC Block G)"],
    icon: <AutoStories />,
  },
];
