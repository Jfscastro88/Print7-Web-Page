import '@mantine/core/styles.css';
import CategoryPage from '../../assets/components/categorypage';

import imgVitrin1 from '../../assets/images/carousel/stand/sta1.jpg';
import imgVitrin2 from '../../assets/images/carousel/stand/sta2.jpg';
import imgVitrin3 from '../../assets/images/carousel/stand/sta3.jpg';
import imgVitrin4 from '../../assets/images/carousel/stand/sta4.jpg';
import imgVitrin5 from '../../assets/images/carousel/stand/sta5.jpg';
import imgVitrin6 from '../../assets/images/carousel/stand/sta6.jpg';
import imgVitrin7 from '../../assets/images/carousel/stand/sta7.jpg';
import imgVitrin8 from '../../assets/images/carousel/stand/sta8.jpg';
import imgVitrin9 from '../../assets/images/carousel/stand/sta9.jpg';
import imgVitrin10 from '../../assets/images/carousel/stand/sta10.jpg';

const IMAGES = [
  { src: imgVitrin1, alt: 'AD #1'}, { src: imgVitrin2, alt: 'AD #2'},
  { src: imgVitrin3, alt: 'AD #3'}, { src: imgVitrin4, alt: 'AD #4'},
  { src: imgVitrin5, alt: 'AD #5'}, { src: imgVitrin6, alt: 'AD #6'},
  { src: imgVitrin7, alt: 'AD #7'}, { src: imgVitrin8, alt: 'AD #8'},
  { src: imgVitrin9, alt: 'AD #9'}, { src: imgVitrin10, alt: 'AD #10'},
];

function StandsPage() {
  return (
    <CategoryPage
    title="Stand & Expositores"
    description="Stands and displays are essential for trade shows, events, and points of sale: they help present products and services in a clear, professional, and attractive manner."
    images={IMAGES}
    cta={{
      title: 'What we can do for you',
      text: 'We design and manufacture roll-ups, promotional desks, display walls, and customized modular solutions that are easy to assemble and transport.',
    }}
    />
  );
}
export default StandsPage;