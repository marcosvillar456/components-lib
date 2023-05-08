import SubscriptionCTA from "..";
import type SubscriptionCTAInterface from "../types";

export default {
  title: "Shared/Subscription CTA",
  component: SubscriptionCTA,
};

const Template = (args: SubscriptionCTAInterface): JSX.Element => (
  <SubscriptionCTA {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: "Quiero suscribirme",
  disclaimer:
    "Al suscribirte, aceptás los Términos y condiciones de Mercado Puntos. Podés cancelar cuando quieras",
};
