import "@mantine/carousel/styles.css";
import { Container, Title, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CarouselHighlight from "./carousel.jsx";

export default function ThreeUpCarouselGrid({
  items = [],
  spacing = "py-16",
  className = "",
  height = 320,
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

  return (
    <section className={`${spacing} bg-white ${className}`}>
      <Container size="lg">
        <motion.div
          className={`grid ${
            isMobile
              ? "grid-cols-1 gap-6"
              : isTablet
              ? "grid-cols-2 gap-8"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {items.map((it, idx) => {
            const slides = (it.slides || []).map((s, i) => ({
              src: s.src,
              alt: s.alt || `${it.title} - slide ${i + 1}`,
              title: s.title ?? "",
              subtitle: s.subtitle ?? "",
              to: it.to,
            }));
            return (
              <motion.div
                key={idx}
                className="flex flex-col"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: isMobile ? 0.4 : 0.6,
                  delay: idx * (isMobile ? 0.05 : 0.1),
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={
                  !isMobile
                    ? {
                        y: -5,
                        transition: { duration: 0.3 },
                      }
                    : {}
                }
              >
                <motion.div
                  whileHover={!isMobile ? { scale: 1.02 } : {}}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={it.to || "#"}
                    aria-label={it.title}
                    className={`group block focus:outline-none cursor-pointer ${
                      isMobile ? "mb-2" : "mb-4"
                    } text-center`}
                  >
                    <motion.div
                      whileHover={!isMobile ? { scale: 1.05 } : {}}
                      transition={{ duration: 0.2 }}
                    >
                      <Title
                        order={3}
                        className={`${
                          isMobile ? "text-lg" : "text-xl"
                        } mb-1 underline-offset-4 group-hover:underline text-black`}
                      >
                        {it.title}
                      </Title>
                      {it.subtitle && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2 + idx * (isMobile ? 0.05 : 0.1) }}
                          viewport={{ once: true }}
                        >
                          <Text c="dimmed" size={isMobile ? "sm" : "md"}>
                            {it.subtitle}
                          </Text>
                        </motion.div>
                      )}
                    </motion.div>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={!isMobile ? { scale: 1.02 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`overflow-hidden ${
                      isMobile ? "rounded-xl" : "rounded-2xl"
                    } ring-1 ring-black/5 shadow-lg ${
                      !isMobile ? "hover:shadow-xl" : ""
                    } transition-shadow duration-300`}
                    whileHover={
                      !isMobile
                        ? {
                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                            transition: { duration: 0.3 },
                          }
                        : {}
                    }
                  >
                    <CarouselHighlight
                      items={slides}
                      height={it.height ?? height}
                      mobileHeight={260}
                      slideSize="100%"
                      title=""
                      subtitle=""
                      headerAlign="center"
                      indicatorsClass="hidden"
                      autoplay={false}
                      showIndicators={false}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
