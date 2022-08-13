const BlogItemLengthCut = {
  inverseName: "noRemoveStart",
  propName: "removeStart",
  match(string) {
    const result = string.match(/[\s\S]*/);

    if (!result) {
      return null;
    }

    return {
      index: result.index,
      length: result[0].length,
      match:
        result[0].length > 53
          ? result[0].substring(13, 53) + "..."
          : result[0].substring(13, result[0].length - 1),
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

export default BlogItemLengthCut;
