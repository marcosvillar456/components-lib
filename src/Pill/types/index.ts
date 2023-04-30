import ImageInterface from 'Image/types';

interface iconInterface extends ImageInterface {
  separator: boolean;
}
interface PillInterface {
  icon?: iconInterface;
  text: {
    label: string;
    color?: string;
  };
  background: string;
  style?: React.CSSProperties & {
    '--background-pill': string;
    '--text-color-pill': string;
  };
}

export default PillInterface;
