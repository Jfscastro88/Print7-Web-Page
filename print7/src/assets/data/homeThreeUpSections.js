export default function getHomeThreeUpSections(t) {
    const logos = import.meta.glob('../images/carousel/design/*', { eager: true });
    const logoSlides = Object.values(logos).map((m, i) => ({
        src: m.default,
        alt: t('home.threeUp.logos.alt', { index: i + 1 }),
    }));
    
    const brindes = import.meta.glob('../images/carousel/brindes/*', { eager: true });
    const brindesSlides = Object.values(brindes).map((m, i) => ({
        src: m.default,
        alt: t('home.threeUp.gifts.alt', { index: i + 1 }),
    }));
    
    const laser = import.meta.glob('../images/carousel/cortelaser/*', { eager: true });
    const laserSlides = Object.values(laser).map((m, i) => ({
        src: m.default,
        alt: t('home.threeUp.laser.alt', { index: i + 1 }),
    }));
    
    const interior = import.meta.glob('../images/carousel/decorinterior/*', { eager: true });
    const interiorSlides = Object.values(interior).map((m, i) => ({
        src: m.default,
        alt: t('home.threeUp.interior.alt', { index: i + 1 }),
    }));
    
    const exterior = import.meta.glob('../images/carousel/decormontras/*', { eager: true });
    const exteriorSlides = Object.values(exterior).map((m, i) => ({
        src: m.default,
        alt: t('home.threeUp.window.alt', { index: i + 1 }),
    }));
    
    const stationery = import.meta.glob('../images/carousel/estacionarios/*', { eager: true });
    const stationerySlides = Object.values(stationery).map((m, i) => ({
        src: m.default,
        alt: t('home.threeUp.stationery.alt', { index: i + 1 }),
    }));
    
    return [
        { title: t('home.threeUp.laser.title'),     subtitle: t('home.threeUp.laser.subtitle'),     to: '/laser',     slides: laserSlides,     height: 320 },
        { title: t('home.threeUp.gifts.title'),     subtitle: t('home.threeUp.gifts.subtitle'),     to: '/gifts',     slides: brindesSlides,   height: 320 },
        { title: t('home.threeUp.logos.title'),     subtitle: t('home.threeUp.logos.subtitle'),     to: '/logos',     slides: logoSlides,      height: 320 },
        { title: t('home.threeUp.interior.title'),  subtitle: t('home.threeUp.interior.subtitle'),  to: '/interior',  slides: interiorSlides,  height: 320 },
        { title: t('home.threeUp.window.title'),    subtitle: t('home.threeUp.window.subtitle'),    to: '/window',    slides: exteriorSlides,  height: 320 },
        { title: t('home.threeUp.stationery.title'),subtitle: t('home.threeUp.stationery.subtitle'),to: '/stationery',slides: stationerySlides, height: 320 },
    ];
}
