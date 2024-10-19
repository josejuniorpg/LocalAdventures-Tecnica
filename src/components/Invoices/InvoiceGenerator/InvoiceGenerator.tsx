'use client';

import { useState } from 'react';
import { ClientsCompanyFields } from 'components/Invoices/InvoiceGenerator/ClientsCompanyFields';
import { DropZoneInvoice } from 'components/Invoices/InvoiceGenerator/DropzoneInvoice';
import { InvoiceDateFields } from 'components/Invoices/InvoiceGenerator/InvoiceDateFields';
import { NumberInputInvoice } from 'components/Invoices/InvoiceGenerator/NumberInputInvoice';
import { TextInputInvoice } from 'components/Invoices/InvoiceGenerator/TextInputInvoice';
import { YourCompanyFields } from 'components/Invoices/InvoiceGenerator/YourCompanyFields';
import useInvoiceForm from 'forms/useInvoiceForm';
import { Box, Button, Card, Group, Stack, Table, Title } from '@mantine/core';
import classes from './InvoiceGenerator.module.css';

export function InvoiceGenerator() {
  const form = useInvoiceForm();
  const [numberRow, setNumberRow] = useState('00');

  const addNumberRow = () => {
    setNumberRow((prevNumberRow) => {
      const newNumber = (parseInt(prevNumberRow, 10) + 1).toString().padStart(2, '0');
      return newNumber;
    });
  };

  const handleSubmit = (values: ReturnType<typeof useInvoiceForm>['values']) => {
    console.log('Form Submitted:', values);
  };

  const elements = [
    {
      position: 1,
      name: 'Hydrogen',
      symbol: 'H',
      mass: 1.008,
    },
    {
      position: 2,
      name: 'Helium',
      symbol: 'He',
      mass: 4.0026,
    },
    {
      position: 3,
      name: 'Helium',
      symbol: 'He',
      mass: 4.0026,
    },
  ];

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Table.Td style={{ flex: 1 }}>
        <TextInputInvoice placeholder={numberRow} w="100%" />
      </Table.Td>
      <Table.Td style={{ flex: 3 }}>
        <TextInputInvoice placeholder="Item description" w="100%" />
      </Table.Td>
      <Table.Td style={{ flex: 1 }}>
        <NumberInputInvoice placeholder="1" width="100%" />
      </Table.Td>
      <Table.Td style={{ flex: 1 }}>
        <NumberInputInvoice placeholder="$0.00" width="100%" />
      </Table.Td>
    </Table.Tr>
  ));

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

        <Box pt="3rem" pb="3rem">
          <Table
            striped
            stripedColor="deepBlue.0"
            borderColor="deepBlue.9"
            withRowBorders
            verticalSpacing="12"
            p="5"
            className={classes.invoiceTable}
          >
            <Table.Thead>
              <Table.Tr
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Table.Th style={{ flex: 1 }}>ID</Table.Th>
                <Table.Th style={{ flex: 3 }}>Description</Table.Th>
                <Table.Th style={{ flex: 1 }}>Quantity</Table.Th>
                <Table.Th ta="center" style={{ flex: 1 }}>
                  Price
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Box>

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
