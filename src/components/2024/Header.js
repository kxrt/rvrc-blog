import React from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";

import menuicon from "../../assets/bars-solid.svg";
import logoIconWhite from "../../assets/logo_icon_white.png";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // oldcolor #8821b5

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ bgcolor: "#592693" }}>
        <Container maxwidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <img
                src={logoIconWhite}
                alt="logo"
                style={{ width: "29px", height: "32px", padding: "5%" }}
              />
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ marginLeft: "65%", alignItems: "right" }}
              >
                <img src={menuicon} alt="menu" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  key={"Overview"}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/"
                >
                  <Typography textAlign="center">Overview</Typography>
                </MenuItem>
                <MenuItem
                  key={"Keynote"}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/keynote"
                >
                  <Typography textAlign="center">Guest of Honour</Typography>
                </MenuItem>
                <MenuItem
                  key={"Interactive"}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/guest-of-honour"
                >
                  <Typography textAlign="center">Keynote Speaker</Typography>
                </MenuItem>
                {/* <MenuItem
                  key={"Interactive"}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/interactive"
                >
                  <Typography textAlign="center">
                    Interactive Sessions
                  </Typography>
                </MenuItem>
                <MenuItem
                  key={"Abstracts"}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/abstracts"
                >
                  <Typography textAlign="center">Project Abstracts</Typography>
                </MenuItem> */}
                {/* <MenuItem
                  key={"About"}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/about"
                >
                  <Typography textAlign="center">About RVRC</Typography>
                </MenuItem> */}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <img
                src={logoIconWhite}
                alt="logo"
                style={{
                  width: "29px",
                  height: "32px",
                  paddingTop: "20px",
                  paddingRight: "10px",
                }}
              />
              <Button
                href="/"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Jost",
                  fontSize: "13pt",
                }}
              >
                Overview
              </Button>
              <Button
                href="/guest-of-honour"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Jost",
                  fontSize: "13pt",
                }}
              >
                Guest of Honour
              </Button>
              <Button
                href="/keynote"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Jost",
                  fontSize: "13pt",
                }}
              >
                Keynote Speaker
              </Button>
              {/* <Button
                href="/interactive"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Jost",
                  fontSize: "13pt",
                }}
              >
                Interactive Sessions
              </Button>
              <Button
                href="/abstracts"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Jost",
                  fontSize: "13pt",
                }}
              >
                Project Abstracts
              </Button> */}
              {/* <Button
                href="/about"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Jost",
                  fontSize: "13pt",
                }}
              >
                About RVRC
              </Button> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Header;
