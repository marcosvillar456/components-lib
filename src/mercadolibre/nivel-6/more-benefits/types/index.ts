import type { I_Pill } from "../../../../shared/Pill/types";
import type I_Image from "../../../../shared/Image/types";

interface I_benefit {
  img: I_Image;
  title: string;
  subtitle: string;
}

interface I_MoreBenefits {
  title: string;
  pill: I_Pill;
  benefits: I_benefit[];
}

export type { I_MoreBenefits, I_benefit };
