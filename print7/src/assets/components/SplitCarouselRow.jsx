import '@mantine/carousel/styles.css';
import { Container, Title, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import CarouselHighlight from './carousel.jsx';

/**
 * SplitCarouselRow
 * - side: "left" | "right"
 *   Mobile  (<sm): layout a colonna → TESTO sopra, CAROUSEL sotto
 *   Desktop (≥sm): side="left"  → testo a sinistra, immagine a destra
 *                  side="right" → testo a destra,  immagine a sinistra
 * - spacing: padding verticale tra le sezioni (es: "py-20", "py-24")
 * - height: altezza del carousel
 */
export default function SplitCarouselRow({
  title,
  subtitle,
  to = '#',
  slides = [],
  side = 'right',
  height = 380,
  spacing = 'py-20',
  className = '',
}) {
  // Normalizza gli slide
  const items = slides.map((s) => ({
    src: s.src,
    alt: s.alt || title || 'slide',
    title: s.title ?? '',
    subtitle: s.subtitle ?? '',
    to: s.to ?? to,
  }));

  // Direzione della riga su desktop
  const rowDirection = side === 'left' ? 'sm:flex-row' : 'sm:flex-row-reverse';

  // Allineamento del testo dentro la sua colonna
  const textAlignClass =
    side === 'right'
      ? 'text-right items-end md:text-right md:items-end'
      : 'text-left items-start md:text-left md:items-start';

  // CTA "Explore" → nascosta su mobile, freccia inversa quando side="right"
  const ExploreCTA = () => (
    <span className="hidden md:inline-flex items-center gap-2 font-medium">
      {side === 'right' ? (
        <>
          {/* ← */}
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
          {/* → */}
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
        {/* Riga responsive: colonna su mobile, fila (o inversa) su desktop */}
        <div className={`flex flex-col ${rowDirection} items-stretch gap-8 sm:gap-12 min-w-0`}>
          {/* Colonna TESTO — su desktop allineata a sinistra/destra in base a `side` */}
          <div className={`flex ${textAlignClass} justify-center p-6 md:p-10 sm:basis-1/2 sm:flex-1`}>
            <Link to={to} aria-label={title} className="group block max-w-xl focus:outline-none">
              <Title order={2} className="mb-2 underline-offset-4 group-hover:underline">
                {title}
              </Title>
              {subtitle && <Text c="dimmed" className="mb-3">{subtitle}</Text>}
              <ExploreCTA />
            </Link>
          </div>

          {/* Colonna CAROUSEL — bordi arrotondati SEMPRE, larghezze sicure in flex */}
          <div className="overflow-hidden rounded-2xl ring-1 ring-black/5 w-full sm:basis-1/2 sm:flex-1 sm:min-w-0">
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
        </div>
      </Container>
    </section>
  );
}
