import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgVitrin1 from "../../assets/images/carousel/stand/sta1.jpg";
import imgVitrin2 from "../../assets/images/carousel/stand/sta2.jpg";
import imgVitrin3 from "../../assets/images/carousel/stand/sta3.jpg";
import imgVitrin4 from "../../assets/images/carousel/stand/sta4.jpg";
import imgVitrin5 from "../../assets/images/carousel/stand/sta5.jpg";
import imgVitrin6 from "../../assets/images/carousel/stand/sta6.jpg";
import imgVitrin7 from "../../assets/images/carousel/stand/sta7.jpg";
import imgVitrin8 from "../../assets/images/carousel/stand/sta8.jpg";
import imgVitrin9 from "../../assets/images/carousel/stand/sta9.jpg";
import imgVitrin10 from "../../assets/images/carousel/stand/sta10.jpg";

const IMAGES = [
  {
    src: imgVitrin1,
    alt: "Stands Print7 - Roll-ups profissionais para feiras e eventos corporativos",
  },
  {
    src: imgVitrin2,
    alt: "Expositores Print7 - Estruturas modulares para apresentação de produtos",
  },
  { src: imgVitrin3, alt: "Material de feira Print7 - Soluções portáteis e de fácil montagem" },
  {
    src: imgVitrin4,
    alt: "Balcões promocionais Print7 - Pontos de contacto elegantes para eventos",
  },
  {
    src: imgVitrin5,
    alt: "Paredes expositivas Print7 - Divisórias gráficas para espaços comerciais",
  },
  { src: imgVitrin6, alt: "Stands modulares Print7 - Flexibilidade total para diferentes eventos" },
  {
    src: imgVitrin7,
    alt: "Displays promocionais Print7 - Apresentação impactante de marca e produtos",
  },
  { src: imgVitrin8, alt: "Estruturas de feira Print7 - Montagem rápida e transporte facilitado" },
  {
    src: imgVitrin9,
    alt: "Expositores personalizados Print7 - Design único para cada necessidade",
  },
  {
    src: imgVitrin10,
    alt: "Material congressos Print7 - Soluções profissionais para eventos de grande escala",
  },
];

function StandsPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="stand" />
      <CategoryPage
        title={t("categories.stand.title")}
        description={t("categories.stand.description")}
        images={IMAGES}
        cta={{
          title: t("categories.stand.ctaTitle"),
          text: t("categories.stand.ctaText"),
        }}
      />
    </main>
  );
}
export default StandsPage;
