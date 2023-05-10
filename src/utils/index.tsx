import breakLine from "./breakLine";

const Markdown = (text: string) => {
  let textField = text;

  textField = breakLine(textField);
  return <span dangerouslySetInnerHTML={{ __html: textField }} />;
};

export default Markdown;
