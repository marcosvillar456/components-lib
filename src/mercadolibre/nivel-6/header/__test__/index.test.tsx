import "@testing-library/jest-dom";
import Header from "..";
import { render } from "@testing-library/react";

const props = {
  title: "Subí directo al nivel 6",
  subtitle:
    "Suscribite y disfrutá los mejores beneficios a un precio increíble.",
  offer: {
    price: {
      full_price: "$ 1.499",
      text_period: "/mes",
      total_price: "$ 699",
    },
    discount_pill: {
      label: "53% OFF",
    },
    separator: false,
  },
  subscription: {
    label: "Quiero suscribirme",
    disclaimer:
      "Al suscribirte, aceptás los Términos y condiciones de Mercado Puntos. Podés cancelar cuando quieras",
  },
  benefits: [
    {
      gradient: {
        primary_color: "#5A109C",
        secondary_color: "#921DE8",
      },
      image: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/ml-shipping-benefit@2x.jpg",
        alt: "Envíos gratis",
        width: 132,
        height: 256,
      },
      icon: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/shipping-logo@2x.png",
        alt: "Envíos gratis",
        width: 68,
        height: 28,
      },
      title: "ENVÍOS GRATIS O CON 45% OFF",
    },
    {
      gradient: {
        primary_color: "#030C40",
        secondary_color: "#030C40",
      },
      image: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/peter-pan-y-wendy@2x.jpg",
        alt: "Peter Pan y Wendy",
        width: 132,
        height: 256,
      },
      icon: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/logos/disney-logo@2x.png",
        alt: "Disney+",
        width: 68,
        height: 28,
      },
      title: "SIN CARGO",
    },
    {
      gradient: {
        primary_color: "#2E183D",
        secondary_color: "#A90D60 ",
      },
      image: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/premier_league@2x.jpg",
        alt: "Premier League",
        width: 132,
        height: 256,
      },
      icon: {
        src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/logos/star-plus-logo@2x.png",
        alt: "Star+",
        width: 68,
        height: 28,
      },
      title: "SIN CARGO",
    },
  ],
};

