import Card from "..";
import type CardInterface from "../types";

export default {
  title: "Shared/Card",
  component: Card,
  argTypes: {
    title: {
      control: "text",
    },
    pill: {
      control: "object",
    },
  },
};

const Template = (args: CardInterface) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Soy la Card",
  pill: {
    text: {
      label: "Soy la Pill",
    },
    background: "green",
  },
  children: (
    <div style={{ textAlign: "center" }}>
      <h1>Aca va mi hijo</h1>
    </div>
  ),
};
