import { useState, useEffect } from 'react';
import { Box, Container, Burger, Menu } from '@mantine/core';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/LogoTextBlack.png';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [opened, setOpened] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  
  useEffect(() => {
    setOpened(false);
  }, [location.pathname]);
  
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (opened) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [opened]);
  
  const topLinks = [
    { to: '/', label: t('navbar.home') },
    { to: '/about', label: t('navbar.about') },
  ];
  
  const tailLinks = [
    { to: '/catalogs', label: t('navbar.catalogs') },
    { to: '/contact', label: t('navbar.contact') },
  ];
  
  const categories = [
    { to: '/cars',       key: 'categories.vehicles.title' },
    { to: '/gifts',      key: 'categories.gifts.title' },
    { to: '/interior',   key: 'categories.interior.title' },
    { to: '/window',     key: 'categories.window.title' },
    { to: '/laser',      key: 'categories.laser.title' },
    { to: '/logos',      key: 'categories.logos.title' },
    { to: '/stationery', key: 'categories.stationery.title' },
    { to: '/ad',         key: 'categories.ad.title' },
    { to: '/plates',     key: 'categories.plates.title' },
    { to: '/relief',     key: 'categories.relief.title' },
    { to: '/stand',      key: 'categories.stand.title' },
    { to: '/uniforms',   key: 'categories.uniforms.title' },
    { to: '/neon',       key: 'categories.neon.title' },
    { to: '/others',     key: 'categories.others.title' },
  ];
  
  return (
    <>
    <Box
    component="nav"
    className="fixed top-0 left-0 w-full z-[100] bg-[#00b5ff]/90 backdrop-blur-sm shadow-[0_10px_30px_-12px_rgba(0,0,0,.35)] text-black font-semibold"
    >
    <Container size="lg" className="flex items-center justify-between gap-8 px-6 py-3">
    <Link to="/" className="flex items-center space-x-2">
    <img src={Logo} alt="Print7 logo" className="h-12 w-auto md:h-12 object-contain" />
    </Link>
    
    {/* Desktop */}
    <div className="hidden md:flex items-center gap-6 text-white text-lg">
    {topLinks.map((link) => (
      <Link
      key={link.to}
      to={link.to}
      className="transition-transform duration-200 hover:scale-95"
      >
      {link.label}
      </Link>
    ))}
    
    {/* Categorias (dropdown) */}
    <Menu withinPortal position="bottom" trigger="hover" openDelay={100} closeDelay={120}>
    <Menu.Target>
    <button
    type="button"
    className="inline-flex items-center gap-1 text-white/90 hover:text-white transition-colors"
    >
    {t('navbar.categories')}
    <span aria-hidden>▾</span>
    </button>
    </Menu.Target>
    <Menu.Dropdown>
    <div className="grid grid-cols-2 gap-1 p-1 min-w-[260px]">
    {categories.map((cat) => (
      <Menu.Item key={cat.to} component={Link} to={cat.to} className="truncate">
      {t(cat.key)}
      </Menu.Item>
    ))}
    </div>
    </Menu.Dropdown>
    </Menu>
    
    {/* Catálogos · Contactos */}
    {tailLinks.map((link) => (
      <Link
      key={link.to}
      to={link.to}
      className="transition-transform duration-200 hover:scale-95"
      >
      {link.label}
      </Link>
    ))}
    
    <LanguageSwitcher />
    </div>
    
    {/* Burger Mobile */}
    <Burger
    opened={opened}
    onClick={() => setOpened((p) => !p)}
    className="md:hidden"
    color="white"
    size="md"
    aria-label="Open mobile menu"
    aria-expanded={opened}
    aria-controls="mobile-menu"
    />
    </Container>
    
    {/* Mobile Overlay */}
    {createPortal(
      <div
      id="mobile-menu"
      aria-hidden={!opened}
      className={[
        "fixed inset-0 z-[1000] md:hidden transition-all duration-300",
        opened
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-2 pointer-events-none",
      ].join(" ")}
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpened(false);
      }}
      >
      {/* Backdrop + tinta brand */}
      <div className="absolute inset-0 bg-[#00b5ff]" />
      
      {/* Contenuto */}
      <div
      className={[
        "relative flex h-full flex-col transition-transform duration-300 will-change-transform",
        opened ? "scale-100" : "scale-[0.98]",
      ].join(" ")}
      >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">
      <Link to="/" className="flex items-center space-x-2" onClick={() => setOpened(false)}>
      <img src={Logo} alt="Print7 logo" className="h-10 w-auto object-contain" />
      </Link>
      <Burger
      opened
      onClick={() => setOpened(false)}
      color="white"
      size="md"
      aria-label="Close mobile menu"
      />
      </div>
      
      {/* Links */}
      <nav className="flex-1 overflow-y-auto px-6">
      <ul className="divide-y divide-white/15 text-center">
      {topLinks.map((link) => (
        <li key={link.to}>
        <Link
        to={link.to}
        onClick={() => setOpened(false)}
        className="block py-4 text-white text-2xl font-semibold active:scale-[.98]"
        >
        {link.label}
        </Link>
        </li>
      ))}
      
      <li>
      <details className="group">
      <summary className="py-4 cursor-pointer text-white text-2xl font-semibold flex items-center justify-center gap-2 select-none">
      {t('navbar.categories')}
      <span className="transform transition-transform group-open:rotate-180">▾</span>
      </summary>
      <ul className="pb-2 pt-1 grid grid-cols-1 gap-1">
      {categories.map((cat) => (
        <li key={cat.to}>
        <Link
        to={cat.to}
        onClick={() => setOpened(false)}
        className="block py-2 text-white text-xl active:scale-[.98]"
        >
        {t(cat.key)}
        </Link>
        </li>
      ))}
      </ul>
      </details>
      </li>
      
      {tailLinks.map((link) => (
        <li key={link.to}>
        <Link
        to={link.to}
        onClick={() => setOpened(false)}
        className="block py-4 text-white text-2xl font-semibold active:scale-[.98]"
        >
        {link.label}
        </Link>
        </li>
      ))}
      
      <li className="py-6">
      <LanguageSwitcher inMobile />
      </li>
      </ul>
      </nav>
      </div>
      </div>,
      document.body
    )}
    </Box>
    <div aria-hidden className="h-16 md:h-19" />
    </>
  );
}

export default Navbar;
