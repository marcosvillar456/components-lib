import "./styles/_index.scss";
import type I_SubscriptionCTA from "./types";

const SubscriptionCTA = ({
  label,
  disclaimer,
}: I_SubscriptionCTA): JSX.Element => {
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
