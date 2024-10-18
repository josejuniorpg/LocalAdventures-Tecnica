import { Button, Card, Group, Stack, Text, TextInput } from '@mantine/core';
import classes from './InvoiceGenerator.module.css';

export function InvoiceGenerator() {
  return (
    <Card padding="24" withBorder className={classes.invoiceCard}>
      <Stack>
        <Group justify="space-between">
          <Stack>
            <h2>Invoice</h2>
            <Stack>
              <TextInput
                className={classes.invoiceTextInput}
                variant="unstyled"
                placeholder="Input placeholder"
              />
            </Stack>
            <Stack>
              <Text size="md" c="dimmed">
                saasdsadsadasasd
              </Text>
            </Stack>
          </Stack>

          <Stack>
            {/* todo: Add the image selector*/}
            <div>
              <Text fw={500}>Lado de imagenes.</Text>
            </div>

            <Stack>
              <Group>
                <Text>dssasadsad</Text>
                <Text>dssasadsad</Text>
              </Group>
              <Group>
                <Text>dssasadsad</Text>
                <Text>dssasadsad</Text>
              </Group>
              <Group>
                <Text>dssasadsad</Text>
                <Text>dssasadsad</Text>
              </Group>
            </Stack>
          </Stack>
        </Group>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
        </Group>

        <Button color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Stack>
    </Card>
  );
}
