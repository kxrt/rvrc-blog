import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";

import menuIcon from "../../assets/bars-solid.svg";
import logoIconWhite from "../../assets/logo_icon_white.png";
import AccordionMenuItem from "./AccordionMenuItem";

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
            {/* Mobile */}
            <Stack
              direction="row"
              spacing={0}
              sx={{
                width: "100%",
                display: { md: "none" },
                justifyContent: "space-between",
              }}
            >
              <img
                src={logoIconWhite}
                alt="logo"
                style={{ height: "32px", padding: "20px" }}
              />
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <img src={menuIcon} alt="menu" />
              </IconButton>
            </Stack>

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
              {headerLinks.map((headerLink) =>
                headerLink.sublinks ? (
                  <AccordionMenuItem
                    key={headerLink.key}
                    label={headerLink.label}
                    sublinks={headerLink.sublinks}
                  />
                ) : (
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
                )
              )}
            </Menu>

            {/* Desktop */}
            <Stack
              direction="row"
              spacing={2}
              sx={{
                width: "100%",
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logoIconWhite}
                alt="logo"
                style={{
                  height: "32px",
                  padding: "20px",
                }}
              />
              {headerLinks.map((headerLink) => (
                <Button
                  key={headerLink.key}
                  href={headerLink.link}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "white",
                    fontFamily: "Jost",
                    fontSize: "13pt",
                  }}
                >
                  {headerLink.label}
                </Button>
              ))}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Header;
