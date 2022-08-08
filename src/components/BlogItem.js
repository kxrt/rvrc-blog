import React, { useState } from "react";
import { Markup } from "interweave";

const BlogItem = ({ blog }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>{blog.title.rendered}</h1>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show ? <Markup content={blog.content.rendered} /> : ""}
    </div>
  );
};

export default BlogItem;
