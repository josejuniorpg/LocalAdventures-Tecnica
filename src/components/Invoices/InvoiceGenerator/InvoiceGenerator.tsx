'use client';

import Link from 'next/link';
import { ClientsCompanyFields } from 'components/Invoices/InvoiceGenerator/ClientsCompanyFields';
import { DropZoneInvoice } from 'components/Invoices/InvoiceGenerator/DropzoneInvoice';
import { InvoiceDateFields } from 'components/Invoices/InvoiceGenerator/InvoiceDateFields';
import { InvoiceTotalFields } from 'components/Invoices/InvoiceGenerator/InvoiceTotalFields';
import { TableInvoice } from 'components/Invoices/InvoiceGenerator/TableInvoice';
import { YourCompanyFields } from 'components/Invoices/InvoiceGenerator/YourCompanyFields';
import useInvoiceForm from 'forms/useInvoiceForm';
import { Box, Button, Card, Group, Stack, Text, Title } from '@mantine/core';
import classes from './InvoiceGenerator.module.css';

export function InvoiceGenerator() {
  const form = useInvoiceForm();

  const handleSubmit = (values: ReturnType<typeof useInvoiceForm>['values']) => {
    console.log('Form Submitted:', values);
  };

  return (
    <Card
      padding="24"
      withBorder
      className={classes.invoiceCard}
      style={{
        position: 'relative',
        overflow: 'visible',
      }}
      mb={80}
    >
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
              <Box className={classes.boxError} w={'100%'}>
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
        <TableInvoice />
        <InvoiceTotalFields />
        <Group gap={5} w={'100%'} justify={'center'}>
          <Text>This invoice was created using the HubSpot</Text>
          <Link href="/">
            <Text fw={600} c={'blue'}>
              Invoice Template Generator
            </Text>
          </Link>
        </Group>
        {/* Todo: Improve the usage of absolute */}
        <Stack
          align={'flex-end'}
          style={{
            zIndex: 100,
            position: 'absolute',
            right: '0px',
            bottom: '-74px',
          }}
        >
          {Object.keys(form.errors).length > 0 && (
            <Box className={classes.boxError} w={'180'} mr={60}>
              <Text className={classes.listError}> Please fill out the required fields </Text>
            </Box>
          )}

          <Group>
            <Button
              color="mainOrange.4"
              radius="md"
              size={'xl'}
              onClick={(event) => {
                event.preventDefault();
                form.onSubmit(handleSubmit)();
              }}
            >
              Share your invoice using HubSpot
            </Button>
            <Button
              color="mainOrange.4"
              radius="md"
              size={'xl'}
              variant="outline"
              onClick={(event) => {
                event.preventDefault();
                form.onSubmit(handleSubmit)();
              }}
            >
              Downland Now
            </Button>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
}
