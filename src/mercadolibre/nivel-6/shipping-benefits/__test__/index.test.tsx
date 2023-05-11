import "@testing-library/jest-dom";
import ShippingBenefits from "..";
import { render } from "@testing-library/react";

const props = {
  title: "Beneficios en envíos",
  benefits: [
    {
      title: "Envíos gratis",
      subtitle: "En miles de productos%% desde $ 8.000",
      image: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/free-shipping@2x.jpg",
        alt: "envios",
      },
    },
    {
      title: "45% OFF en envíos",
      subtitle: "En miles de productos desde $ 8.000",
      image: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/shipping-discount@2x.jpg",
        alt: "envios",
      },
    },
  ],
};

describe("ShippingBenefits component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("snapshot of component", () => {
    const { asFragment } = render(<ShippingBenefits {...props} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="card"
        >
          <div
            class="card__header"
          >
            <h1
              class="card__title"
            >
              Beneficios en envíos
            </h1>
          </div>
          <div
            class="benefits-shipping"
          >
            <div
              class="benefit"
            >
              <div
                class="benefit__container"
              >
                <p
                  class="benefit__title"
                >
                  Envíos gratis
                </p>
                <p
                  class="benefit__subtitle"
                >
                  <span>
                    En miles de productos
                    <br />
                     desde $ 8.000
                  </span>
                </p>
              </div>
              <figure
                class="benefit__image"
              >
                <img
                  alt="envios"
                  height="24"
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/free-shipping@2x.jpg"
                  width="24"
                />
              </figure>
            </div>
            <div
              class="benefit"
            >
              <div
                class="benefit__container"
              >
                <p
                  class="benefit__title"
                >
                  45% OFF en envíos
                </p>
                <p
                  class="benefit__subtitle"
                >
                  <span>
                    En miles de productos desde $ 8.000
                  </span>
                </p>
              </div>
              <figure
                class="benefit__image"
              >
                <img
                  alt="envios"
                  height="24"
                  src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp/shipping-benefits/shipping-discount@2x.jpg"
                  width="24"
                />
              </figure>
            </div>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
