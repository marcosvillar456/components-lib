import Image from "../../shared/Image";
import Card from "../../shared/Card";

import type { ShippingBenefitsInterface, benefitInterface } from "./types";
import "./styles/__index.scss";

const ShippingBenefits = ({
  title,
  benefits,
}: ShippingBenefitsInterface): JSX.Element => {
  return (
    <Card title={title}>
      <div className="benefits-shipping">
        {benefits.map((benefit: benefitInterface): JSX.Element => {
          return (
            <div className="benefit-card" key={benefit.title}>
              <div className="benefit-card-container">
                <p className="benefit-card-container__title">{benefit.title}</p>
                <p className="benefit-card-container__subtitle">
                  {benefit.subtitle}
                </p>
              </div>
              <Image
                src={benefit.image.src}
                alt={benefit.image.alt}
                className="benefit-card-image"
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ShippingBenefits;
