import React from "react";
import { Box, Button } from "@mui/material";

const SignupButton = () => {
  return (
    <>
      <Box>
        <Button
          disableElevation
          variant="contained"
          onClick={() =>
            window.open("https://forms.office.com/r/AMJWqM5Dkt", "_black")
          }
          sx={{
            width: "250px",
            height: "75px",
            fontSize: "18px",
            backgroundColor: "#1d9077",
            color: "white",
            borderRadius: "16px",
            marginInline: "auto",
            marginBottom: "20px",
          }}
        >
          Click here to RSVP
        </Button>
      </Box>
    </>
  );
};

export default SignupButton;
