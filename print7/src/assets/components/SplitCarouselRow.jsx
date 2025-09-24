import "@mantine/carousel/styles.css";
import { Container, Title, Text } from "@mantine/core";
import { Link } from "react-router-dom";
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
      ? "text-right items-end md:text-right md:items-end"
      : "text-left items-start md:text-left md:items-start";

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
          <span className="group-hover:-translate-x-0.5 transition-transform">Explore</span>
        </>
      ) : (
        <>
          <span className="group-hover:translate-x-0.5 transition-transform">Explore</span>
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
            className={`flex ${textAlignClass} justify-center p-6 md:p-10 sm:basis-1/2 sm:flex-1`}
          >
            <Link to={to} aria-label={title} className="group block max-w-xl focus:outline-none">
              <Title order={2} className="mb-2 underline-offset-4 group-hover:underline">
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

          <div className="overflow-hidden rounded-2xl ring-1 ring-black/5 w-full sm:basis-1/2 sm:flex-1 sm:min-w-0">
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
