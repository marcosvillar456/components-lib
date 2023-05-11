import PartnerBenefits from "..";

export default {
  title: "MercadoLibre/Nivel 6/Partners Benefits",
  component: PartnerBenefits,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    partners: {
      control: {
        type: "array",
        of: {
          type: "object",
          fields: {
            title: { type: "text" },
            offer: {
              type: "object",
              fields: {
                label: { type: "text" },
                discount: { type: "text" },
              },
            },
            image_background: { type: "text" },
            logo: {
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
    title: "Películas y series",
    partners: [
      {
        title: "HBO Max",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mla_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 1",
        },
      },
    ],
  },
};

export const Two_benefits = {
  args: {
    title: "Películas y series",
    partners: [
      {
        title: "HBO Max",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mla_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 1",
        },
      },
      {
        title: "Paramount+",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_argentina_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 2",
        },
      },
    ],
  },
};

export const Three_benefits = {
  args: {
    title: "Películas y series",
    partners: [
      {
        title: "HBO Max",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mla_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 1",
        },
      },
      {
        title: "Paramount+",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_argentina_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 2",
        },
      },
      {
        title: "Paramount+",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_argentina_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 2",
        },
      },
    ],
  },
};

export const Four_benefits = {
  args: {
    title: "Películas y series",
    partners: [
      {
        title: "HBO Max",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mla_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 1",
        },
      },
      {
        title: "Paramount+",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_argentina_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 2",
        },
      },
      {
        title: "Paramount+",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_argentina_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 3",
        },
      },
      {
        title: "Paramount+",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_argentina_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 4",
        },
      },
    ],
  },
};

export const Five_benefits = {
  args: {
    title: "Películas y series",
    partners: [
      {
        title: "HBO Max",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mla_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 1",
        },
      },
      {
        title: "HBO Max",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mla_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 2",
        },
      },
      {
        title: "Paramount+",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_argentina_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 3",
        },
      },
      {
        title: "Paramount+",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_argentina_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 4",
        },
      },
      {
        title: "Paramount+",
        offer: {
          label: "7 DÍAS GRATIS",
          discount: "50% OFF",
        },
        image_background:
          "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_argentina_@1x.jpg",
        logo: {
          src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
          alt: "logo 5",
        },
      },
    ],
  },
};
