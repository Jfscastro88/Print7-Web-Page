import Seo from "../components/seo.jsx";
import { ServiceSchema, BreadcrumbSchema } from "../components/StructuredData.jsx";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_SITE_URL || "https://print7.pt/";

export default function ServiceSeo({ slug, image }) {
  const { t } = useTranslation("common");
  const location = useLocation();

  const title = t(`seo2.services.${slug}.title`);
  const description = t(`seo.services.${slug}.desc`);

  // Generate keywords based on service
  const getServiceKeywords = (slug) => {
    const baseKeywords = "Print7, Setúbal, publicidade, design gráfico";
    const serviceKeywords = {
      gifts: "brindes personalizados, gadgets corporativos, presentes empresa",
      laser: "corte laser, gravação laser, madeira, acrílico, metal",
      logos: "criação logotipo, identidade visual, design marca, branding",
      interior: "decoração interiores, vinil decorativo, sinalética interior",
      stationery: "estacionário, papel timbrado, cartões visita, envelopes",
      cars: "personalização viaturas, wrapping, lettering carros, publicidade móvel",
      uniforms: "fardamentos, EPI, uniformes personalizados, bordados",
      plates: "placas, lonas, sinalética exterior, impressão grande formato",
      ad: "reclamos luminosos, caixas luz LED, sinalética iluminada",
      stand: "stands, expositores, roll-ups, material feiras",
      neon: "LED neon, letreiros luminosos, decoração LED",
      relief: "letras relevo, 3D, sinalética dimensional, PVC",
      window: "decoração montras, vinil microperfurado, autocolantes",
      others: "projetos especiais, soluções personalizadas, trabalhos medida",
    };
    return `${baseKeywords}, ${serviceKeywords[slug] || ""}`;
  };

  // Breadcrumb items
  const breadcrumbItems = [
    { name: "Início", url: BASE_URL },
    { name: title, url: `${BASE_URL}${location.pathname}` },
  ];

  return (
    <>
      <Seo
        title={title}
        description={description}
        image={image}
        keywords={getServiceKeywords(slug)}
        type="service"
      />
      <ServiceSchema serviceName={title} description={description} image={image} />
      <BreadcrumbSchema items={breadcrumbItems} />
    </>
  );
}
