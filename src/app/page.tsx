import { InvoicesSection } from '@/src/components/Invoices/InvoicesSection';
import { InvoiceGenerator } from '@/src/components/Invoices/InvoiceGenerator/InvoiceGenerator';
import {Stack} from "@mantine/core";

export default function HomePage() {
  return (
    <>
        <Stack align={'center'}>
            <InvoicesSection />
            <InvoiceGenerator />
        </Stack>

    </>
  );
}
