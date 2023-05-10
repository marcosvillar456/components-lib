import OfferPrice from "..";

export default {
  title: "Shared/OfferPrice",
  tags: ["autodocs"],
  component: OfferPrice,
  argTypes: {
    price: {
      control: "object",
      fields: {
        full_price: { control: "text" },
        cents: { control: "text" },
        text_period: { control: "text" },
        total_price: { control: "text" },
      },
    },
    discount_pill: {
      control: "object",
      fields: {
        label: { control: "text" },
        background_color: { control: "color" },
      },
      description:
        "Indicates if the offer have a discount.<br/> The prop <b>label</b> is text of pill and the prop color is for defect #008000 but you can send a color",
    },
    separator: {
      control: "boolean",
      defaultValue: true,
      description: "Indicates if a separator should be displayed",
    },
    description: {
      control: "object",
      fields: {
        label: { control: "text" },
        label_left: { control: "boolean" },
      },
    },
  },
};

export const Default = {
  args: {
    separator: true,
    price: {
      full_price: "$ 17.899",
      cents: "99",
      text_period: "/mes",
      total_price: "$ 50.690",
    },
    discount_pill: {
      label: "70% OFF",
      background_color: "#008000",
    },
    description: {
      label: "Description",
      label_left: false,
    },
  },
};

export const Secondary_case = {
  args: {
    separator: true,
    price: {
      full_price: "$ 17.899",
      cents: "99",
      text_period: "/mes",
      total_price: "$ 50.690",
    },
    discount_pill: {
      label: "70% OFF",
      background_color: "green",
    },
  },
};

export const Third_case = {
  args: {
    separator: true,
    price: {
      full_price: "$ 17.899",
      cents: "99",
      text_period: "/mes",
      total_price: "$ 50.690",
    },
  },
};

export const Quarter_case = {
  args: {
    separator: true,
    price: {
      cents: "99",
      text_period: "/mes",
      total_price: "$ 50.690",
    },
  },
};
