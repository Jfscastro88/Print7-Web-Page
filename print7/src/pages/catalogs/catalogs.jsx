import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Image,
  Anchor,
  Group,
  Divider,
  AspectRatio,
  rem,
} from "@mantine/core";
import Seo from "../../assets/components/seo.jsx";
import { useTranslation } from "react-i18next";

import heroImage from "../../assets/images/catalogs/catalogsv2.jpg";
import textil1 from "../../assets/images/catalogs/textil/mukua.jpg";
import textil2 from "../../assets/images/catalogs/textil/payper.jpg";
import textil3 from "../../assets/images/catalogs/textil/thclothes.jpg";
import textil4 from "../../assets/images/catalogs/textil/velilla.jpg";
import textil5 from "../../assets/images/catalogs/textil/roly.png";
import textil6 from "../../assets/images/catalogs/textil/sols.png";
import textil7 from "../../assets/images/catalogs/textil/valento.png";
import textil8 from "../../assets/images/catalogs/textil/workteam.png";

import brinde1 from "../../assets/images/catalogs/brindes/hidea.jpg";
import brinde2 from "../../assets/images/catalogs/brindes/makito.jpg";
import brinde3 from "../../assets/images/catalogs/brindes/stamina.jpg";
import brinde4 from "../../assets/images/catalogs/brindes/impacto.png";

const textilCatalogs = [
  { img: textil3, brand: "TH Clothes", link: "https://thclothes.com/pt/" },
  { img: textil2, brand: "Payper", link: "https://www.payperwear.com/pt/home" },
  { img: textil4, brand: "Velilla", link: "https://www.velilla-group.com/pt/velilla" },
  { img: textil5, brand: "Roly", link: "https://www.roly.eu/" },
  { img: textil6, brand: "SOL'S", link: "https://www.sols-europe.com/gb_sols/" },
  { img: textil7, brand: "Valento", link: "https://www.valento.es/produtos" },
  { img: textil1, brand: "Mukua", link: "https://www.velilla-group.com/pt/mukua" },
  { img: textil8, brand: "Workteam", link: "https://www.workteam.com/" },
];

const brindeCatalogs = [
  { img: brinde1, brand: "Hidea", link: "https://www.hideagifts.com/pt/" },
  { img: brinde2, brand: "Makito", link: "https://makito.es/pt_PT" },
  { img: brinde3, brand: "Stamina", link: "https://stamina-shop.eu/?lang=pt" },
  { img: brinde4, brand: "Impacto", link: "https://impactogift.com/pt-pt/" },
];

function CatalogsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Seo title={t("seo.catalogs.title")} description={t("seo.catalogs.desc")} />
      <header
        className="relative flex items-center justify-center h-[400px] bg-gray-100"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
        <Container size="lg" className="text-center relative z-10">
          <Title order={1} size="4rem" c="white" fw={450} className="tracking-tight">
            {t("catalogs.heroTitle")}
          </Title>
          <Text mt={8} size="xl" c="white" className="max-w-2xl mx-auto">
            {t("catalogs.heroSubtitle")}
          </Text>
        </Container>
      </header>

      <main className="py-10 md:py-14">
        <Container size="lg">
          <Group justify="space-between" align="center" mb="xs">
            <Title order={2} className="text-2xl md:text-3xl" fw={800}>
              {t("catalogs.textile")}
            </Title>
          </Group>
          <Divider mb="md" />

          <SimpleGrid
            cols={{ base: 2, sm: 4 }}
            spacing={{ base: "md", sm: "lg" }}
            verticalSpacing={{ base: "md", sm: "lg" }}
          >
            {textilCatalogs.map((item, idx) => (
              <Anchor
                key={`textil-${idx}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                underline="never"
              >
                <Card
                  withBorder
                  radius="lg"
                  padding="xs"
                  className="transition hover:shadow-lg focus:shadow-lg"
                >
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={item.img}
                      alt={item.brand}
                      radius="md"
                      fit="contain"
                      className="bg-gray-50 p-3"
                      loading="lazy"
                    />
                  </AspectRatio>
                  <Text ta="center" mt="xs" fw={700} size="sm">
                    {item.brand}
                  </Text>
                </Card>
              </Anchor>
            ))}
          </SimpleGrid>

          <Group justify="space-between" align="center" mt={rem(48)} mb="xs">
            <Title order={2} className="text-2xl md:text-3xl" fw={800}>
              {t("catalogs.giveaways")}
            </Title>
          </Group>
          <Divider mb="md" />

          <SimpleGrid
            cols={{ base: 2, sm: 4 }}
            spacing={{ base: "md", sm: "lg" }}
            verticalSpacing={{ base: "md", sm: "lg" }}
          >
            {brindeCatalogs.map((item, idx) => (
              <Anchor
                key={`brinde-${idx}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                underline="never"
              >
                <Card withBorder radius="lg" padding="xs" className="transition hover:shadow-lg">
                  <AspectRatio ratio={1}>
                    <Image
                      src={item.img}
                      alt={item.brand}
                      radius="md"
                      fit="contain"
                      className="bg-gray-50 p-3"
                      loading="lazy"
                    />
                  </AspectRatio>
                  <Text ta="center" mt="xs" fw={700} size="sm">
                    {item.brand}
                  </Text>
                </Card>
              </Anchor>
            ))}
          </SimpleGrid>
        </Container>
      </main>
    </div>
  );
}
export default CatalogsPage;
