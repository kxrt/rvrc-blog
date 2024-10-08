import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const links = [
  // {
  //   title: 'AY 2015/16',
  //   href: 'http://blog.nus.edu.sg/gem1917/',
  // },
  // {
  //   title: 'AY 2016/17',
  //   href: 'https://blog.nus.edu.sg/geq1917/',
  // },
  // {
  //   title: 'AY 2017/18',
  //   href: 'https://blog.nus.edu.sg/geq2017/',
  // },
  {
    title: "AY 2018/19",
    href: "https://blog.nus.edu.sg/geq1917student2019/action-for-sustainability-symposium/",
  },
  {
    title: "AY 2019/20",
    href: "https://blog.nus.edu.sg/geq1917symposium/",
  },
  // {
  //   title: 'AY 2020/21',
  //   href: 'http://blog.nus.edu.sg/gem1917/',
  // },
  // {
  //   title: 'AY 2021/22',
  //   href: 'http://blog.nus.edu.sg/gem1917/',
  // },
  {
    title: "AY 2022/23",
    href: "http://rvrc-blog.vercel.app/2022",
  },
  {
    title: "AY 2023/24",
    href: "http://rvrc-blog.vercel.app/2024",
  },
];

const PastSymposia = () => {
  return (
    <>
      <Stack spacing={3} py="32px" px="10%" sx={{ backgroundColor: "#e1d0f5" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "20pt", md: "26pt" },
            color: "#592693",
          }}
        >
          Past Symposia
        </Typography>

        <Stack spacing={2} sx={{ alignItems: "center" }}>
          {links.map((item, i) => (
            <Button
              key={i}
              disableElevation
              variant="contained"
              onClick={() => window.open(item.href, "_blank")}
              sx={{
                width: "250px",
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
      </Stack>
    </>
  );
};

export default PastSymposia;
