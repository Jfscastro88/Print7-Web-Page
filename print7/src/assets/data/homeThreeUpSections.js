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

const Interior = import.meta.glob('../images/carousel/decorinterior/*', { eager: true });
const InteriorSlides = Object.values(Interior).map((module, i) => ({
    src: module.default,
    alt: `Examples of interior decoration by Print7 ${i + 1}`,
}));

const Exterior = import.meta.glob('../images/carousel/decormontras/*', { eager: true });
const ExteriorSlides = Object.values(Exterior).map((module, i) => ({
    src: module.default,
    alt: `Examples of exterior decoration by Print7 ${i + 1}`,
}));

const stationery = import.meta.glob('../images/carousel/estacionarios/*', { eager: true });
const stationerySlides = Object.values(stationery).map((module, i) => ({
    src: module.default,
    alt: `Examples of stationery design by Print7 ${i + 1}`,
}));

const homeThreeUpSections = [

    {
    title: 'Laser Cutting',
    subtitle: 'Wood, acrylic, and metal.',
    to: '/laser',
    slides: laserSlides,
    height: 320,
    },
    {
    title: 'Branded Gifts',
    subtitle: 'Corporate gadgets and gifts.',
    to: '/gifts',
    slides: brindesSlides,
    height: 320,
    },
    {
    title: 'Logo Design',
    subtitle: 'Naming, logo design, and brand guidelines.',
    to: '/logos',
    slides: logoSlides,
    height: 320,
    },
    {
    title: 'Interior Decoration',
    subtitle: 'Glass, walls, backlit features, and more.',
    to: '/interior',
    slides: InteriorSlides,
    height: 320,
    },
    {
    title: 'Window Decoration',
    subtitle: 'Decals, perforated films, graphics.',
    to: '/window',
    slides: ExteriorSlides,
    height: 320,
    },
    {
    title: 'Stationery',
    subtitle: 'Letterhead, envelopes, cards, and more.',
    to: '/stationery',
    slides: stationerySlides,
    height: 320,
    },

];
export default homeThreeUpSections;