import type { PillInterface } from "shared/Pill/types";
import type ImageInterface from "../../../../shared/Image/types";

interface BenefitInterface {
  img: ImageInterface;
  title: string;
  subtitle: string;
}

interface MoreBenefitsInterface {
  title: string;
  pill: PillInterface;
  benefits: BenefitInterface[];
}

export { MoreBenefitsInterface, BenefitInterface };
