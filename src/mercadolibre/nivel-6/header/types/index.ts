import type { OfferPriceInterface } from "../../../../shared/Offer-Price/types";
import type ImageInterface from "../../../../shared/Image/types";
import type SubscriptionCTAInterface from "shared/subscription-cta/types";
interface stylesInlineInterface extends React.CSSProperties {
  "--primary_color": string;
  "--secondary_color": string;
}

interface BenefitInterface {
  gradient: {
    primary_color: string;
    secondary_color: string;
  };
  image: ImageInterface;
  icon: ImageInterface;
  title: string;
}

interface HeaderInterface {
  title: string;
  subtitle?: string;
  offer?: OfferPriceInterface;
  subscription: SubscriptionCTAInterface;
  benefits: BenefitInterface[];
}

export { HeaderInterface, stylesInlineInterface };
