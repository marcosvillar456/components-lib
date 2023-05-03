import type CardInterface from "./types";
import Pill from "../Pill";
import "./styles/__index.scss";

const Card = ({ title, pill, children }: CardInterface): JSX.Element => {
  return (
    <div className="card">
      <div className="card-header">
        {pill && <Pill text={pill.text} background={pill.background} card />}
        <h1 className="card-header__title">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default Card;
