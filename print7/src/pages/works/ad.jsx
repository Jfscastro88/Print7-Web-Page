import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgAdvertising1 from "../../assets/images/carousel/reclames/rec1.jpg";
import imgAdvertising2 from "../../assets/images/carousel/reclames/rec2.jpg";
import imgAdvertising3 from "../../assets/images/carousel/reclames/rec3.jpg";
import imgAdvertising4 from "../../assets/images/carousel/reclames/rec4.jpg";
import imgAdvertising5 from "../../assets/images/carousel/reclames/rec5.jpg";
import imgAdvertising6 from "../../assets/images/carousel/reclames/rec6.jpg";
import imgAdvertising7 from "../../assets/images/carousel/reclames/rec7.jpg";
import imgAdvertising8 from "../../assets/images/carousel/reclames/rec8.jpg";
import imgAdvertising9 from "../../assets/images/carousel/reclames/rec9.jpg";
import imgAdvertising10 from "../../assets/images/carousel/reclames/rec10.jpg";
import imgAdvertising11 from "../../assets/images/carousel/reclames/rec11.jpg";
import imgAdvertising12 from "../../assets/images/carousel/reclames/rec12.jpg";
import imgAdvertising13 from "../../assets/images/carousel/reclames/rec13.jpg";
import imgAdvertising14 from "../../assets/images/carousel/reclames/rec14.jpg";
import imgAdvertising15 from "../../assets/images/carousel/reclames/rec15.jpg";
import imgAdvertising16 from "../../assets/images/carousel/reclames/rec16.jpg";
import imgAdvertising17 from "../../assets/images/carousel/reclames/rec17.jpg";
import imgAdvertising18 from "../../assets/images/carousel/reclames/rec18.jpg";
import imgAdvertising19 from "../../assets/images/carousel/reclames/rec19.jpg";

const IMAGES = [
  {
    src: imgAdvertising1,
    alt: "Reclamos luminosos Print7 - Caixas de luz LED para máxima visibilidade noturna",
  },
  {
    src: imgAdvertising2,
    alt: "Letreiros iluminados Print7 - Sinalização que se destaca dia e noite",
  },
  { src: imgAdvertising3, alt: "Caixas de luz Print7 - Tecnologia LED eficiente e durável" },
  {
    src: imgAdvertising4,
    alt: "Sinalética luminosa Print7 - Impacto visual garantido em qualquer hora",
  },
  { src: imgAdvertising5, alt: "Reclamos LED Print7 - Economia energética com máximo brilho" },
  {
    src: imgAdvertising6,
    alt: "Totens publicitários Print7 - Estruturas imponentes para comunicação exterior",
  },
  {
    src: imgAdvertising7,
    alt: "Iluminação comercial Print7 - Destaque para estabelecimentos e marcas",
  },
  {
    src: imgAdvertising8,
    alt: "Letreiros corporativos Print7 - Identidade visual luminosa e profissional",
  },
  {
    src: imgAdvertising9,
    alt: "Sinalização LED Print7 - Tecnologia avançada para comunicação eficaz",
  },
  {
    src: imgAdvertising10,
    alt: "Reclamos exteriores Print7 - Resistência e visibilidade em condições adversas",
  },
  {
    src: imgAdvertising11,
    alt: "Caixas luminosas Print7 - Uniformidade de luz com acabamentos premium",
  },
  {
    src: imgAdvertising12,
    alt: "Publicidade luminosa Print7 - Atração de clientes 24 horas por dia",
  },
  {
    src: imgAdvertising13,
    alt: "Letreiros modernos Print7 - Design contemporâneo com iluminação eficiente",
  },
  {
    src: imgAdvertising14,
    alt: "Sinalética noturna Print7 - Visibilidade garantida após o pôr do sol",
  },
  {
    src: imgAdvertising15,
    alt: "Reclamos personalizados Print7 - Soluções únicas para cada negócio",
  },
  {
    src: imgAdvertising16,
    alt: "Iluminação arquitetónica Print7 - Valorização de fachadas e edifícios",
  },
  {
    src: imgAdvertising17,
    alt: "Totens luminosos Print7 - Marcos visuais para orientação e publicidade",
  },
  {
    src: imgAdvertising18,
    alt: "Letreiros eficientes Print7 - Baixo consumo energético com alto impacto",
  },
  {
    src: imgAdvertising19,
    alt: "Sinalização premium Print7 - Qualidade superior em reclamos luminosos",
  },
];

function AdvertisingPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="ad" />
      <CategoryPage
        title={t("categories.ad.title")}
        description={t("categories.ad.description")}
        images={IMAGES}
        cta={{
          title: t("categories.ad.ctaTitle"),
          text: t("categories.ad.ctaText"),
        }}
      />
    </main>
  );
}
export default AdvertisingPage;
