import aboutImage from "../../assets/images/aboutworker.jpeg";
import lojapic from "../../assets/images/loja.jpg";
import Seo from "../../assets/components/seo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

function AboutPage() {
  const { t } = useTranslation("common");

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main className="bg-white">
      <Seo title={t("seo.about.title")} description={t("seo.about.desc")} />
      <section aria-label="Hero Sobre Nós" className="relative">
        <div className="relative min-h-[35vh] md:min-h-[50vh] w-full overflow-hidden">
          <img
            src={aboutImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/5 to-transparent" />
          {/* Fade */}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/10 to-transparent" />
        </div>
      </section>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 text-black leading-relaxed">
          <h1 className="text-left text-3xl sm:text-4xl md:text-6xl font-bold mb-12">
            {t("about.title")}
          </h1>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="text-base sm:text-lg text-gray-800 leading-relaxed space-y-4 sm:space-y-6">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <p>{t("about.p4")}</p>
            </div>
            <div className="relative">
              <img
                src={lojapic}
                alt=""
                className="w-full h-auto rounded-xl border border-gray-200 object-cover"
                loading="lazy"
              />

              <div className="pointer-events-none absolute left-6 right-6 -bottom-2 h-6 rounded-full bg-black/20 blur-md" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default AboutPage;
