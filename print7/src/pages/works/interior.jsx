import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgAD1 from "../../assets/images/carousel/decorinterior/di1.jpg";
import imgAD2 from "../../assets/images/carousel/decorinterior/di2.jpg";
import imgAD3 from "../../assets/images/carousel/decorinterior/di3.jpg";
import imgAD4 from "../../assets/images/carousel/decorinterior/di4.jpg";
import imgAD5 from "../../assets/images/carousel/decorinterior/di5.jpg";

const IMAGES = [
  {
    src: imgAD1,
    alt: "Decoração de interiores Print7 - Vinil decorativo em vidro com design elegante",
  },
  {
    src: imgAD2,
    alt: "Sinalética interior Print7 - Placas direcionais com acabamento profissional",
  },
  {
    src: imgAD3,
    alt: "Decoração de paredes Print7 - Aplicação de gráficos em superfícies interiores",
  },
  { src: imgAD4, alt: "Vinil fosco Print7 - Privacidade e estética em vidros de escritório" },
  {
    src: imgAD5,
    alt: "Ambientação corporativa Print7 - Transformação de espaços com identidade visual",
  },
];

function InterirorPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="interior" />
      <CategoryPage
        title={t("categories.interior.title")}
        description={t("categories.interior.description")}
        images={IMAGES}
        cta={{
          title: t("categories.interior.ctaTitle"),
          text: t("categories.interior.ctaText"),
        }}
      />
    </main>
  );
}
export default InterirorPage;
