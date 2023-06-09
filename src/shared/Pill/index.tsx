import "./styles/_index.scss";
import Image from "../Image";
import classNames from "classnames";
import type { I_Pill, I_StylesInline } from "./types";

const Pill = ({
  icon,
  text: { label, color = "#FFF" },
  background,
  card = false,
}: I_Pill): JSX.Element => {
  const containerStyle: I_StylesInline = {
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
