import { Card, Group, Image, Stack, Text } from '@mantine/core';

export function InvoiceCards() {
  return (
    <Group justify="center" h={458}>
      <Card h={380} w={249} p={0}>
        <Card.Section>
          <Image src="InvoicesImages/InvoiceChart.webp" height={150} width={150} fit="contain" />
        </Card.Section>
        <Stack gap={5}>
          <Text fw={400} fz={20} pt={10}>
            Invoices
          </Text>
          <Text size="lg" c="deepBlue.9">
            Create, send, and monitor professional invoices within the HubSpot invoice integration.
            Consolidate invoicing, payments, and quoting in one place.
          </Text>
        </Stack>
      </Card>
      <Card h={380} w={249} p={0}>
        <Card.Section>
          <Image src="InvoicesImages/PaymentsChart.webp" height={150} width={150} fit="contain" />
        </Card.Section>
        <Stack gap={5}>
          <Text fw={400} fz={20} pt={10}>
            Payments
          </Text>
          <Text size="lg" c="deepBlue.9">
            Expedite payments by easily generating and distributing payment links. Share links
            across customer touchpoints like emails, websites, forms, and meetings.
          </Text>
        </Stack>
      </Card>
      <Card h={380} w={249} p={0}>
        <Card.Section>
          <Image src="InvoicesImages/QuotesChart.webp" height={150} width={150} fit="contain" />
        </Card.Section>
        <Stack gap={5}>
          <Text fw={400} fz={20} pt={10}>
            Quotes
          </Text>
          <Text size="lg" c="deepBlue.9">
            Generate branded sales quotes, collect payments and electronic signatures within quotes,
            and automatically populate quotes with information from HubSpot’s Smart CRM
          </Text>
        </Stack>
      </Card>
      <Card h={380} w={249} p={0}>
        <Card.Section>
          <Image src="InvoicesImages/RevenueChart.webp" height={150} width={150} fit="contain" />
        </Card.Section>
        <Stack gap={5}>
          <Text fw={400} fz={20} pt={10}>
            Revenue Reporting
          </Text>
          <Text size="lg" c="deepBlue.9">
            Analyze total gross revenue, top products, and top-performing sales reps with
            comprehensive revenue reporting. Customize your reports for additional insights
          </Text>
        </Stack>
      </Card>
    </Group>
  );
}
