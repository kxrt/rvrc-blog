import React from "react";
import { Grid, Stack } from "@mui/material";

import Title from "../../components/2027/Title";
import TeamMemberCard from "../../components/TeamMemberCard";
import Footer from "../../components/2027/Footer";
import teamMembers from "../../constants/2027/TeamMembers";

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
        {teamMembers.slice(0, 6).map((teamMember, index) => {
          const { name, position, image } = teamMember;
          return (
            <Grid item key={index} xs={12} sm={6} md={4} sx={{ display: "flex" }}>
              <TeamMemberCard name={name} position={position} image={image} />
            </Grid>
          );
        })}
      </Grid>
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
        {teamMembers.slice(6, 10).map((teamMember, index) => {
          const { name, position, image } = teamMember;
          return (
            <Grid item key={index} xs={12} sm={6} md={4} sx={{ display: "flex" }}>
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
