import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgVitrin1 from "../../assets/images/carousel/stand/sta1.jpg";
import imgVitrin2 from "../../assets/images/carousel/stand/sta2.jpg";
import imgVitrin3 from "../../assets/images/carousel/stand/sta3.jpg";
import imgVitrin4 from "../../assets/images/carousel/stand/sta4.jpg";
import imgVitrin5 from "../../assets/images/carousel/stand/sta5.jpg";
import imgVitrin6 from "../../assets/images/carousel/stand/sta6.jpg";
import imgVitrin7 from "../../assets/images/carousel/stand/sta7.jpg";
import imgVitrin8 from "../../assets/images/carousel/stand/sta8.jpg";
import imgVitrin9 from "../../assets/images/carousel/stand/sta9.jpg";
import imgVitrin10 from "../../assets/images/carousel/stand/sta10.jpg";

const IMAGES = [
  { src: imgVitrin1, alt: "AD #1" },
  { src: imgVitrin2, alt: "AD #2" },
  { src: imgVitrin3, alt: "AD #3" },
  { src: imgVitrin4, alt: "AD #4" },
  { src: imgVitrin5, alt: "AD #5" },
  { src: imgVitrin6, alt: "AD #6" },
  { src: imgVitrin7, alt: "AD #7" },
  { src: imgVitrin8, alt: "AD #8" },
  { src: imgVitrin9, alt: "AD #9" },
  { src: imgVitrin10, alt: "AD #10" },
];

function StandsPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="stand" />
      <CategoryPage
        title={t("categories.stand.title")}
        description={t("categories.stand.description")}
        images={IMAGES}
        cta={{
          title: t("categories.stand.ctaTitle"),
          text: t("categories.stand.ctaText"),
        }}
      />
    </main>
  );
}
export default StandsPage;
