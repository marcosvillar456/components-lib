import Pill from "..";

export default {
  title: "Shared/Pill",
  tags: ["autodocs"],
  component: Pill,
  argTypes: {
    text: {
      control: "object",
      fields: {
        label: { control: "text" },
        color: { control: "color" },
      },
      description:
        "The prop color is for defect <b>'#FFF'</b> and the prop label is required",
    },
    icon: {
      control: "object",
      fields: {
        src: { control: "text" },
        alt: { control: "text" },
        separator: { control: "boolean" },
      },
    },
    background: {
      control: { type: "color" },
    },
    card: { control: "boolean" },
  },
};

export const Default = {
  args: {
    text: {
      label: "Soy una Pill",
      color: "black",
    },
    icon: {
      src: "https://cdn-icons-png.flaticon.com/512/263/263100.png",
      alt: "icon",
      separator: true,
    },
    background: "rgba(0, 0, 0, 0.1)",
    card: false,
  },
};
