import { Container, Title, Text, SimpleGrid, Card, Image, Anchor, Group, Divider, AspectRatio, rem
} from "@mantine/core";

import heroImage from "../../assets/images/catalogs/catalogs.jpg";

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
  { img: textil3, brand: "TH Clothes",   link: "https://viewer.joomag.com/thclothes-catalogue-2025-en/0575985001736156443?short&" },
  { img: textil2, brand: "Payper",       link: "https://www.payperwear.com/flex/AppData/Redational/ppw/cataloghi/ClothingCatalogue/PayperCatalogue_ED33_ES_PT.pdf" },
  { img: textil4, brand: "Velilla",      link: "https://www.velilla-group.com/pt/velilla" },
  { img: textil5, brand: "Roly",         link: "https://www.roly.eu/icatalog/urlCatRoly?lang=pt" },
  { img: textil6, brand: "SOL'S",        link: "https://catalogue.sologroup-paris.com/solo-group/sols/e-catalogue-nouveautes-2025-sols/?page=1" },
  { img: textil7, brand: "Valento",      link: "https://www.valento.es/produtos" },
  { img: textil1, brand: "Mukua",        link: "https://www.velilla-group.com/pt/mukua" },
  { img: textil8, brand: "Workteam",     link: "https://www.workteam.com/descargas.php" },
];

const brindeCatalogs = [
  { img: brinde1, brand: "Hidea",    link: "https://www.hideagifts.com/pt/catalogo/?f7%5B0%5D=&f7%5B1%5D=0&f7%5B2%5D=" },
  { img: brinde2, brand: "Makito",   link: "https://generalcatalogue2025.eu/6aca473ef2107957d9e6fa9a60923698/" },
  { img: brinde3, brand: "Stamina",  link: "https://power-ideas.es/2025/pdf/stamina-2025-es-baja.pdf" },
  { img: brinde4, brand: "Impacto",  link: "https://online.fliphtml5.com/hgeid/vqeo/#p=1" },
];

function CatalogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="relative flex items-center justify-center h-[400px] bg-gray-100"
        style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
        >
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" /> 
        <Container size="lg" className="text-center relative z-10">
        <Title order={1} size="4rem" c="white" fw={450} className="tracking-tight">
        Catalogs
        </Title>
        <Text mt={8} size="xl" c="white" className="max-w-2xl mx-auto">
        Explore our categories: textiles and brindes.  
        Click on an item to open the related catalog in a new tab.
        </Text>
        </Container>
      </header>

      <main className="py-10 md:py-14">
        <Container size="lg">
          <Group justify="space-between" align="center" mb="xs">
            <Title order={2} className="text-2xl md:text-3xl" fw={800}>
              Textile
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
              Giveaways
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