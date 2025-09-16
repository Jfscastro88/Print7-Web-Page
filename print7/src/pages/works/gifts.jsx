import '@mantine/core/styles.css';
import CategoryPage from '../../assets/components/categorypage';
import ServiceSeo from '../../assets/components/ServiceSeo.jsx';
import { useTranslation } from 'react-i18next';

import imgGifts1 from '../../assets/images/carousel/brindes/bg1.jpg';
import imgGifts2 from '../../assets/images/carousel/brindes/bg2.jpg';
import imgGifts3 from '../../assets/images/carousel/brindes/bg3.jpg';
import imgGifts4 from '../../assets/images/carousel/brindes/bg4.jpg';
import imgGifts5 from '../../assets/images/carousel/brindes/bg5.jpg';
import imgGifts6 from '../../assets/images/carousel/brindes/bg6.jpg';
import imgGifts7 from '../../assets/images/carousel/brindes/bg7.jpg';
import imgGifts8 from '../../assets/images/carousel/brindes/bg8.jpg';
import imgGifts9 from '../../assets/images/carousel/brindes/bg9.jpg';
import imgGifts10 from '../../assets/images/carousel/brindes/bg10.jpg';
import imgGifts11 from '../../assets/images/carousel/brindes/bg11.jpg';
import imgGifts12 from '../../assets/images/carousel/brindes/bg12.jpg';
import imgGifts13 from '../../assets/images/carousel/brindes/bg13.jpg';
import imgGifts14 from '../../assets/images/carousel/brindes/bg14.jpg';
import imgGifts15 from '../../assets/images/carousel/brindes/bg15.jpg';
import imgGifts16 from '../../assets/images/carousel/brindes/bg16.jpg';
import imgGifts17 from '../../assets/images/carousel/brindes/bg17.jpg';
import imgGifts18 from '../../assets/images/carousel/brindes/bg18.jpg';
import imgGifts19 from '../../assets/images/carousel/brindes/bg19.jpg';
import imgGifts20 from '../../assets/images/carousel/brindes/bg20.jpg';
import imgGifts21 from '../../assets/images/carousel/brindes/bg21.jpg';
import imgGifts22 from '../../assets/images/carousel/brindes/bg22.jpg';
import imgGifts23 from '../../assets/images/carousel/brindes/bg23.jpg';
import imgGifts24 from '../../assets/images/carousel/brindes/bg24.jpg';
import imgGifts25 from '../../assets/images/carousel/brindes/bg25.jpg';
import imgGifts26 from '../../assets/images/carousel/brindes/bg26.jpg';
import imgGifts27 from '../../assets/images/carousel/brindes/bg27.jpg';
import imgGifts28 from '../../assets/images/carousel/brindes/bg28.jpg';
import imgGifts29 from '../../assets/images/carousel/brindes/bg29.jpg';
import imgGifts30 from '../../assets/images/carousel/brindes/bg30.jpg';
import imgGifts31 from '../../assets/images/carousel/brindes/bg31.jpg';

const IMAGES = [
  { src: imgGifts1, alt: 'AD #1'}, { src: imgGifts2, alt: 'AD #2'},
  { src: imgGifts3, alt: 'AD #3'}, { src: imgGifts4, alt: 'AD #4'},
  { src: imgGifts5, alt: 'AD #5'}, { src: imgGifts6, alt: 'AD #6'},
  { src: imgGifts7, alt: 'AD #7'}, { src: imgGifts8, alt: 'AD #8'},
  { src: imgGifts9, alt: 'AD #9'}, { src: imgGifts10, alt: 'AD #10'},
  { src: imgGifts11, alt: 'AD #11'}, { src: imgGifts12, alt: 'AD #12'},
  { src: imgGifts13, alt: 'AD #13'}, { src: imgGifts14, alt: 'AD #14'},
  { src: imgGifts15, alt: 'AD #15'}, { src: imgGifts16, alt: 'AD #16'},
  { src: imgGifts17, alt: 'AD #17'}, { src: imgGifts18, alt: 'AD #18'},
  { src: imgGifts19, alt: 'AD #19'}, { src: imgGifts20, alt: 'AD #20'},
  { src: imgGifts21, alt: 'AD #21'}, { src: imgGifts22, alt: 'AD #22'},
  { src: imgGifts23, alt: 'AD #23'}, { src: imgGifts24, alt: 'AD #24'},
  { src: imgGifts25, alt: 'AD #25'}, { src: imgGifts26, alt: 'AD #26'},
  { src: imgGifts27, alt: 'AD #27'}, { src: imgGifts28, alt: 'AD #28'},
  { src: imgGifts29, alt: 'AD #29'}, { src: imgGifts30, alt: 'AD #30'},
  { src: imgGifts31, alt: 'AD #31'}
];

function AdvertisingPage() {
  const { t } = useTranslation();
  return (
    <main>
    <ServiceSeo slug="gifts" />
    <CategoryPage
    title={t('categories.gifts.title')}
    description={t('categories.gifts.description')}
    images={IMAGES}
    cta={{
      title: t('categories.gifts.ctaTitle'),
      text: t('categories.gifts.ctaText'),
    }}
    />
    </main>
  );
}
export default AdvertisingPage;