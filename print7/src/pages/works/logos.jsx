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
  {
    src: imgLogo1,
    alt: "Design de logótipo Print7 - Identidade visual moderna e profissional para empresas",
  },
  {
    src: imgLogo2,
    alt: "Criação de marca Print7 - Logótipo criativo com tipografia personalizada",
  },
  { src: imgLogo3, alt: "Branding Print7 - Desenvolvimento de identidade corporativa completa" },
  { src: imgLogo4, alt: "Logótipo empresarial Print7 - Design exclusivo para negócios locais" },
  { src: imgLogo5, alt: "Identidade visual Print7 - Conceito de marca inovador e memorável" },
  {
    src: imgLogo6,
    alt: "Design gráfico Print7 - Logótipo vetorial escalável para todos os suportes",
  },
  { src: imgLogo7, alt: "Redesign de marca Print7 - Modernização de logótipos existentes" },
  {
    src: imgLogo8,
    alt: "Criação logótipo Print7 - Símbolo único com cores corporativas definidas",
  },
  { src: imgLogo9, alt: "Brand guidelines Print7 - Manual de identidade visual completo" },
  { src: imgLogo10, alt: "Logótipo comercial Print7 - Design profissional para estabelecimentos" },
  { src: imgLogo11, alt: "Identidade corporativa Print7 - Marca forte e reconhecível no mercado" },
  {
    src: imgLogo12,
    alt: "Design de marca Print7 - Conceito visual alinhado com valores da empresa",
  },
  {
    src: imgLogo13,
    alt: "Logótipo personalizado Print7 - Criação exclusiva adaptada ao setor de atividade",
  },
  {
    src: imgLogo14,
    alt: "Branding completo Print7 - Identidade visual coesa para todos os materiais",
  },
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
