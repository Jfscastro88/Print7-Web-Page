import "@mantine/core/styles.css";
import CategoryPage from "../../assets/components/categorypage";
import ServiceSeo from "../../assets/components/ServiceSeo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

import imgVitrin1 from "../../assets/images/carousel/decormontras/mon1.jpg";
import imgVitrin2 from "../../assets/images/carousel/decormontras/mon2.jpg";
import imgVitrin3 from "../../assets/images/carousel/decormontras/mon3.jpg";
import imgVitrin4 from "../../assets/images/carousel/decormontras/mon4.jpg";
import imgVitrin5 from "../../assets/images/carousel/decormontras/mon5.jpg";
import imgVitrin6 from "../../assets/images/carousel/decormontras/mon6.jpg";
import imgVitrin7 from "../../assets/images/carousel/decormontras/mon7.jpg";
import imgVitrin8 from "../../assets/images/carousel/decormontras/mon8.jpg";
import imgVitrin9 from "../../assets/images/carousel/decormontras/mon9.jpg";
import imgVitrin10 from "../../assets/images/carousel/decormontras/mon10.jpg";
import imgVitrin11 from "../../assets/images/carousel/decormontras/mon11.jpg";
import imgVitrin12 from "../../assets/images/carousel/decormontras/mon12.jpg";
import imgVitrin13 from "../../assets/images/carousel/decormontras/mon13.jpg";
import imgVitrin14 from "../../assets/images/carousel/decormontras/mon14.jpg";
import imgVitrin15 from "../../assets/images/carousel/decormontras/mon15.jpg";
import imgVitrin16 from "../../assets/images/carousel/decormontras/mon16.jpg";
import imgVitrin17 from "../../assets/images/carousel/decormontras/mon17.jpg";
import imgVitrin18 from "../../assets/images/carousel/decormontras/mon18.jpg";
import imgVitrin19 from "../../assets/images/carousel/decormontras/mon19.jpg";
import imgVitrin20 from "../../assets/images/carousel/decormontras/mon20.jpg";
import imgVitrin21 from "../../assets/images/carousel/decormontras/mon21.jpg";
import imgVitrin22 from "../../assets/images/carousel/decormontras/mon22.jpg";
import imgVitrin23 from "../../assets/images/carousel/decormontras/mon23.jpg";
import imgVitrin24 from "../../assets/images/carousel/decormontras/mon24.jpg";
import imgVitrin25 from "../../assets/images/carousel/decormontras/mon25.jpg";
import imgVitrin26 from "../../assets/images/carousel/decormontras/mon26.jpg";
import imgVitrin27 from "../../assets/images/carousel/decormontras/mon27.jpg";
import imgVitrin28 from "../../assets/images/carousel/decormontras/mon28.jpg";
import imgVitrin29 from "../../assets/images/carousel/decormontras/mon29.jpg";
import imgVitrin30 from "../../assets/images/carousel/decormontras/mon30.jpg";
import imgVitrin31 from "../../assets/images/carousel/decormontras/mon31.jpg";
import imgVitrin32 from "../../assets/images/carousel/decormontras/mon32.jpg";
import imgVitrin33 from "../../assets/images/carousel/decormontras/mon33.jpg";

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
  { src: imgVitrin28, alt: "AD #28" },
  { src: imgVitrin29, alt: "AD #29" },
  { src: imgVitrin30, alt: "AD #30" },
  { src: imgVitrin31, alt: "AD #31" },
  { src: imgVitrin32, alt: "AD #32" },
  { src: imgVitrin33, alt: "AD #33" },
];

function windowPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main>
      <ServiceSeo slug="window" />
      <CategoryPage
        title={t("categories.window.title")}
        description={t("categories.window.description")}
        images={IMAGES}
        cta={{
          title: t("categories.window.ctaTitle"),
          text: t("categories.window.ctaText"),
        }}
      />
    </main>
  );
}
export default windowPage;
