import Pill from '..';
import PillInterface from 'Pill/types';

export default {
  title: 'Pill',
  component: Pill,
  argTypes: {
    icon: {
      control: 'object',
    },
    text: {
      control: 'object',
    },
    background: {
      control: { type: 'color' },
    },
  },
};

const Template = (args: PillInterface) => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: {
    label: 'Soy una Pill',
    color: 'black',
  },
  icon: {
    src: 'https://cdn-icons-png.flaticon.com/512/263/263100.png',
    alt: 'icon',
    separator: true,
  },
  background: 'rgba(0, 0, 0, 0.1)',
};
