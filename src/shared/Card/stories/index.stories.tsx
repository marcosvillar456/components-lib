import Card from "..";

export default {
  title: "Shared/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    pill: {
      control: "object",
      fields: {
        text: {
          control: "object",
          field: {
            label: { control: "text" },
          },
        },
        background: { control: "color" },
      },
    },
  },
};

export const Default = {
  args: {
    title: "I am a Card",
    pill: {
      text: {
        label: "I am a Pill",
      },
      background: "green",
    },
    children: (
      <div style={{ textAlign: "center" }}>
        <h1>Here goes my son</h1>
      </div>
    ),
  },
};
