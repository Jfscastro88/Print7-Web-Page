import '@mantine/core/styles.css';
import CategoryPage from '../../assets/components/categorypage';

import imgAD1 from '../../assets/images/carousel/ledneon/neon1.jpg';
import imgAD2 from '../../assets/images/carousel/ledneon/neon2.jpg';
import imgAD3 from '../../assets/images/carousel/ledneon/neon3.jpg';
import imgAD4 from '../../assets/images/carousel/ledneon/neon4.jpg';
import imgAD5 from '../../assets/images/carousel/ledneon/neon5.jpg';
import imgAD6 from '../../assets/images/carousel/ledneon/neon6.jpg';
import imgAD7 from '../../assets/images/carousel/ledneon/neon7.jpg';
import imgAD8 from '../../assets/images/carousel/ledneon/neon8.jpg';
import imgAD9 from '../../assets/images/carousel/ledneon/neon9.jpg';

const IMAGES = [
{ src: imgAD1, alt: 'AD #1'}, { src: imgAD2, alt: 'AD #2'},
{ src: imgAD3, alt: 'AD #3'}, { src: imgAD4, alt: 'AD #4'},
{ src: imgAD5, alt: 'AD #5'}, { src: imgAD6, alt: 'AD #6'},
{ src: imgAD7, alt: 'AD #7'}, { src: imgAD8, alt: 'AD #8'},
{ src: imgAD9, alt: 'AD #9'}, 
  ];

function NeonPage() {
    return (
      <CategoryPage
        title="Works with LED Neon"
        description="LED neon signs and decorations add modernity and visibility to shops, venues, and interior spaces, creating a distinctive atmosphere both day and night."
        images={IMAGES}
        cta={{
          title: 'What we can do for you',
          text: 'We design custom, durable, and efficient LED neon signs and shapes, perfect for attracting attention and decorating with style.',
        }}
      />
    );
  }
export default NeonPage;