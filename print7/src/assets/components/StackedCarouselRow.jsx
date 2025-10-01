import "@mantine/carousel/styles.css";
import { Container, Title, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CarouselHighlight from "./carousel.jsx";

export default function StackedCarouselRow({
  title,
  subtitle,
  to = "#",
  slides = [],
  height = 380,
  spacing = "py-16",
  className = "",
}) {
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

  return (
    <section className={`${spacing} bg-white ${className}`}>
      <Container size="lg">
        <div className="mb-6 text-center">
          <Link to={to} aria-label={title} className="group block focus:outline-none">
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
            {subtitle && <Text c="dimmed">{subtitle}</Text>}
          </Link>
        </div>

        <div className="w-full overflow-hidden">
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
      </Container>
    </section>
  );
}
