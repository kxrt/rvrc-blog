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
                  key={"Guest of Honour"}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/guest-of-honour"
                >
                  <Typography textAlign="center">Guest of Honour</Typography>
                </MenuItem>
                <MenuItem
                  key={"Keynote Speaker"}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/keynote"
                >
                  <Typography textAlign="center">Keynote Speaker</Typography>
                </MenuItem>
                <MenuItem
                  key={"Thematic Threads"}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/thematic-threads"
                >
                  <Typography textAlign="center">Thematic Threads</Typography>
                </MenuItem>
                <MenuItem
                  key={"Awards"}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/awards"
                >
                  <Typography textAlign="center">Awards</Typography>
                </MenuItem>
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
              <Button
                href="/thematic-threads"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Jost",
                  fontSize: "13pt",
                }}
              >
                Thematic Threads
              </Button>
              <Button
                href="/awards"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Jost",
                  fontSize: "13pt",
                }}
              >
                Awards
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Header;
