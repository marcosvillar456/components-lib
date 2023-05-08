import Header from "..";
import type { HeaderInterface } from "../types";

export default {
  title: "Nivel 6/Header",
  component: Header,
};

const Template = (args: HeaderInterface): JSX.Element => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Subí directo al nivel 6",
  subtitle:
    "Suscribite y disfrutá los mejores beneficios a un precio increíble.",
  offer: {
    price: {
      full_price: "$ 1.499",
      text_period: "/mes",
      total_price: "$ 699",
    },
    discount_pill: {
      label: "53% OFF",
    },
  },
  subscription: {
    label: "Quiero suscribirme",
    disclaimer:
      "Al suscribirte, aceptás los Términos y condiciones de Mercado Puntos. Podés cancelar cuando quieras",
  },
  benefits: [
    {
      gradient: {
        primary_color: "#5A109C",
        secondary_color: "#921DE8",
      },
      image: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/ml-shipping-benefit@2x.jpg",
        alt: "Envíos gratis",
        width: 132,
        height: 256,
      },
      icon: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/shipping-logo@2x.png",
        alt: "Envíos gratis",
        width: 68,
        height: 28,
      },
      title: "ENVÍOS GRATIS O CON 45% OFF",
    },
    {
      gradient: {
        primary_color: "#030C40",
        secondary_color: "#030C40",
      },
      image: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/peter-pan-y-wendy@2x.jpg",
        alt: "Peter Pan y Wendy",
        width: 132,
        height: 256,
      },
      icon: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/logos/disney-logo@2x.png",
        alt: "Disney+",
        width: 68,
        height: 28,
      },
      title: "SIN CARGO",
    },
    {
      gradient: {
        primary_color: "#2E183D",
        secondary_color: "#A90D60 ",
      },
      image: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/premier_league@2x.jpg",
        alt: "Premier League",
        width: 132,
        height: 256,
      },
      icon: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/logos/star-plus-logo@2x.png",
        alt: "Star+",
        width: 68,
        height: 28,
      },
      title: "SIN CARGO",
    },
  ],
};
