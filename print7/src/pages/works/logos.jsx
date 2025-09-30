import "@mantine/core/styles.css";
import { useRef, useState, useEffect } from "react";
import CategoryPage from "../../assets/components/categorypage.jsx";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgLogo1 from "../../assets/images/carousel/design/01.png";
import imgLogo2 from "../../assets/images/carousel/design/02.png";
import imgLogo3 from "../../assets/images/carousel/design/03.png";
import imgLogo4 from "../../assets/images/carousel/design/04.png";
import imgLogo5 from "../../assets/images/carousel/design/05.png";
import imgLogo6 from "../../assets/images/carousel/design/06.png";
import imgLogo7 from "../../assets/images/carousel/design/07.png";
import imgLogo8 from "../../assets/images/carousel/design/08.png";
import imgLogo9 from "../../assets/images/carousel/design/09.png";
import imgLogo10 from "../../assets/images/carousel/design/10.png";
import imgLogo11 from "../../assets/images/carousel/design/11.png";
import imgLogo12 from "../../assets/images/carousel/design/12.png";
import imgLogo13 from "../../assets/images/carousel/design/13.png";
import imgLogo14 from "../../assets/images/carousel/design/14.png";

const IMAGES = [
  { src: imgLogo1, alt: "Logo #1" },
  { src: imgLogo2, alt: "Logo #2" },
  { src: imgLogo3, alt: "Logo #3" },
  { src: imgLogo4, alt: "Logo #4" },
  { src: imgLogo5, alt: "Logo #5" },
  { src: imgLogo6, alt: "Logo #6" },
  { src: imgLogo7, alt: "Logo #7" },
  { src: imgLogo8, alt: "Logo #8" },
  { src: imgLogo9, alt: "Logo #9" },
  { src: imgLogo10, alt: "Logo #10" },
  { src: imgLogo11, alt: "Logo #11" },
  { src: imgLogo12, alt: "Logo #12" },
  { src: imgLogo13, alt: "Logo #13" },
  { src: imgLogo14, alt: "Logo #14" },
];

export default function LogosPage() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");
  const cardRefs = useRef([]);

  const handleCardClick = (i) => {
    setSelected((prev) => (prev === i ? null : i));
    if (window.innerWidth < 768) {
      requestAnimationFrame(() => {
        cardRefs.current[i]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      });
    }
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main>
      <ServiceSeo slug="logos" />
      <CategoryPage
        title={t("categories.logos.title")}
        description={t("categories.logos.description")}
        images={IMAGES}
        selected={selected}
        setSelected={setSelected}
        onCardClick={handleCardClick}
        cardRefs={cardRefs}
        forceContain
        cta={{
          title: t("categories.logos.ctaTitle"),
          text: t("categories.logos.ctaText"),
        }}
      />
    </main>
  );
}
