import type { I_OfferPrice } from "../../../../shared/Offer-Price/types";
import type I_Image from "../../../../shared/Image/types";
import type I_SubscriptionCTA from "../../../../shared/subscription-cta/types";
interface I_StylesInline extends React.CSSProperties {
  "--primary_color": string;
  "--secondary_color": string;
}

interface I_benefit {
  gradient: {
    primary_color: string;
    secondary_color: string;
  };
  image: I_Image;
  icon: I_Image;
  title: string;
}

interface I_Header {
  title: string;
  subtitle?: string;
  offer?: I_OfferPrice;
  subscription: I_SubscriptionCTA;
  benefits: I_benefit[];
}

export type { I_Header, I_StylesInline };
