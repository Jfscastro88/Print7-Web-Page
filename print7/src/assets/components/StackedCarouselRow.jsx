import "@mantine/carousel/styles.css";
import { Container, Title, Text } from "@mantine/core";
import { Link } from "react-router-dom";
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
            <Title order={2} className="mb-2 underline-offset-4 group-hover:underline">
              {title}
            </Title>
            {subtitle && <Text c="dimmed">{subtitle}</Text>}
          </Link>
        </div>

        <div className="w-full overflow-hidden rounded-2xl ring-1 ring-black/5">
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
