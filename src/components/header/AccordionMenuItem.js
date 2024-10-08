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

const AccordionMenuItem = ({ label, sublinks }) => {
  return (
    <Accordion sx={{ border: 0, boxShadow: 0 }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingY: 0 }}>
        {sublinks.map((sublink) => (
          <MenuItem
            key={sublink.key}
            // onClick={handleCloseNavMenu}
            component={Link}
            to={sublink.link}
          >
            <Typography>{sublink.label}</Typography>
          </MenuItem>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionMenuItem;
