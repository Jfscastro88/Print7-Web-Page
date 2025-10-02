import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgVitrin1 from "../../assets/images/carousel/fardamentos/far1.jpg";
import imgVitrin2 from "../../assets/images/carousel/fardamentos/far2.jpg";
import imgVitrin3 from "../../assets/images/carousel/fardamentos/far3.jpg";
import imgVitrin4 from "../../assets/images/carousel/fardamentos/far4.jpg";
import imgVitrin5 from "../../assets/images/carousel/fardamentos/far5.jpg";
import imgVitrin6 from "../../assets/images/carousel/fardamentos/far6.jpg";
import imgVitrin7 from "../../assets/images/carousel/fardamentos/far7.jpg";
import imgVitrin8 from "../../assets/images/carousel/fardamentos/far8.jpg";
import imgVitrin9 from "../../assets/images/carousel/fardamentos/far9.jpg";
import imgVitrin10 from "../../assets/images/carousel/fardamentos/far10.jpg";
import imgVitrin11 from "../../assets/images/carousel/fardamentos/far11.jpg";
import imgVitrin12 from "../../assets/images/carousel/fardamentos/far12.jpg";
import imgVitrin13 from "../../assets/images/carousel/fardamentos/far13.jpg";
import imgVitrin14 from "../../assets/images/carousel/fardamentos/far14.jpg";
import imgVitrin15 from "../../assets/images/carousel/fardamentos/far15.jpg";
import imgVitrin16 from "../../assets/images/carousel/fardamentos/far16.jpg";
import imgVitrin17 from "../../assets/images/carousel/fardamentos/far17.jpg";
import imgVitrin18 from "../../assets/images/carousel/fardamentos/far18.jpg";
import imgVitrin19 from "../../assets/images/carousel/fardamentos/far19.jpg";
import imgVitrin20 from "../../assets/images/carousel/fardamentos/far20.jpg";
import imgVitrin21 from "../../assets/images/carousel/fardamentos/far21.jpg";
import imgVitrin22 from "../../assets/images/carousel/fardamentos/far22.jpg";
import imgVitrin23 from "../../assets/images/carousel/fardamentos/far23.jpg";
import imgVitrin24 from "../../assets/images/carousel/fardamentos/far24.jpg";
import imgVitrin25 from "../../assets/images/carousel/fardamentos/far25.jpg";
import imgVitrin26 from "../../assets/images/carousel/fardamentos/far26.jpg";
import imgVitrin27 from "../../assets/images/carousel/fardamentos/far27.jpg";

const IMAGES = [
  {
    src: imgVitrin1,
    alt: "Fardamentos Print7 - Uniformes profissionais personalizados com bordado de logótipo",
  },
  {
    src: imgVitrin2,
    alt: "EPI personalizado Print7 - Equipamentos de proteção individual com identidade corporativa",
  },
  {
    src: imgVitrin3,
    alt: "Uniformes de trabalho Print7 - Vestuário profissional de alta qualidade",
  },
  {
    src: imgVitrin4,
    alt: "Bordados corporativos Print7 - Personalização de fardas com técnica tradicional",
  },
  {
    src: imgVitrin5,
    alt: "Vestuário profissional Print7 - Uniformes confortáveis e duráveis para equipas",
  },
  {
    src: imgVitrin6,
    alt: "Fardas personalizadas Print7 - Identidade visual aplicada ao vestuário de trabalho",
  },
  {
    src: imgVitrin7,
    alt: "EPI com logótipo Print7 - Segurança e branding em equipamentos de proteção",
  },
  {
    src: imgVitrin8,
    alt: "Uniformes empresariais Print7 - Vestuário que transmite profissionalismo",
  },
  {
    src: imgVitrin9,
    alt: "Serigrafia em têxtil Print7 - Impressão de qualidade em uniformes de trabalho",
  },
  {
    src: imgVitrin10,
    alt: "Fardamentos técnicos Print7 - Vestuário especializado para diferentes setores",
  },
  {
    src: imgVitrin11,
    alt: "Bordado de precisão Print7 - Logótipos aplicados com técnica artesanal",
  },
  { src: imgVitrin12, alt: "Uniformes de equipa Print7 - Coesão visual para colaboradores" },
  {
    src: imgVitrin13,
    alt: "EPI certificado Print7 - Equipamentos que cumprem normas de segurança",
  },
  {
    src: imgVitrin14,
    alt: "Vestuário corporativo Print7 - Fardas que reforçam a imagem da empresa",
  },
  { src: imgVitrin15, alt: "Personalização têxtil Print7 - DTF e outras técnicas de marcação" },
  { src: imgVitrin16, alt: "Fardamentos duráveis Print7 - Uniformes resistentes ao uso intensivo" },
  {
    src: imgVitrin17,
    alt: "Uniformes multicolor Print7 - Combinações cromáticas alinhadas com a marca",
  },
  {
    src: imgVitrin18,
    alt: "EPI funcional Print7 - Proteção e conforto em equipamentos personalizados",
  },
  {
    src: imgVitrin19,
    alt: "Bordados empresariais Print7 - Acabamentos premium em vestuário profissional",
  },
  {
    src: imgVitrin20,
    alt: "Fardas de qualidade Print7 - Materiais selecionados para máximo conforto",
  },
  {
    src: imgVitrin21,
    alt: "Uniformes sazonais Print7 - Vestuário adaptado às diferentes épocas do ano",
  },
  {
    src: imgVitrin22,
    alt: "EPI personalizado Print7 - Segurança com identidade visual da empresa",
  },
  {
    src: imgVitrin23,
    alt: "Vestuário profissional Print7 - Uniformes que valorizam a imagem corporativa",
  },
  {
    src: imgVitrin24,
    alt: "Fardamentos completos Print7 - Soluções integradas para equipas de trabalho",
  },
  {
    src: imgVitrin25,
    alt: "Uniformes ergonómicos Print7 - Conforto e funcionalidade em primeiro lugar",
  },
  {
    src: imgVitrin26,
    alt: "Bordado corporativo Print7 - Técnica tradicional com resultados modernos",
  },
  { src: imgVitrin27, alt: "EPI de excelência Print7 - Equipamentos que protegem e identificam" },
];

function uniformsPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="uniforms" />
      <CategoryPage
        title={t("categories.uniforms.title")}
        description={t("categories.uniforms.description")}
        images={IMAGES}
        cta={{
          title: t("categories.uniforms.ctaTitle"),
          text: t("categories.uniforms.ctaText"),
        }}
      />
    </main>
  );
}
export default uniformsPage;
