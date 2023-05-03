import PartnerBenefits from "..";
import type { PartnerBenefitsInterface } from "../types";

export default {
  title: "Nivel-6/Partners-Benefits",
  component: PartnerBenefits,
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

const Template = (args: PartnerBenefitsInterface) => (
  <PartnerBenefits {...args} />
);

export const Default = Template.bind({});

Default.args = {
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
};
