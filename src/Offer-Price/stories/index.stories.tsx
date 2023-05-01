import OfferPrice from '../index';
import type { OfferPriceInterface } from '../types';

export default {
  title: 'OfferPrice',
  component: OfferPrice,
  argTypes: {
    deviceType: {
      control: 'text',
    },
    price: {
      control: 'object',
    },
    discount_pill: {
      control: 'object',
    },
    separator: {
      control: 'boolean',
    },
    description: {
      constrol: 'object',
    },
  },
};

const Template = (args: OfferPriceInterface) => <OfferPrice {...args} />;

export const Default = Template.bind({});

Default.args = {
  separator: true,
  price: {
    full_price: '$ 17.899',
    cents: '99',
    text_period: '/mes',
    total_price: '$ 50.690',
  },
  discount_pill: {
    label: '70% OFF',
    background_color: 'green',
  },
  description: {
    label: 'Description',
    label_left: false,
  },
};
