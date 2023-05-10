import type { OfferPriceInterface } from "shared/Offer-Price/types";
import type ImageInterface from "shared/Image/types";

interface BenefitsInterface {
  icon: ImageInterface;
  title: string;
}

interface CardBuyLevel6Interface {
  title: string;
  subtitle: string;
  offer: OfferPriceInterface;
  benefits: BenefitsInterface[];
  button: {
    label: string;
  };
}

interface stylesInlineInterface extends React.CSSProperties {
  "--cants-benefits": number;
}

export { CardBuyLevel6Interface, stylesInlineInterface };
