import { InvoiceGenerator } from 'components/Invoices/InvoiceGenerator/InvoiceGenerator';
import { InvoicesSectionHeader } from 'components/Invoices/InvoicesSectionHeader';
import { Stack } from '@mantine/core';
import { InvoiceSectionDown } from '@/src/components/Invoices/InvoiceSectionDown';

export default function HomePage() {
  return (
    <>
      <Stack align="center">
        <InvoicesSectionHeader />
        <InvoiceGenerator />
        <InvoiceSectionDown />
      </Stack>
    </>
  );
}
