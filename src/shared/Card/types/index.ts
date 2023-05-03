import { PillInterface } from "shared/Pill/types";

interface CardInterface {
  title: string;
  pill?: PillInterface;
  children: React.ReactNode | React.ReactNode[];
}

export default CardInterface;
