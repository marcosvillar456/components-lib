import type ImageInterface from "shared/Image/types";

interface benefitInterface {
  title: string;
  subtitle: string;
  image: ImageInterface;
}

interface ShippingBenefitsInterface {
  title: string;
  benefits: benefitInterface[];
}

export { ShippingBenefitsInterface, benefitInterface };
