import type { CardBuyLevel6Interface, stylesInlineInterface } from "./types";
import OfferPrice from "shared/Offer-Price";
import Image from "shared/Image";
import Markdown from "utils";
import "./styles/_index.scss";
import { useState } from "react";

const CardBuyLevel6 = ({
  title,
  subtitle,
  offer,
  benefits,
  button,
}: CardBuyLevel6Interface) => {
  const [row, setrow] = useState(1);
  const totalBenefits = benefits.length;
  const containerStyle: stylesInlineInterface = {
    "--cants-benefits": totalBenefits,
  };

  return (
    <div className="card-buy-level-6">
      <div className="card-buy-level-6__header">
        <p className="card-buy-level-6__title">{title}</p>
        <OfferPrice price={offer.price} separator={offer.separator} />
      </div>
      <div className="card-buy-level-6__body">
        <p className="card-buy-level-6__subtitle">{subtitle}</p>
        <section className="card-buy-level-6__benefits" style={containerStyle}>
          {benefits.map(({ title, icon }) => {
            return (
              <div className="card-buy-level-6__benefit" key={title}>
                <Image {...icon} className="card-buy-level-6__benefit-icon" />
                <p className="card-buy-level-6__benefit-title">
                  {Markdown(title)}
                </p>
              </div>
            );
          })}
        </section>
      </div>
      <div className="card-buy-level-6__cta">
        <button>{button.label}</button>
      </div>
    </div>
  );
};

export default CardBuyLevel6;
