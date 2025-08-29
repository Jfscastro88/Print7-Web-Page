import React, { useRef, useState } from 'react';
import { Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '@mantine/carousel/styles.css';


export default function CarouselHighlight({
  items = [],
  height = 420,
  slideSize = '60%',
  loop = true,
  autoplayDelay = 3500,
  align = 'center',
  indicatorsClass = 'bottom-16',
  className = '',
}) {
  const [active, setActive] = useState(0);
  const autoplay = useRef(Autoplay({ delay: autoplayDelay }));

  return (
    <Carousel
      withIndicators
      height={height}
      slideSize={slideSize}
      slideGap="md"
      emblaOptions={{ dragFree: true, loop, align }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      onSlideChange={setActive}
      className={className}
      classNames={{ indicators: indicatorsClass, control: 'rounded-full shadow-lg' }}
    >
      {items.map((it, idx) => {
        const content = (
          <motion.div
            initial={{ scale: 0.9, opacity: 0.85 }}
            animate={{ scale: active === idx ? 1 : 0.9, opacity: active === idx ? 1 : 0.85 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="relative overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
          >
            <div
              className="h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ backgroundImage: `url(${it.src})` }}
              role="img"
              aria-label={it.alt || it.title || 'carousel image'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
            {(it.title || it.subtitle) && (
              <div className="absolute bottom-4 left-4 right-4">
                <Text c="white" fw={700} size="lg" className="drop-shadow underline-offset-4">
                  {it.title}
                </Text>
                {it.subtitle && (
                  <Text c="gray.2" size="sm" className="drop-shadow">
                    {it.subtitle}
                  </Text>
                )}
              </div>
            )}
          </motion.div>
        );

        return (
          <Carousel.Slide key={idx} className="px-2">
            {it.to ? (
              <Link to={it.to} className="block group focus:outline-none" aria-label={it.title}>
                {content}
              </Link>
            ) : (
              content
            )}
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
}
