import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import heroImage from '../../assets/images/LogoTextBlack.png';
import bgImage from '../../assets/images/background.png';
import { Box, Container, Title, Text, Button, Divider, Space } from '@mantine/core';
import { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Youtube from '../../assets/components/youtube.jsx';
import CarouselHighlight from '../../assets/components/carousel.jsx';

import imgBrindes        from '../../assets/images/carousel/brindes/bg3.jpg';
import imgLaser          from '../../assets/images/carousel/cortelaser/cgl5.jpg';
import imgLogos          from '../../assets/images/carousel/design/13.png';
import imgDecoracao      from '../../assets/images/carousel/decorinterior/di1.jpg';
import imgEstacionarios  from '../../assets/images/carousel/estacionarios/sta8.jpg';
import imgViaturas       from '../../assets/images/carousel/veiculos/ve7.jpg';
import imgEpi            from '../../assets/images/carousel/fardamentos/far14.jpg';
import imgLonas          from '../../assets/images/carousel/placas/pla11.jpg';
import imgReclames       from '../../assets/images/carousel/reclames/rec2.jpg';
import imgExpositores    from '../../assets/images/carousel/stand/sta1.jpg';
import imgNeon           from '../../assets/images/carousel/ledneon/neon5.jpg';
import imgRelevo         from '../../assets/images/carousel/relevo/rel21.jpg';
import imgMontras        from '../../assets/images/carousel/decormontras/mon8.jpg';
import imgOutros         from '../../assets/images/carousel/outros/out4.jpg';


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
  const carouselItems = useMemo(
    () => [
      {
  src: imgBrindes,
  alt: 'Branded giveaways with logo on various materials',
  title: 'Branded Gifts',
  subtitle: 'Custom corporate gadgets and gifts.',
  to: '/gifts',
},
{
  src: imgLaser,
  alt: 'Laser machine that engraves and cuts wood and acrylic',
  title: 'Laser Cutting & Engraving',
  subtitle: 'Cutting and engraving on wood, acrylic, and metal.',
  to: '/laser',
},
{
  src: imgLogos,
  alt: 'Examples of logos and visual identities on mockups',
  title: 'Logo Design',
  subtitle: 'Naming, logo design, and brand guidelines.',
  to: '/logos',
},
{
  src: imgDecoracao,
  alt: 'Interior decoration with graphics on walls and glass',
  title: 'Interior Decoration',
  subtitle: 'Glass, walls, backlit features, and more.',
  to: '/interior',
},
{
  src: imgEstacionarios,
  alt: 'Set with letterhead, envelopes, and business cards',
  title: 'Stationery',
  subtitle: 'Letterhead, envelopes, business cards, and coordinated materials.',
  to: '/stationery',
},
{
  src: imgViaturas,
  alt: 'Vehicle with wrapping and branded decals',
  title: 'Vehicle Branding',
  subtitle: 'Partial/full wraps, lettering, and magnets.',
  to: '/cars',
},
{
  src: imgEpi,
  alt: 'Custom uniforms and PPE with print and embroidery',
  title: 'Workwear & PPE',
  subtitle: 'Logo-branded workwear and PPE.',
  to: '/uniforms',
},
{
  src: imgLonas,
  alt: 'Rigid panels and printed outdoor banners',
  title: 'Signs & Banners',
  subtitle: 'Rigid panels, banners, and large-format prints.',
  to: '/plates',
},
{
  src: imgReclames,
  alt: 'Lighted shop sign at sunset',
  title: 'Illuminated Signs',
  subtitle: 'Illuminated signs and totems for your business.',
  to: '/ad',
},
{
  src: imgExpositores,
  alt: 'Stands and roll-ups for events and retail',
  title: 'Stands & Displays',
  subtitle: 'Roll-ups, counters, display walls, and stands.',
  to: '/stand',
},
{
  src: imgNeon,
  alt: 'Artistic lettering made in LED neon',
  title: 'LED Neon',
  subtitle: 'Custom LED neon signs and décor.',
  to: '/neon',
},
{
  src: imgRelevo,
  alt: '3D raised letters mounted on a wall',
  title: 'Raised Lettering & 3D',
  subtitle: '3D raised logos and letters for indoor/outdoor use.',
  to: '/relief',
},
{
  src: imgMontras,
  alt: 'Shop window decorated with custom decals and graphics',
  title: 'Window Decoration',
  subtitle: 'Window decals, perforated films, and window graphics.',
  to: '/window',
},
{
  src: imgOutros,
  alt: 'Example of graphic works and various prints',
  title: 'Other Works',
  subtitle: 'Special projects and customizations on request.',
  to: '/others',
},

    ],
    []
  );

  const cardItems = useMemo(
    () => [
      {
  src: imgBrindes,
  alt: 'Branded giveaways with logo on various materials',
  title: 'Branded Gifts',
  subtitle: 'Custom corporate gadgets and gifts.',
  to: '/gifts',
},
{
  src: imgLaser,
  alt: 'Laser machine that engraves and cuts wood and acrylic',
  title: 'Laser Cutting & Engraving',
  subtitle: 'Cutting and engraving on wood, acrylic, and metal.',
  to: '/laser',
},
{
  src: imgLogos,
  alt: 'Examples of logos and visual identities on mockups',
  title: 'Logo Design',
  subtitle: 'Naming, logo design, and brand guidelines.',
  to: '/logos',
},
{
  src: imgDecoracao,
  alt: 'Interior decoration with graphics on walls and glass',
  title: 'Interior Decoration',
  subtitle: 'Glass, walls, backlit features, and more.',
  to: '/interior',
},
{
  src: imgEstacionarios,
  alt: 'Set with letterhead, envelopes, and business cards',
  title: 'Stationery',
  subtitle: 'Letterhead, envelopes, business cards, and coordinated materials.',
  to: '/stationery',
},
{
  src: imgViaturas,
  alt: 'Vehicle with wrapping and branded decals',
  title: 'Vehicle Branding',
  subtitle: 'Partial/full wraps, lettering, and magnets.',
  to: '/cars',
},
{
  src: imgEpi,
  alt: 'Custom uniforms and PPE with print and embroidery',
  title: 'Workwear & PPE',
  subtitle: 'Logo-branded workwear and PPE.',
  to: '/uniforms',
},
{
  src: imgLonas,
  alt: 'Rigid panels and printed outdoor banners',
  title: 'Signs & Banners',
  subtitle: 'Rigid panels, banners, and large-format prints.',
  to: '/plates',
},
{
  src: imgReclames,
  alt: 'Lighted shop sign at sunset',
  title: 'Illuminated Signs',
  subtitle: 'Illuminated signs and totems for your business.',
  to: '/ad',
},
{
  src: imgExpositores,
  alt: 'Stands and roll-ups for events and retail',
  title: 'Stands & Displays',
  subtitle: 'Roll-ups, counters, display walls, and stands.',
  to: '/stand',
},
{
  src: imgNeon,
  alt: 'Artistic lettering made in LED neon',
  title: 'LED Neon',
  subtitle: 'Custom LED neon signs and décor.',
  to: '/neon',
},
{
  src: imgRelevo,
  alt: '3D raised letters mounted on a wall',
  title: 'Raised Lettering & 3D',
  subtitle: '3D raised logos and letters for indoor/outdoor use.',
  to: '/relief',
},
{
  src: imgMontras,
  alt: 'Shop window decorated with custom decals and graphics',
  title: 'Window Decoration',
  subtitle: 'Window decals, perforated films, and window graphics.',
  to: '/window',
},
{
  src: imgOutros,
  alt: 'Example of graphic works and various prints',
  title: 'Other Works',
  subtitle: 'Special projects and customizations on request.',
  to: '/others',
},

    ],
    []
  );

  return (
    <>
      <Box
        className="relative h-[340px] sm:h-[440px] md:h-[520px] lg:h-[680px] xl:h-[760px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/25 sm:bg-black/20 md:bg-black/15" />
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
          <Text c="dimmed" className="max-w-2xl mx-auto">
          Explore the carousel each one highlights a real project with more info inside.
          </Text>
          <Space h="xl" />
          <Divider label="Portfolio highlight" labelPosition="center" />
        </Container>
      </section>

      {/* CAROUSEL */}
      <section className="py-6 bg-white overflow-x-hidden">
        <ZoomOnScroll>
          <CarouselHighlight
            items={carouselItems}
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
        <Container size="lg" className="text-center">
          <Title order={2} className="mb-3">Projects at a Glance</Title>
          <Text c="dimmed" className="max-w-2xl mx-auto">
          Explore the cards—each one highlights a real project with more info inside.
          </Text>
          <Space h="xl" />
          <Divider label="Portfolio highlight" labelPosition="center" />
        </Container>
      </section>

      {/* GRID  */}
      <section className="py-20 bg-gray-50">
        <Container size="lg">
          <Title order={3} className="mb-6 text-center">More previews</Title>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardItems.concat(cardItems).slice(0, 14).map((it, i) => (
              <ZoomOnScroll key={i}>
                <Link to={it.to} className="block group focus:outline-none" aria-label={it.title}>
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                    {/* lower image area and with fixed ratio */}
                    <div
                      className="aspect-[4/3] bg-cover bg-center w-full transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${it.src})` }}
                      role="img"
                      aria-label={it.alt}
                    />

                    <div className="p-4">
                      <Text fw={600} size="sm" className="underline-offset-4 group-hover:underline">{it.title}</Text>
                      <Text c="dimmed" size="xs">{it.subtitle}</Text>
                    </div>
                  </div>
                </Link>
              </ZoomOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* YOUTUBE VIDEO */}
      <Youtube
        url="https://www.youtube.com/watch?v=_6WpnM6icT0&t=42s"
        title="Why choose Print7?"
        heightVh={30}      // (default 30)
        autoplay           // true default
        muted              // true default (needed for autoplay)
        loop               // true default
        // controls        // false default
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