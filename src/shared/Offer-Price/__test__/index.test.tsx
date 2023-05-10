import "@testing-library/jest-dom";
import OfferPrice from "../../Offer-Price";
import { render } from "@testing-library/react";

const props = {
  separator: true,
  price: {
    full_price: "$ 17.899",
    cents: "99",
    text_period: "/mes",
    total_price: "$ 50.690",
  },
  discount_pill: {
    label: "70% OFF",
    background_color: "green",
  },
  description: {
    label: "Description",
    label_left: false,
  },
};

describe("Pill component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("snapshot of component", () => {
    const { asFragment } = render(<OfferPrice {...props} />);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="offer offer--separator"
        >
          <div
            class="offer__discount offer__discount--pill"
          >
            <span
              class="offer__discount--strike"
            >
              $ 17.899
            </span>
            <div
              class="pill"
              style="--background-pill: #008000; --text-color-pill: #FFF;"
            >
              <p
                class="pill__text"
              >
                70% OFF
              </p>
            </div>
          </div>
          <div
            class="offer__price"
          >
            <span
              class="offer__total"
            >
              $ 50.690
              <sup
                class="offer__cents"
              >
                99
              </sup>
            </span>
            <span
              class="offer__period"
            >
              /mes
            </span>
          </div>
          <div
            class="offer__description"
          >
            Description
          </div>
        </div>
      </DocumentFragment>
    `);
  });

  test("should render if not send discount__pill and separator is false", () => {
    const newProps = { ...props, separator: false, discount_pill: null };
    const { asFragment } = render(<OfferPrice {...newProps} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="offer"
        >
          <div
            class="offer__discount"
          >
            <span
              class="offer__discount--strike"
            >
              $ 17.899
            </span>
          </div>
          <div
            class="offer__price"
          >
            <span
              class="offer__total"
            >
              $ 50.690
              <sup
                class="offer__cents"
              >
                99
              </sup>
            </span>
            <span
              class="offer__period"
            >
              /mes
            </span>
          </div>
          <div
            class="offer__description"
          >
            Description
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
