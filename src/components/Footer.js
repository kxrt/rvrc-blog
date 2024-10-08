import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Box py="32px" px="10%" sx={{ background: "#592693", color: "white" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 0 }}
          sx={{
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "none", md: "space-evenly" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "left",
              color: "white",
              fontSize: "24pt",
              fontWeight: "Bold",
              maxWidth: { xs: "none", md: "200px" },
            }}
          >
            RVRC Symposium 2025
          </Typography>

          <Stack sx={{ alignItems: { xs: "center", md: "flex-start" } }}>
            <Typography mb="10px" sx={{ fontWeight: "bold" }}>
              Address
            </Typography>
            <Typography>25 Lower Kent Ridge Road</Typography>
            <Typography>Block G, Level 3</Typography>
            <Typography>Singapore 119081</Typography>
          </Stack>
          <Stack sx={{ alignItems: { xs: "center", md: "flex-start" } }}>
            <Typography mb="10px" sx={{ fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Stack direction="row" spacing={3}>
              <EmailOutlined sx={{ color: "white" }} />
              <Typography>askrvrc@nus.edu.sg</Typography>
            </Stack>
            <Stack direction="row" spacing={3}>
              <PhoneOutlined sx={{ color: "white" }} />
              <Typography>(+65) 6601 3886</Typography>
            </Stack>
            {/* <List>
              <ListItem disablePadding>
                <ListItemIcon></ListItemIcon>
                askrvrc@nus.edu.sg
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <PhoneOutlined sx={{ color: "white" }} />
                </ListItemIcon>
                (+65) 6601 3886
              </ListItem>
            </List> */}
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
