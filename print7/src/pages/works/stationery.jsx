import '@mantine/core/styles.css';
import CategoryPage from '../../assets/components/categorypage';

import imgVitrin1 from '../../assets/images/carousel/estacionarios/sta1.jpg';
import imgVitrin2 from '../../assets/images/carousel/estacionarios/sta2.jpg';
import imgVitrin3 from '../../assets/images/carousel/estacionarios/sta3.jpg';
import imgVitrin4 from '../../assets/images/carousel/estacionarios/sta4.jpg';
import imgVitrin5 from '../../assets/images/carousel/estacionarios/sta5.jpg';
import imgVitrin6 from '../../assets/images/carousel/estacionarios/sta6.jpg';
import imgVitrin7 from '../../assets/images/carousel/estacionarios/sta7.jpg';
import imgVitrin8 from '../../assets/images/carousel/estacionarios/sta8.jpg';
import imgVitrin9 from '../../assets/images/carousel/estacionarios/sta9.jpg';

const IMAGES = [
  { src: imgVitrin1, alt: 'AD #1'}, { src: imgVitrin2, alt: 'AD #2'},
  { src: imgVitrin3, alt: 'AD #3'}, { src: imgVitrin4, alt: 'AD #4'},
  { src: imgVitrin5, alt: 'AD #5'}, { src: imgVitrin6, alt: 'AD #6'},
  { src: imgVitrin7, alt: 'AD #7'}, { src: imgVitrin8, alt: 'AD #8'},
  { src: imgVitrin9, alt: 'AD #9'}
];

function stationeryPage() {
  return (
    <CategoryPage
    title="Stationery"
    description="Custom stationery is an integral part of a company's visual identity. Business cards, letterhead, envelopes, and notepads convey professionalism and consistency to customers and partners."
    images={IMAGES}
    cta={{
      title: 'What we can do for you',
      text: 'We create coordinated sets of letterhead, envelopes, business cards, and other paper materials, taking care of design and printing to ensure consistency and quality in every detail.',
    }}
    />
  );
}
export default stationeryPage;