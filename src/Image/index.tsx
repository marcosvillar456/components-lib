import React from 'react';
import ImageInterface from './types';

const Image = ({
  src,
  alt,
  width = 24,
  height = 24,
  className,
}: ImageInterface) => (
  <React.Fragment>
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  </React.Fragment>
);

export default Image;
