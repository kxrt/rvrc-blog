import React, { useState } from "react";
import axios from "axios";
import { Modal, Box, Typography } from "@mui/material";

import BlogItem from "./BlogItem";

const modalStyle = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 2,
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);

  axios
    .get(
      "https://rvrc-blog-cors.herokuapp.com/https://blog.nus.edu.sg/geq1917symposium/wp-json/wp/v2/posts/?per_page=100"
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
        <h1>Loading...</h1>
      ) : (
        <>
        {/* <Modal
        open={modal !== null}
        onClose={setModal(null)}
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
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
        </>
      )}
    </div>
  );
};

export default Blogs;
