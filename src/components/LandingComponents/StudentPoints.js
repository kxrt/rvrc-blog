import React from "react";
import { Box, Typography, Zoom } from "@mui/material";
import {
  ForestOutlined,
  LibraryBooksOutlined,
  SchoolOutlined,
  TungstenOutlined,
} from "@mui/icons-material";
import { useInView } from "react-intersection-observer";

const points = [
  {
    desc: "Share their ideas, reflections, and learning from the RVRCP Modules.",
    icon: <TungstenOutlined fontSize="60pt" />,
  },
  {
    desc: "Engage in academic conversations about their RVRC learning experience.",
    icon: <LibraryBooksOutlined fontSize="large" />,
  },
  {
    desc: "Demonstrate, through projects relevant to real-world contexts, how the “world as our classroom” impacted their learning.",
    icon: <SchoolOutlined fontSize="large" />,
  },
  {
    desc: "Identify relevant opportunities to apply classroom learning to impact the real-world.",
    icon: <ForestOutlined fontSize="large" />,
  },
];

const StudentPoints = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  return (
    <>
      <p style={{ fontSize: "16pt", paddingInline: "10%" }}>
        The Ridge View Residential College (RVRC) Symposium 2022{" "}
        <b style={{ color: "#1d9077" }}>
          ‘Learning to Learn: The World as our Classroom’
        </b>{" "}
        was held on 19 September 2022. It showcased exemplary student work
        nominated from the new Ridge View Residential College Programme (RVRCP)
        launched in Academic Year 21/22. It provided a learner-centric
        platform for students to:
      </p>
      <Box ref={ref}></Box>
      <Zoom in={inView} style={{ transitionDelay: "100ms" }}>
        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {points.map((point, index) => (
            <>
              <Box
                key={index}
                sx={{
                  bgcolor: "#e1d0f5",
                  borderRadius: "16px",
                  minWidth: "250px",
                  maxWidth: "250px",
                  minHeight: "250px",
                  maxHeight: "250px",
                  marginInline: "20px",
                  marginBlock: "10px",
                  boxShadow: "1px 2px 15px 1px rgba(89,38,147,0.15)",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "190pt",
                    fontWeight: "bold",
                    color: "rgba(89,38,147,0.08)",
                    position: "absolute",
                    right: "50px",
                    bottom: "-70px",
                  }}
                >
                  {index + 1}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "30pt",
                    paddingTop: "20px",
                    color: "#592693",
                  }}
                >
                  {point.icon}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "14pt",
                    paddingBottom: "15px",
                    paddingInline: "15px",
                    paddingTop: "5px",
                  }}
                >
                  {point.desc}
                </Typography>
              </Box>
            </>
          ))}
        </Box>
      </Zoom>
    </>
  );
};

export default StudentPoints;
