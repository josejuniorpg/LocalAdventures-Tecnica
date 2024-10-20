import { InvoicesSectionHeader } from '@/src/components/Invoices/InvoicesSectionHeader';
import { InvoiceGenerator } from '@/src/components/Invoices/InvoiceGenerator/InvoiceGenerator';
import {Stack} from "@mantine/core";

export default function HomePage() {
  return (
    <>
        <Stack align={'center'}>
            <InvoicesSectionHeader />
            <InvoiceGenerator />
        </Stack>

    </>
  );
}
