import { FooterLinks } from 'components/Footer/FooterLinks';
import { InvoiceGenerator } from 'components/Invoices/InvoiceGenerator/InvoiceGenerator';
import { InvoiceSectionDown } from 'components/Invoices/InvoiceSectionDown';
import { InvoicesSectionHeader } from 'components/Invoices/InvoicesSectionHeader';
import { Stack } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Stack align="center">
        <InvoicesSectionHeader />
        <InvoiceGenerator />
        <InvoiceSectionDown />
        <FooterLinks />
      </Stack>
    </>
  );
}
