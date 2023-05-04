import "./styles/__index.scss";
import Card from "../../shared/Card";
import Image from "../../shared/Image";
import type { MoreBenefitsInterface, BenefitInterface } from "./types";

const MoreBenefits = ({
  title,
  pill,
  benefits,
}: MoreBenefitsInterface): JSX.Element => {
  return (
    <Card title={title} pill={pill}>
      <div className="benefits">
        {benefits.map(
          ({ title, subtitle, img }: BenefitInterface): JSX.Element => (
            <div key={title} className="benefit">
              <Image
                src={img.src}
                alt={img.alt}
                height={88}
                width={64}
                className="benefit-image"
              />
              <div className="benefit-container">
                <h1 className="benefit-container__title">{title}</h1>
                <p className="benefit-container__subtitle">{subtitle}</p>
              </div>
            </div>
          )
        )}
      </div>
    </Card>
  );
};

export default MoreBenefits;
