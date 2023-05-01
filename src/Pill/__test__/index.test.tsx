import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Pill from "..";

describe("Pill component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("snapshot of component", () => {
    const props = {
      icon: {
        src: "path/to/image.png",
        alt: "icon",
        separator: true,
      },
      text: {
        label: "Hello world",
        color: "#fff",
      },
      background: "#000",
    };

    const { asFragment } = render(<Pill {...props} />);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="pill pill--icon"
          style="--background-pill: #000; --text-color-pill: #fff;"
        >
          <div
            class="pill__image pill__image--separator"
          >
            <img
              alt="icon"
              height="24"
              src="path/to/image.png"
              width="24"
            />
          </div>
          <p
            class="pill__text"
          >
            Hello world
          </p>
        </div>
      </DocumentFragment>
    `);
  });

  it("renders the label text correctly (pill__text)", () => {
    const props = {
      text: {
        label: "Hello world",
      },
      background: "#000",
    };

    render(<Pill {...props} />);
    expect(screen.getByText(/Hello world/)).toBeInTheDocument();

  });

  it("renders the icon when passed as a prop", () => {
    const props = {
      icon: {
        src: "path/to/image.png",
        alt: "icon",
        separator: true,
      },
      text: {
        label: "Hello world",
        color: "#fff",
      },
      background: "#000",
    };

    render(<Pill {...props} />);
    expect(screen.getByAltText("icon")).toBeInTheDocument();
  });

  it("does not render the icon when not passed as a prop", () => {
    const props = {
      text: {
        label: "Hello world",
        color: "#fff",
      },
      background: "#000",
    };

    render(<Pill {...props} />);
    expect(screen.queryByAltText("icon")).toBeNull();
  });
});
