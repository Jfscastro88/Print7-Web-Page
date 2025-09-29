import { useRef, useState, useEffect, useMemo } from "react";
import { Container, Text, Title, Loader } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "@mantine/carousel/styles.css";

function EnhancedCarousel({
  items = [],
  height = 420,
  mobileHeight,
  slideSize = "60%",
  loop = true,
  autoplayDelay = 3000,
  align = "center",
  showIndicators = true,
  className = "",
  title,
  subtitle,
  headerAlign = "center",
  containerSize = "lg",
  containerClassName = "px-4",
  loading = false,
}) {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const autoplay = useRef(Autoplay({ delay: autoplayDelay }));
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const onChange = (e) => setIsMobile(e.matches);
    onChange(mq);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const effectiveHeight = isMobile && mobileHeight ? mobileHeight : height;

  useEffect(() => {
    if (items.length === 0) return;

    let loadedCount = 0;
    const totalImages = items.length;

    const preloadImages = items.map((item) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
          resolve();
        };
        img.src = item.src;
      });
    });

    Promise.all(preloadImages);
  }, [items]);

  const headerAlignClass =
    headerAlign === "" ? "text-left" : headerAlign === "right" ? "text-right" : "text-center";

  const slideVariants = useMemo(
    () => ({
      initial: { scale: 0.9, opacity: 0.85, rotateY: 15 },
      animate: (active) => ({
        scale: active ? 1 : 0.9,
        opacity: active ? 1 : 0.85,
        rotateY: active ? 0 : 15,
        z: active ? 0 : -100,
      }),
      hover: {
        scale: 1.02,
        rotateY: -5,
      },
    }),
    []
  );

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }),
    []
  );

  if (loading || !imagesLoaded) {
    return (
      <Container size={containerSize} className={`${containerClassName} mx-auto`}>
        <div className="flex items-center justify-center" style={{ height: effectiveHeight }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Loader size="lg" color="blue" />
            <Text mt="md" c="dimmed">
              Loading gallery...
            </Text>
          </motion.div>
        </div>
      </Container>
    );
  }

  return (
    <motion.div ref={containerRef} style={{ y, opacity, scale }} className="relative">
      <Container size={containerSize} className={`${containerClassName} mx-auto`}>
        <AnimatePresence>
          {(title || subtitle) && (
            <motion.div
              className={`mb-6 ${headerAlignClass}`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {title && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Title
                    order={2}
                    className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  >
                    {title}
                  </Title>
                </motion.div>
              )}
              {subtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Text size="md" className="text-gray-1000 mt-1">
                    {subtitle}
                  </Text>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <Carousel
            withIndicators={showIndicators}
            height={effectiveHeight}
            slideSize={slideSize}
            slideGap="md"
            emblaOptions={{ dragFree: true, loop, align }}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            onSlideChange={setActive}
            className={className}
            classNames={{
              viewport: "overflow-hidden",
              indicators: indicatorsClass,
              control: "rounded-full shadow-lg transition-all duration-300 hover:scale-110",
            }}
          >
            {items.map((it, idx) => {
              const content = (
                <motion.div
                  variants={slideVariants}
                  initial="initial"
                  animate={slideVariants.animate(active === idx)}
                  whileHover="hover"
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 18,
                    duration: 0.6,
                  }}
                  className="relative overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.18)] group cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  <motion.div
                    className="w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.05]"
                    style={{ backgroundImage: `url(${it.src})`, height: effectiveHeight }}
                    role="img"
                    aria-label={it.alt || it.title || "carousel image"}
                    animate={{
                      scale: isHovered && active === idx ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                    animate={{
                      opacity: active === idx ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-white/20"
                    animate={{
                      borderColor:
                        active === idx ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {(it.title || it.subtitle) && (
                    <motion.div
                      className="absolute bottom-4 left-4 right-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: active === idx ? 1 : 0.8,
                        y: active === idx ? 0 : 10,
                      }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <motion.div
                        animate={{
                          scale: active === idx ? 1 : 0.95,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Text
                          c="white"
                          fw={700}
                          size="lg"
                          className="drop-shadow-lg underline-offset-4"
                        >
                          {it.title}
                        </Text>
                        {it.subtitle && (
                          <Text c="gray.2" size="sm" className="drop-shadow">
                            {it.subtitle}
                          </Text>
                        )}
                      </motion.div>
                    </motion.div>
                  )}

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: isHovered && active === idx ? "100%" : "-100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.div>
              );

              return (
                <Carousel.Slide key={idx} className="px-2">
                  {it.to ? (
                    <motion.div
                      role="link"
                      tabIndex={0}
                      aria-label={it.title || "carousel link"}
                      className="block focus:outline-none cursor-pointer"
                      onClick={() => navigate(it.to)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          navigate(it.to);
                        }
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.1 }}
                    >
                      {content}
                    </motion.div>
                  ) : (
                    content
                  )}
                </Carousel.Slide>
              );
            })}
          </Carousel>

          {showIndicators && (
            <motion.div
              className="flex justify-center mt-4 space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {items.map((_, idx) => (
                <motion.button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    active === idx ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setActive(idx)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: active === idx ? 1.25 : 1,
                    backgroundColor: active === idx ? "#3b82f6" : "#d1d5db",
                  }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </motion.div>
  );
}

export default EnhancedCarousel;
