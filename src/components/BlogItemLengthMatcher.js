const matcher = {
  inverseName: "noRemoveLengthAbove",
  propName: "removeLengthAbove",
  match(string) {
    const result = string.match(/^.{41,}$/);

    if (!result) {
      return null;
    }

    return {
      index: result.index,
      length: result[0].length,
      match: result[0].substring(12, 52) + "...",
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

export default matcher;
