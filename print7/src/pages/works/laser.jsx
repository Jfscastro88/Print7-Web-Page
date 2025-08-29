import '@mantine/core/styles.css';
import CategoryPage from '../../assets/components/categorypage';

import imgLaser1 from '../../assets/images/carousel/cortelaser/cgl1.jpg';
import imgLaser2 from '../../assets/images/carousel/cortelaser/cgl2.jpg';
import imgLaser3 from '../../assets/images/carousel/cortelaser/cgl3.jpg';
import imgLaser4 from '../../assets/images/carousel/cortelaser/cgl4.jpg';
import imgLaser5 from '../../assets/images/carousel/cortelaser/cgl5.jpg';
import imgLaser6 from '../../assets/images/carousel/cortelaser/cgl6.jpg';
import imgLaser7 from '../../assets/images/carousel/cortelaser/cgl7.jpg';
import imgLaser8 from '../../assets/images/carousel/cortelaser/cgl8.jpg';

const IMAGES = [
{ src: imgLaser1, alt: 'AD #1'}, { src: imgLaser2, alt: 'AD #2'},
{ src: imgLaser3, alt: 'AD #3'}, { src: imgLaser4, alt: 'AD #4'},
{ src: imgLaser5, alt: 'AD #5'}, { src: imgLaser6, alt: 'AD #6'},
{ src: imgLaser7, alt: 'AD #7'}, { src: imgLaser8, alt: 'AD #8'},
  ];

function LaserPage() {
    return (
      <CategoryPage
        title="Laser Cutting and Engraving"
        description="Laser cutting and engraving allow for the precise customization of a wide range of materials, including wood, acrylic, leather, and metal. This technology ensures fine details, clean finishes, and a professional look, ideal for both industrial production and unique, creative pieces."
        images={IMAGES}
        cta={{
          title: 'What we can do for you',
          text: 'We can create custom engravings for plaques, gadgets, signage, and promotional items, or create custom cuts for prototypes, decorations, and furnishing accessories. We support you from design to delivery of the finished product.',
        }}
      />
    );
  }
export default LaserPage;