import Navbar from 'components/Navbar';
import { Stack } from '@mantine/core';
import Footer from '@/src/components/Footer';
import Invoices from '@/src/components/Invoices';

export default function HomePage() {
  return (
    <>
      <Stack align="center" gap={0}>
        <Navbar />
        <Invoices />
        <Footer />
      </Stack>
    </>
  );
}
