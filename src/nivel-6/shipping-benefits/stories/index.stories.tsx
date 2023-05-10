import ShippingBenefits from "..";

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

export const One_benefits = {
  args: {
    title: "Beneficios en envíos",
    benefits: [
      {
        title: "Envíos gratis",
        subtitle: "En miles de productos%% desde $ 8.000",
        image: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/free-shipping@2x.jpg",
          alt: "envios",
        },
      },
    ],
  },
};

export const Two_benefits = {
  args: {
    title: "Beneficios en envíos",
    benefits: [
      {
        title: "Envíos gratis",
        subtitle: "En miles de productos%% desde $ 8.000",
        image: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/free-shipping@2x.jpg",
          alt: "envios 1",
        },
      },
      {
        title: "45% OFF en envíos",
        subtitle: "En miles de productos%% desde $ 8.000",
        image: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/shipping-discount@2x.jpg",
          alt: "envios 2 ",
        },
      },
    ],
  },
};

export const Three_benefits = {
  args: {
    title: "Beneficios en envíos",
    benefits: [
      {
        title: "Envíos gratis",
        subtitle: "En miles de productos%% desde $ 8.000",
        image: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/free-shipping@2x.jpg",
          alt: "envios 1",
        },
      },
      {
        title: "45% OFF en envíos",
        subtitle: "En miles de productos%% desde $ 8.000",
        image: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/shipping-discount@2x.jpg",
          alt: "envios 2 ",
        },
      },
      {
        title: "45% OFF en envíos",
        subtitle: "En miles de productos%% desde $ 8.000",
        image: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/shipping-discount@2x.jpg",
          alt: "envios 3",
        },
      },
    ],
  },
};

