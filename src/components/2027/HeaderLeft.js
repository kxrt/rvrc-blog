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
import logoIconWhite from "../../assets/logo-2027.png";
import { COLOURS } from "../../constants/Colours";
import AccordionMenuItem from "../header/AccordionMenuItem";

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
      <AppBar position="static" elevation={0} sx={{ bgcolor: COLOURS.brandPurple }}>
        <Container maxwidth="xl">
          <Toolbar disableGutters>
            <Stack
              direction="row"
              spacing={0}
              sx={{
                width: "100%",
                display: { md: "none" },
                justifyContent: "space-between",
              }}
            >
              <a href="/">
                <img
                  src={logoIconWhite}
                  alt="logo"
                  style={{ height: "128px", padding: "4px" }}
                />
              </a>
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
                    <Typography textAlign="center">{headerLink.label}</Typography>
                  </MenuItem>
                )
              )}
            </Menu>

            <Stack
              direction="row"
              sx={{
                width: "100%",
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "flex-start",
                px: 2,
                gap: 3,
              }}
            >
              <a href="/">
                <img
                  src={logoIconWhite}
                  alt="logo"
                  style={{
                    height: "120px",
                    padding: "0px",
                  }}
                />
              </a>

              <Stack
                direction="row"
                spacing={1}
                sx={{ flex: 1, justifyContent: "flex-start", flexWrap: "wrap" }}
              >
                {headerLinks.map((headerLink) => (
                  <Button
                    key={headerLink.key}
                    href={headerLink.link}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: COLOURS.white,
                      fontFamily: "Jost",
                      fontSize: "13pt",
                      whiteSpace: "nowrap",
                      minWidth: "auto",
                      px: 1,
                    }}
                  >
                    {headerLink.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Header;
