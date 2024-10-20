'use client';

import { IconChevronRight } from '@tabler/icons-react';
import { Accordion, Box, Button, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';
import { InvoiceCards } from '@/src/components/Invoices/InvoiceCards';
import classes from './InvoiceSecction.module.css';

export function InvoiceSectionDown() {
  const groceries = [
    {
      value: 'Apples',
      description:
        'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    },
    {
      value: 'Bananas',
      description:
        'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
    },
    {
      value: 'Broccoli',
      description:
        'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
    },
  ];

  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>
        <Text size="xl" fw={700}>
          {item.value}
        </Text>
      </Accordion.Control>
      <Accordion.Panel>
        <Text fz="17">{item.description}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <Box bg="deepBlue.10" w="100%">
        <Stack w="100%" align="center" gap={10} h="100%" justify="center">
          <Text lineClamp={3} fz="35" fw={600} c="deepBlue.0" maw={720} pt={40} ta="center">
            How to Use HubSpot&#39;s Free Online Invoice Generator
          </Text>
          <Text fz="20" fw={400} c="deepBlue.0" maw={720}>
            <p>
              Use this free online invoice generator to create your very own professional invoice.
              Once you&#39;re done, upload the invoice to HubSpot to effectively manage it and
              distribute it to customers.
            </p>

            <p>
              1. Create your professional invoice by filling out each field in the template above.
            </p>
            <p>2. Download the PDF or upload your invoice to HubSpot&#39;s revenue tools.</p>
            <p>
              3. Manage this invoice and any future invoices with the HubSpot invoice integration.
              You can send it to customers, process payments, and analyze your revenue – all within
              the CRM.
            </p>

            <p>
              Make full use of HubSpot&#39;s Commerce Hub to streamline your business billing.
              Unlock other easy-to-use features such as quotes, billing automation, and revenue
              reporting, and more.
            </p>
          </Text>
          <Image w={710} h={400} src="InvoicesImages/LapopImage.webp" pb={30} />
        </Stack>
      </Box>
      <Box>
        <Stack w="100%" align="center" gap={10} h="100%" justify="center">
          <Group justify="center" gap={60} pb={24} mt={20} mr={144} ml={144}>
            <Image w={380} h={400} src="InvoicesImages/InvoiceExample.webp" />
            <Box>
              <Text fz="30" fw={600} c="deepBlue.9" maw={520}>
                A custom invoice for your business
              </Text>
              <Text fz="18" fw={400} c="deepBlue.9" maw={520}>
                <p>
                  Customize your invoice by adding your business details, logo, and changing the
                  colors to fit your business branding. Stand out from the competition with tailored
                  invoices that reflect your professional identity.
                </p>
                <p>
                  Whether you&#39;re a small business owner or an enterprise, Invoice Generator
                  allows you to effortlessly generate professional invoices to impress your clients.
                  Focus on what you do best and leave the invoicing design to us.
                </p>
              </Text>
            </Box>
          </Group>
          <Button mb={32} fw={500} radius="md" size="xl" color="mainOrange.4">
            Create my invoice
          </Button>
        </Stack>
      </Box>
      <Box w="100%">
        <Flex bg="deepBlue.10" w="100%" justify="center" p={24}>
          <Text fz="35" fw={700} c="deepBlue.0">
            Manage your invoice with Commerce Hub
          </Text>
        </Flex>
        <Flex w="100%" justify="center" align="center" p={24} bg="deepBlue.1">
          <Text fz="18" fw={400} c="deepBlue.9">
            Explore additional features for managing your invoice in HubSpot:
          </Text>
        </Flex>
      </Box>
      <InvoiceCards />
      <Flex bg="deepBlue.10" w="100%" justify="center" align="center" p={24}>
        <Button c="black" fw={500} radius="md" size="xl" color="deepBlue.0">
          Create my invoice
        </Button>
      </Flex>
      <Box w="100%" maw="1080">
        <Title ta="center" className={classes.title}>
          Invoice Generator FAQ
        </Title>
        <Accordion
          variant="separated"
          radius="md"
          w="100%"
          chevronPosition="left"
          defaultValue="Apples"
          chevron={<IconChevronRight />}
          classNames={{
            control: `${classes.invoiceQAccordionTitle} ${classes.invoiceQAccordion}`,
            content: classes.invoiceQAccordionOpened,
            chevron: classes.invoiceQAccordionChevron,
          }}
        >
          {items}
        </Accordion>
      </Box>
    </>
  );
}
