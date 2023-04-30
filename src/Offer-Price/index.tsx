import classNames from 'classnames';
import './styles/__index.scss';
export interface OfferPriceInterface {
  deviceType: string;
  price: {
    total_price?: string;
    cents?: string;
    text_period?: string;
    full_price: string;
  };
  discount_pill: {
    background_color: string;
    label: string;
    color: string;
  };
  separator: boolean;
  description?: {
    label: string;
    label_left: boolean;
  };
}

// interface PriceDiscountedPriceProps {
//   total: string;
//   cents: string;
//   period: string;
//   isDiscount: boolean;
// }

// function PriceDiscountedPrice({
//   total,
//   cents,
//   period,
//   isDiscount,
// }: any): JSX.Element {
//   return (
//     <div className='price-proposal-value__price'>
//       <div
//         className={classNames('price-proposal-value__price-total', {
//           'price-proposal-value__price-total-without-discount': isDiscount,
//         })}
//       >
//         {total}
//       </div>
//       {cents && (
//         <div className='price-proposal-value__price-cents'>{cents}</div>
//       )}
//       {period && (
//         <div className='price-proposal-value__price-period'>{period}</div>
//       )}
//     </div>
//   );
// }

const OfferPrice = ({
  deviceType,
  price,
  discount_pill,
  separator = true,
  description,
}: OfferPriceInterface): JSX.Element => {
  const { total_price, cents, text_period, full_price } = price;
  const sizePill = deviceType === 'desktop' ? 'large' : 'small';
  return (
    <div
      className={classNames('offer', {
        'offer--separator': separator,
      })}
    >
      {/* Renderiza el descuento */}
      {full_price && (
        <div className='offer-discount'>
          <span>{full_price}</span>
        </div>
      )}

      {/* Renderiza el precio con cents */}
      {total_price && (
        <div className='offer-price'>
          <span className='offer-price--total'>
            {total_price}
            {cents && <sup className='offer-price--cents'>{cents}</sup>}
          </span>
          {text_period && (
            <span className='offer-price--period'>{text_period}</span>
          )}
        </div>
      )}

      {description && (
        <div
          className={classNames('offer-description', {
            'offer-description--left': description.label_left,
          })}
        >
          {description.label}
        </div>
      )}
    </div>
  );
};

export default OfferPrice;
