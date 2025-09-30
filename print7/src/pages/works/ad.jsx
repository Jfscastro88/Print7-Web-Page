import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgAdvertising1 from "../../assets/images/carousel/reclames/rec1.jpg";
import imgAdvertising2 from "../../assets/images/carousel/reclames/rec2.jpg";
import imgAdvertising3 from "../../assets/images/carousel/reclames/rec3.jpg";
import imgAdvertising4 from "../../assets/images/carousel/reclames/rec4.jpg";
import imgAdvertising5 from "../../assets/images/carousel/reclames/rec5.jpg";
import imgAdvertising6 from "../../assets/images/carousel/reclames/rec6.jpg";
import imgAdvertising7 from "../../assets/images/carousel/reclames/rec7.jpg";
import imgAdvertising8 from "../../assets/images/carousel/reclames/rec8.jpg";
import imgAdvertising9 from "../../assets/images/carousel/reclames/rec9.jpg";
import imgAdvertising10 from "../../assets/images/carousel/reclames/rec10.jpg";
import imgAdvertising11 from "../../assets/images/carousel/reclames/rec11.jpg";
import imgAdvertising12 from "../../assets/images/carousel/reclames/rec12.jpg";
import imgAdvertising13 from "../../assets/images/carousel/reclames/rec13.jpg";
import imgAdvertising14 from "../../assets/images/carousel/reclames/rec14.jpg";
import imgAdvertising15 from "../../assets/images/carousel/reclames/rec15.jpg";
import imgAdvertising16 from "../../assets/images/carousel/reclames/rec16.jpg";
import imgAdvertising17 from "../../assets/images/carousel/reclames/rec17.jpg";
import imgAdvertising18 from "../../assets/images/carousel/reclames/rec18.jpg";
import imgAdvertising19 from "../../assets/images/carousel/reclames/rec19.jpg";

const IMAGES = [
  { src: imgAdvertising1, alt: "AD #1" },
  { src: imgAdvertising2, alt: "AD #2" },
  { src: imgAdvertising3, alt: "AD #3" },
  { src: imgAdvertising4, alt: "AD #4" },
  { src: imgAdvertising5, alt: "AD #5" },
  { src: imgAdvertising6, alt: "AD #6" },
  { src: imgAdvertising7, alt: "AD #7" },
  { src: imgAdvertising8, alt: "AD #8" },
  { src: imgAdvertising9, alt: "AD #9" },
  { src: imgAdvertising10, alt: "AD #10" },
  { src: imgAdvertising11, alt: "AD #11" },
  { src: imgAdvertising12, alt: "AD #12" },
  { src: imgAdvertising13, alt: "AD #13" },
  { src: imgAdvertising14, alt: "AD #14" },
  { src: imgAdvertising15, alt: "AD #15" },
  { src: imgAdvertising16, alt: "AD #16" },
  { src: imgAdvertising17, alt: "AD #17" },
  { src: imgAdvertising18, alt: "AD #18" },
  { src: imgAdvertising19, alt: "AD #19" },
];

function AdvertisingPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="ad" />
      <CategoryPage
        title={t("categories.ad.title")}
        description={t("categories.ad.description")}
        images={IMAGES}
        cta={{
          title: t("categories.ad.ctaTitle"),
          text: t("categories.ad.ctaText"),
        }}
      />
    </main>
  );
}
export default AdvertisingPage;
