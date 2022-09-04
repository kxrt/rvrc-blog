const BlogItemTitleShorten = {
  inverseName: "noRemoveStart",
  propName: "removeStart",
  match(string) {
    // Matches every string to catch every header
    const result = string.match(/[\s\S]*/);

    if (!result) {
      return null;
    }

    return {
      index: result.index,
      length: result[0].length,
      match:
        // Limit for length
        result[0].length > 40 
          ? // 13 is the length of the AY code + "
            result[0].substring(0, 40) + "..."
          : // Remove trailing "
            result[0],
      valid: true,
    };
  },
  createElement(children, props) {
    return <span {...props}>{children}</span>;
  },
  asTag() {
    return "span";
  },
};

export default BlogItemTitleShorten;
