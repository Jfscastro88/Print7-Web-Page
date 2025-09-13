import '@mantine/core/styles.css';
import CategoryPage from '../../assets/components/categorypage';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <CategoryPage
      title={t('categories.laser.title')}
      description={t('categories.laser.description')}
      images={IMAGES}
      cta={{
        title: t('categories.laser.ctaTitle'),
        text: t('categories.laser.ctaText'),
      }}
    />
  );
}
export default LaserPage;