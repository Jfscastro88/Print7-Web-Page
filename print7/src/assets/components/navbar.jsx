import { useState, useEffect } from 'react';
import { Box, Container, Burger } from '@mantine/core';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/LogoTextBlack.png';
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

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

  const links = [
    { to: '/', label: t("navbar.home") },
    { to: '/about', label: t("navbar.about") },
    { to: '/catalogs', label: t("navbar.catalogs") },
    { to: '/contact', label: t("navbar.contact") },
  ];

  return (
    <>
      <Box
        component="nav"
        className="fixed top-0 left-0 w-full z-[100] bg-[#00b5ff]/90 backdrop-blur-sm text-black font-semibold">
        <Container size="lg" className="flex items-center justify-between gap-8 px-6 py-3">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Print7 logo"
              className="h-12 w-auto md:h-12 object-contain"
            />
          </Link>
          <div className="hidden md:flex items-center gap-6 text-white text-lg">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition-transform duration-200 hover:scale-95">
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>
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
        {opened &&
          createPortal(
            <div
              id="mobile-menu"
              className="fixed inset-0 z-[1000] md:hidden transform transition-transform duration-300 translate-y-0"
              aria-hidden={!opened}>
              <div className="absolute inset-0 bg-[#00b5ff]" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between px-6 py-4">
                  <Link to="/" className="flex items-center space-x-2" onClick={() => setOpened(false)}>
                    <img src={Logo} alt="Print7 logo" className="h-10 w-auto object-contain" />
                  </Link>
                  <Burger
                    opened
                    onClick={() => setOpened(false)}
                    color="white"
                    size="md"
                    aria-label="Close mobile menu"/>
                </div>
                <nav className="flex-1 overflow-y-auto px-6">
                  <ul className="divide-y divide-white/15 text-center">
                    {links.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          onClick={() => setOpened(false)}
                          className="block py-4 text-white text-2xl font-semibold active:scale-[.98]">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li className="py-6 divide-y divide-white/15 text-center">
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