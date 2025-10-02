import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgboards1 from "../../assets/images/carousel/placas/pla1.jpg";
import imgboards2 from "../../assets/images/carousel/placas/pla2.jpg";
import imgboards3 from "../../assets/images/carousel/placas/pla3.jpg";
import imgboards4 from "../../assets/images/carousel/placas/pla4.jpg";
import imgboards5 from "../../assets/images/carousel/placas/pla5.jpg";
import imgboards6 from "../../assets/images/carousel/placas/pla6.jpg";
import imgboards7 from "../../assets/images/carousel/placas/pla7.jpg";
import imgboards8 from "../../assets/images/carousel/placas/pla8.jpg";
import imgboards9 from "../../assets/images/carousel/placas/pla9.jpg";
import imgboards10 from "../../assets/images/carousel/placas/pla10.jpg";
import imgboards11 from "../../assets/images/carousel/placas/pla11.jpg";
import imgboards12 from "../../assets/images/carousel/placas/pla12.jpg";
import imgboards13 from "../../assets/images/carousel/placas/pla13.jpg";
import imgboards14 from "../../assets/images/carousel/placas/pla14.jpg";
import imgboards15 from "../../assets/images/carousel/placas/pla15.jpg";
import imgboards16 from "../../assets/images/carousel/placas/pla16.jpg";
import imgboards17 from "../../assets/images/carousel/placas/pla17.jpg";
import imgboards18 from "../../assets/images/carousel/placas/pla18.jpg";
import imgboards19 from "../../assets/images/carousel/placas/pla19.jpg";
import imgboards20 from "../../assets/images/carousel/placas/pla20.jpg";
import imgboards21 from "../../assets/images/carousel/placas/pla21.jpg";
import imgboards22 from "../../assets/images/carousel/placas/pla22.jpg";

const IMAGES = [
  {
    src: imgboards1,
    alt: "Placas publicitárias Print7 - Sinalética exterior em PVC resistente às intempéries",
  },
  {
    src: imgboards2,
    alt: "Lonas impressas Print7 - Grande formato para eventos e promoções temporárias",
  },
  {
    src: imgboards3,
    alt: "Sinalética Print7 - Placas informativas com impressão de alta qualidade",
  },
  {
    src: imgboards4,
    alt: "Painéis publicitários Print7 - Suportes rígidos para comunicação exterior",
  },
  {
    src: imgboards5,
    alt: "Impressão grande formato Print7 - Materiais duráveis para uso prolongado",
  },
  {
    src: imgboards6,
    alt: "Placas de obra Print7 - Sinalização profissional para construção civil",
  },
  {
    src: imgboards7,
    alt: "Banners exteriores Print7 - Comunicação visual impactante e resistente",
  },
  {
    src: imgboards8,
    alt: "Sinalética comercial Print7 - Placas que identificam e promovem negócios",
  },
  {
    src: imgboards9,
    alt: "Lonas publicitárias Print7 - Flexibilidade e durabilidade em grande formato",
  },
  { src: imgboards10, alt: "Placas ACM Print7 - Alumínio composto para sinalização premium" },
  {
    src: imgboards11,
    alt: "Impressão exterior Print7 - Tintas UV resistentes para máxima durabilidade",
  },
  {
    src: imgboards12,
    alt: "Sinalização urbana Print7 - Placas que respeitam regulamentação municipal",
  },
  { src: imgboards13, alt: "Painéis informativos Print7 - Comunicação clara e profissional" },
  {
    src: imgboards14,
    alt: "Placas direcionais Print7 - Sinalética que orienta e informa visitantes",
  },
  {
    src: imgboards15,
    alt: "Grande formato Print7 - Impressão de qualidade fotográfica em dimensões amplas",
  },
  {
    src: imgboards16,
    alt: "Sinalética empresarial Print7 - Placas que reforçam a identidade corporativa",
  },
  {
    src: imgboards17,
    alt: "Lonas técnicas Print7 - Materiais especializados para condições extremas",
  },
  {
    src: imgboards18,
    alt: "Placas promocionais Print7 - Comunicação eficaz para campanhas de marketing",
  },
  {
    src: imgboards19,
    alt: "Sinalização exterior Print7 - Visibilidade garantida em qualquer condição",
  },
  {
    src: imgboards20,
    alt: "Impressão profissional Print7 - Qualidade superior em todos os formatos",
  },
  {
    src: imgboards21,
    alt: "Placas personalizadas Print7 - Soluções à medida para cada necessidade",
  },
  {
    src: imgboards22,
    alt: "Sinalética durável Print7 - Investimento de longo prazo em comunicação visual",
  },
];

function plastesboardsPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="plates" />
      <CategoryPage
        title={t("categories.plates.title")}
        description={t("categories.plates.description")}
        images={IMAGES}
        cta={{
          title: t("categories.plates.ctaTitle"),
          text: t("categories.plates.ctaText"),
        }}
      />
    </main>
  );
}
export default plastesboardsPage;
