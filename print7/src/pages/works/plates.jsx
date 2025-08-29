import '@mantine/core/styles.css';
import CategoryPage from '../../assets/components/categorypage';

import imgboards1 from '../../assets/images/carousel/placas/pla1.jpg';
import imgboards2 from '../../assets/images/carousel/placas/pla2.jpg';
import imgboards3 from '../../assets/images/carousel/placas/pla3.jpg';
import imgboards4 from '../../assets/images/carousel/placas/pla4.jpg';
import imgboards5 from '../../assets/images/carousel/placas/pla5.jpg';
import imgboards6 from '../../assets/images/carousel/placas/pla6.jpg';
import imgboards7 from '../../assets/images/carousel/placas/pla7.jpg';
import imgboards8 from '../../assets/images/carousel/placas/pla8.jpg';
import imgboards9 from '../../assets/images/carousel/placas/pla9.jpg';
import imgboards10 from '../../assets/images/carousel/placas/pla10.jpg';
import imgboards11 from '../../assets/images/carousel/placas/pla11.jpg';
import imgboards12 from '../../assets/images/carousel/placas/pla12.jpg';
import imgboards13 from '../../assets/images/carousel/placas/pla13.jpg';
import imgboards14 from '../../assets/images/carousel/placas/pla14.jpg';
import imgboards15 from '../../assets/images/carousel/placas/pla15.jpg';
import imgboards16 from '../../assets/images/carousel/placas/pla16.jpg';
import imgboards17 from '../../assets/images/carousel/placas/pla17.jpg';
import imgboards18 from '../../assets/images/carousel/placas/pla18.jpg';
import imgboards19 from '../../assets/images/carousel/placas/pla19.jpg';
import imgboards20 from '../../assets/images/carousel/placas/pla20.jpg';
import imgboards21 from '../../assets/images/carousel/placas/pla21.jpg';
import imgboards22 from '../../assets/images/carousel/placas/pla22.jpg';

const IMAGES = [
  { src: imgboards1, alt: 'AD #1'}, { src: imgboards2, alt: 'AD #2'},
  { src: imgboards3, alt: 'AD #3'}, { src: imgboards4, alt: 'AD #4'},
  { src: imgboards5, alt: 'AD #5'}, { src: imgboards6, alt: 'AD #6'},
  { src: imgboards7, alt: 'AD #7'}, { src: imgboards8, alt: 'AD #8'},
  { src: imgboards9, alt: 'AD #9'}, { src: imgboards10, alt: 'AD #10'},
  { src: imgboards11, alt: 'AD #11'}, { src: imgboards12, alt: 'AD #12'},
  { src: imgboards13, alt: 'AD #13'}, { src: imgboards14, alt: 'AD #14'},
  { src: imgboards15, alt: 'AD #15'}, { src: imgboards16, alt: 'AD #16'},
  { src: imgboards17, alt: 'AD #17'}, { src: imgboards18, alt: 'AD #18'},
  { src: imgboards19, alt: 'AD #19'}, { src: imgboards20, alt: 'AD #20'},
  { src: imgboards21, alt: 'AD #21'}, { src: imgboards22, alt: 'AD #22'},
];

function plastesboardsPage() {
  return (
    <CategoryPage
    title="Plates and Tarps"
    description="Rigid panels and PVC or fabric banners are versatile solutions for indoor and outdoor advertising, ideal for temporary promotions or permanent communications."
    images={IMAGES}
    cta={{
      title: 'What we can do for you',
      text: 'We print and produce large plaques, signs, banners, and lonas using durable, weather-resistant materials.',
    }}
    />
  );
}
export default plastesboardsPage;