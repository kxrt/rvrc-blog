import React, { useState } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  axios
    .get("https://blog.nus.edu.sg/geq1917symposium/wp-json/wp/v2/posts/", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
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
        <div>
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
