import type { I_OfferPrice } from "../../../../shared/Offer-Price/types"; 
import type I_Image from "../../../../shared/Image/types";

interface I_Benefit {
  icon: I_Image;
  title: string;
}

interface I_CardBuyLevel6 {
  title: string;
  subtitle: string;
  offer: I_OfferPrice;
  benefits: I_Benefit[];
  button: {
    label: string;
  };
}

interface I_StylesInline extends React.CSSProperties {
  "--cants-benefits": number;
}

export { I_CardBuyLevel6, I_StylesInline };
