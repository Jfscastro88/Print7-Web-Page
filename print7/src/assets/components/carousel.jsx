import { useRef, useState, useEffect } from "react";
import { Container, Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CAROUSEL_CONFIG } from "../../config/carousel";
import "@mantine/carousel/styles.css";

function CarouselHighlight({
  items = [],
  height = 420,
  mobileHeight,
  slideSize = "60%",
  loop = true,
  autoplayDelay = CAROUSEL_CONFIG.AUTOPLAY_DELAY,
  align = "center",
  showIndicators = true,
  className = "",
  title,
  subtitle,
  headerAlign = "center",
  containerSize = "lg",
  containerClassName = "px-4",
}) {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
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

  const effectiveHeight = isMobile && mobileHeight ? mobileHeight : height;
  const effectiveSlideSize = isMobile ? "90%" : isTablet ? "70%" : slideSize;

  const headerAlignClass =
    headerAlign === "" ? "text-left" : headerAlign === "right" ? "text-right" : "text-center";

  return (
    <motion.div ref={containerRef} style={{ y, opacity, scale }} className="relative">
      <Container size={containerSize} className={`${containerClassName} mx-auto`}>
        {(title || subtitle) && (
          <motion.div
            className={`mb-6 ${headerAlignClass}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
                  className={`${
                    isMobile
                      ? "text-xl sm:text-2xl"
                      : isTablet
                      ? "text-2xl md:text-3xl"
                      : "text-2xl md:text-3xl"
                  } font-bold tracking-tight text-black`}
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

        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <Carousel
            withIndicators={false}
            height={effectiveHeight}
            slideSize={effectiveSlideSize}
            slideGap={isMobile ? "sm" : "md"}
            emblaOptions={{
              dragFree: true,
              loop,
              align,
              containScroll: isMobile ? "trimSnaps" : "trimSnaps",
            }}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            onSlideChange={setActive}
            className={className}
            classNames={{
              viewport: "overflow-hidden bg-white",
              control: `h-8 w-8 md:h-10 md:w-10 rounded-full bg-white/100 hover:bg-white/15
                        text-white text-sm md:text-lg grid place-items-center
                        backdrop-blur-sm border border-white/3
                        transition-all duration-300 hover:scale-110
                        opacity-5 hover:opacity-100
                        data-[data-inactive]:opacity-5`,
            }}
          >
            {items.map((it, idx) => {
              const content = (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.85, rotateY: 15 }}
                  animate={{
                    scale: active === idx ? 1 : 0.9,
                    opacity: active === idx ? 1 : 0.85,
                    rotateY: active === idx ? 0 : 15,
                    z: active === idx ? 0 : -100,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: isMobile ? 200 : 180,
                    damping: isMobile ? 20 : 18,
                    duration: isMobile ? 0.4 : 0.6,
                  }}
                  whileHover={
                    !isMobile
                      ? {
                          scale: 1.02,
                          rotateY: -5,
                          transition: { duration: 0.3 },
                        }
                      : {}
                  }
                  className={`relative overflow-hidden rounded-2xl group ${
                    it.to ? "cursor-pointer" : "cursor-default"
                  } ${isMobile ? "rounded-xl" : "rounded-2xl"}`}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: isMobile ? "800px" : "1000px",
                  }}
                >
                  <motion.div
                    className={`w-full bg-cover bg-center transition-transform duration-500 ${
                      !isMobile ? "group-hover:scale-[1.05]" : ""
                    }`}
                    style={{ backgroundImage: `url(${it.src})`, height: effectiveHeight }}
                    role="img"
                    aria-label={it.alt || it.title || "carousel image"}
                    animate={{
                      scale: !isMobile && isHovered && active === idx ? 1.05 : 1,
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
                    className={`absolute inset-0 border-2 border-white/20 ${
                      isMobile ? "rounded-xl" : "rounded-2xl"
                    }`}
                    animate={{
                      borderColor:
                        active === idx ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {(it.title || it.subtitle) && (
                    <motion.div
                      className={`absolute ${
                        isMobile ? "bottom-2 left-2 right-2" : "bottom-4 left-4 right-4"
                      }`}
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
                          size={isMobile ? "md" : "lg"}
                          className="drop-shadow-lg underline-offset-4"
                        >
                          {it.title}
                        </Text>
                        {it.subtitle && (
                          <Text c="gray.2" size={isMobile ? "xs" : "sm"} className="drop-shadow">
                            {it.subtitle}
                          </Text>
                        )}
                      </motion.div>
                    </motion.div>
                  )}

                  {!isMobile && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: isHovered && active === idx ? "100%" : "-100%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>
              );

              return (
                <Carousel.Slide key={idx} className={isMobile ? "px-1" : "px-2"}>
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
                      whileTap={{ scale: isMobile ? 0.99 : 0.98 }}
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
        </motion.div>
      </Container>
    </motion.div>
  );
}
export default CarouselHighlight;
