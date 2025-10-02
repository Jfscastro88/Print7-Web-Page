import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgAD1 from "../../assets/images/carousel/outros/out1.jpg";
import imgAD2 from "../../assets/images/carousel/outros/out2.jpg";
import imgAD3 from "../../assets/images/carousel/outros/out3.jpg";
import imgAD4 from "../../assets/images/carousel/outros/out4.jpg";
import imgAD5 from "../../assets/images/carousel/outros/out5.jpg";
import imgAD6 from "../../assets/images/carousel/outros/out6.jpg";
import imgAD7 from "../../assets/images/carousel/outros/out7.jpg";
import imgAD8 from "../../assets/images/carousel/outros/out8.jpg";
import imgAD9 from "../../assets/images/carousel/outros/out9.jpg";
import imgAD10 from "../../assets/images/carousel/outros/out10.jpg";
import imgAD11 from "../../assets/images/carousel/outros/out11.jpg";
import imgAD12 from "../../assets/images/carousel/outros/out12.jpg";
import imgAD13 from "../../assets/images/carousel/outros/out13.jpg";
import imgAD14 from "../../assets/images/carousel/outros/out14.jpg";
import imgAD15 from "../../assets/images/carousel/outros/out15.jpg";
import imgAD16 from "../../assets/images/carousel/outros/out16.jpg";
import imgAD17 from "../../assets/images/carousel/outros/out17.jpg";

const IMAGES = [
  {
    src: imgAD1,
    alt: "Projetos especiais Print7 - Soluções criativas personalizadas para necessidades únicas",
  },
  {
    src: imgAD2,
    alt: "Trabalhos à medida Print7 - Desenvolvimento de conceitos inovadores e exclusivos",
  },
  {
    src: imgAD3,
    alt: "Soluções criativas Print7 - Combinação de técnicas para resultados extraordinários",
  },
  { src: imgAD4, alt: "Projetos únicos Print7 - Cada desafio é uma oportunidade de inovação" },
  {
    src: imgAD5,
    alt: "Trabalhos especializados Print7 - Expertise aplicada a projetos fora do comum",
  },
  { src: imgAD6, alt: "Inovação gráfica Print7 - Pioneirismo em soluções de comunicação visual" },
  {
    src: imgAD7,
    alt: "Projetos experimentais Print7 - Exploração de novas possibilidades criativas",
  },
  { src: imgAD8, alt: "Soluções integradas Print7 - Combinação harmoniosa de diferentes técnicas" },
  {
    src: imgAD9,
    alt: "Trabalhos artísticos Print7 - Criatividade sem limites aplicada à comunicação",
  },
  { src: imgAD10, alt: "Projetos inovadores Print7 - Vanguarda em design e produção gráfica" },
  {
    src: imgAD11,
    alt: "Soluções personalizadas Print7 - Adaptação total às necessidades específicas do cliente",
  },
  {
    src: imgAD12,
    alt: "Trabalhos exclusivos Print7 - Originalidade garantida em cada projeto desenvolvido",
  },
  {
    src: imgAD13,
    alt: "Projetos multidisciplinares Print7 - Integração de várias especialidades numa solução",
  },
  {
    src: imgAD14,
    alt: "Soluções inovadoras Print7 - Tecnologia e criatividade ao serviço da comunicação",
  },
  {
    src: imgAD15,
    alt: "Trabalhos conceituais Print7 - Ideias transformadas em realidade tangível",
  },
  {
    src: imgAD16,
    alt: "Projetos vanguardistas Print7 - Antecipação de tendências em comunicação visual",
  },
  {
    src: imgAD17,
    alt: "Soluções extraordinárias Print7 - Superação de expectativas em cada entrega",
  },
];

function OthersPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="others" />
      <CategoryPage
        title={t("categories.others.title")}
        description={t("categories.others.description")}
        images={IMAGES}
        cta={{
          title: t("categories.others.ctaTitle"),
          text: t("categories.others.ctaText"),
        }}
      />
    </main>
  );
}
export default OthersPage;
