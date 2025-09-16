import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  const { t } = useTranslation("common");
  const navigate = useNavigate();

  return (
    <main className="min-h-[60vh] grid place-items-center px-6 py-16 text-center">
      <Helmet>
        <title>404 — {t("notFound.title")} | Print7</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-xl">
        <p className="text-sm text-gray-500">{t("notFound.oops")}</p>
        <h1 className="text-5xl font-bold mt-2">404</h1>
        <p className="mt-4 text-gray-700">{t("notFound.desc")}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="rounded-xl px-4 py-2 border border-gray-300 hover:bg-gray-50"
          >
            {t("notFound.goBack")}
          </button>
          <Link to="/" className="rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">
            {t("notFound.goHome")}
          </Link>
          <Link to="/contact" className="rounded-xl px-4 py-2 border border-gray-300 hover:bg-gray-50">
            {t("notFound.contact")}
          </Link>
        </div>
      </div>
    </main>
  );
}
