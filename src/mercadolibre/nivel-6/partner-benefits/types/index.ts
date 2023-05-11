import type ImageInterface from "../../../../shared/Image/types";

interface partnerInterface {
  offer: {
    label: string;
    discount: string;
  };
  title: string;
  logo: ImageInterface;
  image_background: string;
  index: number;
}

interface PartnerBenefitsInterface {
  title: string;
  partners: partnerInterface[];
}

export { PartnerBenefitsInterface, partnerInterface };
