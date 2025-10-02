import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgGifts1 from "../../assets/images/carousel/brindes/bg1.jpg";
import imgGifts2 from "../../assets/images/carousel/brindes/bg2.jpg";
import imgGifts3 from "../../assets/images/carousel/brindes/bg3.jpg";
import imgGifts4 from "../../assets/images/carousel/brindes/bg4.jpg";
import imgGifts5 from "../../assets/images/carousel/brindes/bg5.jpg";
import imgGifts6 from "../../assets/images/carousel/brindes/bg6.jpg";
import imgGifts7 from "../../assets/images/carousel/brindes/bg7.jpg";
import imgGifts8 from "../../assets/images/carousel/brindes/bg8.jpg";
import imgGifts9 from "../../assets/images/carousel/brindes/bg9.jpg";
import imgGifts10 from "../../assets/images/carousel/brindes/bg10.jpg";
import imgGifts11 from "../../assets/images/carousel/brindes/bg11.jpg";
import imgGifts12 from "../../assets/images/carousel/brindes/bg12.jpg";
import imgGifts13 from "../../assets/images/carousel/brindes/bg13.jpg";
import imgGifts14 from "../../assets/images/carousel/brindes/bg14.jpg";
import imgGifts15 from "../../assets/images/carousel/brindes/bg15.jpg";
import imgGifts16 from "../../assets/images/carousel/brindes/bg16.jpg";
import imgGifts17 from "../../assets/images/carousel/brindes/bg17.jpg";
import imgGifts18 from "../../assets/images/carousel/brindes/bg18.jpg";
import imgGifts19 from "../../assets/images/carousel/brindes/bg19.jpg";
import imgGifts20 from "../../assets/images/carousel/brindes/bg20.jpg";
import imgGifts21 from "../../assets/images/carousel/brindes/bg21.jpg";
import imgGifts22 from "../../assets/images/carousel/brindes/bg22.jpg";
import imgGifts23 from "../../assets/images/carousel/brindes/bg23.jpg";
import imgGifts24 from "../../assets/images/carousel/brindes/bg24.jpg";
import imgGifts25 from "../../assets/images/carousel/brindes/bg25.jpg";
import imgGifts26 from "../../assets/images/carousel/brindes/bg26.jpg";
import imgGifts27 from "../../assets/images/carousel/brindes/bg27.jpg";
import imgGifts28 from "../../assets/images/carousel/brindes/bg28.jpg";
import imgGifts29 from "../../assets/images/carousel/brindes/bg29.jpg";
import imgGifts30 from "../../assets/images/carousel/brindes/bg30.jpg";
import imgGifts31 from "../../assets/images/carousel/brindes/bg31.jpg";

const IMAGES = [
  {
    src: imgGifts1,
    alt: "Brindes personalizados Print7 - Canetas e acessórios corporativos com logótipo",
  },
  {
    src: imgGifts2,
    alt: "Gadgets promocionais Print7 - Produtos tecnológicos personalizados para empresas",
  },
  {
    src: imgGifts3,
    alt: "Brindes têxteis Print7 - T-shirts e vestuário personalizado com impressão",
  },
  { src: imgGifts4, alt: "Canecas personalizadas Print7 - Artigos promocionais para escritório" },
  {
    src: imgGifts5,
    alt: "Acessórios corporativos Print7 - Porta-chaves e brindes metálicos gravados",
  },
  {
    src: imgGifts6,
    alt: "Material promocional Print7 - Cadernos e artigos de papelaria personalizados",
  },
  {
    src: imgGifts7,
    alt: "Brindes ecológicos Print7 - Produtos sustentáveis com logótipo da empresa",
  },
  {
    src: imgGifts8,
    alt: "Gadgets USB Print7 - Pen drives e acessórios tecnológicos personalizados",
  },
  {
    src: imgGifts9,
    alt: "Brindes para eventos Print7 - Artigos promocionais para feiras e congressos",
  },
  { src: imgGifts10, alt: "Presentes corporativos Print7 - Brindes premium com gravação laser" },
  {
    src: imgGifts11,
    alt: "Artigos promocionais Print7 - Bolsas e mochilas personalizadas para empresas",
  },
  {
    src: imgGifts12,
    alt: "Brindes desportivos Print7 - Garrafas e acessórios para atividade física",
  },
  { src: imgGifts13, alt: "Material publicitário Print7 - Calendários e agendas personalizadas" },
  {
    src: imgGifts14,
    alt: "Brindes alimentares Print7 - Produtos gourmet personalizados para clientes",
  },
  {
    src: imgGifts15,
    alt: "Acessórios de viagem Print7 - Bagagem e artigos personalizados para deslocações",
  },
  {
    src: imgGifts16,
    alt: "Brindes de escritório Print7 - Organizadores e acessórios de secretária",
  },
  {
    src: imgGifts17,
    alt: "Gadgets inovadores Print7 - Produtos tecnológicos de última geração personalizados",
  },
  { src: imgGifts18, alt: "Brindes sazonais Print7 - Artigos promocionais temáticos e de época" },
  { src: imgGifts19, alt: "Presentes VIP Print7 - Brindes exclusivos para clientes preferenciais" },
  {
    src: imgGifts20,
    alt: "Material promocional exterior Print7 - Brindes resistentes para uso ao ar livre",
  },
  { src: imgGifts21, alt: "Brindes infantis Print7 - Artigos promocionais seguros para crianças" },
  { src: imgGifts22, alt: "Acessórios casa Print7 - Brindes para uso doméstico com logótipo" },
  {
    src: imgGifts23,
    alt: "Brindes premium Print7 - Artigos de luxo personalizados para executivos",
  },
  {
    src: imgGifts24,
    alt: "Material promocional digital Print7 - Suportes tecnológicos personalizados",
  },
  {
    src: imgGifts25,
    alt: "Brindes sustentáveis Print7 - Produtos eco-friendly com impressão ecológica",
  },
  {
    src: imgGifts26,
    alt: "Artigos promocionais saúde Print7 - Brindes relacionados com bem-estar",
  },
  { src: imgGifts27, alt: "Brindes personalizados Print7 - Produtos únicos com design exclusivo" },
  { src: imgGifts28, alt: "Material corporativo Print7 - Brindes profissionais para networking" },
  {
    src: imgGifts29,
    alt: "Gadgets promocionais Print7 - Inovação tecnológica ao serviço da marca",
  },
  {
    src: imgGifts30,
    alt: "Brindes funcionais Print7 - Artigos úteis do quotidiano personalizados",
  },
  {
    src: imgGifts31,
    alt: "Presentes empresariais Print7 - Brindes de qualidade superior com acabamento premium",
  },
];

function AdvertisingPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="gifts" />
      <CategoryPage
        title={t("categories.gifts.title")}
        description={t("categories.gifts.description")}
        images={IMAGES}
        cta={{
          title: t("categories.gifts.ctaTitle"),
          text: t("categories.gifts.ctaText"),
        }}
      />
    </main>
  );
}
export default AdvertisingPage;
