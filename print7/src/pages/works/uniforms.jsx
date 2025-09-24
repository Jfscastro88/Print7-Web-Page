import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";

import imgVitrin1 from "../../assets/images/carousel/fardamentos/far1.jpg";
import imgVitrin2 from "../../assets/images/carousel/fardamentos/far2.jpg";
import imgVitrin3 from "../../assets/images/carousel/fardamentos/far3.jpg";
import imgVitrin4 from "../../assets/images/carousel/fardamentos/far4.jpg";
import imgVitrin5 from "../../assets/images/carousel/fardamentos/far5.jpg";
import imgVitrin6 from "../../assets/images/carousel/fardamentos/far6.jpg";
import imgVitrin7 from "../../assets/images/carousel/fardamentos/far7.jpg";
import imgVitrin8 from "../../assets/images/carousel/fardamentos/far8.jpg";
import imgVitrin9 from "../../assets/images/carousel/fardamentos/far9.jpg";
import imgVitrin10 from "../../assets/images/carousel/fardamentos/far10.jpg";
import imgVitrin11 from "../../assets/images/carousel/fardamentos/far11.jpg";
import imgVitrin12 from "../../assets/images/carousel/fardamentos/far12.jpg";
import imgVitrin13 from "../../assets/images/carousel/fardamentos/far13.jpg";
import imgVitrin14 from "../../assets/images/carousel/fardamentos/far14.jpg";
import imgVitrin15 from "../../assets/images/carousel/fardamentos/far15.jpg";
import imgVitrin16 from "../../assets/images/carousel/fardamentos/far16.jpg";
import imgVitrin17 from "../../assets/images/carousel/fardamentos/far17.jpg";
import imgVitrin18 from "../../assets/images/carousel/fardamentos/far18.jpg";
import imgVitrin19 from "../../assets/images/carousel/fardamentos/far19.jpg";
import imgVitrin20 from "../../assets/images/carousel/fardamentos/far20.jpg";
import imgVitrin21 from "../../assets/images/carousel/fardamentos/far21.jpg";
import imgVitrin22 from "../../assets/images/carousel/fardamentos/far22.jpg";
import imgVitrin23 from "../../assets/images/carousel/fardamentos/far23.jpg";
import imgVitrin24 from "../../assets/images/carousel/fardamentos/far24.jpg";
import imgVitrin25 from "../../assets/images/carousel/fardamentos/far25.jpg";
import imgVitrin26 from "../../assets/images/carousel/fardamentos/far26.jpg";
import imgVitrin27 from "../../assets/images/carousel/fardamentos/far27.jpg";

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
  { src: imgVitrin11, alt: "AD #11" },
  { src: imgVitrin12, alt: "AD #12" },
  { src: imgVitrin13, alt: "AD #13" },
  { src: imgVitrin14, alt: "AD #14" },
  { src: imgVitrin15, alt: "AD #15" },
  { src: imgVitrin16, alt: "AD #16" },
  { src: imgVitrin17, alt: "AD #17" },
  { src: imgVitrin18, alt: "AD #18" },
  { src: imgVitrin19, alt: "AD #19" },
  { src: imgVitrin20, alt: "AD #20" },
  { src: imgVitrin21, alt: "AD #21" },
  { src: imgVitrin22, alt: "AD #22" },
  { src: imgVitrin23, alt: "AD #23" },
  { src: imgVitrin24, alt: "AD #24" },
  { src: imgVitrin25, alt: "AD #25" },
  { src: imgVitrin26, alt: "AD #26" },
  { src: imgVitrin27, alt: "AD #27" },
];

function uniformsPage() {
  const { t } = useTranslation();

  return (
    <main>
      <ServiceSeo slug="uniforms" />
      <CategoryPage
        title={t("categories.uniforms.title")}
        description={t("categories.uniforms.description")}
        images={IMAGES}
        cta={{
          title: t("categories.uniforms.ctaTitle"),
          text: t("categories.uniforms.ctaText"),
        }}
      />
    </main>
  );
}
export default uniformsPage;
