import './styles/__index.scss';
import classNames from 'classnames';
import type { OfferPriceInterface } from './types';
import Pill from '../../shared/Pill';

const OfferPrice = ({
  price,
  discount_pill,
  separator,
  description,
}: OfferPriceInterface): JSX.Element => {
  const { total_price, cents, text_period, full_price } = price;

  return (
    <div
      className={classNames('offer', {
        'offer--separator': separator,
      })}
    >
      {full_price && (
        <div
          className={classNames('offer-discount', {
            'offer-discount--pill': discount_pill,
          })}
        >
          <span className='offer-discount--strike'>{full_price}</span>
          {discount_pill && (
            <Pill text={{ label: discount_pill.label }} background='green' />
          )}
        </div>
      )}

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
