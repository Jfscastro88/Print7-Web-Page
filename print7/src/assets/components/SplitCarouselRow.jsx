import "@mantine/carousel/styles.css";
import { Container, Title, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import CarouselHighlight from "./carousel.jsx";

export default function SplitCarouselRow({
  title,
  subtitle,
  to = "#",
  slides = [],
  side = "right",
  height = 380,
  spacing = "py-16",
  className = "",
}) {
  const { t } = useTranslation("common");
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 640px)");
    const tabletQuery = window.matchMedia("(max-width: 1024px) and (min-width: 641px)");

    const handleMobileChange = (e) => setIsMobile(e.matches);
    const handleTabletChange = (e) => setIsTablet(e.matches);

    handleMobileChange(mobileQuery);
    handleTabletChange(tabletQuery);

    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);
  const items = slides.map((s) => ({
    src: s.src,
    alt: s.alt || title || "slide",
    title: s.title ?? "",
    subtitle: s.subtitle ?? "",
    to: s.to ?? to,
  }));

  const rowDirection = side === "left" ? "sm:flex-row" : "sm:flex-row-reverse";

  const textAlignClass =
    side === "right"
      ? "text-center items-center md:text-right md:items-end"
      : "text-center items-center md:text-left md:items-start";

  const ExploreCTA = () => (
    <span className="hidden md:inline-flex items-center gap-2 font-medium">
      {side === "right" ? (
        <>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="opacity-70 group-hover:opacity-100 transition-opacity"
            aria-hidden="true"
          >
            <path fill="currentColor" d="M11 19l-7-7 7-7v4h9v6h-9v4z" />
          </svg>
          <span className="group-hover:-translate-x-0.5 transition-transform">
            {t("common.explore")}
          </span>
        </>
      ) : (
        <>
          <span className="group-hover:translate-x-0.5 transition-transform">
            {t("common.explore")}
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="opacity-70 group-hover:opacity-100 transition-opacity"
            aria-hidden="true"
          >
            <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
          </svg>
        </>
      )}
    </span>
  );

  return (
    <section className={`${spacing} bg-white ${className}`}>
      <Container size="lg">
        <div className={`flex flex-col ${rowDirection} items-stretch gap-8 sm:gap-12 min-w-0`}>
          <div
            className={`flex ${textAlignClass} justify-center px-4 py-6 md:py-8 sm:basis-1/2 sm:flex-1`}
          >
            <Link to={to} aria-label={title} className="group block max-w-xl focus:outline-none">
              <Title
                order={2}
                className={`mb-2 underline-offset-4 group-hover:underline ${
                  isMobile
                    ? "text-xl sm:text-2xl"
                    : isTablet
                    ? "text-2xl md:text-3xl"
                    : "text-2xl md:text-3xl"
                } font-bold tracking-tight`}
              >
                {title}
              </Title>
              {subtitle && (
                <Text c="dimmed" className="mb-3">
                  {subtitle}
                </Text>
              )}
              <ExploreCTA />
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl w-full sm:basis-1/2 sm:flex-1 sm:min-w-0">
            <CarouselHighlight
              items={items}
              height={height}
              mobileHeight={260}
              slideSize="100%"
              title=""
              subtitle=""
              headerAlign="center"
              indicatorsClass="hidden"
              showIndicators={false}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
