import "./styles/_index.scss";
import type SubscriptionCTAInterface from "./types";

const SubscriptionCTA = ({
  label,
  disclaimer,
}: SubscriptionCTAInterface): JSX.Element => {
  return (
    <div className="subscription-cta">
      <button className="subscription-cta__button">{label}</button>
      {disclaimer && (
        <p className="subscription-cta__disclaimer">{disclaimer}</p>
      )}
    </div>
  );
};

export default SubscriptionCTA;
