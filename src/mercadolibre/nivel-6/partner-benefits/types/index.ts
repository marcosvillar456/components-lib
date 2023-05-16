import type I_Image from "../../../../shared/Image/types";

interface I_partner {
  offer: {
    label: string;
    discount: string;
  };
  title: string;
  logo: I_Image;
  image_background: string;
}

interface I_PartnerBenefits {
  title: string;
  partners: I_partner[];
}

export type { I_PartnerBenefits, I_partner };
