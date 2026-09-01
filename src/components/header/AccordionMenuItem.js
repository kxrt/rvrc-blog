import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { COLOURS } from "../../constants/Colours";

const AccordionMenuItem = ({ label, sublinks }) => {
  return (
    <Accordion sx={{ border: 0, boxShadow: 0, bgcolor: COLOURS.brandPurple, color: COLOURS.white }}>
      <AccordionSummary
        expandIcon={<ExpandMore sx={{ color: COLOURS.white }} />}
        sx={{ justifyContent: "center", textAlign: "center" }}
      >
        <Typography sx={{ width: "100%", textAlign: "center" }}>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingY: 0 }}>
        {sublinks.map((sublink) => (
          <MenuItem
            key={sublink.key}
            // onClick={handleCloseNavMenu}
            component={Link}
            to={sublink.link}
            sx={{
              justifyContent: "center",
              textAlign: "center",
              color: COLOURS.white,
            }}
          >
            <Typography textAlign="center">{sublink.label}</Typography>
          </MenuItem>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionMenuItem;
