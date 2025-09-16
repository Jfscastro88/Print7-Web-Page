import '@mantine/core/styles.css';
import CategoryPage from '../../assets/components/categorypage';
import ServiceSeo from '../../assets/components/ServiceSeo.jsx';
import { useTranslation } from 'react-i18next';

import imgAD1 from '../../assets/images/carousel/outros/out1.jpg';
import imgAD2 from '../../assets/images/carousel/outros/out2.jpg';
import imgAD3 from '../../assets/images/carousel/outros/out3.jpg';
import imgAD4 from '../../assets/images/carousel/outros/out4.jpg';
import imgAD5 from '../../assets/images/carousel/outros/out5.jpg';
import imgAD6 from '../../assets/images/carousel/outros/out6.jpg';
import imgAD7 from '../../assets/images/carousel/outros/out7.jpg';
import imgAD8 from '../../assets/images/carousel/outros/out8.jpg';
import imgAD9 from '../../assets/images/carousel/outros/out9.jpg';
import imgAD10 from '../../assets/images/carousel/outros/out10.jpg';
import imgAD11 from '../../assets/images/carousel/outros/out11.jpg';
import imgAD12 from '../../assets/images/carousel/outros/out12.jpg';
import imgAD13 from '../../assets/images/carousel/outros/out13.jpg';
import imgAD14 from '../../assets/images/carousel/outros/out14.jpg';
import imgAD15 from '../../assets/images/carousel/outros/out15.jpg';
import imgAD16 from '../../assets/images/carousel/outros/out16.jpg';
import imgAD17 from '../../assets/images/carousel/outros/out17.jpg';

const IMAGES = [
{ src: imgAD1, alt: 'AD #1'}, { src: imgAD2, alt: 'AD #2'},
{ src: imgAD3, alt: 'AD #3'}, { src: imgAD4, alt: 'AD #4'},
{ src: imgAD5, alt: 'AD #5'}, { src: imgAD6, alt: 'AD #6'},
{ src: imgAD7, alt: 'AD #7'}, { src: imgAD8, alt: 'AD #8'},
{ src: imgAD9, alt: 'AD #9'}, { src: imgAD10, alt: 'AD #10'},
{ src: imgAD11, alt: 'AD #11'}, { src: imgAD12, alt: 'AD #12'},
{ src: imgAD13, alt: 'AD #13'}, { src: imgAD14, alt: 'AD #14'},
{ src: imgAD15, alt: 'AD #15'}, { src: imgAD16, alt: 'AD #16'},
{ src: imgAD17, alt: 'AD #17'},
  ];

function OthersPage() {
  const { t } = useTranslation();
  return (
    <main>
      <ServiceSeo slug="others" />
      <CategoryPage
      title={t('categories.others.title')}
      description={t('categories.others.description')}
      images={IMAGES}
      cta={{
        title: t('categories.others.ctaTitle'),
        text: t('categories.others.ctaText'),
      }}
    />
    </main>
  );
}
export default OthersPage;