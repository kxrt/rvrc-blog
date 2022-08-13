const parseDate = (date) => {
  const parsed = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return parsed.toLocaleDateString("en-US", options);
}

export default parseDate;