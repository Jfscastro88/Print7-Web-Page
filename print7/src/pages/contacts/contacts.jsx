import { Container, Title, Paper } from "@mantine/core";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactImage from "../../assets/images/contactDesk.jpeg";
import ContactImageMobile from "../../assets/images/contactDesk.jpeg";
import Seo from "../../assets/components/seo.jsx";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../assets/hooks/useScrollToTop.js";

function ContactPage() {
  const { t } = useTranslation();

  // Ensure scroll to top when component mounts
  useScrollToTop("smooth");

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Seo title={t("seo.contacts.title")} description={t("seo.contacts.desc")} />
      <section
        className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${ContactImageMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Desktop background image */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: `url(${ContactImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-black/10pointer-events-none" />
        <Container
          size="lg"
          className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6"
        ></Container>
      </section>

      <Container size="lg" className="py-10 px-6 text-center">
        <Title
          order={1}
          className="mb-4 max-w-[780px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-auto text-center pb-4"
        >
          {t("contacts.heroTitle")}
        </Title>
        <Title order={2} className="text-2xl font-semibold mb-6 text-center">
          {t("contacts.sectionTitle")}
        </Title>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-base md:text-lg">
          <a href="tel:+351934418862" className="flex items-center gap-2 font-semibold">
            <Phone size={20} /> 934 418 862
          </a>
          <a href="tel:+351910726266" className="flex items-center gap-2 font-semibold">
            <Phone size={20} /> 910 726 266
          </a>
          <a href="mailto:geral@print7.pt" className="flex items-center gap-2 font-semibold">
            <Mail size={20} /> geral@print7.pt
          </a>
          <span className="flex items-center gap-2 font-semibold">
            <MapPin size={20} /> {t("contacts.schedule")}
          </span>
        </div>

        <Title order={3} className="text-xl font-semibold mt-10 mb-2 text-center">
          {t("contacts.locationTitle")}
        </Title>
        <div className="mb-4 font-medium text-center">Plus Code: G3HW+5W Setúbal, Portugal</div>

        <Paper shadow="sm" radius="lg" className="overflow-hidden">
          <div className="w-full h-64 md:h-80 lg:h-[450px]">
            <iframe
              src="https://maps.google.com/maps?q=G3HW%2B5W%20Set%C3%BAbal%2C%20Portugal&z=15&output=embed"
              title="Localização Print7"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Paper>
      </Container>
    </main>
  );
}
export default ContactPage;
