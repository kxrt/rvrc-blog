import React from "react";
import { Box, Typography } from "@mui/material";

import links from "../PastLinks";

const PastSymposia = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "20pt", md: "26pt" },
            fontFamily: "Jost",
            paddingTop: { xs: "30px", md: "30px" },
            color: "#1d9077",
          }}
        >
          Links to Past Symposia
        </Typography>
        <Box
          sx={{
            paddingBlock: "20px",
            paddingBottom: "20px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {links.map((item) => (
            <Box
              key={item.title}
              sx={{
                padding: "2%",
                margin: "1%",
                border: "0.5px solid gray",
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
      </Box>
    </>
  );
};

export default PastSymposia;
