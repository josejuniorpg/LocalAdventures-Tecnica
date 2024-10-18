import { ColorSchemeToggle } from 'components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from 'components/Welcome/Welcome';
import { InvoiceGenerator } from '@/src/components/Invoices/InvoiceGenerator/InvoiceGenerator';

export default function HomePage() {
  return (
    <>
      <InvoiceGenerator />
    </>
  );
}
