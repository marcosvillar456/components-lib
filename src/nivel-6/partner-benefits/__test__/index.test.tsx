import "@testing-library/jest-dom";
import PartnerBenefits from "..";
import { render } from "@testing-library/react";

const props = {
  title: "Películas y series",
  partners: [
    {
      title: "HBO Max",
      offer: {
        label: "7 DÍAS GRATIS",
        discount: "50% OFF",
      },
      image_background:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mla_@1x.jpg",
      logo: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
        alt: "logo 1",
      },
    },
    {
      title: "Paramount+",
      offer: {
        label: "7 DÍAS GRATIS",
        discount: "50% OFF",
      },
      image_background:
        "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_argentina_@1x.jpg",
      logo: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
        alt: "logo 2",
      },
    },
  ],
};

describe("PartnerBenefits component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("snapshot of component", () => {
    const { asFragment } = render(<PartnerBenefits {...props} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="card"
        >
          <div
            class="card-header"
          >
            <h1
              class="card-header__title"
            >
              Películas y series
            </h1>
          </div>
          <div
            class="partners-benefits"
          >
            <div
              class="benefit"
            >
              <figure
                class="benefit-background"
              >
                <img
                  alt="hbo"
                  height="48"
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mla_@1x.jpg"
                  width="48"
                />
              </figure>
              <div
                class="benefit-container"
              >
                <figure
                  class="benefit-container__logo"
                >
                  <img
                    alt="logo 1"
                    height="48"
                    src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1"
                    width="48"
                  />
                </figure>
                <div
                  class="benefit-container__offer"
                >
                  <p
                    class="benefit-container__offer--period"
                  >
                    7 DÍAS GRATIS
                  </p>
                  <p
                    class="benefit-container__offer--discount"
                  >
                    50% OFF
                  </p>
                  <p
                    class="benefit-container__offer--partner"
                  >
                    HBO Max
                  </p>
                </div>
              </div>
            </div>
            <div
              class="benefit"
            >
              <figure
                class="benefit-background"
              >
                <img
                  alt="hbo"
                  height="48"
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_argentina_@1x.jpg"
                  width="48"
                />
              </figure>
              <div
                class="benefit-container"
              >
                <figure
                  class="benefit-container__logo"
                >
                  <img
                    alt="logo 2"
                    height="48"
                    src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1"
                    width="48"
                  />
                </figure>
                <div
                  class="benefit-container__offer"
                >
                  <p
                    class="benefit-container__offer--period"
                  >
                    7 DÍAS GRATIS
                  </p>
                  <p
                    class="benefit-container__offer--discount"
                  >
                    50% OFF
                  </p>
                  <p
                    class="benefit-container__offer--partner"
                  >
                    Paramount+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
