import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Pill from '..';
import { create } from 'react-test-renderer';

describe('Pill component', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
    cleanup();
  });

  test('snapshot of component', () => {
    const props = {
      icon: {
        src: 'path/to/image.png',
        alt: 'icon',
        separator: true,
      },
      text: {
        label: 'Hello world',
        color: '#fff',
      },
      background: '#000',
    };

    const component = create(<Pill {...props} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders the label text correctly (pill__text)', () => {
    const props = {
      text: {
        label: 'Hello world',
      },
      background: '#000',
    };

    render(<Pill {...props} />);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('renders the icon when passed as a prop', () => {
    const props = {
      icon: {
        src: 'path/to/image.png',
        alt: 'icon',
        separator: true,
      },
      text: {
        label: 'Hello world',
        color: '#fff',
      },
      background: '#000',
    };

    render(<Pill {...props} />);
    expect(screen.getByAltText('icon')).toBeInTheDocument();
  });

  it('does not render the icon when not passed as a prop', () => {
    const props = {
      text: {
        label: 'Hello world',
        color: '#fff',
      },
      background: '#000',
    };

    render(<Pill {...props} />);
    expect(screen.queryByAltText('icon')).toBeNull();
  });
});
