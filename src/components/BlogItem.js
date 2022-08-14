import React from "react";
import { Interweave } from "interweave";
import { Button, Card, CardActions, Typography } from "@mui/material";

import BlogItemLengthCut from "./BlogItemLengthCut";
import parseDate from "./ParseDate";

const BlogItem = ({ blog, setModal }) => {
  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: 300,
        minWidth: 300,
        maxHeight: 200,
        minHeight: 200,
        margin: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        // backgroundColor: "#8821b5",
        border: "1px dashed #8821b5",
      }}
    >
      <Typography
        style={{
          margin: "20px",
          fontSize: "18px",
          color: "#8821b5",
          // color: "white",
          fontWeight: "bold",
          fontFamily: "Jost",
        }}
      >
        {/* Format HTML to readable text */}
        <Interweave
          content={blog.title.rendered}
          matchers={[BlogItemLengthCut]}
        />
      </Typography>
      <Typography
        style={{ fontSize: "14px", color: "#8821b5", fontFamily: "Jost" }}
      >
        {parseDate(blog.modified.substring(0, 10))}
      </Typography>
      <CardActions>
        <Button
          variant="outlined"
          onClick={() => setModal(blog)}
          size="small"
          style={{
            marginBottom: "20px",
            color: "#8821b5",
            // color: "white",
            borderColor: "#8821b5",
            // borderColor: "white",
            fontFamily: "Jost",
          }}
        >
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogItem;
