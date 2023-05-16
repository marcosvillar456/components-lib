import OfferPrice from "../../../shared/Offer-Price";
import Image from "../../../shared/Image";
import SubscriptionCTA from "../../../shared/subscription-cta";
import type { I_Header, I_StylesInline } from "./types";
import "./styles/_index.scss";

const Header = ({
  title,
  subtitle,
  offer,
  benefits,
  subscription,
}: I_Header): JSX.Element => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <div className="header__title-container">
            <h1 className="header__title">{title}</h1>
            {subtitle && <p className="header__subtitle">{subtitle}</p>}
            {offer && <OfferPrice {...offer} separator={false} />}
          </div>
          <SubscriptionCTA {...subscription} />
        </div>
        <div className="header__benefits">
          {benefits.map(({ icon, image, title, gradient }): JSX.Element => {
            const containerStyle: I_StylesInline = {
              "--primary_color": gradient.primary_color,
              "--secondary_color": gradient.secondary_color,
            };

            return (
              <div className="header__benefit" key={image.alt}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width ?? 132}
                  height={image.height ?? 256}
                  className="header__benefit-image"
                />
                <div className="header__benefit-box" style={containerStyle}>
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width ?? 68}
                    height={icon.height ?? 28}
                    className="header__benefit-icon"
                  />
                  <p className="header__benefit-box-title">{title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
