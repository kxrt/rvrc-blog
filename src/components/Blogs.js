import { useState } from "react";
import { Interweave } from "interweave";
import { Button, Modal, Box, Typography } from "@mui/material";

import BlogItem from "./BlogItem";
import parseDate from "./ParseDate";
import blogData from "../constants/2022/BlogData";

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

const Blogs = () => {
  const [blogs] = useState(blogData);
  const [modal, setModal] = useState(null);

  return (
    <div>
      {(
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
