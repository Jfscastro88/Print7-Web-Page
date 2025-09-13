import '@mantine/core/styles.css';
import CategoryPage from '../../assets/components/categorypage';
import { useTranslation } from 'react-i18next';

import imgrelief1 from '../../assets/images/carousel/relevo/rel1.jpg';
import imgrelief2 from '../../assets/images/carousel/relevo/rel2.jpg';
import imgrelief3 from '../../assets/images/carousel/relevo/rel3.jpg';
import imgrelief4 from '../../assets/images/carousel/relevo/rel4.jpg';
import imgrelief5 from '../../assets/images/carousel/relevo/rel5.jpg';
import imgrelief6 from '../../assets/images/carousel/relevo/rel6.jpg';
import imgrelief7 from '../../assets/images/carousel/relevo/rel7.jpg';
import imgrelief8 from '../../assets/images/carousel/relevo/rel8.jpg';
import imgrelief9 from '../../assets/images/carousel/relevo/rel9.jpg';
import imgrelief10 from '../../assets/images/carousel/relevo/rel10.jpg';
import imgrelief11 from '../../assets/images/carousel/relevo/rel11.jpg';
import imgrelief12 from '../../assets/images/carousel/relevo/rel12.jpg';
import imgrelief13 from '../../assets/images/carousel/relevo/rel13.jpg';
import imgrelief14 from '../../assets/images/carousel/relevo/rel14.jpg';
import imgrelief15 from '../../assets/images/carousel/relevo/rel15.jpg';
import imgrelief16 from '../../assets/images/carousel/relevo/rel16.jpg';
import imgrelief17 from '../../assets/images/carousel/relevo/rel17.jpg';
import imgrelief18 from '../../assets/images/carousel/relevo/rel18.jpg';
import imgrelief19 from '../../assets/images/carousel/relevo/rel19.jpg';
import imgrelief20 from '../../assets/images/carousel/relevo/rel20.jpg';
import imgrelief21 from '../../assets/images/carousel/relevo/rel21.jpg';
import imgrelief22 from '../../assets/images/carousel/relevo/rel22.jpg';
import imgrelief23 from '../../assets/images/carousel/relevo/rel23.jpg';
import imgrelief24 from '../../assets/images/carousel/relevo/rel24.jpg';
import imgrelief25 from '../../assets/images/carousel/relevo/rel25.jpg';
import imgrelief26 from '../../assets/images/carousel/relevo/rel26.jpg';
import imgrelief27 from '../../assets/images/carousel/relevo/rel27.jpg';
import imgrelief28 from '../../assets/images/carousel/relevo/rel28.jpg';
import imgrelief29 from '../../assets/images/carousel/relevo/rel29.jpg';


const IMAGES = [
  { src: imgrelief1, alt: 'AD #1'}, { src: imgrelief2, alt: 'AD #2'},
  { src: imgrelief3, alt: 'AD #3'}, { src: imgrelief4, alt: 'AD #4'},
  { src: imgrelief5, alt: 'AD #5'}, { src: imgrelief6, alt: 'AD #6'},
  { src: imgrelief7, alt: 'AD #7'}, { src: imgrelief8, alt: 'AD #8'},
  { src: imgrelief9, alt: 'AD #9'}, { src: imgrelief10, alt: 'AD #10'},
  { src: imgrelief11, alt: 'AD #11'}, { src: imgrelief12, alt: 'AD #12'},
  { src: imgrelief13, alt: 'AD #13'}, { src: imgrelief14, alt: 'AD #14'},
  { src: imgrelief15, alt: 'AD #15'}, { src: imgrelief16, alt: 'AD #16'},
  { src: imgrelief17, alt: 'AD #17'}, { src: imgrelief18, alt: 'AD #18'},
  { src: imgrelief19, alt: 'AD #19'}, { src: imgrelief20, alt: 'AD #20'},
  { src: imgrelief21, alt: 'AD #21'}, { src: imgrelief22, alt: 'AD #22'},
  { src: imgrelief23, alt: 'AD #23'}, { src: imgrelief24, alt: 'AD #24'},
  { src: imgrelief25, alt: 'AD #25'}, { src: imgrelief26, alt: 'AD #26'},
  { src: imgrelief27, alt: 'AD #27'}, { src: imgrelief28, alt: 'AD #28'},
  { src: imgrelief29, alt: 'AD #29'}
];

function reliefWorkPage() {
  const { t } = useTranslation();
  return (
    <CategoryPage
      title={t('categories.relief.title')}
      description={t('categories.relief.description')}
      images={IMAGES}
      cta={{
        title: t('categories.relief.ctaTitle'),
        text: t('categories.relief.ctaText'),
      }}
    />
  );
}
export default reliefWorkPage;