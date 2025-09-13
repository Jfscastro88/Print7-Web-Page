import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import heroImage from '../../assets/images/LogoTextBlack.png';
import bgImage from '../../assets/images/background.png';
import { Box, Container, Title, Text, Button, Divider, Space } from '@mantine/core';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Youtube from '../../assets/components/youtube.jsx';
import CarouselHighlight from '../../assets/components/carousel.jsx';
import SplitCarouselRow from '../../assets/components/SplitCarouselRow.jsx';
import StackedCarouselRow from '../../assets/components/StackedCarouselRow.jsx';
import heroCarouselItems from '../../assets/data/homeCarouselItems.js';
import homeCarouselRows from '../../assets/data/homeCarouselRows.js';
import ThreeUpCarouselGrid from '../../assets/components/ThreeUpCarouselGrid.jsx';
import homeThreeUpSections from '../../assets/data/homeThreeUpSections.js';
import homeLastThreeUpSection from '../../assets/data/homeLastThreeUpSection.js';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function ZoomOnScroll({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0.15 1', '0.75 0.5'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div ref={ref} style={{ scale, opacity, willChange: 'transform' }}>
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Box
        className="relative h-[340px] sm:h-[440px] md:h-[520px] lg:h-[680px] xl:h-[760px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/15 sm:bg-black/10 md:bg-black/15" />
        <Container
          size="lg"
          className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <img
            src={heroImage}
            alt={t("home.hero.alt")}
            className="w-full h-auto mb-4 sm:mb-6"
            style={{ width: "clamp(256px, 40vw, 720px)" }}
          />

          <Title
            order={1}
            className="mb-2 sm:mb-3 text-white tracking-tight drop-shadow-lg
                      text-2xl sm:text-2xl md:text-5xl lg:text-6xl leading-tight">
            {t("home.hero.title")}
          </Title>

          <Text
            className="max-w-2xl text-white/90 drop-shadow-sm
                      text-sm sm:text-base md:text-lg lg:text-xl">
            {t("home.hero.subtitle")}
          </Text>
        </Container>
      </Box>

      <section className="py-14 bg-white">
        <Divider label={t("home.sections.dividerPortfolio")} labelPosition="center" />
        <Space h="xl" />
        <Container size="lg" className="text-center">
          <Title order={2} className="mb-3">{t("home.sections.someWorks")}</Title>
          <Text c="dimmed" className="max-w-2xl mx-auto">
            {t("home.sections.someWorksDesc")}
          </Text>
        </Container>
      </section>

      <section className="py-12 bg-white overflow-x-hidden">
        <ZoomOnScroll>
          <CarouselHighlight
            items={heroCarouselItems}
            height={420}
            mobileHeight={280}
            slideSize="65%"
            title=""
            subtitle=""
            headerAlign="center"
            indicatorsClass="bottom-2 [&>button]:bg-white-400 [&>button]:opacity-0"
          />
        </ZoomOnScroll>
      </section>

      <ThreeUpCarouselGrid items={homeThreeUpSections} spacing="py-8" height={320} />

      {homeCarouselRows.map((row, i) =>
        row.type === 'stacked' ? (
          <StackedCarouselRow key={i} {...row} />
        ) : (
          <SplitCarouselRow key={i} {...row} />
        )
      )}

      <ThreeUpCarouselGrid items={homeLastThreeUpSection} spacing="py-8" height={320} />
      <Space h="xl" className="w-full bg-white" />
      <Divider />

      <Youtube
        url="https://www.youtube.com/watch?v=_6WpnM6icT0&t=42s"
        title={t("home.video.whyChoose")}
        heightVh={30}
        autoplay
        muted
        loop
      />

      <section className="py-16 bg-white">
        <Container size="lg" className="text-center">
          <Title order={3} className="mb-3">{t("home.cta.title")}</Title>
          <Text c="dimmed" className="max-w-2xl mx-auto mb-6">
            {t("home.cta.desc")}
          </Text>

          <Button
            component={Link}
            to="/contact"
            size="md"
            radius="xl"
          >
            {t("home.cta.button")}
          </Button>
        </Container>
      </section>
    </>
  );
}
