import SubscriptionCTA from "..";
import { render } from "@testing-library/react";
describe("SubscriptionCTA", () => {
  it("renders the subscription button with the provided label", () => {
    const props = {
      label: "Subscribe Now",
      disclaimer: "Cancel anytime",
    };

    const { asFragment } = render(<SubscriptionCTA {...props} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="subscription-cta"
        >
          <button
            class="subscription-cta__button"
          >
            Subscribe Now
          </button>
          <p
            class="subscription-cta__disclaimer"
          >
            Cancel anytime
          </p>
        </div>
      </DocumentFragment>
    `);
  });

  it("renders the disclaimer if provided", () => {
    const props = {
      label: "Subscribe Now",
    };

    const { asFragment } = render(<SubscriptionCTA {...props} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="subscription-cta"
        >
          <button
            class="subscription-cta__button"
          >
            Subscribe Now
          </button>
        </div>
      </DocumentFragment>
    `);
  });
});
