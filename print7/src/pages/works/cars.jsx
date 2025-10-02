import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgcar1 from "../../assets/images/carousel/veiculos/ve1.jpg";
import imgcar2 from "../../assets/images/carousel/veiculos/ve2.jpg";
import imgcar3 from "../../assets/images/carousel/veiculos/ve3.jpg";
import imgcar4 from "../../assets/images/carousel/veiculos/ve4.jpg";
import imgcar5 from "../../assets/images/carousel/veiculos/ve5.jpg";
import imgcar6 from "../../assets/images/carousel/veiculos/ve6.jpg";
import imgcar7 from "../../assets/images/carousel/veiculos/ve7.jpg";
import imgcar8 from "../../assets/images/carousel/veiculos/ve8.jpg";
import imgcar9 from "../../assets/images/carousel/veiculos/ve9.jpg";
import imgcar10 from "../../assets/images/carousel/veiculos/ve10.jpg";
import imgcar11 from "../../assets/images/carousel/veiculos/ve11.jpg";
import imgcar12 from "../../assets/images/carousel/veiculos/ve12.jpg";
import imgcar13 from "../../assets/images/carousel/veiculos/ve13.jpg";
import imgcar14 from "../../assets/images/carousel/veiculos/ve14.jpg";
import imgcar15 from "../../assets/images/carousel/veiculos/ve15.jpg";
import imgcar16 from "../../assets/images/carousel/veiculos/ve16.jpg";
import imgcar17 from "../../assets/images/carousel/veiculos/ve17.jpg";
import imgcar18 from "../../assets/images/carousel/veiculos/ve18.jpg";
import imgcar19 from "../../assets/images/carousel/veiculos/ve19.jpg";
import imgcar20 from "../../assets/images/carousel/veiculos/ve20.jpg";
import imgcar21 from "../../assets/images/carousel/veiculos/ve21.jpg";
import imgcar22 from "../../assets/images/carousel/veiculos/ve22.jpg";
import imgcar23 from "../../assets/images/carousel/veiculos/ve23.jpg";
import imgcar24 from "../../assets/images/carousel/veiculos/ve24.jpg";
import imgcar25 from "../../assets/images/carousel/veiculos/ve25.jpg";
import imgcar26 from "../../assets/images/carousel/veiculos/ve26.jpg";
import imgcar27 from "../../assets/images/carousel/veiculos/ve27.jpg";
import imgcar28 from "../../assets/images/carousel/veiculos/ve28.jpg";
import imgcar29 from "../../assets/images/carousel/veiculos/ve29.jpg";
import imgcar30 from "../../assets/images/carousel/veiculos/ve30.jpg";

const IMAGES = [
  {
    src: imgcar1,
    alt: "Personalização de viaturas Print7 - Wrapping completo de carrinha comercial com design corporativo",
  },
  { src: imgcar2, alt: "Publicidade móvel Print7 - Lettering profissional em veículo comercial" },
  { src: imgcar3, alt: "Decoração de carros Print7 - Aplicação de vinil com logótipo da empresa" },
  {
    src: imgcar4,
    alt: "Wrapping de viaturas Print7 - Transformação visual completa de frota comercial",
  },
  { src: imgcar5, alt: "Autocolantes para carros Print7 - Sinalização móvel resistente e durável" },
  {
    src: imgcar6,
    alt: "Personalização frota Print7 - Identidade visual uniforme em veículos empresariais",
  },
  {
    src: imgcar7,
    alt: "Vinil para carros Print7 - Aplicação profissional de materiais de alta qualidade",
  },
  { src: imgcar8, alt: "Lettering veículos Print7 - Rotulação elegante e impactante" },
  {
    src: imgcar9,
    alt: "Decoração automóvel Print7 - Design personalizado para veículos comerciais",
  },
  {
    src: imgcar10,
    alt: "Wrapping parcial Print7 - Intervenção estratégica com máximo impacto visual",
  },
  { src: imgcar11, alt: "Publicidade em viaturas Print7 - Comunicação eficaz em movimento" },
  {
    src: imgcar12,
    alt: "Personalização de carrinhas Print7 - Soluções criativas para transporte comercial",
  },
  {
    src: imgcar13,
    alt: "Vinil decorativo carros Print7 - Materiais premium com instalação profissional",
  },
  { src: imgcar14, alt: "Branding veículos Print7 - Extensão da identidade corporativa à frota" },
  { src: imgcar15, alt: "Rotulação de carros Print7 - Visibilidade garantida com design atrativo" },
  {
    src: imgcar16,
    alt: "Decoração de frotas Print7 - Uniformização visual de veículos empresariais",
  },
  {
    src: imgcar17,
    alt: "Wrapping criativo Print7 - Transformação artística de viaturas comerciais",
  },
  { src: imgcar18, alt: "Autocolantes magnéticos Print7 - Solução removível para veículos" },
  {
    src: imgcar19,
    alt: "Personalização total Print7 - Cobertura completa com vinil de alta performance",
  },
  { src: imgcar20, alt: "Sinalização móvel Print7 - Publicidade eficiente em deslocação" },
  {
    src: imgcar21,
    alt: "Decoração profissional Print7 - Acabamentos perfeitos em personalização automóvel",
  },
  { src: imgcar22, alt: "Vinil para frotas Print7 - Materiais certificados para uso exterior" },
  { src: imgcar23, alt: "Wrapping empresarial Print7 - Veículos como ferramenta de marketing" },
  {
    src: imgcar24,
    alt: "Lettering de qualidade Print7 - Tipografia impecável em superfícies curvas",
  },
  {
    src: imgcar25,
    alt: "Personalização inovadora Print7 - Soluções criativas para cada tipo de veículo",
  },
  {
    src: imgcar26,
    alt: "Decoração resistente Print7 - Materiais testados para condições adversas",
  },
  { src: imgcar27, alt: "Branding móvel Print7 - Marca sempre presente onde quer que vá" },
  {
    src: imgcar28,
    alt: "Wrapping técnico Print7 - Aplicação especializada com garantia de qualidade",
  },
  {
    src: imgcar29,
    alt: "Publicidade veicular Print7 - Impacto visual máximo em qualquer contexto",
  },
  { src: imgcar30, alt: "Personalização premium Print7 - Excelência em decoração automóvel" },
];

function CarsPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="cars" />
      <CategoryPage
        title={t("categories.vehicles.title")}
        description={t("categories.vehicles.description")}
        images={IMAGES}
        cta={{
          title: t("categories.vehicles.ctaTitle"),
          text: t("categories.vehicles.ctaText"),
        }}
      />
    </main>
  );
}
export default CarsPage;
