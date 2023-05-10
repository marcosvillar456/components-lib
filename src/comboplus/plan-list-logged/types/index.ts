import type { OfferPriceInterface } from "shared/Offer-Price/types";
import type ImageInterface from "shared/Image/types";

interface PlanListInterface {
  title: string;
  items: {
    title: string;
    icon: ImageInterface;
    offer: OfferPriceInterface;
  }[];
}

export default PlanListInterface;
