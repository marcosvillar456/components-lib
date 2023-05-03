import type ImageInterface from "../../Image/types";

interface stylesInlineInterface extends React.CSSProperties {
  "--background-pill": string;
  "--text-color-pill": string;
}

interface iconInterface extends ImageInterface {
  separator: boolean;
}

interface PillInterface {
  icon?: iconInterface;
  card?: boolean;
  text: {
    label: string;
    color?: string;
  };
  background: string;
}

export { PillInterface, stylesInlineInterface };
