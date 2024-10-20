import { Box, Divider, Flex, Group, Stack, Text } from '@mantine/core';
import classes from '@/src/components/Invoices/InvoiceGenerator/InvoiceGenerator.module.css';
import { TextInputInvoice } from '@/src/components/Invoices/InvoiceGenerator/TextInputInvoice';

export function InvoiceTotalFields() {
  return (
    <Flex justify="space-between" align="flex-start" w="100%">
      <Box className={classes.notesBox} w="48%">
        <Stack gap={0}>
          <Text ta="center" c="deepBlue.9" size="xl">
            Notes
          </Text>
          <TextInputInvoice fw={500} w={'100%'} size="45" placeholder="Any Additional Comments" />
        </Stack>
      </Box>

      <Stack gap={0} w="48%">
        <Group justify="space-between" w="100%">
          <Text size="lg" fw={500} c="deepBlue.9">
            Subtotal
          </Text>
          <Text size="lg" fw={700} c="deepBlue.9">
            0.00
          </Text>
        </Group>
        <Group gap={5} justify="space-between" w="100%">
          <Text size="lg" fw={500} c="deepBlue.9">
            Tax
          </Text>
          <TextInputInvoice isBold isTextRight placeholder="0 %" size="38" w="78" />
        </Group>
        <Group gap={5} justify="space-between" w="100%">
          <Text size="lg" fw={500} c="deepBlue.9">
            Discount
          </Text>
          <TextInputInvoice isBold isTextRight placeholder="0 %" size="38" w="78" />
        </Group>
        <Divider my="xs" size="sm" w="100%" color="deepBlue.9" />
        <Group justify="space-between" w="100%">
          <Text size="lg" fw={500} c="deepBlue.9">
            Total
          </Text>
          <Text size="lg" fw={700} c="deepBlue.9">
            0.00
          </Text>
        </Group>
      </Stack>
    </Flex>
  );
}
