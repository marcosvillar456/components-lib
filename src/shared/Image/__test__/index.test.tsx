import { render, screen } from "@testing-library/react";
import Image from "..";
import "@testing-library/jest-dom";

describe("Image component", () => {
  const props = {
    src: "https://example.com/image.jpg",
    alt: "Test image",
    width: 100,
    height: 100,
    className: "test-class",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("snapshot of component", () => {
    const { asFragment } = render(<Image {...props} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <figure
          class="test-class"
        >
          <img
            alt="Test image"
            height="100"
            src="https://example.com/image.jpg"
            width="100"
          />
        </figure>
      </DocumentFragment>
    `);
  });

  test("renders an image with provided props", () => {
    render(<Image {...props} />);
    const imageElement = screen.getByAltText(props.alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", props.src);
    expect(imageElement).toHaveAttribute("width", props.width.toString());
    expect(imageElement).toHaveAttribute("height", props.height.toString());
  });
});
