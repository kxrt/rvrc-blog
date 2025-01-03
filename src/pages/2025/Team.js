import React from "react";
import { Grid, Stack } from "@mui/material";

import Title from "../../components/Title";
import TeamMemberCard from "../../components/TeamMemberCard";
import Footer from "../../components/Footer";
import teamMembers from "../../constants/2025/TeamMembers";

const Team = () => {
  return (
    <Stack spacing={2}>
      <Title title="Organising Committee" />
      <Grid
        container
        spacing={2}
        sx={{
          px: "5%",
          justifyContent: "center",
          alignSelf: "center",
          maxWidth: "1200px",
        }}
      >
        {teamMembers.map((teamMember, index) => {
          const { name, position, image } = teamMember;
          return (
            <Grid item key={index}>
              <TeamMemberCard name={name} position={position} image={image} />
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </Stack>
  );
};

export default Team;
