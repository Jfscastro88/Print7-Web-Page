import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgVitrin1 from "../../assets/images/carousel/decormontras/mon1.jpg";
import imgVitrin2 from "../../assets/images/carousel/decormontras/mon2.jpg";
import imgVitrin3 from "../../assets/images/carousel/decormontras/mon3.jpg";
import imgVitrin4 from "../../assets/images/carousel/decormontras/mon4.jpg";
import imgVitrin5 from "../../assets/images/carousel/decormontras/mon5.jpg";
import imgVitrin6 from "../../assets/images/carousel/decormontras/mon6.jpg";
import imgVitrin7 from "../../assets/images/carousel/decormontras/mon7.jpg";
import imgVitrin8 from "../../assets/images/carousel/decormontras/mon8.jpg";
import imgVitrin9 from "../../assets/images/carousel/decormontras/mon9.jpg";
import imgVitrin10 from "../../assets/images/carousel/decormontras/mon10.jpg";
import imgVitrin11 from "../../assets/images/carousel/decormontras/mon11.jpg";
import imgVitrin12 from "../../assets/images/carousel/decormontras/mon12.jpg";
import imgVitrin13 from "../../assets/images/carousel/decormontras/mon13.jpg";
import imgVitrin14 from "../../assets/images/carousel/decormontras/mon14.jpg";
import imgVitrin15 from "../../assets/images/carousel/decormontras/mon15.jpg";
import imgVitrin16 from "../../assets/images/carousel/decormontras/mon16.jpg";
import imgVitrin17 from "../../assets/images/carousel/decormontras/mon17.jpg";
import imgVitrin18 from "../../assets/images/carousel/decormontras/mon18.jpg";
import imgVitrin19 from "../../assets/images/carousel/decormontras/mon19.jpg";
import imgVitrin20 from "../../assets/images/carousel/decormontras/mon20.jpg";
import imgVitrin21 from "../../assets/images/carousel/decormontras/mon21.jpg";
import imgVitrin22 from "../../assets/images/carousel/decormontras/mon22.jpg";
import imgVitrin23 from "../../assets/images/carousel/decormontras/mon23.jpg";
import imgVitrin24 from "../../assets/images/carousel/decormontras/mon24.jpg";
import imgVitrin25 from "../../assets/images/carousel/decormontras/mon25.jpg";
import imgVitrin26 from "../../assets/images/carousel/decormontras/mon26.jpg";
import imgVitrin27 from "../../assets/images/carousel/decormontras/mon27.jpg";
import imgVitrin28 from "../../assets/images/carousel/decormontras/mon28.jpg";
import imgVitrin29 from "../../assets/images/carousel/decormontras/mon29.jpg";
import imgVitrin30 from "../../assets/images/carousel/decormontras/mon30.jpg";
import imgVitrin31 from "../../assets/images/carousel/decormontras/mon31.jpg";
import imgVitrin32 from "../../assets/images/carousel/decormontras/mon32.jpg";
import imgVitrin33 from "../../assets/images/carousel/decormontras/mon33.jpg";

const IMAGES = [
  {
    src: imgVitrin1,
    alt: "Decoração de montras Print7 - Vinil recortado para lojas e estabelecimentos comerciais",
  },
  {
    src: imgVitrin2,
    alt: "Autocolantes de montra Print7 - Comunicação visual atrativa e profissional",
  },
  {
    src: imgVitrin3,
    alt: "Vinil microperfurado Print7 - Visibilidade exterior mantendo privacidade interior",
  },
  {
    src: imgVitrin4,
    alt: "Sinalização de loja Print7 - Horários, promoções e informações essenciais",
  },
  {
    src: imgVitrin5,
    alt: "Decoração comercial Print7 - Transformação de espaços com design criativo",
  },
  {
    src: imgVitrin6,
    alt: "Grafismos de montra Print7 - Arte aplicada que atrai e informa clientes",
  },
  {
    src: imgVitrin7,
    alt: "Vinil decorativo Print7 - Personalização elegante de superfícies de vidro",
  },
  { src: imgVitrin8, alt: "Comunicação visual Print7 - Mensagens claras e impactantes em montras" },
  {
    src: imgVitrin9,
    alt: "Autocolantes promocionais Print7 - Campanhas temporárias com fácil remoção",
  },
  {
    src: imgVitrin10,
    alt: "Decoração sazonal Print7 - Adaptação de montras às diferentes épocas do ano",
  },
  {
    src: imgVitrin11,
    alt: "Sinalética comercial Print7 - Informação essencial para funcionamento da loja",
  },
  { src: imgVitrin12, alt: "Vinil fosco Print7 - Privacidade e elegância em vidros comerciais" },
  {
    src: imgVitrin13,
    alt: "Branding de loja Print7 - Identidade visual consistente em todos os pontos",
  },
  {
    src: imgVitrin14,
    alt: "Decoração temática Print7 - Ambientação especial para eventos e promoções",
  },
  {
    src: imgVitrin15,
    alt: "Autocolantes informativos Print7 - Horários, contactos e serviços disponíveis",
  },
  { src: imgVitrin16, alt: "Vinil de segurança Print7 - Sinalização obrigatória e de emergência" },
  {
    src: imgVitrin17,
    alt: "Decoração artística Print7 - Criatividade aplicada a superfícies comerciais",
  },
  { src: imgVitrin18, alt: "Comunicação promocional Print7 - Ofertas e novidades em destaque" },
  {
    src: imgVitrin19,
    alt: "Vinil removível Print7 - Flexibilidade para mudanças frequentes de campanha",
  },
  {
    src: imgVitrin20,
    alt: "Sinalização direccional Print7 - Orientação clara para clientes e visitantes",
  },
  {
    src: imgVitrin21,
    alt: "Decoração corporativa Print7 - Profissionalismo em cada detalhe visual",
  },
  {
    src: imgVitrin22,
    alt: "Autocolantes de marca Print7 - Logótipos e símbolos com aplicação perfeita",
  },
  { src: imgVitrin23, alt: "Vinil publicitário Print7 - Mensagens comerciais com máximo impacto" },
  {
    src: imgVitrin24,
    alt: "Decoração moderna Print7 - Design contemporâneo para espaços comerciais",
  },
  { src: imgVitrin25, alt: "Sinalização regulamentar Print7 - Cumprimento de normas com estilo" },
  {
    src: imgVitrin26,
    alt: "Vinil personalizado Print7 - Soluções únicas para cada tipo de negócio",
  },
  { src: imgVitrin27, alt: "Decoração funcional Print7 - Beleza e utilidade em perfeita harmonia" },
  {
    src: imgVitrin28,
    alt: "Autocolantes duráveis Print7 - Materiais resistentes para uso prolongado",
  },
  { src: imgVitrin29, alt: "Comunicação eficaz Print7 - Mensagens que chegam ao público-alvo" },
  {
    src: imgVitrin30,
    alt: "Vinil técnico Print7 - Especificações profissionais para cada aplicação",
  },
  { src: imgVitrin31, alt: "Decoração inovadora Print7 - Soluções criativas que se destacam" },
  {
    src: imgVitrin32,
    alt: "Sinalização premium Print7 - Qualidade superior em decoração de montras",
  },
  {
    src: imgVitrin33,
    alt: "Vinil de qualidade Print7 - Excelência garantida em cada projeto realizado",
  },
];

function windowPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="window" />
      <CategoryPage
        title={t("categories.window.title")}
        description={t("categories.window.description")}
        images={IMAGES}
        cta={{
          title: t("categories.window.ctaTitle"),
          text: t("categories.window.ctaText"),
        }}
      />
    </main>
  );
}
export default windowPage;
