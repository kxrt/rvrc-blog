import React, { useState } from "react";
import { Interweave } from "interweave";
import { Card } from "@mui/material";

const BlogItem = ({ blog }) => {
  const [show, setShow] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: 300,
        maxHeight: 400,
        minHeight: 400,
        margin: "10px",
      }}
    >
      <h1>
        <Interweave content={blog.title.rendered} />
      </h1>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show ? <Interweave content={blog.content.rendered} /> : ""}
    </Card>
  );
};

export default BlogItem;
