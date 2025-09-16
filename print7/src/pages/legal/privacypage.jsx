import Seo from '../../assets/components/seo.jsx';
import { useTranslation } from "react-i18next";

function PrivacyPage() {
    const { t, i18n } = useTranslation("privacy");
    
    const updatedAt = new Date("2025-09-16T00:00:00Z");
    const locale = { pt: "pt-PT", en: "en-GB", it: "it-IT" }[i18n.language] || "en-GB";
    const dateStr = updatedAt.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
    
    return (
        <main className="bg-white">
        <Seo title={t('meta.title')} description={t('meta.description')} />
        
        <section className="max-w-3xl mx-auto px-6 py-14 text-gray-800 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t("heading")}</h1>
        <p className="mt-2 text-sm text-gray-500">{t("updated", { date: dateStr })}</p>
        
        <div className="mt-8 space-y-6">
        <p>{t("intro")}</p>
        
        <h2 className="text-xl font-semibold">{t("controller.heading")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("controller.body") }} />
        
        <h2 className="text-xl font-semibold">{t("data.heading")}</h2>
        <ul className="list-disc pl-6 space-y-2">
        <li><strong>{t("data.logs.title")}</strong> {t("data.logs.text")}</li>
        <li><strong>{t("data.contact.title")}</strong> {t("data.contact.text")}</li>
        </ul>
        
        <h2 className="text-xl font-semibold">{t("cookies.heading")}</h2>
        <p>{t("cookies.text")}</p>
        
        <h2 className="text-xl font-semibold">{t("legalBases.heading")}</h2>
        <ul className="list-disc pl-6 space-y-2">
        <li><strong>{t("legalBases.legit.title")}</strong> {t("legalBases.legit.text")}</li>
        <li><strong>{t("legalBases.contract.title")}</strong> {t("legalBases.contract.text")}</li>
        <li><strong>{t("legalBases.legal.title")}</strong> {t("legalBases.legal.text")}</li>
        </ul>
        
        <h2 className="text-xl font-semibold">{t("processors.heading")}</h2>
        <p>{t("processors.text")}</p>
        
        <h2 className="text-xl font-semibold">{t("retention.heading")}</h2>
        <ul className="list-disc pl-6 space-y-2">
        <li><strong>{t("retention.logs.title")}</strong> {t("retention.logs.text")}</li>
        <li><strong>{t("retention.contacts.title")}</strong> {t("retention.contacts.text")}</li>
        </ul>
        
        <h2 className="text-xl font-semibold">{t("rights.heading")}</h2>
        <p>{t("rights.text")}</p>
        
        <h2 className="text-xl font-semibold">{t("transfers.heading")}</h2>
        <p>{t("transfers.text")}</p>
        
        <h2 className="text-xl font-semibold">{t("security.heading")}</h2>
        <p>{t("security.text")}</p>
        
        <h2 className="text-xl font-semibold">{t("changes.heading")}</h2>
        <p>{t("changes.text")}</p>
        
        <h2 className="text-xl font-semibold">{t("contact.heading")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("contact.text") }} />
        </div>
        </section>
        </main>
    );
}
export default PrivacyPage;