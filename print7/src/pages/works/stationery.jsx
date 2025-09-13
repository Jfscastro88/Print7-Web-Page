import '@mantine/core/styles.css';
import CategoryPage from '../../assets/components/categorypage';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <CategoryPage
      title={t('categories.stationery.title')}
      description={t('categories.stationery.description')}
      images={IMAGES}
      cta={{
        title: t('categories.stationery.ctaTitle'),
        text: t('categories.stationery.ctaText'),
      }}
    />
  );
}
export default stationeryPage;