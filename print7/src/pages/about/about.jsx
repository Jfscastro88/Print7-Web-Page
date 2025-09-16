import aboutImage from "../../assets/images/catalogs/catalogs.jpg";
import Seo from '../../assets/components/seo.jsx';
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation("common");
  return (
    <main className="bg-white">
    <Seo title={t('seo.about.title')} description={t('seo.about.desc')} />
      <section aria-label="Hero Sobre Nós" className="relative">
        <div className="relative min-h-[35vh] md:min-h-[50vh] w-full overflow-hidden">
          <img
            src={aboutImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"/>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          {/* Fade para a secção inferior ligar bem com o branco */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>
      </section>

      <section className="relative">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 text-gray-700 leading-relaxed space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold">{t("about.title")}</h1>
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <p>{t("about.p4")}</p>
        </div>
      </section>
    </main>
  );
}
export default AboutPage;