import '@mantine/carousel/styles.css';
import { Container, Title, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import CarouselHighlight from './carousel.jsx';

export default function ThreeUpCarouselGrid({
    items = [],
    spacing = 'py-16',
    className = '',
    height = 320,   
}) {
    return (
    <section className={`${spacing} bg-white ${className}`}>
        <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map((it, idx) => {
            const slides = (it.slides || []).map((s, i) => ({
                src: s.src,
                alt: s.alt || `${it.title} - slide ${i + 1}`,
                title: s.title ?? '',
                subtitle: s.subtitle ?? '',
                to: it.to,
            }));
            return (
                <div key={idx} className="flex flex-col">
                <Link to={it.to || '#'} aria-label={it.title} className="group block focus:outline-none mb-4 text-center">
                    <Title order={3} className="mb-1 underline-offset-4 group-hover:underline">
                    {it.title}
                    </Title>
                    {it.subtitle && <Text c="dimmed">{it.subtitle}</Text>}
                </Link>

                <Link to={it.to || '#'} aria-label={`${it.title} gallery`} className="block">
                    <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
                    <CarouselHighlight
                        items={slides}
                        height={it.height ?? height}
                        slideSize="100%"
                        title=""
                        subtitle=""
                        headerAlign="center"
                        indicatorsClass="hidden"
                        autoplay={false}
                        showIndicators={false} 
                    />
                    </div>
                </Link>
                </div>
            );
            })}
        </div>
        </Container>
    </section>
    );
}
