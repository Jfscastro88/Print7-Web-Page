export default function getHomeCarouselRows(t) {
  const relief = import.meta.glob("../images/carousel/relevo/*", { eager: true });
  const reliefSlides = Object.values(relief).map((m, i) => ({
    src: m.default,
    alt: t("home.carousel.relief.alt", { index: i + 1 }),
  }));

  const laser = import.meta.glob("../images/carousel/cortelaser/*", { eager: true });
  const laserSlides = Object.values(laser).map((m, i) => ({
    src: m.default,
    alt: t("home.carousel.laser.alt", { index: i + 1 }),
  }));

  const stand = import.meta.glob("../images/carousel/stand/*", { eager: true });
  const standSlides = Object.values(stand).map((m, i) => ({
    src: m.default,
    alt: t("home.carousel.stand.alt", { index: i + 1 }),
  }));

  return [
    {
      type: "split",
      side: "left",
      title: t("home.carousel2.laser.title"),
      subtitle: t("home.carousel.laser.subtitle"),
      to: "/laser",
      slides: laserSlides,
      height: 400,
      spacing: "py-8",
    },
    {
      type: "stacked",
      title: t("home.carousel2.relief.title"),
      subtitle: t("home.carousel.relief.subtitle"),
      to: "/relief",
      slides: reliefSlides,
      height: 400,
      spacing: "py-8",
    },
    {
      type: "split",
      side: "right",
      title: t("home.carousel2.stand.title"),
      subtitle: t("home.carousel.stand.subtitle"),
      to: "/stand",
      slides: standSlides,
      height: 400,
      spacing: "py-8",
    },
  ];
}
