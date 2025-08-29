import '@mantine/core/styles.css';
import CategoryPage from '../../assets/components/categorypage';

import imgAD1 from '../../assets/images/carousel/decorinterior/di1.jpg';
import imgAD2 from '../../assets/images/carousel/decorinterior/di2.jpg';
import imgAD3 from '../../assets/images/carousel/decorinterior/di3.jpg';
import imgAD4 from '../../assets/images/carousel/decorinterior/di4.jpg';
import imgAD5 from '../../assets/images/carousel/decorinterior/di5.jpg';

const IMAGES = [
  { src: imgAD1, alt: 'AD #1'}, { src: imgAD2, alt: 'AD #2'},
  { src: imgAD3, alt: 'AD #3'}, { src: imgAD4, alt: 'AD #4'},
  { src: imgAD5, alt: 'AD #5'},
];

function InterirorPage() {
  return (
    <CategoryPage
    title="Interior Decoration"
    description="Interior decoration with custom graphics enhances commercial spaces, offices, and showrooms. Glass, walls, and surfaces become communication and design tools, enhancing the visual experience of customers and employees."
    images={IMAGES}
    cta={{
      title: 'What we can do for you',
      text: 'We design and create window decals, wall coverings, decorative panels, and custom solutions to create functional, welcoming spaces that reflect your brand’s image.',
    }}
    />
  );
}
export default InterirorPage;