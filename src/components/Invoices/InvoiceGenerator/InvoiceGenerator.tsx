'use client'
import { DropZoneInvoice } from '@/src/components/Invoices/InvoiceGenerator/DropzoneInvoice';
import { TextInputInvoice } from 'components/Invoices/InvoiceGenerator/TextInputInvoice';
import { Button, Card, Group, Stack, Text, Title } from '@mantine/core';
import classes from './InvoiceGenerator.module.css';

export function InvoiceGenerator() {
  return (
    <Card padding="24" withBorder className={classes.invoiceCard}>
      <Stack gap={0}>
        <Group justify="space-between">
          <Stack gap={0}>
            <Title mt={'16'} mb={'16'}>
              Invoice
            </Title>
            <Stack pb={'20'}>
              <TextInputInvoice placeholder={'Your Company*'} isBold={true} size={'26'} />
              <Group>
                <TextInputInvoice placeholder={'First Name*'} />
                <TextInputInvoice placeholder={'Last Name*'} />
              </Group>
              <TextInputInvoice placeholder={'Company Website*'} />
              <TextInputInvoice placeholder={'Company Address'} />
              <TextInputInvoice placeholder={'City, State ZIP'} />
              <TextInputInvoice placeholder={'Country'} />
              <TextInputInvoice placeholder={'Phone No*'} />
              <TextInputInvoice placeholder={'Email Address*'} />
            </Stack>

            <Stack pb={'20'}>
              <TextInputInvoice placeholder={'Clients Company*'} isBold={true} size={'26'} />
              <Group>
                <TextInputInvoice placeholder={'First Name*'} />
                <TextInputInvoice placeholder={'Last Name*'} />
              </Group>
              <TextInputInvoice placeholder={'Clients Address'} />
              <TextInputInvoice placeholder={'City, State ZIP'} />
              <TextInputInvoice placeholder={'Country'} />
              <TextInputInvoice placeholder={'Clients Email*'} />
            </Stack>
          </Stack>

          <Stack justify="space-between">
            {/* todo: Add the image selector*/}

            <DropZoneInvoice />

            <Stack>
              <Group>
                <Text>dssasadsad</Text>
                <Text>dssasadsad</Text>
              </Group>
              <Group>
                <Text>dssasadsad</Text>
                <Text>dssasadsad</Text>
              </Group>
              <Group>
                <Text>dssasadsad</Text>
                <Text>dssasadsad</Text>
              </Group>
            </Stack>
          </Stack>
        </Group>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
        </Group>

        <Button color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Stack>
    </Card>
  );
}
