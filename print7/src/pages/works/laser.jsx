import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgLaser1 from "../../assets/images/carousel/cortelaser/cgl1.jpg";
import imgLaser2 from "../../assets/images/carousel/cortelaser/cgl2.jpg";
import imgLaser3 from "../../assets/images/carousel/cortelaser/cgl3.jpg";
import imgLaser4 from "../../assets/images/carousel/cortelaser/cgl4.jpg";
import imgLaser5 from "../../assets/images/carousel/cortelaser/cgl5.jpg";
import imgLaser6 from "../../assets/images/carousel/cortelaser/cgl6.jpg";
import imgLaser7 from "../../assets/images/carousel/cortelaser/cgl7.jpg";
import imgLaser8 from "../../assets/images/carousel/cortelaser/cgl8.jpg";

const IMAGES = [
  {
    src: imgLaser1,
    alt: "Corte a laser Print7 - Gravação em madeira com precisão e acabamento profissional",
  },
  {
    src: imgLaser2,
    alt: "Gravação a laser Print7 - Personalização em acrílico transparente com detalhes finos",
  },
  {
    src: imgLaser3,
    alt: "Corte laser madeira Print7 - Peças decorativas cortadas com tecnologia avançada",
  },
  {
    src: imgLaser4,
    alt: "Gravação laser metal Print7 - Marcação permanente em superfícies metálicas",
  },
  { src: imgLaser5, alt: "Corte a laser acrílico Print7 - Formas geométricas com bordas polidas" },
  {
    src: imgLaser6,
    alt: "Personalização laser Print7 - Gravação de logótipos em materiais diversos",
  },
  { src: imgLaser7, alt: "Trabalhos laser Print7 - Corte e gravação de protótipos e peças únicas" },
  {
    src: imgLaser8,
    alt: "Serviços laser Print7 - Acabamentos de precisão em madeira, acrílico e metal",
  },
];

function LaserPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="laser" />
      <CategoryPage
        title={t("categories.laser.title")}
        description={t("categories.laser.description")}
        images={IMAGES}
        cta={{
          title: t("categories.laser.ctaTitle"),
          text: t("categories.laser.ctaText"),
        }}
      />
    </main>
  );
}
export default LaserPage;
