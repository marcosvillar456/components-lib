import Image from "../../../shared/Image";
import Card from "../../../shared/Card";
import type { I_PartnerBenefits, I_partner } from "./types";
import classNames from "classnames";
import "./styles/__index.scss";

const PartnerBenefits = ({
  title,
  partners,
}: I_PartnerBenefits): JSX.Element => {
  return (
    <Card title={title}>
      <div className={classNames("partners-benefits")}>
        {partners.map(
          ({
            offer,
            title,
            image_background,
            logo,
          }: I_partner): JSX.Element => {
            return (
              <div className="benefit" key={logo.alt}>
                <Image
                  src={image_background}
                  alt="hbo"
                  height={48}
                  width={48}
                  className="benefit__background"
                />
                <div className="benefit__container">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    height={48}
                    width={48}
                    className="benefit__logo"
                  />
                  <div className="benefit__offer">
                    <p className="benefit__period">{offer.label}</p>
                    <p className="benefit__discount">{offer.discount}</p>
                    <p className="benefit__partner">{title}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </Card>
  );
};

export default PartnerBenefits;
