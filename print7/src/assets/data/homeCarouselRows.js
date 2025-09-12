import imgLaser   from '../images/carousel/cortelaser/cgl5.jpg';

const logos = import.meta.glob('../images/carousel/design/*', { eager: true });
const logoSlides = Object.values(logos).map((module, i) => ({
  src: module.default,
  alt: `Examples of logos and visual identities designed by Print7 ${i + 1}`,
}));

const brindes = import.meta.glob('../images/carousel/brindes/*', { eager: true });
const brindesSlides = Object.values(brindes).map((module, i) => ({
  src: module.default,
  alt: `Examples of branded gifts and corporate giveaways by Print7 ${i + 1}`,
}));

const laser = import.meta.glob('../images/carousel/cortelaser/*', { eager: true });
const laserSlides = Object.values(laser).map((module, i) => ({
  src: module.default,
  alt: `Examples of laser cutting and engraving by Print7 ${i + 1}`,
}));

const homeCarouselRows = [
  {
    type: 'stacked',
    title: 'Logo Design',
    subtitle: 'Naming, logo design, and brand guidelines.',
    to: '/logos',
    slides: logoSlides,
    height: 400,
    spacing: 'py-24',
  },
  {
    type: 'split',
    side: 'left',
    title: 'Branded Gifts',
    subtitle: 'Custom corporate gadgets and gifts.',
    to: '/gifts',
    slides: brindesSlides,
    height: 400,
    spacing: 'py-20',
  },
  {
    type: 'split',
    side: 'right',
    title: 'Laser Cutting & Engraving',
    subtitle: 'Cutting and engraving on wood, acrylic, and metal.',
    to: '/laser',
    slides: laserSlides,
    height: 400,
    spacing: 'py-20',
  },
];

export default homeCarouselRows;