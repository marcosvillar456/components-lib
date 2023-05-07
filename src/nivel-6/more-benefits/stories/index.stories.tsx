import MoreBenefits from "..";
import type { MoreBenefitsInterface } from "../types";

export default {
  title: "Nivel 6/More Benefits",
  component: MoreBenefits,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    pill: {
      control: {
        type: "object",
        fields: {
          card: { type: "boolean" },
          text: {
            type: "object",
            fields: {
              label: { type: "text" },
            },
          },
          background: { type: "color" },
        },
      },
    },
    benefits: {
      control: {
        type: "array",
        of: {
          type: "object",
          fields: {
            title: { type: "text" },
            subtitle: { type: "text" },
            img: {
              type: "object",
              fields: {
                src: { type: "text" },
                alt: { type: "text" },
              },
            },
          },
        },
      },
    },
  },
};

const Template = (args: MoreBenefitsInterface): JSX.Element => (
  <MoreBenefits {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Películas y series",
  pill: {
    card: true,
    text: {
      label: "50% OFF",
    },
    background: "#00A650",
  },

  benefits: [
    {
      title: "Ofertas exclusivas",
      subtitle: "Descuentos especiales en tus compras",
      img: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/platform-benefits/exclusive-deals-ml@2x.png",
        alt: "Ofertas exclusivas",
      },
    },
    {
      title: "Descuentos sorpresa",
      subtitle: "Todos los meses en tus marcas favoritas",
      img: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/platform-benefits/surprise-discount-ml@2x.png",
        alt: "Descuentos sorpresa",
      },
    },
  ],
};
