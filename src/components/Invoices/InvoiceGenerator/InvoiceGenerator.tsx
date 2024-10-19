'use client';

import { ClientsCompanyFields } from 'components/Invoices/InvoiceGenerator/ClientsCompanyFields';
import { DropZoneInvoice } from 'components/Invoices/InvoiceGenerator/DropzoneInvoice';
import { TextInputInvoice } from 'components/Invoices/InvoiceGenerator/TextInputInvoice';
import { YourCompanyFields } from 'components/Invoices/InvoiceGenerator/YourCompanyFields';
import useInvoiceForm from 'forms/useInvoiceForm';
import { Box, Button, Card, Group, Stack, Text, Title } from '@mantine/core';
import { InvoiceDateFields } from '@/src/components/Invoices/InvoiceGenerator/InvoiceDateFields';
import classes from './InvoiceGenerator.module.css';

export function InvoiceGenerator() {
  const form = useInvoiceForm();

  const handleSubmit = (values: ReturnType<typeof useInvoiceForm>['values']) => {
    console.log('Form Submitted:', values);
  };

  return (
    <Card padding="24" withBorder className={classes.invoiceCard}>
      <Stack gap={0}>
        <Group align="stretch" justify="space-between" w="100%">
          <Stack gap={0} style={{ flexGrow: 1 }}>
            <Title mt="16" mb="16">
              Invoice
            </Title>
            <YourCompanyFields form={form} />
            <ClientsCompanyFields form={form} />
          </Stack>

          <Stack align="flex-end" justify="space-between" style={{ flexGrow: 1 }}>
            <DropZoneInvoice />
            {Object.keys(form.errors).length > 0 && (
              <Box className={classes.boxError}>
                <ul className={classes.listError}>
                  {Object.entries(form.errors).map(([key, error]) => (
                    <li key={key}>{error}</li>
                  ))}
                </ul>
              </Box>
            )}
            <InvoiceDateFields form={form} />
          </Stack>
        </Group>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
        </Group>

        <Button
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={(event) => {
            event.preventDefault();
            form.onSubmit(handleSubmit)();
          }}
        >
          Book classic tour now
        </Button>
      </Stack>
    </Card>
  );
}
