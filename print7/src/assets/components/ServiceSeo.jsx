import Seo from "../components/seo.jsx";
import { useTranslation } from "react-i18next";

export default function ServiceSeo({ slug, image }) {
  const { t } = useTranslation("common");
  const title = t(`seo2.services.${slug}.title`);
  const description = t(`seo.services.${slug}.desc`);
  return <Seo title={title} description={description} image={image} />;
}
