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
            window.open("https://Tinyurl.com/RVRCSymposium2024", "_black")
          }
          sx={{
            fontFamily: "Jost",
            width: "250px",
            height: "75px",
            fontSize: "18px",
            backgroundColor: "#592693",
            color: "white",
            borderRadius: "16px",
            marginInline: "auto",
            marginBottom: "20px",
            ":hover": {
              backgroundColor: "#3e1b67",
            },
          }}
        >
          Sign up here now!
        </Button>
      </Box>
    </>
  );
};

export default SignupButton;
