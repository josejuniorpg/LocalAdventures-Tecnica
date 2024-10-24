import { Box, Group, Stack, Text } from '@mantine/core';
import { TwoCubesC } from '@/src/components/utils/TwoCubesC';
import classes from './Invoices.module.css';

export function InvoicesSectionHeader() {
  return (
    <Box className={classes.invoiceSectionHeader} bg="deepBlue.10">
      <Group className={classes.invoiceContainer}>
        <Box ml={70}>
          <TwoCubesC />
        </Box>
        <Stack w="100%" maw={950} align="center" gap={10} h="100%" justify="center">
          <Text lineClamp={3} fz="55" fw={600} c="deepBlue.0" maw={720} ta="center">
            Invoice Generator
          </Text>
          <Text lineClamp={3} fz="20" fw={400} c="deepBlue.0" maw={720} ta="center">
            Tired of manually creating invoices? Say hello to HubSpot&#39;s free online Invoice
            Generator! Make professional invoices that showcase your brand and impress your
            customers. Then, manage your invoice with the HubSpot invoice integration.
          </Text>
        </Stack>
      </Group>
    </Box>
  );
}
