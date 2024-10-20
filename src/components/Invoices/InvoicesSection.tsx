import { Box, Group, Stack, Text } from '@mantine/core';
import { TwoCubes } from '@/src/components/utils/TwoCubesC/TwoCubes';
import classes from './InvoiceSecction.module.css';

export const InvoicesSection = () => (
  <Box h={384} w="100%" bg="deepBlue.9" mb={96} pl={40} pr={40}>
    <Group h="100%" align="flex-start">
      <TwoCubes />
      <Stack w="100%" maw={1080} align="center" gap={10} h="100%" justify="center">
        <Text lineClamp={3} fz="55" fw={600} c="deepBlue.0" maw={760} ta="center">
          Invoice Generator
        </Text>
        <Text lineClamp={3} size="xl" fw={400} c="deepBlue.0" maw={760} ta="center">
          Tired of manually creating invoices? Say hello to HubSpots free online Invoice Generator!
          Make professional invoices that showcase your brand and impress your customers. Then,
          manage your invoice with the HubSpot invoice integration.
        </Text>
      </Stack>
    </Group>
  </Box>
);
