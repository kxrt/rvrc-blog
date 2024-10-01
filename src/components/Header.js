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

import menuicon from "../assets/bars-solid.svg";
import logoIconWhite from "../assets/logo_icon_white.png";

const Header = ({ headerLinks }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
                {headerLinks.map((headerLink) => (
                  <MenuItem
                    key={headerLink.key}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={headerLink.link}
                  >
                    <Typography textAlign="center">
                      {headerLink.label}
                    </Typography>
                  </MenuItem>
                ))}
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
              {headerLinks.map((headerLink) => (
                <Button
                  key={headerLink.key}
                  href={headerLink.link}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Jost",
                    fontSize: "13pt",
                  }}
                >
                  {headerLink.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Header;
