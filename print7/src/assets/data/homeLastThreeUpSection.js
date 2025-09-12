const ad = import.meta.glob('../images/carousel/reclames/*', { eager: true });
const adSlides = Object.values(ad).map((module, i) => ({
    src: module.default,
    alt: `Examples of Iluminated decoration by Print7  ${i + 1}`,
}));

const other = import.meta.glob('../images/carousel/outros/*', { eager: true });
const otherSlides = Object.values(other).map((module, i) => ({
    src: module.default,
    alt: `Examples of others works by Print7 ${i + 1}`,
}));

const plastes = import.meta.glob('../images/carousel/placas/*', { eager: true });
const platesSlides = Object.values(plastes).map((module, i) => ({
    src: module.default,
    alt: `Examples of Plates decoration by Print7 ${i + 1}`,
}));

const PEE = import.meta.glob('../images/carousel/fardamentos/*', { eager: true });
const PEEslides = Object.values(PEE).map((module, i) => ({
    src: module.default,
    alt: `Examples of Workwear and PPE by Print7 ${i + 1}`,
}));

const neon = import.meta.glob('../images/carousel/ledneon/*', { eager: true });
const neonSlides = Object.values(neon).map((module, i) => ({
    src: module.default,
    alt: `Examples of LED neon lettering by Print7 ${i + 1}`,
}));    

const homeLastThreeUpSection = [
    {
    title: 'Illuminated Signs',
    subtitle: 'Light signs and totems.',
    to: '/ad',
    slides: adSlides,
    height: 320,
    },
    {
    title: 'Other works',
    subtitle: 'Special projects on request.',
    to: '/others',
    slides: otherSlides,
    height: 320,
    },
    {
    title: 'Signs & Banners',
    subtitle: 'Rigid panels and large-format prints.',
    to: '/plates',  
    slides: platesSlides,
    height: 320,
    },
    {
    title: 'Workwear & PPE',
    subtitle: 'Logo-branded workwear and PPE.',
    to: '/uniforms',
    slides: PEEslides,
    height: 320,
    },
    {
    title: 'LED Neon',
    subtitle: 'Custom LED neon décor.',
    to: '/neon',
    slides: neonSlides,
    height: 320,
    },
    ];

export default  homeLastThreeUpSection ;