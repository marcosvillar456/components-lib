export interface OfferPriceInterface {
  price: {
    total_price?: string;
    cents?: string;
    text_period?: string;
    full_price: string;
  };
  discount_pill?: {
    label: string;
    color?: string;
  };
  separator: boolean;
  description?: {
    label: string;
    label_left: boolean;
  };
}
