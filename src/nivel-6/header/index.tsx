import OfferPrice from "home/Offer-Price";
import Image from "shared/Image";
import type { HeaderInterface, stylesInlineInterface } from "./types";
import "./styles/_index.scss";

const Header = ({
  title,
  subtitle,
  offer,
  benefits,
}: HeaderInterface): JSX.Element => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <h1 className="header__title">{title}</h1>
          <p className="header__subtitle">{subtitle}</p>
          <OfferPrice {...offer} separator={false} />
        </div>
        <div className="header__benefits">
          {benefits.map(({ icon, image, title, gradient }): JSX.Element => {
            const containerStyle: stylesInlineInterface = {
              "--primary_color": gradient.primary_color,
              "--secondary_color": gradient.secondary_color,
            };

            return (
              <div className="header__benefit">
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
