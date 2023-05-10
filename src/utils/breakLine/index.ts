const breakLine = (text: string) => {
  let textFixed = text;
  const expressionBreakLine = /%%/g;
  const found = text.match(expressionBreakLine)
    ? text.match(expressionBreakLine)
    : [];

  found.map(() => {
    return (textFixed = textFixed.replace("%%", "<br />"));
  });

  return textFixed;
};

export default breakLine;
