import "./styles/_index.scss";
import Image from "../Image";
import classNames from "classnames";
import type { PillInterface, stylesInlineInterface } from "./types";

const Pill = ({
  icon,
  text: { label, color = "#FFF" },
  background,
  card = false,
}: PillInterface): JSX.Element => {
  const containerStyle: stylesInlineInterface = {
    "--background-pill": background,
    "--text-color-pill": color,
  };

  return (
    <div
      className={classNames("pill", {
        "pill--icon": !!icon,
        "pill--card": card,
      })}
      style={containerStyle}
    >
      {icon && (
        <Image
          alt={icon.alt}
          src={icon.src}
          className={classNames("pill__image", {
            "pill__image--separator": !!icon.separator,
          })}
        />
      )}
      <p className="pill__text">{label}</p>
    </div>
  );
};

Pill.defaultProps = {
  text: {
    color: "black",
  },
};

export default Pill;
