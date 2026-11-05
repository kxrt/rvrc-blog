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
        alignSelf: "center",
        textTransform: "none",
        fontSize: "16pt",
        backgroundColor: COLOURS.brandPurple,
        borderRadius: "16px",
        color: COLOURS.white,
        whiteSpace: "nowrap",
        ":hover": {
          backgroundColor: "#3e1b67",
        },
      }}
    >
      Register Here!
    </Button>
  );
};

export default SignupButton;
