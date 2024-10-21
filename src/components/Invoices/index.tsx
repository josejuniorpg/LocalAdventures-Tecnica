import InvoiceGenerator from '@/src/components/Invoices/InvoiceGenerator';
import { InvoiceSectionDown } from '@/src/components/Invoices/InvoiceSectionDown';
import { InvoicesSectionHeader } from '@/src/components/Invoices/InvoicesSectionHeader';

export default function Invoices() {
  return (
    <>
      <InvoicesSectionHeader />
      <InvoiceGenerator />
      <InvoiceSectionDown />
    </>
  );
}
