import './styles/__index.scss';
import Image from '../Image';
import classNames from 'classnames';
import type PillInterface from './types';

const Pill = ({
  icon,
  text,
  background,
  style,
}: PillInterface): JSX.Element => {
  const { label, color = '#FFF' } = text;

  const containerStyle = {
    ...style,
    '--background-pill': background,
    '--text-color-pill': color,
  };

  return (
    <div
      className={classNames('pill', {
        'pill--icon': !!icon,
      })}
      style={containerStyle}
    >
      {icon && (
        <div
          className={classNames('pill__image', {
            'pill__image--separator': !!icon.separator,
          })}
        >
          <Image alt={icon.alt} src={icon.src} />
        </div>
      )}
      <p className='pill__text'>{label}</p>
    </div>
  )
};

Pill.defaultProps = {
  text: {
    color: 'black',
  },
};

export default Pill;
