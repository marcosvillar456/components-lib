import Pill from "..";
import type { PillInterface } from "../types";

export default {
  title: "Shared/Pill",
  component: Pill,
  argTypes: {
    text: {
      control: "object",
      fields: {
        label: { control: "text" },
        color: { control: "color" },
      },
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

const Template = (args: PillInterface) => <Pill {...args} />;

export const Default = Template.bind({});

Default.args = {
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
};
