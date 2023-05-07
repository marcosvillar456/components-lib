import type { OfferPriceInterface } from "home/Offer-Price/types";
import type ImageInterface from "shared/Image/types";

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
  subtitle: string;
  offer: OfferPriceInterface;
  benefits: BenefitInterface[];
}

export { HeaderInterface, stylesInlineInterface };
