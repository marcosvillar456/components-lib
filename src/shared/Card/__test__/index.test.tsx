import "@testing-library/jest-dom";
import Card from "..";
import { render } from "@testing-library/react";

const props = {
  title: "Soy la Card",
  pill: {
    text: {
      label: "Soy la Pill",
    },
    background: "green",
  },
  children: (
    <div style={{ textAlign: "center" }}>
      <h1>Aca va mi hijo</h1>
    </div>
  ),
};

describe("Card component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("snapshot of component", () => {
    const { asFragment } = render(<Card {...props} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="card"
        >
          <div
            class="card-header"
          >
            <div
              class="pill pill--card"
              style="--background-pill: green; --text-color-pill: #FFF;"
            >
              <p
                class="pill__text"
              >
                Soy la Pill
              </p>
            </div>
            <h1
              class="card-header__title"
            >
              Soy la Card
            </h1>
          </div>
          <div
            style="text-align: center;"
          >
            <h1>
              Aca va mi hijo
            </h1>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
