import ShippingBenefits from "..";
import type { ShippingBenefitsInterface } from "../types";
export default {
  title: "Nivel-6/Shipping-Benefits",
  component: ShippingBenefits,
  argTypes: {
    title: {
      control: "text",
    },
    benefits: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = (args: ShippingBenefitsInterface) => (
  <ShippingBenefits {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Beneficios en envíos",
  benefits: [
    {
      title: "Envíos gratis",
      subtitle: "En miles de productos desde $ 8.000",
      image: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/free-shipping@2x.jpg",
        alt: "envios",
      },
    },
    {
      title: "45% OFF en envíos",
      subtitle: "En miles de productos desde $ 8.000",
      image: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/shipping-discount@2x.jpg",
        alt: "envios",
      },
    },
  ],
};
