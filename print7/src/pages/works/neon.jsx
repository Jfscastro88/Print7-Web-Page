import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgAD1 from "../../assets/images/carousel/ledneon/neon1.jpg";
import imgAD2 from "../../assets/images/carousel/ledneon/neon2.jpg";
import imgAD3 from "../../assets/images/carousel/ledneon/neon3.jpg";
import imgAD4 from "../../assets/images/carousel/ledneon/neon4.jpg";
import imgAD5 from "../../assets/images/carousel/ledneon/neon5.jpg";
import imgAD6 from "../../assets/images/carousel/ledneon/neon6.jpg";
import imgAD7 from "../../assets/images/carousel/ledneon/neon7.jpg";
import imgAD8 from "../../assets/images/carousel/ledneon/neon8.jpg";
import imgAD9 from "../../assets/images/carousel/ledneon/neon9.jpg";

const IMAGES = [
  { src: imgAD1, alt: "LED Neon Print7 - Letreiro luminoso moderno com tecnologia LED eficiente" },
  { src: imgAD2, alt: "Neon personalizado Print7 - Formas criativas em LED neon flexível" },
  { src: imgAD3, alt: "Decoração LED Print7 - Ambientação com neon de baixo consumo" },
  { src: imgAD4, alt: "Letreiros neon Print7 - Sinalização atrativa com cores vibrantes" },
  { src: imgAD5, alt: "LED flexível Print7 - Adaptabilidade total a qualquer design" },
  { src: imgAD6, alt: "Neon comercial Print7 - Destaque para estabelecimentos e eventos" },
  { src: imgAD7, alt: "Iluminação decorativa Print7 - LED neon para ambientes únicos" },
  { src: imgAD8, alt: "Neon artístico Print7 - Criações luminosas personalizadas" },
  { src: imgAD9, alt: "LED neon durável Print7 - Tecnologia resistente para uso prolongado" },
];

function NeonPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="neon" />
      <CategoryPage
        title={t("categories.neon.title")}
        description={t("categories.neon.description")}
        images={IMAGES}
        cta={{
          title: t("categories.neon.ctaTitle"),
          text: t("categories.neon.ctaText"),
        }}
      />
    </main>
  );
}
export default NeonPage;
