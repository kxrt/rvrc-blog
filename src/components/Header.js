import React from "react";
import { AppBar, Box } from "@mui/material";
import bg from "../assets/header.png";

const Header = () => {
  return (
    <Box>
      <AppBar position="static" elevation={0}>
        <img src={bg} alt="header-bg" />
      </AppBar>
    </Box>
  );
};

export default Header;
