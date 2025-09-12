const relief = import.meta.glob('../images/carousel/relevo/*', { eager: true });
const reliefSlides = Object.values(relief).map((module, i) => ({
  src: module.default,
  alt: ` ${i + 1}`,
}));

const cars = import.meta.glob('../images/carousel/veiculos/*', { eager: true });
const carSlides = Object.values(cars).map((module, i) => ({
  src: module.default,
  alt: `Examples of branded gifts and corporate giveaways by Print7 ${i + 1}`,
}));

const stand = import.meta.glob('../images/carousel/stand/*', { eager: true });
const standSlides = Object.values(stand).map((module, i) => ({
  src: module.default,
  alt: `Examples of laser cutting and engraving by Print7 ${i + 1}`,
}));

const homeCarouselRows = [
  {
    type: 'stacked',
    title: 'Raised Lettering & 3D',
    subtitle: '3D logos for indoor/outdoor.',
    to: '/relief',
    slides: reliefSlides,
    height: 400,
    spacing: 'py-24',
  },
  {
    type: 'split',
    side: 'left',
    title: 'Vehicle Branding',
    subtitle: 'Partial/full wraps, lettering, magnets.',
    to: '/cars',
    slides: carSlides,
    height: 400,
    spacing: 'py-20',
  },
  {
    type: 'split',
    side: 'right',
    title: 'Stands & Displays',
    subtitle: 'Roll-ups, counters, walls, stands.',
    to: '/stand',
    slides: standSlides,
    height: 400,
    spacing: 'py-20',
  },
];

export default homeCarouselRows;