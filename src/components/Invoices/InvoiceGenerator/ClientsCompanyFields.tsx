import { InvoiceFormValues } from 'forms/useInvoiceForm';
import { Group, Stack } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { TextInputInvoice } from '@/src/components/Invoices/InvoiceGenerator/TextInputInvoice';
import classes from './InvoiceGenerator.module.css';

export function ClientsCompanyFields({ form }: { form: UseFormReturnType<InvoiceFormValues> }) {
  return (
    <Stack pb="20" className={classes.gapZero}>
      <TextInputInvoice
        placeholder="Clients Company"
        isBold
        size="26"
        {...form.getInputProps('clientsCompany')}
      />
      <Group>
        <TextInputInvoice placeholder="First Name" {...form.getInputProps('clientsFirstName')} />
        <TextInputInvoice placeholder="Last Name" {...form.getInputProps('clientsLastName')} />
      </Group>
      <TextInputInvoice placeholder="Clients Address" {...form.getInputProps('clientsAddress')} />
      <TextInputInvoice
        placeholder="Clients City, State ZIP"
        {...form.getInputProps('clientsCityStateZIP')}
      />
      <TextInputInvoice placeholder="Clients Country" {...form.getInputProps('clientsCountry')} />
      <TextInputInvoice placeholder="Clients Email" {...form.getInputProps('clientsEmail')} />
    </Stack>
  );
}
