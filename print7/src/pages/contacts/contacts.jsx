import { MantineProvider, TextInput, Textarea, Button, Container, Title, Paper, Group } from '@mantine/core';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useForm } from "@mantine/form";
import ContactImage from '../../assets/images/contacts.jpg';

export default function ContactPage() {
  // Form state and validation
  const form = useForm({
    initialValues: {
      nome: '',
      sobrenome: '',
      email: '',
      telefone: '',
      mensagem: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Email inválido'),
      telefone: (value) => (value.length > 9 ? null : 'Telefone inválido'),
    },
  });

  // Submission handler
  const handleSubmit = async (values) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        form.reset();
      } else {
        throw new Error('Erro no envio');
      }
    } catch (error) {
      console.error(error);
      alert('Falha ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section with background image */}
<section
  className="relative h-[360px] md:h-[420px] lg:h-[480px] bg-cover bg-center"
  style={{
    backgroundImage: `url(${ContactImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="absolute inset-0 bg-black/40 pointer-events-none" />

  <Container
    size="lg"
    className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6"
  >
    {/* Smaller and more readable title */}
    <Title
      order={1}
      className="mb-3 max-w-[780px] leading-tight tracking-tight 
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow"
    >
      Queremos fazer parte da sua história!
    </Title>

    {/* Contact line: wrap on mobile */}
    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-base md:text-lg">
      <span className="flex items-center gap-2 font-semibold">
        <Phone size={20} /> 934 418 862 - 910 726 266
      </span>
      <span className="flex items-center gap-2 font-semibold">
        <Mail size={20} /> geral@print7.pt
      </span>
      <span className="flex items-center gap-2 font-semibold">
        <MapPin size={20} /> Seg. a Sex.: 9h-13h | 14h-18h
      </span>
    </div>
  </Container>
</section>

        {/* Contact Form Section */}
        <Container size="md" className="py-16">
          <Title order={2} className="text-2xl font-semibold mb-6 text-center">
            Entre em contacto connosco
          </Title>
          <Paper shadow="sm" radius="md" p="md">
            <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-4">
              <Group grow>
                <TextInput
                  label="Nome"
                  placeholder="Digite o seu nome"
                  required
                  {...form.getInputProps('nome')}
                />
                <TextInput
                  label="Sobrenome"
                  placeholder="Digite o seu sobrenome"
                  required
                  {...form.getInputProps('sobrenome')}
                />
              </Group>
              <TextInput
                label="Email"
                placeholder="seu@email.com"
                type="email"
                required
                {...form.getInputProps('email')}
              />
              <TextInput
                label="Telefone"
                placeholder="+351 xxx xxx xxx"
                type="tel"
                required
                {...form.getInputProps('telefone')}
              />
              <Textarea
                label="Mensagem"
                placeholder="Como podemos ajudar?"
                minRows={4}
                {...form.getInputProps('mensagem')}
              />
              <Group position="center" mt="md">
                <Button size="md" type="submit">
                  Enviar Mensagem
                </Button>
              </Group>
            </form>
          </Paper>
        </Container>

        {/* Google Maps Section */}
        <Container size="lg" className="py-16 text-center">
          <Title order={3} className="text-xl font-semibold mb-2">
            Nossa Localização
          </Title>
          <div className="mb-4 font-medium">
            Plus Code: G3HW+5W Setúbal, Portugal
          </div>
          <Paper shadow="sm" radius="lg" className="overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=G3HW%2B5W%20Set%C3%BAbal%2C%20Portugal&z=17&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Paper>
        </Container>
      </main>
  );
}
