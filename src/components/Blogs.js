import React, { useState } from "react";
import axios from "axios";
import { Interweave } from "interweave";
import { Button, Modal, Box, Typography, LinearProgress } from "@mui/material";

import BlogItem from "./BlogItem";
import parseDate from "./ParseDate";

const modalStyle = {
  position: "absolute",
  overflow: "scroll",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 2,
  width: "75%",
  height: "75%",
};

const Blogs = ({ number }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);

  axios
    .get(
      // URL prefix fixes CORS access issues
      "https://rvrc-blog-cors.herokuapp.com/https://blog.nus.edu.sg/geq1917symposium/wp-json/wp/v2/posts/?per_page=" + number
    )
    .then((res) => {
      setBlogs(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      {loading ? (
        <>
          <h1>Loading...</h1>
          <br />
          <LinearProgress color="secondary" sx={{ marginInline: "30px" }} />
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {blogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} setModal={setModal} />
            ))}
          </div>
          <Modal open={modal !== null} onClose={() => setModal(null)}>
            <Box sx={modalStyle}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "right",
                }}
              >
                <Button
                  onClick={() => setModal(null)}
                  sx={{ color: "#8821b5" }}
                >
                  CLOSE
                </Button>
              </Box>
              <Typography
                variant="h6"
                component="h2"
                fontFamily={"Jost"}
                fontWeight={"bold"}
              >
                {modal !== null ? (
                  // Format HTML to readable text
                  <Interweave content={modal.title.rendered} />
                ) : (
                  ""
                )}
              </Typography>
              <Typography sx={{ mt: 2, fontFamily: "Jost" }}>
                {modal !== null ? (
                  // Format HTML to readable text
                  <Interweave content={modal.content.rendered} />
                ) : (
                  ""
                )}
              </Typography>
              <Typography sx={{ mt: 2, fontFamily: "Jost" }}>
                {modal !== null ? (
                  <>
                    <b>Published:</b> {parseDate(modal.date.substring(0, 10))}
                  </>
                ) : (
                  ""
                )}
              </Typography>
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Blogs;
