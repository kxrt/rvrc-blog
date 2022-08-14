import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import rvrc_bg from "../assets/rvrc_bg.jpeg";
import schedule from "../components/Schedule";
import links from "../components/PastLinks";

const Landing = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#8821b5", padding: { xs: "5%", md: "2%" } }}>
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontSize: { xs: "20pt", md: "28pt" },
            fontFamily: "Jost",
          }}
        >
          RVRC Symposium 2022
        </Typography>
      </Box>
      <img
        src={rvrc_bg}
        alt="rvrc-bg"
        style={{
          maxWidth: "80%",
          marginTop: "32px",
          borderRadius: "16px",
        }}
      />
      <p style={{ fontSize: "16pt", paddingInline: "10%" }}>
        GEQ1917, offered by{" "}
        <a href="https://rvrc.nus.edu.sg/" target={"_blank"} rel="noreferrer">
          Ridge View Residential College (RVRC)
        </a>
        , is a two-semester inter-disciplinary module that provides foundational
        knowledge and skills to tackle issues in sustainability.
      </p>
      <Box
        sx={{ bgcolor: "#f7ecf8", marginInline: "5%", borderRadius: "16px" }}
      >
        <p style={{ textAlign: "left", padding: "4%", fontSize: "12pt" }}>
          Welcome to RVRC’s student finale of the integrated Year One programme.
          In GEQ1917, students identified and tackled real world sustainability
          issues over the three months and look forward to communicating their
          observations and real world solutions with you. View abstracts of 59
          projects <Link to="/abstracts">here.</Link>
          <br />
          <br /> As Year One students, they have read an integrated programme of
          three modules on Sustainability, Workplace Readiness and Professional
          & Academic Communication. Find out more at our college website{" "}
          <a
            href="https://rvrc.nus.edu.sg/rvrc-programme/rvrc-year-one-modules/"
            target={"_blank"}
            rel="noreferrer"
          >
            here
          </a>
          . <br />
          <br />
          We are greatly honoured that{" "}
          <Link to="/keynote">Mr Liak Teng Lit</Link> will grace the occasion
          with a keynote address. He has an illustrious career as a leader and
          advisor and is renowned for his unconventional approach to
          problem-solving.
        </p>
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "14pt", md: "20pt" },
          fontFamily: "Jost",
          paddingTop: "2%",
          color: "#8821b5",
        }}
      >
        Programme Highlights
      </Typography>
      <Box sx={{ marginTop: "2%" }}>
        {schedule.map((item) => (
          <>
            <Card
              sx={{
                // bgcolor: "#f7ecf8",
                width: "70%",
                marginInline: "15%",
                marginTop: { xs: "4%", md: "1%" },
                paddingBlock: "1%",
                border: "0.5px solid lightgray",
                boxSizing: "border-box",
                paddingInline: "5%",
              }}
              elevation={0}
            >
              {item.title}
              <br />
              <Typography sx={{ fontFamily: "Jost", color: "navy" }}>
                {item.start} - {item.end}
              </Typography>
            </Card>
          </>
        ))}
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "14pt", md: "20pt" },
          fontFamily: "Jost",
          paddingTop: {xs: "6%", md: "3%"},
          color: "#8821b5",
        }}
      >
        Links to Past Symposia
      </Typography>
      <Box
        sx={{
          marginBlock: "1%",
          marginBottom: "3%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {links.map((item) => (
          <Box
            sx={{
              padding: "2%",
              margin: "1%",
              border: "0.5px solid lightgray",
              width: "150px",
              borderRadius: "12px",
            }}
          >
            <Typography sx={{ fontFamily: "Jost" }}>
              <a
                href={item.href}
                target={"_blank"}
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                {item.title}
              </a>{" "}
              <br />
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Landing;
