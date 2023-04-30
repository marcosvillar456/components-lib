import { Story, Meta } from '@storybook/react';
import OfferPrice from '../index';
import { OfferPriceInterface } from '../index';
import { within } from '@testing-library/react';

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
    discount__pill: {
      control: 'object',
    },
    separator: {
      control: 'boolean',
    },
    description: {
      constrol: 'object',
    },
  },
} as Meta;

const Template: Story<OfferPriceInterface> = (args) => <OfferPrice {...args} />;

export const Default = Template.bind({});

Default.args = {
  deviceType: 'desktop!',
  price: {
    full_price: '$ 17.899',
    cents: '99',
    text_period: '/mes',
    total_price: '$ 50.690',
  },
  discount__pill: {
    background_color: '',
    label: '70% OFF',
    color: 'string',
  },
  separator: true,
  description: { label: 'Description', label_left: false },
};
