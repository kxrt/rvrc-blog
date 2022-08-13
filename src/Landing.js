import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

import Blogs from "./components/Blogs";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Landing = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#8821b5",
            },
          }}
          variant="scrollable"
        >
          <Tab
            label="Overview"
            {...a11yProps(0)}
            style={{ color: value === 0 ? "#8821b5" : "gray" }}
          />
          <Tab
            label="Keynote Speaker"
            {...a11yProps(1)}
            style={{ color: value === 1 ? "#8821b5" : "gray" }}
          />
          <Tab
            label="Interactive Speaker"
            {...a11yProps(2)}
            style={{ color: value === 2 ? "#8821b5" : "gray" }}
          />
          <Tab
            label="Project Abstracts"
            {...a11yProps(3)}
            style={{ color: value === 3 ? "#8821b5" : "gray" }}
          />
          <Tab
            label="About RVRC"
            {...a11yProps(4)}
            style={{ color: value === 4 ? "#8821b5" : "gray" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography
          sx={{ color: "#8821b5", fontSize: "20pt", fontWeight: "bold" }}
        >
          RVRC Symposium 2022
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Blogs />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </div>
  );
};

export default Landing;
