import React from "react";
import { Grow, Stack, Typography } from "@mui/material";

import Title from "../../components/2027/Title";
import Footer from "../../components/2027/Footer";
// import Thread2Image from "../../assets/2026/thread-2.webp";
import SpeakerBiography from "../../components/SpeakerBiography";
import { communityPartners, partnerInstitutions } from "../../constants/2027/PartnersDelegates";
import { COLOURS } from "../../constants/Colours";

const PartnersDelegates = () => {
  return (
    <Stack spacing={0}>
      <Title title="Partners/Delegates" />
      <Stack
        spacing={2}
        sx={{
          backgroundColor: COLOURS.brandTeal,
          paddingInline: "10%",
          paddingBlock: "20px",
        }}
      >
        <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
          <Stack spacing={1}>
            <Typography
              variant="h4"
              sx={{
                color: COLOURS.white,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Community Partners
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { md: "16pt" },
                color: COLOURS.white,
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              Cultivating Curiosity and Stewardship
            </Typography>
          </Stack>
        </Grow>
        <Grow
          in
          timeout={1000}
          style={{ transformOrigin: "center bottom", transitionDelay: "250ms" }}
        >
          <Stack spacing={1}>
          <Typography sx={{ fontSize: { md: "16pt" }, color: COLOURS.white, textAlign: "justify" }}>
            RVRC Symposium 2027 community partners will host interactive booths offering attendees 
            the opportunity to learn about their work in environmental conservation, social inclusion, 
            and youth advocacy. These parallel sessions take place in a shared space during the 
            Networking Tea, creating a vibrant environment that fosters meaningful learning, dialogue, 
            and networking among symposium attendees.
          </Typography>
          </Stack>
        </Grow>
      </Stack>

      <Stack gap={2} sx={{ paddingInline: "10%", marginBottom: 4, marginTop: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: COLOURS.brandPurple,
          }}
        >
          Community Partners
        </Typography>

        {communityPartners.map((partner) => (
          <SpeakerBiography
            key={partner.name}
            name={partner.name}
            title={partner.title}
            biography={partner.biography}
            image={partner.image}
            isAlignedLeft={true}
          />
        ))}
      </Stack>
      <Stack
        spacing={2}
        sx={{
          backgroundColor: COLOURS.brandTeal,
          paddingInline: "10%",
          paddingBlock: "20px",
        }}
      >
        <Grow in timeout={1000} style={{ transformOrigin: "center bottom" }}>
          <Stack spacing={1}>
            <Typography
              variant="h4"
              sx={{
                color: COLOURS.white,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Foreign Delegates
            </Typography>
          </Stack>
        </Grow>
        <Grow
          in
          timeout={1000}
          style={{ transformOrigin: "center bottom", transitionDelay: "250ms" }}
        >
          <Stack spacing={1}>
          <Typography sx={{ fontSize: { md: "16pt" }, color: COLOURS.white, textAlign: "justify" }}>
            The RVRC Symposium 2027 extends a formal invitation to outstanding student delegates 
            from selected partner universities across ASEAN and Asia to engage in a rigorous 
            exchange of ideas on sustainability, community engagement, and workplace readiness. 
            In keeping with this year's theme, international delegates will be at the heart of the 
            Symposium, bringing diverse cross-cultural perspectives that enrich dialogue across 
            different communities and contexts. 
          </Typography>
          <Typography sx={{ fontSize: { md: "16pt" }, color: COLOURS.white, textAlign: "justify" }}>
            Selected international delegates will have the opportunity to participate in a curated 
            programme of academic and experiential activities, encompassing student poster presentations, 
            roundtable discussions and dialogue sessions, lightning workshops facilitated by community 
            partners, and structured networking engagements with students, educators, and partners. 
            In recognition of their contribution to the Symposium, presenting delegates will be provided 
            with return flights and on-campus accommodation by RVRC for a 3-day, 2-night special programme, 
            from 29 to 31 January 2027.
          </Typography>
          </Stack>
        </Grow>
      </Stack>

      <Stack gap={2} sx={{ paddingInline: "10%", marginBottom: 4, marginTop: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: COLOURS.brandPurple,
          }}
        >
          Partner Institutions
        </Typography>

        {partnerInstitutions.map((partner) => (
          <SpeakerBiography
            key={partner.name}
            name={partner.name}
            title={partner.title}
            biography={partner.biography}
            image={partner.image}
            isAlignedLeft={true}
          />
        ))}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default PartnersDelegates;
