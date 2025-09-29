export default function getHomeLastThreeUpSection(t) {
  const ad = import.meta.glob("../images/carousel/reclames/*", { eager: true });
  const adSlides = Object.values(ad).map((m, i) => ({
    src: m.default,
    alt: t("home.lastThreeUp.ad.alt", { index: i + 1 }),
  }));

  const other = import.meta.glob("../images/carousel/outros/*", { eager: true });
  const otherSlides = Object.values(other).map((m, i) => ({
    src: m.default,
    alt: t("home.lastThreeUp.others.alt", { index: i + 1 }),
  }));

  const plates = import.meta.glob("../images/carousel/placas/*", { eager: true });
  const platesSlides = Object.values(plates).map((m, i) => ({
    src: m.default,
    alt: t("home.lastThreeUp.plates.alt", { index: i + 1 }),
  }));

  const logos = import.meta.glob("../images/carousel/design/*", { eager: true });
  const logoSlides = Object.values(logos).map((m, i) => ({
    src: m.default,
    alt: t("home.lastThreeUp.logos.alt", { index: i + 1 }),
  }));

  const neon = import.meta.glob("../images/carousel/ledneon/*", { eager: true });
  const neonSlides = Object.values(neon).map((m, i) => ({
    src: m.default,
    alt: t("home.lastThreeUp.neon.alt", { index: i + 1 }),
  }));

  return [
    {
      title: t("home.lastThreeUp.ad.title"),
      subtitle: t("home.lastThreeUp.ad.subtitle"),
      to: "/ad",
      slides: adSlides,
      height: 320,
    },
    {
      title: t("home.lastThreeUp.others.title"),
      subtitle: t("home.lastThreeUp.others.subtitle"),
      to: "/others",
      slides: otherSlides,
      height: 320,
    },
    {
      title: t("home.lastThreeUp.plates.title"),
      subtitle: t("home.lastThreeUp.plates.subtitle"),
      to: "/plates",
      slides: platesSlides,
      height: 320,
    },
    {
      title: t("home.lastThreeUp.logos.title"),
      subtitle: t("home.lastThreeUp.logos.subtitle"),
      to: "/logos",
      slides: logoSlides,
      height: 320,
    },
    {
      title: t("home.lastThreeUp.neon.title"),
      subtitle: t("home.lastThreeUp.neon.subtitle"),
      to: "/neon",
      slides: neonSlides,
      height: 320,
    },
  ];
}
