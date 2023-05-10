import PlanList from "..";

export default {
  title: "Combo Plus/Plan List",
  component: PlanList,
};

export const Default = {
  args: {
    title: "More Subscriptions",
    items: [
      {
        title: "Disney+",
        icon: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/vdp/disney-brand@2x.png?v=1",
          alt: "Disney+",
        },
        offer: {
          price: {
            total_price: "$ 799",
            text_period: "  /mes",
          },
        },
      },
      {
        title: "Start+",
        icon: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/star-plus-brand@2x.jpg",
          alt: "Start+",
        },
        offer: {
          price: {
            total_price: "$ 799",
            text_period: "  /mes",
          },
        },
      },
    ],
  },
};
