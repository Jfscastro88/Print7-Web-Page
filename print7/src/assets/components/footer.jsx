import {
    BackgroundImage,
    Container,
    Text,
    Group,
    Anchor,
    Divider,
} from '@mantine/core';
import { InstagramIcon, FacebookIcon } from 'lucide-react';
import footerImage from '../../assets/images/Footer.png';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <BackgroundImage
        src={footerImage}
        sx={{
            minHeight: 200,            // altezza minima → adatta al contenuto
            backgroundSize: 'cover',   // oppure 'contain' se non vuoi ritaglio
            backgroundPosition: 'center',
        }}>
        
        <Container
        size="lg"
        className="flex flex-col md:flex-row justify-between items-center text-white py-8 relative z-10"
        >
        {/* Informazioni di contatto */}
        <div className="space-y-2 text-center md:text-left">
        <Text size="xl">Print7 - Design e Publicidade</Text>
        <Text size="md">Rua Nossa Senhora do Carmo, 22A - 2900-146 Setúbal</Text>
        <Text size="md">934 418 862 – 910 726 266</Text>
        <Text size="xs">Chamada para rede móvel nacional</Text>
        <Text size="md">
        <Anchor href="mailto:geral@print7.pt" className="hover:underline">
        geral@print7.pt
        </Anchor>
        </Text>
        </div>
        
        {/* Social links */}
        <Group spacing="md" className="mt-4 md:mt-0">
        <Anchor
        href="https://www.instagram.com/print7.pt/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:scale-90 transition-transform duration-200"
        >
        <InstagramIcon size={28} color="white" />
        </Anchor>
        
        <Anchor
        href="https://www.facebook.com/print7.pt"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:scale-90 transition-transform duration-200"
        >
        <FacebookIcon size={28} color="white" />
        </Anchor>
        </Group>
        </Container>
        
        <Divider className="my-6 border-gray-700" />
        
        <Container size="lg" className="text-center text-white pb-8">
        <Text size="xs">© {currentYear} Print7. All rights reserved.</Text>
        </Container>
        </BackgroundImage>
    );
}
export default Footer;