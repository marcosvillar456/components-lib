import CardBuyLevel6 from "..";

export default {
  title: "MercadoLibre/Combo Plus/Card buy level 6",
  component: CardBuyLevel6,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    title: "¡Subscribed at level 6 with the best price!",
    offer: {
      price: {
        total_price: "$ 999",
        text_period: "/mes",
        full_price: "$ 2.500",
      },
      separator: true,
    },
    subtitle: "For being level 6 you have:",
    benefits: [
      {
        title: "Disney+ no fee",
        icon: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/circle-disney-plus@3x.png",
          alt: "Disney+",
        },
      },
      {
        title: "Star+ no fee",
        icon: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/circle-star-plus@3x.png",
          alt: "Star+",
        },
      },
      {
        title: "Many exclusive%% benefits",
        icon: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/benefits-lvl-6@3x.png",
          alt: "percentage",
        },
      },
    ],
    button: {
      label: "Subscribed at level 6",
    },
  },
};

export const Case_with_Two_Benefits = {
  args: {
    title: "¡Subscribed at level 6 with the best price!",
    offer: {
      price: {
        total_price: "$ 999",
        text_period: "/mes",
        full_price: "$ 2.500",
      },
      separator: true,
    },
    subtitle: "For being level 6 you have:",
    benefits: [
      {
        title: "Star+ no fee",
        icon: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/circle-star-plus@3x.png",
          alt: "Star+",
        },
      },
      {
        title: "Many exclusive%% benefits",
        icon: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/benefits-lvl-6@3x.png",
          alt: "percentage",
        },
      },
    ],
    button: {
      label: "Subscribed at level 6",
    },
  },
};

export const Case_with_One_Benefits = {
  args: {
    title: "¡Subscribed at level 6 with the best price!",
    offer: {
      price: {
        total_price: "$ 999",
        text_period: "/mes",
        full_price: "$ 2.500",
      },
      separator: true,
    },
    subtitle: "For being level 6 you have:",
    benefits: [
      {
        title: "Many exclusive%% benefits",
        icon: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/benefits-lvl-6@3x.png",
          alt: "percentage",
        },
      },
    ],
    button: {
      label: "Subscribed at level 6",
    },
  },
};
