import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgrelief1 from "../../assets/images/carousel/relevo/rel1.jpg";
import imgrelief2 from "../../assets/images/carousel/relevo/rel2.jpg";
import imgrelief3 from "../../assets/images/carousel/relevo/rel3.jpg";
import imgrelief4 from "../../assets/images/carousel/relevo/rel4.jpg";
import imgrelief5 from "../../assets/images/carousel/relevo/rel5.jpg";
import imgrelief6 from "../../assets/images/carousel/relevo/rel6.jpg";
import imgrelief7 from "../../assets/images/carousel/relevo/rel7.jpg";
import imgrelief8 from "../../assets/images/carousel/relevo/rel8.jpg";
import imgrelief9 from "../../assets/images/carousel/relevo/rel9.jpg";
import imgrelief10 from "../../assets/images/carousel/relevo/rel10.jpg";
import imgrelief11 from "../../assets/images/carousel/relevo/rel11.jpg";
import imgrelief12 from "../../assets/images/carousel/relevo/rel12.jpg";
import imgrelief13 from "../../assets/images/carousel/relevo/rel13.jpg";
import imgrelief14 from "../../assets/images/carousel/relevo/rel14.jpg";
import imgrelief15 from "../../assets/images/carousel/relevo/rel15.jpg";
import imgrelief16 from "../../assets/images/carousel/relevo/rel16.jpg";
import imgrelief17 from "../../assets/images/carousel/relevo/rel17.jpg";
import imgrelief18 from "../../assets/images/carousel/relevo/rel18.jpg";
import imgrelief19 from "../../assets/images/carousel/relevo/rel19.jpg";
import imgrelief20 from "../../assets/images/carousel/relevo/rel20.jpg";
import imgrelief21 from "../../assets/images/carousel/relevo/rel21.jpg";
import imgrelief22 from "../../assets/images/carousel/relevo/rel22.jpg";
import imgrelief23 from "../../assets/images/carousel/relevo/rel23.jpg";
import imgrelief24 from "../../assets/images/carousel/relevo/rel24.jpg";
import imgrelief25 from "../../assets/images/carousel/relevo/rel25.jpg";
import imgrelief26 from "../../assets/images/carousel/relevo/rel26.jpg";
import imgrelief27 from "../../assets/images/carousel/relevo/rel27.jpg";
import imgrelief28 from "../../assets/images/carousel/relevo/rel28.jpg";
import imgrelief29 from "../../assets/images/carousel/relevo/rel29.jpg";

const IMAGES = [
  { src: imgrelief1, alt: "Letras em relevo Print7 - Logótipo 3D em PVC para fachada comercial" },
  { src: imgrelief2, alt: "Sinalética 3D Print7 - Lettering dimensional com acabamento premium" },
  {
    src: imgrelief3,
    alt: "Letras corporativas Print7 - Identidade visual tridimensional para escritórios",
  },
  { src: imgrelief4, alt: "Relevo em acrílico Print7 - Transparência e elegância em sinalização" },
  { src: imgrelief5, alt: "Logótipo 3D Print7 - Impacto visual com profundidade e textura" },
  { src: imgrelief6, alt: "Sinalização dimensional Print7 - Letras que se destacam da parede" },
  { src: imgrelief7, alt: "Letras metálicas Print7 - Durabilidade e sofisticação em relevo" },
  { src: imgrelief8, alt: "Branding 3D Print7 - Marca com presença física e visual" },
  { src: imgrelief9, alt: "Relevo personalizado Print7 - Soluções únicas para cada projeto" },
  { src: imgrelief10, alt: "Lettering dimensional Print7 - Tipografia com volume e carácter" },
  { src: imgrelief11, alt: "Sinalética premium Print7 - Qualidade superior em trabalhos 3D" },
  { src: imgrelief12, alt: "Letras iluminadas Print7 - Relevo com retroiluminação LED" },
  { src: imgrelief13, alt: "Identidade 3D Print7 - Marca que ganha vida através do relevo" },
  { src: imgrelief14, alt: "Sinalização exterior Print7 - Letras resistentes às intempéries" },
  { src: imgrelief15, alt: "Relevo corporativo Print7 - Profissionalismo em cada detalhe" },
  { src: imgrelief16, alt: "Letras em PVC Print7 - Versatilidade e durabilidade comprovadas" },
  { src: imgrelief17, alt: "Sinalética arquitetónica Print7 - Integração perfeita com o edifício" },
  { src: imgrelief18, alt: "Logótipo dimensional Print7 - Presença marcante em qualquer espaço" },
  { src: imgrelief19, alt: "Relevo artístico Print7 - Criatividade aplicada à sinalização" },
  {
    src: imgrelief20,
    alt: "Letras de impacto Print7 - Visibilidade garantida a qualquer distância",
  },
  { src: imgrelief21, alt: "Sinalização moderna Print7 - Design contemporâneo em 3D" },
  { src: imgrelief22, alt: "Relevo técnico Print7 - Precisão milimétrica em cada letra" },
  { src: imgrelief23, alt: "Letras comerciais Print7 - Atração de clientes através do relevo" },
  {
    src: imgrelief24,
    alt: "Sinalética interior Print7 - Elegância tridimensional em espaços internos",
  },
  { src: imgrelief25, alt: "Relevo institucional Print7 - Seriedade e credibilidade em 3D" },
  { src: imgrelief26, alt: "Letras personalizadas Print7 - Cada projeto é único e especial" },
  { src: imgrelief27, alt: "Sinalização premium Print7 - Excelência em trabalhos dimensionais" },
  { src: imgrelief28, alt: "Relevo durável Print7 - Investimento de longo prazo em comunicação" },
  { src: imgrelief29, alt: "Letras de qualidade Print7 - Padrão superior em sinalética 3D" },
];

function reliefWorkPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="relief" />
      <CategoryPage
        title={t("categories.relief.title")}
        description={t("categories.relief.description")}
        images={IMAGES}
        cta={{
          title: t("categories.relief.ctaTitle"),
          text: t("categories.relief.ctaText"),
        }}
      />
    </main>
  );
}
export default reliefWorkPage;