describe("Header component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("component snapshot", () => {
    const { asFragment } = render(<Header {...props} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="header"
        >
          <div
            class="header__container"
          >
            <div
              class="header__left"
            >
              <div
                class="header__title-container"
              >
                <h1
                  class="header__title"
                >
                  Subí directo al nivel 6
                </h1>
                <p
                  class="header__subtitle"
                >
                  Suscribite y disfrutá los mejores beneficios a un precio increíble.
                </p>
                <div
                  class="offer"
                >
                  <div
                    class="offer__discount offer__discount--pill"
                  >
                    <span
                      class="offer__discount--strike"
                    >
                      $ 1.499
                    </span>
                    <div
                      class="pill"
                      style="--background-pill: #008000; --text-color-pill: #FFF;"
                    >
                      <p
                        class="pill__text"
                      >
                        53% OFF
                      </p>
                    </div>
                  </div>
                  <div
                    class="offer__price"
                  >
                    <span
                      class="offer__total"
                    >
                      $ 699
                    </span>
                    <span
                      class="offer__period"
                    >
                      /mes
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="subscription-cta"
              >
                <button
                  class="subscription-cta__button"
                >
                  Quiero suscribirme
                </button>
                <p
                  class="subscription-cta__disclaimer"
                >
                  Al suscribirte, aceptás los Términos y condiciones de Mercado Puntos. Podés cancelar cuando quieras
                </p>
              </div>
            </div>
            <div
              class="header__benefits"
            >
              <div
                class="header__benefit"
              >
                <figure
                  class="header__benefit-image"
                >
                  <img
                    alt="Envíos gratis"
                    height="256"
                    src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/ml-shipping-benefit@2x.jpg"
                    width="132"
                  />
                </figure>
                <div
                  class="header__benefit-box"
                  style="--primary_color: #5A109C; --secondary_color: #921DE8;"
                >
                  <figure
                    class="header__benefit-icon"
                  >
                    <img
                      alt="Envíos gratis"
                      height="28"
                      src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/shipping-logo@2x.png"
                      width="68"
                    />
                  </figure>
                  <p
                    class="header__benefit-box-title"
                  >
                    ENVÍOS GRATIS O CON 45% OFF
                  </p>
                </div>
              </div>
              <div
                class="header__benefit"
              >
                <figure
                  class="header__benefit-image"
                >
                  <img
                    alt="Peter Pan y Wendy"
                    height="256"
                    src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/peter-pan-y-wendy@2x.jpg"
                    width="132"
                  />
                </figure>
                <div
                  class="header__benefit-box"
                  style="--primary_color: #030C40; --secondary_color: #030C40;"
                >
                  <figure
                    class="header__benefit-icon"
                  >
                    <img
                      alt="Disney+"
                      height="28"
                      src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/logos/disney-logo@2x.png"
                      width="68"
                    />
                  </figure>
                  <p
                    class="header__benefit-box-title"
                  >
                    SIN CARGO
                  </p>
                </div>
              </div>
              <div
                class="header__benefit"
              >
                <figure
                  class="header__benefit-image"
                >
                  <img
                    alt="Premier League"
                    height="256"
                    src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/premier_league@2x.jpg"
                    width="132"
                  />
                </figure>
                <div
                  class="header__benefit-box"
                  style="--primary_color: #2E183D; --secondary_color: #A90D60;"
                >
                  <figure
                    class="header__benefit-icon"
                  >
                    <img
                      alt="Star+"
                      height="28"
                      src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/logos/star-plus-logo@2x.png"
                      width="68"
                    />
                  </figure>
                  <p
                    class="header__benefit-box-title"
                  >
                    SIN CARGO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentFragment>
    `);
  });

  test("component snapshot without width and height on images", () => {
    const props = {
      title: "Subí directo al nivel 6",
      subtitle:
        "Suscribite y disfrutá los mejores beneficios a un precio increíble.",
      offer: {
        price: {
          full_price: "$ 1.499",
          text_period: "/mes",
          total_price: "$ 699",
        },
        discount_pill: {
          label: "53% OFF",
        },
        separator: false,
      },
      subscription: {
        label: "Quiero suscribirme",
        disclaimer:
          "Al suscribirte, aceptás los Términos y condiciones de Mercado Puntos. Podés cancelar cuando quieras",
      },
      benefits: [
        {
          gradient: {
            primary_color: "#5A109C",
            secondary_color: "#921DE8",
          },
          image: {
            src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/ml-shipping-benefit@2x.jpg",
            alt: "Envíos gratis",
          },
          icon: {
            src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/shipping-logo@2x.png",
            alt: "Envíos gratis",
            width: 68,
            height: 28,
          },
          title: "ENVÍOS GRATIS O CON 45% OFF",
        },
        {
          gradient: {
            primary_color: "#030C40",
            secondary_color: "#030C40",
          },
          image: {
            src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/peter-pan-y-wendy@2x.jpg",
            alt: "Peter Pan y Wendy",
          },
          icon: {
            src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/logos/disney-logo@2x.png",
            alt: "Disney+",
            width: 68,
            height: 28,
          },
          title: "SIN CARGO",
        },
        {
          gradient: {
            primary_color: "#2E183D",
            secondary_color: "#A90D60 ",
          },
          image: {
            src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/premier_league@2x.jpg",
            alt: "Premier League",
          },
          icon: {
            src: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/logos/star-plus-logo@2x.png",
            alt: "Star+",
            width: 68,
            height: 28,
          },
          title: "SIN CARGO",
        },
      ],
    };
    const { asFragment } = render(<Header {...props} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="header"
        >
          <div
            class="header__container"
          >
            <div
              class="header__left"
            >
              <div
                class="header__title-container"
              >
                <h1
                  class="header__title"
                >
                  Subí directo al nivel 6
                </h1>
                <p
                  class="header__subtitle"
                >
                  Suscribite y disfrutá los mejores beneficios a un precio increíble.
                </p>
                <div
                  class="offer"
                >
                  <div
                    class="offer__discount offer__discount--pill"
                  >
                    <span
                      class="offer__discount--strike"
                    >
                      $ 1.499
                    </span>
                    <div
                      class="pill"
                      style="--background-pill: #008000; --text-color-pill: #FFF;"
                    >
                      <p
                        class="pill__text"
                      >
                        53% OFF
                      </p>
                    </div>
                  </div>
                  <div
                    class="offer__price"
                  >
                    <span
                      class="offer__total"
                    >
                      $ 699
                    </span>
                    <span
                      class="offer__period"
                    >
                      /mes
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="subscription-cta"
              >
                <button
                  class="subscription-cta__button"
                >
                  Quiero suscribirme
                </button>
                <p
                  class="subscription-cta__disclaimer"
                >
                  Al suscribirte, aceptás los Términos y condiciones de Mercado Puntos. Podés cancelar cuando quieras
                </p>
              </div>
            </div>
            <div
              class="header__benefits"
            >
              <div
                class="header__benefit"
              >
                <figure
                  class="header__benefit-image"
                >
                  <img
                    alt="Envíos gratis"
                    height="256"
                    src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/ml-shipping-benefit@2x.jpg"
                    width="132"
                  />
                </figure>
                <div
                  class="header__benefit-box"
                  style="--primary_color: #5A109C; --secondary_color: #921DE8;"
                >
                  <figure
                    class="header__benefit-icon"
                  >
                    <img
                      alt="Envíos gratis"
                      height="28"
                      src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/shipping-logo@2x.png"
                      width="68"
                    />
                  </figure>
                  <p
                    class="header__benefit-box-title"
                  >
                    ENVÍOS GRATIS O CON 45% OFF
                  </p>
                </div>
              </div>
              <div
                class="header__benefit"
              >
                <figure
                  class="header__benefit-image"
                >
                  <img
                    alt="Peter Pan y Wendy"
                    height="256"
                    src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/peter-pan-y-wendy@2x.jpg"
                    width="132"
                  />
                </figure>
                <div
                  class="header__benefit-box"
                  style="--primary_color: #030C40; --secondary_color: #030C40;"
                >
                  <figure
                    class="header__benefit-icon"
                  >
                    <img
                      alt="Disney+"
                      height="28"
                      src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/logos/disney-logo@2x.png"
                      width="68"
                    />
                  </figure>
                  <p
                    class="header__benefit-box-title"
                  >
                    SIN CARGO
                  </p>
                </div>
              </div>
              <div
                class="header__benefit"
              >
                <figure
                  class="header__benefit-image"
                >
                  <img
                    alt="Premier League"
                    height="256"
                    src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/o:f_webp/premier_league@2x.jpg"
                    width="132"
                  />
                </figure>
                <div
                  class="header__benefit-box"
                  style="--primary_color: #2E183D; --secondary_color: #A90D60;"
                >
                  <figure
                    class="header__benefit-icon"
                  >
                    <img
                      alt="Star+"
                      height="28"
                      src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/vdp-header/logos/star-plus-logo@2x.png"
                      width="68"
                    />
                  </figure>
                  <p
                    class="header__benefit-box-title"
                  >
                    SIN CARGO
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
