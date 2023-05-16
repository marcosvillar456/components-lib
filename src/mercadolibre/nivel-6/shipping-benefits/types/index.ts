import type I_Image from "../../../../shared/Image/types";

interface I_benefit {
  title: string;
  subtitle: string;
  image: I_Image;
}

interface I_ShippingBenefits {
  title: string;
  benefits: I_benefit[];
}

export type { I_ShippingBenefits, I_benefit };
