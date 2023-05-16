import { I_Pill } from "../../Pill/types"; 

interface I_Card {
  title: string;
  pill?: I_Pill;
  children: React.ReactNode | React.ReactNode[];
}

export default I_Card;
