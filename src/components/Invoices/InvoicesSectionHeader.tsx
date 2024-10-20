import { TwoCubes } from 'components/utils/TwoCubesC/TwoCubes';
import { Box, Group, Stack, Text } from '@mantine/core';

export function InvoicesSectionHeader() {
  return (
    <Box h={384} w="100%" bg="deepBlue.10" mb={96}>
      <Group h="100%" align="flex-start" gap={0} w="100%">
        <Box ml={70}>
          <TwoCubes />
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
