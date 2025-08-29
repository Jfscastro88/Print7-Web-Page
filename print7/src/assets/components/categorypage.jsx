import '@mantine/core/styles.css';
import { Container, Title, Text, SimpleGrid, Button } from '@mantine/core';
import { motion } from 'framer-motion';
import { useState, useEffect, forwardRef } from 'react';

// Card con forwardRef e supporto fitContain (cover di default)
const CategoryCard = forwardRef(function CategoryCard(
  { src, alt, isActive, isDimmed, onClick, fitContain = false },
  ref
) {
  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      animate={{ scale: isActive ? 1.08 : 1, zIndex: isActive ? 2 : 1 }}
      whileHover={{ scale: isActive ? 1.07 : 1.02 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={`origin-center scroll-mt-24 group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 cursor-pointer ${
        isActive ? 'ring-2 ring-blue-300 shadow-[0_12px_28px_rgba(0,0,0,0.18)]' : ''
      }`}
      aria-pressed={isActive}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-[240px] w-full ${
          fitContain ? 'object-contain bg-gray-50 p-4' : 'object-cover'
        } transition duration-500 ${isDimmed ? 'blur-[1px] opacity-60' : 'opacity-100'}`}
      />
    </motion.div>
  );
});

export default function CategoryPage({
  title,
  description,
  images,                  // può essere [{src,alt,fitContain?}] oppure string[]
  cta,
  // opzionali (se vuoi controllare selezione dall’esterno)
  selected: selectedProp,
  setSelected: setSelectedProp,
  onCardClick,
  cardRefs,               // useRef([]) per scroll-centrato su mobile
  forceContain = false,   // forza contain per tutta la pagina (es. Logos)
}) {
  const [selectedState, setSelectedState] = useState(null);
  const selected = selectedProp ?? selectedState;
  const setSelected = setSelectedProp ?? setSelectedState;

  const handleCardClick = (i) => {
    if (onCardClick) return onCardClick(i);
    setSelected((prev) => (prev === i ? null : i));
  };

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setSelected]);

  return (
    <main className="min-h-screen bg-white">
      {/* Intro */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container size="lg" className="text-center">
          <Title order={1} className="mb-3 tracking-tight">{title}</Title>
          {description && <Text c="dimmed" className="max-w-3xl mx-auto">{description}</Text>}
        </Container>
      </section>

      {/* Grid */}
      <section className="py-10 md:py-14">
        <Container size="lg" className="text-center">
          <SimpleGrid
            cols={3}
            spacing="md"
            breakpoints={[
              { maxWidth: 'md', cols: 2 },
              { maxWidth: 'sm', cols: 1 },
            ]}
          >
            {images.map((img, i) => {
              const item = typeof img === 'string' ? { src: img, alt: `Immagine ${i + 1}` } : img;
              return (
                <CategoryCard
                  key={i}
                  ref={(el) => cardRefs && (cardRefs.current[i] = el)}
                  src={item.src}
                  alt={item.alt}
                  fitContain={forceContain || item.fitContain}
                  isActive={selected === i}
                  isDimmed={selected !== null && selected !== i}
                  onClick={() => handleCardClick(i)}
                />
              );
            })}
          </SimpleGrid>
        </Container>
      </section>

      {/* CTA */}
      {cta && (
        <section className="py-12 md:py-16 bg-gray-50">
          <Container size="lg" className="text-center">
            <Title order={3} className="mb-2">{cta.title}</Title>
            <Text c="dimmed" className="max-w-2xl mx-auto">{cta.text}</Text>
          </Container>
        </section>
      )}
    </main>
  );
}
