import type { I_OfferPrice } from "../../../../shared/Offer-Price/types";
import type I_Image from "../../../../shared/Image/types";

interface I_PlanList {
  title: string;
  items: {
    title: string;
    icon: I_Image;
    offer: I_OfferPrice;
  }[];
}

export default I_PlanList;
