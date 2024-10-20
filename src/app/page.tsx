import Footer from '@/src/components/Footer';
import Invoices from '@/src/components/Invoices';

import { Stack } from '@mantine/core';
import Navbar from 'components/Navbar';

export default function HomePage() {
  return (
    <>
      <Stack align="center" gap={0}>
        <Navbar/>
        <Invoices/>
        <Footer />
      </Stack>
    </>
  );
}
