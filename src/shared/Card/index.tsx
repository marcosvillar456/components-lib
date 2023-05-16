import type I_Card from "./types";
import Pill from "../Pill";
import "./styles/_card.scss";

const Card = ({ title, pill, children }: I_Card): JSX.Element => {
  return (
    <div className="card">
      <div className="card__header">
        {pill && <Pill text={pill.text} background={pill.background} card />}
        <h1 className="card__title">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default Card;
