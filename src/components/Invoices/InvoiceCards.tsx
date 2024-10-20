import invoiceCardData from 'temp/data-InvoiceCards-component.json'; // Asegúrate de que la ruta es correcta
import { Card, Group, Image, Stack, Text } from '@mantine/core';

export function InvoiceCards() {
  return (
    <Group justify="center" h={458}>
      {invoiceCardData.invoiceCards.map((card, index) => (
        <Card key={index} h={380} w={249} p={0}>
          <Card.Section>
            <Image src={card.imageSrc} height={150} width={150} fit="contain" />
          </Card.Section>
          <Stack gap={5}>
            <Text fw={400} fz={20} pt={10}>
              {card.title}
            </Text>
            <Text size="lg" c="deepBlue.9">
              {card.description}
            </Text>
          </Stack>
        </Card>
      ))}
    </Group>
  );
}
