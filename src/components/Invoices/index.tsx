import InvoiceGenerator from '@/src/components/Invoices/InvoiceGenerator';
import { InvoicesSectionDown } from '@/src/components/Invoices/InvoicesSectionDown';
import { InvoicesSectionHeader } from '@/src/components/Invoices/InvoicesSectionHeader';

export default function Invoices() {
  return (
    <>
      <InvoicesSectionHeader />
      <InvoiceGenerator />
      <InvoicesSectionDown />
    </>
  );
}
