import "@mantine/core/styles.css";
import { Container, Title, Text, SimpleGrid } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, forwardRef, useRef } from "react";

// --- single card ------------------------------------------------------------
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
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      animate={{ scale: isActive ? 1.08 : 1, zIndex: isActive ? 2 : 1 }}
      whileHover={{ scale: isActive ? 1.07 : 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`origin-center scroll-mt-24 group relative overflow-hidden rounded-2xl bg-white cursor-pointer ${
        isActive ? "ring-2 ring-blue-300 shadow-[0_12px_28px_rgba(0,0,0,0.18)]" : ""
      }`}
      aria-pressed={isActive}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-[240px] w-full ${
          fitContain ? "object-contain bg-gray-50 p-4" : "object-cover"
        } transition duration-500 ${isDimmed ? "blur-[1px] opacity-60" : "opacity-100"}`}
      />
    </motion.div>
  );
});

// --- Page ------------------------------------------------------------------
function CategoryPage({
  title,
  description,
  images,
  cta,
  selected: selectedProp,
  setSelected: setSelectedProp,
  onCardClick,
  cardRefs,
  forceContain = false,
}) {
  const [selectedState, setSelectedState] = useState(null);
  const selected = selectedProp ?? selectedState;
  const setSelected = setSelectedProp ?? setSelectedState;

  // --- Helpers -------------------------------------------------------
  const getItem = (i) => {
    if (i == null) return null;
    const item = images?.[i];
    return typeof item === "string" ? { src: item, alt: `Immagine ${i + 1}` } : item;
  };
  const activeItem = getItem(selected);

  const goPrev = () =>
    setSelected((i) => (i == null ? 0 : (i - 1 + images.length) % images.length));
  const goNext = () => setSelected((i) => (i == null ? 0 : (i + 1) % images.length));

  // --- Keyboard navigation -----------------------------------------------------
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (selected != null) {
        if (e.key === "ArrowLeft") goPrev();
        if (e.key === "ArrowRight") goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    if (selected !== null) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [selected]);

  // --- Swipe su mobile -------------------------------------------------------
  const startX = useRef(null);
  const startY = useRef(null);
  const touchActive = useRef(false);
  const SWIPE_THRESHOLD = 50; // minimal distance in px to be considered swipe

  const onTouchStart = (e) => {
    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
    touchActive.current = true;
  };

  const onTouchMove = (e) => {
    // avoid false swipe if too much vertical movement
    if (!touchActive.current) return;
    // if more than 30px vertical movement, cancel swipe
    const dy = Math.abs(e.touches[0].clientY - (startY.current ?? 0));
    if (dy > 28) {
      touchActive.current = false;
    }
  };

  const onTouchEnd = (e) => {
    if (!touchActive.current) return;
    const endX = e.changedTouches[0].clientX;
    const dx = endX - (startX.current ?? endX);

    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) goNext(); // swipe right -> next
      else goPrev(); // swipe left -> prev
    }
    touchActive.current = false;
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="py-12 md:py-16 bg-gray-50">
        <Container size="lg" className="text-center">
          <Title order={1} className="mb-3 tracking-tight">
            {title}
          </Title>
          {description && (
            <Text c="dimmed" className="max-w-3xl mx-auto">
              {description}
            </Text>
          )}
        </Container>
      </section>

      <section className="py-10 md:py-14">
        <Container size="lg" className="text-center">
          <SimpleGrid
            cols={3}
            spacing="md"
            breakpoints={[
              { maxWidth: "md", cols: 2 },
              { maxWidth: "sm", cols: 1 },
            ]}
          >
            {images.map((img, i) => {
              const item = typeof img === "string" ? { src: img, alt: `Immagine ${i + 1}` } : img;
              return (
                <CategoryCard
                  key={i}
                  ref={(el) => cardRefs && (cardRefs.current[i] = el)}
                  src={item.src}
                  alt={item.alt}
                  fitContain={forceContain || item.fitContain}
                  isActive={selected === i}
                  isDimmed={selected !== null && selected !== i}
                  onClick={() => (onCardClick ? onCardClick(i) : setSelected(i))}
                />
              );
            })}
          </SimpleGrid>
        </Container>
      </section>

      {cta && (
        <section className="py-12 md:py-16 bg-gray-50">
          <Container size="lg" className="text-center">
            <Title order={3} className="mb-2">
              {cta.title}
            </Title>
            <Text c="dimmed" className="max-w-2xl mx-auto">
              {cta.text}
            </Text>
          </Container>
        </section>
      )}

      <AnimatePresence>
        {activeItem && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div
              className="absolute inset-0 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()} // stop propagation
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-12 right-6 sm:right-12  text-white/90 hover:text-white text-4xl leading-none"
                aria-label="Close image viewer"
              >
                ×
              </button>

              <button
                onClick={goPrev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2
                            h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/15 hover:bg-white/25
                            text-white text-xl md:text-2xl grid place-items-center
                            backdrop-blur-sm border border-white/10"
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                onClick={goNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2
                            h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/15 hover:bg-white/25
                            text-white text-xl md:text-2xl grid place-items-center
                            backdrop-blur-sm border border-white/10"
                aria-label="Next image"
              >
                ›
              </button>

              {/* mobile fullscreen, desktop 50% */}
              <motion.img
                src={activeItem.src}
                alt={activeItem.alt || "Image"}
                className="
                  object-contain
                  w-[92vw] max-h-[92vh]
                  md:max-w-[50vw] md:max-h-[80vh]
                  rounded-lg shadow-2xl
                "
                initial={{ scale: 0.92, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
export default CategoryPage;
