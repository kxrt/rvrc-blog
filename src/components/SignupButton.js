import React from "react";
import { Button } from "@mui/material";

const SignupButton = ({ link }) => {
  return (
    <Button
      variant="contained"
      href={link}
      target="_blank"
      sx={{
        textTransform: "none",
        fontSize: "16pt",
        backgroundColor: "#592693",
        borderRadius: "16px",
        color: "white",
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
