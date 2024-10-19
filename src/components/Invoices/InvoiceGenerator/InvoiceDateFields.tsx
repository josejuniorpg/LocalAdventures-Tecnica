import React from 'react';
import { InvoiceFormValues } from 'forms/useInvoiceForm';
import { Group, Stack, Text } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { TextInputInvoice } from './TextInputInvoice';

export function InvoiceDateFields({ form }: { form: UseFormReturnType<InvoiceFormValues> }) {
  return (
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
  );
}
