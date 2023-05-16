import type I_Image from "../../Image/types";

interface I_StylesInline extends React.CSSProperties {
  "--background-pill": string;
  "--text-color-pill": string;
}

interface I_Icon extends I_Image {
  separator: boolean;
}

interface I_Pill {
  icon?: I_Icon;
  card?: boolean;
  text: {
    label: string;
    color?: string;
  };
  background: string;
}

export { I_Pill, I_StylesInline };
