import { BackgroundImage, Container, Text, Group, Anchor, Divider } from '@mantine/core';
import { InstagramIcon, FacebookIcon, Phone, Mail } from 'lucide-react';
import footerImage from '../../assets/images/Footer.png';

const MadeBy = 'https://www.linkedin.com/in/jfscastro88/'; 

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
    <footer className="relative">
        <BackgroundImage
        src={footerImage}
        sx={{
            minHeight: 220,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
        <div className="absolute inset-0 bg-black/30" />

        <Container
            size="lg"
            className="relative z-10 py-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
            <div className="space-y-2 text-center md:text-left">
                <Text size="xl" className="font-semibold">Print7 — Publicidade & Design</Text>
                <Text size="md">Rua Nossa Senhora do Carmo, 22A</Text>
                <Text size="sm">2900 - 146 Setúbal</Text>
                <div className="flex flex-col items-center sm:flex-row sm:justify-start gap-2 sm:gap-6 mt-3">
                <Anchor
                    href="tel:+351934418862"
                    className="flex items-center gap-2 text-white hover:underline underline-offset-4">
                    <Phone size={18} /> 934 418 862
                </Anchor>
                <Anchor
                    href="tel:+351910726266"
                    className="flex items-center gap-2 text-white hover:underline underline-offset-4">
                    <Phone size={18} /> 910 726 266
                </Anchor>
                </div>

                <Text size="xs" className="text-white/70">Chamada para rede móvel nacional</Text>

                <Anchor
                href="mailto:geral@print7.pt"
                className="mt-1 inline-flex items-center gap-2 text-white hover:underline underline-offset-4">
                <Mail size={18} /> geral@print7.pt
                </Anchor>
            </div>

            <div className="flex justify-center md:justify-end">
                <Group spacing="md">
                <Anchor
                    href="https://www.instagram.com/print7.pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Print7"
                    className="inline-flex items-center rounded-full p-2 hover:scale-95 transition">
                    <InstagramIcon size={28} color="white" />
                </Anchor>
                <Anchor
                    href="https://www.facebook.com/print7.pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Print7"
                    className="inline-flex items-center rounded-full p-2 hover:scale-95 transition">
                    <FacebookIcon size={28} color="white" />
                </Anchor>
                </Group>
            </div>  
            </div>

            <Divider className="my-6 border-white/20" />

            <div className="text-center">
            <Text size="xs" className="text-white/25">
                © {currentYear} Print7. All rights reserved. {' '}
                <Anchor
                href={MadeBy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/20 hover:text-white transition-colors">
                Made by Jfscastro
                </Anchor>
            </Text>
            </div>
        </Container>
        </BackgroundImage>
    </footer>
    );
}

export default Footer;