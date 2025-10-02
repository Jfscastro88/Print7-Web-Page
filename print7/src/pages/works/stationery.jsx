import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgVitrin1 from "../../assets/images/carousel/estacionarios/sta1.jpg";
import imgVitrin2 from "../../assets/images/carousel/estacionarios/sta2.jpg";
import imgVitrin3 from "../../assets/images/carousel/estacionarios/sta3.jpg";
import imgVitrin4 from "../../assets/images/carousel/estacionarios/sta4.jpg";
import imgVitrin5 from "../../assets/images/carousel/estacionarios/sta5.jpg";
import imgVitrin6 from "../../assets/images/carousel/estacionarios/sta6.jpg";
import imgVitrin7 from "../../assets/images/carousel/estacionarios/sta7.jpg";
import imgVitrin8 from "../../assets/images/carousel/estacionarios/sta8.jpg";
import imgVitrin9 from "../../assets/images/carousel/estacionarios/sta9.jpg";

const IMAGES = [
  {
    src: imgVitrin1,
    alt: "Estacionário Print7 - Papel timbrado elegante com logótipo corporativo",
  },
  {
    src: imgVitrin2,
    alt: "Cartões de visita Print7 - Design profissional com acabamentos premium",
  },
  {
    src: imgVitrin3,
    alt: "Envelopes personalizados Print7 - Correspondência com identidade visual",
  },
  { src: imgVitrin4, alt: "Blocos de notas Print7 - Papelaria corporativa funcional e atrativa" },
  {
    src: imgVitrin5,
    alt: "Pastas empresariais Print7 - Organização com estilo e profissionalismo",
  },
  {
    src: imgVitrin6,
    alt: "Cadernos corporativos Print7 - Branding aplicado a material de escritório",
  },
  {
    src: imgVitrin7,
    alt: "Conjunto estacionário Print7 - Coordenação visual em todos os materiais",
  },
  { src: imgVitrin8, alt: "Impressão offset Print7 - Qualidade superior em papelaria empresarial" },
  { src: imgVitrin9, alt: "Material corporativo Print7 - Identidade consistente em cada detalhe" },
];

function stationeryPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="stationery" />
      <CategoryPage
        title={t("categories.stationery.title")}
        description={t("categories.stationery.description")}
        images={IMAGES}
        cta={{
          title: t("categories.stationery.ctaTitle"),
          text: t("categories.stationery.ctaText"),
        }}
      />
    </main>
  );
}
export default stationeryPage;
