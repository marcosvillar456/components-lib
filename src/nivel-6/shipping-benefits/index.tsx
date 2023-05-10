import Image from "../../shared/Image";
import Card from "../../shared/Card";
import Markdown from "../../utils";
import type { ShippingBenefitsInterface, benefitInterface } from "./types";
import "./styles/_shipping-benefits.scss";

const ShippingBenefits = ({
  title,
  benefits,
}: ShippingBenefitsInterface): JSX.Element => {
  return (
    <Card title={title}>
      <div className="benefits-shipping">
        {benefits.map((benefit: benefitInterface): JSX.Element => {
          return (
            <div className="benefit" key={benefit.title}>
              <div className="benefit__container">
                <p className="benefit__title">{benefit.title}</p>
                <p className="benefit__subtitle">
                  {Markdown(benefit.subtitle)}
                </p>
              </div>
              <Image
                src={benefit.image.src}
                alt={benefit.image.alt}
                className="benefit__image"
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ShippingBenefits;
