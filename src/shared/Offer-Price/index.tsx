import "./styles/_index.scss";
import classNames from "classnames";
import type { OfferPriceInterface } from "./types";
import Pill from "../Pill";

const OfferPrice = ({
  price,
  discount_pill,
  separator,
  description,
}: OfferPriceInterface): JSX.Element => {
  const { total_price, cents, text_period, full_price } = price;

  return (
    <div
      className={classNames("offer", {
        "offer--separator": separator,
      })}
    >
      {full_price && (
        <div
          className={classNames("offer__discount", {
            "offer__discount--pill": discount_pill,
          })}
        >
          <span className="offer__discount--strike">{full_price}</span>
          {discount_pill && (
            <Pill
              text={{ label: discount_pill.label }}
              background={discount_pill.color ?? "#008000"}
            />
          )}
        </div>
      )}

      {total_price && (
        <div className="offer__price">
          <span className="offer__total">
            {total_price}
            {cents && <sup className="offer__cents">{cents}</sup>}
          </span>
          {text_period && <span className="offer__period">{text_period}</span>}
        </div>
      )}

      {description && (
        <div
          className={classNames("offer__description", {
            "offer__description--left": description.label_left,
          })}
        >
          {description.label}
        </div>
      )}
    </div>
  );
};

export default OfferPrice;
