import { Helmet } from "react-helmet-async";

const BASE_URL = import.meta.env.VITE_SITE_URL || "https://print7.pt/";

// Business Schema for Print7
export function BusinessSchema() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}#business`,
    name: "Print7 - Publicidade & Design",
    alternateName: "Print7",
    description:
      "Empresa de publicidade e design gráfico em Setúbal. Especializada em impressão, sinalética, brindes personalizados, fardamentos e soluções de comunicação visual.",
    url: BASE_URL,
    telephone: "+351 265 098 462",
    email: "geral@print7.pt",
    foundingDate: "2012",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Nossa Senhora do Carmo, 22A",
      addressLocality: "Setúbal",
      postalCode: "2900-146",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.5244",
      longitude: "-8.8882",
    },
    openingHours: ["Mo-Fr 09:00-13:00", "Mo-Fr 14:00-18:00"],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "38.5244",
        longitude: "-8.8882",
      },
      geoRadius: "50000",
    },
    serviceArea: [
      {
        "@type": "City",
        name: "Setúbal",
      },
      {
        "@type": "City",
        name: "Lisboa",
      },
      {
        "@type": "AdministrativeArea",
        name: "Península de Setúbal",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Print7",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Design de Logotipo",
            description: "Criação de logótipos e identidade visual",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Impressão Digital",
            description: "Impressão de materiais publicitários e promocionais",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sinalética",
            description: "Placas, reclamos luminosos e sinalização",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brindes Personalizados",
            description: "Gadgets e brindes corporativos personalizados",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fardamentos",
            description: "Uniformes e equipamentos de proteção individual",
          },
        },
      ],
    },
    sameAs: ["https://www.facebook.com/print7setubal", "https://www.instagram.com/print7_setubal"],
    logo: `${BASE_URL}print7.svg`,
    image: `${BASE_URL}og.jpg`,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
    </Helmet>
  );
}

// Service Schema for individual service pages
export function ServiceSchema({ serviceName, description, image }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}#business`,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "38.5244",
        longitude: "-8.8882",
      },
      geoRadius: "50000",
    },
    serviceType: "Design and Printing Services",
    category: "Advertising and Marketing",
    ...(image && { image: image.startsWith("http") ? image : `${BASE_URL}${image}` }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
    </Helmet>
  );
}

// Breadcrumb Schema
export function BreadcrumbSchema({ items }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
}

// Website Schema
export function WebsiteSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}#website`,
    name: "Print7 - Publicidade & Design",
    alternateName: "Print7",
    url: BASE_URL,
    description:
      "Empresa de Publicidade e Design Gráfico em Setúbal especializada em soluções de comunicação visual.",
    publisher: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}#business`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["pt-PT", "en-US", "it-IT"],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
    </Helmet>
  );
}
