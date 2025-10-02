import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Print7";
const DEFAULT_IMAGE = "/og.jpg";
const BASE_URL = import.meta.env.VITE_SITE_URL || "https://print7.pt/";

export default function Seo({
  title,
  description,
  image = DEFAULT_IMAGE,
  canonical,
  noindex = false,
  keywords,
  type = "website",
  author,
  publishedTime,
  modifiedTime,
}) {
  const loc = useLocation();
  const url = canonical || new URL(loc.pathname + loc.search, BASE_URL).toString();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const robots = noindex
    ? "noindex, nofollow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
  const absoluteImage = image?.startsWith("http") ? image : new URL(image, BASE_URL).toString();

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="bingbot" content={robots} />

      {/* Enhanced meta tags */}
      <meta name="author" content={author || "Print7 - Publicidade & Design"} />
      <meta name="publisher" content="Print7" />
      <meta name="copyright" content="Print7 - Todos os direitos reservados" />
      <meta name="language" content="pt-PT" />
      <meta name="geo.region" content="PT-15" />
      <meta name="geo.placename" content="Setúbal" />
      <meta name="geo.position" content="38.5244;-8.8882" />
      <meta name="ICBM" content="38.5244, -8.8882" />

      <link rel="canonical" href={url} />

      {/* Alternate language versions */}
      <link rel="alternate" hrefLang="pt" href={url} />
      <link rel="alternate" hrefLang="en" href={url.replace("/pt/", "/en/")} />
      <link rel="alternate" hrefLang="it" href={url.replace("/pt/", "/it/")} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${fullTitle} - Print7`} />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="it_IT" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={`${fullTitle} - Print7`} />
      <meta name="twitter:site" content="@print7setubal" />
      <meta name="twitter:creator" content="@print7setubal" />

      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#1f2937" />
      <meta name="msapplication-TileColor" content="#1f2937" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Helmet>
  );
}
