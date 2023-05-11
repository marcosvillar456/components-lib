import type ImageInterface from './types';

const Image = ({
  src,
  alt,
  width = 24,
  height = 24,
  className,
}: ImageInterface) => (
  <figure className={className}>
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  </figure>
);

export default Image;
