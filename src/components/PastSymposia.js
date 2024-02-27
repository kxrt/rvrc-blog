import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import links from "./PastLinks";

const PastSymposia = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#e1d0f5" }}>
        <div style={{ paddingInline: "10%", paddingBlock: "30px" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "20pt", md: "26pt" },
              fontFamily: "Jost",
              color: "#592693",
            }}
          >
            Past Symposia
          </Typography>
          <Stack spacing={2} sx={{ marginTop: "20px", alignItems: "center" }}>
            {links.map((item) => (
              <Button
                disableElevation
                variant="contained"
                onClick={() => window.open(item.href, "_black")}
                sx={{
                  width: "250px",
                  fontFamily: "Jost",
                  fontSize: "12px",
                  backgroundColor: "transparent",
                  color: "#592693",
                  borderRadius: "16px",
                  border: "1px solid #592693",
                  ":hover": {
                    backgroundColor: "#592693",
                    color: "white",
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Stack>
        </div>
      </Box>
    </>
  );
};

export default PastSymposia;
