import '@mantine/carousel/styles.css';
import { Container, Title, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import CarouselHighlight from './carousel.jsx';

/**
 * StackedCarouselRow
 * - Layout verticale: titolo + sottotitolo SOPRA al carousel
 * - Sempre centrato
 * - spacing: padding verticale (es: "py-20")
 */
export default function StackedCarouselRow({
  title,
  subtitle,
  to = '#',
  slides = [],
  height = 380,
  spacing = 'py-20',
  className = '',
}) {
  const items = slides.map((s) => ({
    src: s.src,
    alt: s.alt || title || 'slide',
    title: s.title ?? '',
    subtitle: s.subtitle ?? '',
    to: s.to ?? to,
  }));

  return (
    <section className={`${spacing} bg-white ${className}`}>
      <Container size="lg">
        {/* Header: centrato, cliccabile */}
        <div className="mb-6 text-center">
          <Link to={to} aria-label={title} className="group block focus:outline-none">
            <Title order={2} className="mb-2 underline-offset-4 group-hover:underline">
              {title}
            </Title>
            {subtitle && <Text c="dimmed">{subtitle}</Text>}
          </Link>
        </div>

        {/* Carousel con bordi arrotondati */}
        <div className="w-full overflow-hidden rounded-2xl ring-1 ring-black/5">
          <CarouselHighlight
            items={items}
            height={height}
            slideSize="100%"
            title=""
            subtitle=""
            headerAlign="center"
            indicatorsClass="bottom-2 [&>button]:opacity-30 [&>button[aria-current='true']]:opacity-100"
          />
        </div>
      </Container>
    </section>
  );
}
