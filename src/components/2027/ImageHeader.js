import React from "react";
import { Box, Fade } from "@mui/material";
import logoIconWhite from "../../assets/logo-2027.png";

import { COLOURS } from "../../constants/Colours";

const ImageHeader = ({ title }) => (
  <Box
    sx={{
      background: COLOURS.brandPurple,
      padding: "24px",
    }}
  >
    <Fade in timeout={1000}>
      <a href="/">
        <img
          src={logoIconWhite}
          alt="logo"
          style={{ height: "200px", padding: "4px" }}
        />
      </a>
    </Fade>
  </Box>
);

export default ImageHeader;
