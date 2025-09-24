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
}) {
  const loc = useLocation();
  const url = canonical || new URL(loc.pathname + loc.search, BASE_URL).toString();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const robots = noindex ? "noindex, nofollow" : "index, follow";
  const absoluteImage = image?.startsWith("http") ? image : new URL(image, BASE_URL).toString();

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={absoluteImage} />
      {/* opzionale: <meta name="theme-color" content="#000000" /> */}
    </Helmet>
  );
}
