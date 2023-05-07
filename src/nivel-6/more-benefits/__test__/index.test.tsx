import "@testing-library/jest-dom";
import MoreBenefits from "..";
import { render } from "@testing-library/react";

const props = {
  title: "Películas y series",
  pill: {
    card: true,
    text: {
      label: "50% OFF",
    },
    background: "#00A650",
  },

  benefits: [
    {
      title: "Ofertas exclusivas",
      subtitle: "Descuentos especiales en tus compras",
      img: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/platform-benefits/exclusive-deals-ml@2x.png",
        alt: "Ofertas exclusivas",
      },
    },
    {
      title: "Descuentos sorpresa",
      subtitle: "Todos los meses en tus marcas favoritas",
      img: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/platform-benefits/surprise-discount-ml@2x.png",
        alt: "Descuentos sorpresa",
      },
    },
  ],
};

describe("MoreBenefits component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("snapshot of component", () => {
    const { asFragment } = render(<MoreBenefits {...props} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="card"
        >
          <div
            class="card__header"
          >
            <div
              class="pill pill--card"
              style="--background-pill: #00A650; --text-color-pill: #FFF;"
            >
              <p
                class="pill__text"
              >
                50% OFF
              </p>
            </div>
            <h1
              class="card__title"
            >
              Películas y series
            </h1>
          </div>
          <div
            class="benefits"
          >
            <div
              class="benefit"
            >
              <figure
                class="benefit__image"
              >
                <img
                  alt="Ofertas exclusivas"
                  height="88"
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/platform-benefits/exclusive-deals-ml@2x.png"
                  width="64"
                />
              </figure>
              <div
                class="benefit__container"
              >
                <h1
                  class="benefit__title"
                >
                  Ofertas exclusivas
                </h1>
                <p
                  class="benefit__subtitle"
                >
                  Descuentos especiales en tus compras
                </p>
              </div>
            </div>
            <div
              class="benefit"
            >
              <figure
                class="benefit__image"
              >
                <img
                  alt="Descuentos sorpresa"
                  height="88"
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/platform-benefits/surprise-discount-ml@2x.png"
                  width="64"
                />
              </figure>
              <div
                class="benefit__container"
              >
                <h1
                  class="benefit__title"
                >
                  Descuentos sorpresa
                </h1>
                <p
                  class="benefit__subtitle"
                >
                  Todos los meses en tus marcas favoritas
                </p>
              </div>
            </div>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
