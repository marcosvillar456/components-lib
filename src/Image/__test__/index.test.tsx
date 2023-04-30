import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { create } from 'react-test-renderer';
import Image from '..';

describe('Image component', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
    cleanup();
  });

  const props = {
    src: 'https://example.com/image.jpg',
    alt: 'Test image',
    width: 100,
    height: 100,
    className: 'test-class',
  };

  test('snapshot of component', () => {
    const component = create(<Image {...props} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders an image with provided props', () => {
    render(<Image {...props} />);

    const imageElement = screen.getByAltText(props.alt);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', props.src);
    expect(imageElement).toHaveAttribute('width', props.width.toString());
    expect(imageElement).toHaveAttribute('height', props.height.toString());
    expect(imageElement).toHaveClass(props.className);
  });
});
