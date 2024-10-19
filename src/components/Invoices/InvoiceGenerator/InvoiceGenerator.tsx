'use client';

import { useState } from 'react';
import { DropZoneInvoice } from 'components/Invoices/InvoiceGenerator/DropzoneInvoice';
import { TextInputInvoice } from 'components/Invoices/InvoiceGenerator/TextInputInvoice';
import { Box, Button, Card, Group, Stack, Text, Title } from '@mantine/core';
import { theme } from '@/theme';
import classes from './InvoiceGenerator.module.css';

export function InvoiceGenerator() {
  const [errors, setErrors] = useState(['eror', 'error2']);

  return (
    <Card padding="24" withBorder className={classes.invoiceCard}>
      <Stack gap={0}>
        <Group align="stretch" justify="space-between" w={'100%'}>
          <Stack
            gap={0}
            style={{
              flexGrow: 1,
            }}
          >
            <Title mt={'16'} mb={'16'}>
              Invoice
            </Title>
            <Stack pb={'20'}>
              <TextInputInvoice
                required={true}
                placeholder={'Your Company*'}
                isBold={true}
                size={'26'}
              />
              <Group>
                <TextInputInvoice required={true} placeholder={'First Name*'} />
                <TextInputInvoice required={true} placeholder={'Last Name*'} />
              </Group>
              <TextInputInvoice required={true} placeholder={'Company Website*'} />
              <TextInputInvoice placeholder={'Company Address'} />
              <TextInputInvoice placeholder={'City, State ZIP'} />
              <TextInputInvoice placeholder={'Country'} />
              <TextInputInvoice required={true} placeholder={'Phone No*'} />
              <TextInputInvoice required={true} placeholder={'Email Address*'} />
            </Stack>

            <Stack pb={'20'}>
              <TextInputInvoice placeholder={'Clients Company*'} isBold={true} size={'26'} />
              <Group>
                <TextInputInvoice required={true} placeholder={'First Name*'} />
                <TextInputInvoice required={true} placeholder={'Last Name*'} />
              </Group>
              <TextInputInvoice placeholder={'Clients Address'} />
              <TextInputInvoice placeholder={'City, State ZIP'} />
              <TextInputInvoice placeholder={'Country'} />
              <TextInputInvoice required={true} placeholder={'Clients Email*'} />
            </Stack>
          </Stack>

          <Stack
            align={'flex-end'}
            justify="space-between"
            style={{
              flexGrow: 1,
            }}
          >
            <DropZoneInvoice />

            {errors.length > 0 && (
              <Box className={classes.boxError}>
                <ul className={classes.listError}>
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </Box>
            )}


            {/* todo: put the actual date dinamicaly */}
            <Stack align={'flex-end'} gap={0}>
              <Group>
                <Text fw={500} fz={16} c={'deepBlue.9'}>
                  Invoice No:
                </Text>
                <TextInputInvoice w={105} isTextRight size="28" placeholder={'###'} isBold />
              </Group>
              <Group>
                <Text fw={500} fz={16} c={'deepBlue.9'}>
                  Invoice Date:
                </Text>
                <TextInputInvoice w={105} isTextRight size="28" placeholder={'10/8/2024'} isBold />
              </Group>
              <Group>
                <Text fw={500} fz={16} c={'deepBlue.9'}>
                  Due Date:
                </Text>
                <TextInputInvoice w={105} isTextRight size="28" placeholder={'10/8/2024'} isBold />
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
