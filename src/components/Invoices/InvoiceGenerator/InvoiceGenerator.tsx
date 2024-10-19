'use client';

import { DropZoneInvoice } from 'components/Invoices/InvoiceGenerator/DropzoneInvoice';
import { TextInputInvoice } from 'components/Invoices/InvoiceGenerator/TextInputInvoice';
import useInvoiceForm from 'forms/useInvoiceForm';
import { Box, Button, Card, Group, Stack, Text, Title } from '@mantine/core';
import { YourCompanyFields } from '@/src/components/Invoices/InvoiceGenerator/YourCompanyFields';
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

            <Stack pb="20">
              <TextInputInvoice
                placeholder="Clients Company"
                isBold
                size="26"
                {...form.getInputProps('clientsCompany')}
              />
              <Group>
                <TextInputInvoice
                  placeholder="First Name"
                  {...form.getInputProps('clientsFirstName')}
                />
                <TextInputInvoice
                  placeholder="Last Name"
                  {...form.getInputProps('clientsLastName')}
                />
              </Group>
              <TextInputInvoice
                placeholder="Clients Address"
                {...form.getInputProps('clientsAddress')}
              />
              <TextInputInvoice
                placeholder="Clients City, State ZIP"
                {...form.getInputProps('clientsCityStateZIP')}
              />
              <TextInputInvoice
                placeholder="Clients Country"
                {...form.getInputProps('clientsCountry')}
              />
              <TextInputInvoice
                placeholder="Clients Email"
                {...form.getInputProps('clientsEmail')}
              />
            </Stack>
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
            <Stack align="flex-end" gap={0}>
              <Group>
                <Text fw={500} fz={16} c="deepBlue.9">
                  Invoice No:
                </Text>
                <TextInputInvoice
                  w={105}
                  isTextRight
                  size="28"
                  placeholder="###"
                  isBold
                  {...form.getInputProps('invoiceNo')}
                />
              </Group>
              <Group>
                <Text fw={500} fz={16} c="deepBlue.9">
                  Invoice Date:
                </Text>
                <TextInputInvoice
                  w={105}
                  isTextRight
                  size="28"
                  placeholder="10/8/2024"
                  isBold
                  {...form.getInputProps('invoiceDate')}
                />
              </Group>
              <Group>
                <Text fw={500} fz={16} c="deepBlue.9">
                  Due Date:
                </Text>
                <TextInputInvoice
                  w={105}
                  isTextRight
                  size="28"
                  placeholder="10/8/2024"
                  isBold
                  error=""
                  {...form.getInputProps('dueDate')}
                />
              </Group>
            </Stack>
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
