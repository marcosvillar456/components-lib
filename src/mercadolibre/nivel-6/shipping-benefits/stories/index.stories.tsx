import ShippingBenefits from "..";

export default {
  title: "MercadoLibre/Nivel-6/Shipping-Benefits",
  component: ShippingBenefits,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Title of Benefit",
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
      description: "Array of Benefits, which is composed of a title, subtitle, and an img object with props src and alt.",

    },
  },
};

export const One_benefits = {
  args: {
    title: "Benefits shippings",
    benefits: [
      {
        title: "Free Shipping ",
        subtitle: "In thousands of products%% from $ 8.000",
        image: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/free-shipping@2x.jpg",
          alt: "Shipping",
        },
      },
    ],
  },
};

export const Two_benefits = {
  args: {
    title: "Benefits shippings",
    benefits: [
      {
        title: "Free Shipping ",
        subtitle: "In thousands of products%% from $ 8.000",
        image: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/free-shipping@2x.jpg",
          alt: "Shipping 1",
        },
      },
      {
        title: "45% OFF on shipments",
        subtitle: "In thousands of products%% from $ 8.000",
        image: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/shipping-discount@2x.jpg",
          alt: "shipping 2",
        },
      },
    ],
  },
};

export const Three_benefits = {
  args: {
    title: "Benefits shipping",
    benefits: [
      {
        title: "Free Shipping ",
        subtitle: "In thousands of products%% from $ 8.000",
        image: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/free-shipping@2x.jpg",
          alt: "Shipping 1",
        },
      },
      {
        title: "45% OFF on shipments",
        subtitle: "In thousands of products%% from $ 8.000",
        image: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/shipping-discount@2x.jpg",
          alt: "Shipping 2 ",
        },
      },
      {
        title: "45% OFF on shipments",
        subtitle: "In thousands of products%% from $ 8.000",
        image: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/shipping-discount@2x.jpg",
          alt: "Shipping 3",
        },
      },
    ],
  },
};
