import React from "react";
import { Button } from "@mui/material";
import { COLOURS } from "../../constants/Colours";

const SignupButton = ({ link }) => {
  return (
    <Button
      variant="contained"
      href={link}
      target="_blank"
      sx={{
        textTransform: "none",
        fontSize: "16pt",
        backgroundColor: COLOURS.brandPurple,
        borderRadius: "16px",
        color: COLOURS.white,
        ":hover": {
          backgroundColor: "#3e1b67",
        },
      }}
    >
      Register Now!
    </Button>
  );
};

export default SignupButton;
