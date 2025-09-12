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
    alt="Hero Logo"
    className="w-full h-auto mb-4 sm:mb-6"
    style={{ width: "clamp(256px, 40vw, 720px)" }}/>
    
    <Title
    order={1}
    className="mb-2 sm:mb-3 text-white tracking-tight drop-shadow-lg
              text-2xl sm:text-2xl md:text-5xl lg:text-6xl leading-tight">
    Publicidade & Design
    </Title>
    <Text
    className="max-w-2xl text-white/90 drop-shadow-sm
              text-sm sm:text-base md:text-lg lg:text-xl">
    We shape your brand: from logo creation to printing on textiles, large formats, and gadgets.
    </Text>
    </Container>
    </Box>
    
    {/* INTRO */}
    <section className="py-14 bg-white">
    <Container size="lg" className="text-center">
    <Title order={2} className="mb-3">Projects at a Glance</Title>
    {/* <Text c="dimmed" className="max-w-2xl mx-auto">
      Explore the carousel each one highlights a real project with more info inside.
      </Text> */}
      <Space h="xl" />
      {/* <Divider label="Portfolio highlight" labelPosition="center" /> */}
      </Container>
      </section>
      
      {/* CAROUSEL */}
      <section className="py-6 bg-white overflow-x-hidden">
      <ZoomOnScroll>
      <CarouselHighlight
      items={heroCarouselItems}
      height={420}
      slideSize="65%"
      title=""
      subtitle=""
      headerAlign="center"
      indicatorsClass="bottom-2 [&>button]:bg-white-400 [&>button]:opacity-0"/>
      </ZoomOnScroll>
      </section>
      
      {/* INTRO */}
      <section className="py-14 bg-white">
      <Divider label="Portfolio highlight" labelPosition="center" />
      <Space h="xl" />
      <Container size="lg" className="text-center">
      <Title order={2} className="mb-3">Some of our works</Title>
      <Text c="dimmed" className="max-w-2xl mx-auto">
      Explore the carousel each one highlights a real project with more info inside.
      </Text>
      </Container>
      </section>
      
      
      {homeCarouselRows.map((row, i) =>
        row.type === 'stacked' ? (
          <StackedCarouselRow key={i} {...row} />
        ) : (
          <SplitCarouselRow key={i} {...row} />
        )
      )}
      
      {/* YOUTUBE VIDEO */}
      <Youtube
        url="https://www.youtube.com/watch?v=_6WpnM6icT0&t=42s"
        title="Why choose Print7?"
        heightVh={30}
        autoplay
        muted
        loop
      />
      
      <section className="py-16 bg-white">
      <Container size="lg" className="text-center">
      <Title order={3} className="mb-3">Do you need something similar?</Title>
      <Text c="dimmed" className="max-w-2xl mx-auto mb-6">
      Tell us about your project: we can take care of creating and improving the brand, as well as producing the materials.
      </Text>
      <Button component="a" href="/contact" size="md" radius="xl">Contact us</Button>
      </Container>
      </section>
      </>
    );
  }