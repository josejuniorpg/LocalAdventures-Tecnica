import { InvoicesSection } from '@/src/components/Invoices/InvoicesSection';
import { InvoiceGenerator } from '@/src/components/Invoices/InvoiceGenerator/InvoiceGenerator';

export default function HomePage() {
  return (
    <>
      <InvoicesSection />
      <InvoiceGenerator />
    </>
  );
}
