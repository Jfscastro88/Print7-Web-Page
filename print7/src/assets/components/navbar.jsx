import { useState } from 'react';
import { Box, Container, Burger } from '@mantine/core';
import { Link } from 'react-router-dom';
import Logo from '../images/LogoTextBlack.png';

function Navbar() {
  const [opened, setOpened] = useState(false);
  const links = [
    { to: '/', label: 'Homepage' },
    { to: '/about', label: 'About Us' },
    { to: '/catalogs', label: 'Catalogs' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <Box
      component="nav"
      className="sticky top-0 z-[100] bg-[#00b5ff]/90 backdrop-blur-sm text-black font-semibold"
    >
      <Container size="lg" className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Print7 logo"
            className="h-12 w-auto md:h-12 object-contain"
          />
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-6 text-white text-lg">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition-transform duration-200 hover:scale-95"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Burger mobile */}
        <Burger
          opened={opened}
          onClick={() => setOpened((p) => !p)}
          className="md:hidden"
          color="white"
          size="md"
          aria-label="Open mobile menu"
        />
      </Container>

      {/* Dropdown mobile */}
      {opened && (
        <div className="md:hidden absolute right-2 top-full mt-2 rounded-xl bg-[#00b5ff] px-6 pt-4 pb-6 shadow-lg text-white">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpened(false)}
              className="block py-2 font-semibold transition-transform duration-200 hover:scale-95"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </Box>
  );
}

export default Navbar;
