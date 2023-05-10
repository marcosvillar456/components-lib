import { useState } from "react";
import Image from "shared/Image";
import OfferPrice from "shared/Offer-Price";
import classNames from "classnames";
import type PlanListInterface from "./types";
import "./styles/_index.scss";

const PlanList = ({ title, items }: PlanListInterface) => {
  const [itemPick, setItemPick] = useState<string>("");

  const handleClick = (name: string) => {
    return setItemPick(name);
  };

  return (
    <div className="plan-list">
      <p className="plan-list__title">{title}</p>
      <ul className="plan-list__items">
        {items.map(({ title, icon, offer }) => {
          return (
            <li
              className={classNames("item", {
                "item--selected": itemPick === title,
              })}
              onClick={() => handleClick(title)}
              key={title}
            >
              <Image {...icon} className="item__icon" />
              <div className="item__content">
                <p className="item__partner">{title}</p>
                <OfferPrice {...offer} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlanList;
