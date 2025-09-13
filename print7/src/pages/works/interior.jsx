import '@mantine/core/styles.css';
import CategoryPage from '../../assets/components/categorypage';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <CategoryPage
      title={t('categories.interior.title')}
      description={t('categories.interior.description')}
      images={IMAGES}
      cta={{
        title: t('categories.interior.ctaTitle'),
        text: t('categories.interior.ctaText'),
      }}
    />
  );
}
export default InterirorPage;