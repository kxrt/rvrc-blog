import React, { useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  axios
    .get("https://blog.nus.edu.sg/geq1917symposium/wp-json/wp/v2/posts/")
    .then((res) => {
      setBlogs(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(blogs);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <h1>{blog.title.rendered}</h1>
              <p>{blog.excerpt.rendered}</p>
              <p>{blog.content.rendered}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
