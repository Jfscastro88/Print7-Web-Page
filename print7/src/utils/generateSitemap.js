// Utility to generate sitemap.xml
// This should be run during build process or as a separate script

const BASE_URL = "https://print7.pt";

const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/catalogs", priority: "0.7", changefreq: "monthly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },

  // Service pages
  { path: "/gifts", priority: "0.9", changefreq: "weekly" },
  { path: "/laser", priority: "0.9", changefreq: "weekly" },
  { path: "/logos", priority: "0.9", changefreq: "weekly" },
  { path: "/interior", priority: "0.9", changefreq: "weekly" },
  { path: "/stationery", priority: "0.9", changefreq: "weekly" },
  { path: "/cars", priority: "0.9", changefreq: "weekly" },
  { path: "/uniforms", priority: "0.9", changefreq: "weekly" },
  { path: "/plates", priority: "0.9", changefreq: "weekly" },
  { path: "/ad", priority: "0.9", changefreq: "weekly" },
  { path: "/stand", priority: "0.9", changefreq: "weekly" },
  { path: "/neon", priority: "0.9", changefreq: "weekly" },
  { path: "/relief", priority: "0.9", changefreq: "weekly" },
  { path: "/window", priority: "0.9", changefreq: "weekly" },
  { path: "/others", priority: "0.9", changefreq: "weekly" },
];

function generateSitemap() {
  const currentDate = new Date().toISOString().split("T")[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  routes.forEach((route) => {
    sitemap += `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="pt" href="${BASE_URL}${route.path}" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en${route.path}" />
    <xhtml:link rel="alternate" hreflang="it" href="${BASE_URL}/it${route.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${route.path}" />
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// For Node.js usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = { generateSitemap };
}

// For browser usage
if (typeof window !== "undefined") {
  window.generateSitemap = generateSitemap;
}

export { generateSitemap };

