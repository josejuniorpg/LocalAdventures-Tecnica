import Link from 'next/link';
import { IconChevronRight } from '@tabler/icons-react';
import { Accordion, Box, List, Text, Title } from '@mantine/core';
import classes from './InvoiceSecction.module.css';

export function FAQSection() {
  return (
    <Box w="100%" maw="1080" mb={20}>
      <Title ta="center" className={classes.title} mb={30}>
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
        <Accordion.Item key="What is an invoice" value="What is an invoice">
          <Accordion.Control>
            <Text size="xl" fw={700}>
              What is an invoice
            </Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text fz="18" c="deepBlue.9" pl={20}>
              <p>An invoice is a billing document issued by a seller to a customer.</p>
              <p>The document typically:</p>
              <List withPadding spacing={12} fz="18">
                <List.Item>Details the contact and billing information</List.Item>
                <List.Item>Quantifies an itemized list of goods or services sold</List.Item>
                <List.Item>Provides a clear total for the purchase</List.Item>
                <List.Item>Defines any discounts or specific payment terms</List.Item>
                <List.Item>Contains a unique invoice number and date</List.Item>
              </List>
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key="What is an invoice number" value="What is an invoice number">
          <Accordion.Control>
            <Text size="xl" fw={700}>
              What is an invoice number
            </Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text fz="18" c="deepBlue.9" pl={20}>
              <p>
                An invoice number is a unique number assigned to each new invoice you create. These
                numbers are then used to organize and track each invoice sent.
              </p>
              <p>
                Your invoice numbers should be assigned in sequential order. For example, your very
                first invoice might be “invoice no. 1,” followed by “invoice no. 2,” and so on.
                Invoice numbers aren’t specific to one customer, so you should keep a running total
                across all of the invoices you send.
              </p>
              <p>
                That being said, some businesses choose to adapt their numbering system to meet
                their individual needs. This might mean that you choose to incorporate the date into
                your invoice number for filing purposes, like this: 20172711-001.
              </p>
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key="How do I send an invoice?" value="How do I send an invoice?">
          <Accordion.Control>
            <Text size="xl" fw={700}>
              How do I send an invoice?
            </Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text fz="18" c="deepBlue.9" pl={20}>
              <p>
                Now that you&#39;ve generated your invoice, you have a couple options when it comes
                to sending it off to the customer: 1. Send the invoice electronically via email,
                website, or HubSpot. 2. Send the invoice via postal mail.
              </p>
              <p>
                For many businesses, electronic is the preferred sending method, as it allows you to
                deliver invoices to a customer in real time. Use HubSpot&#39;s Commerce Hub to
                quickly and seamlessly send invoices to your saved customers.
              </p>
              <p>
                When sending an invoice by postal mail, make sure that you consider the time it will
                take for your invoice to arrive. While this tends to be the slower of the two
                options, many businesses still send invoices via postal mail to meet the needs and
                demands of their specific audiences.
              </p>
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item
          key="Where can I find sample invoices for inspiration?"
          value="Where can I find sample invoices for inspiration?"
        >
          <Accordion.Control>
            <Text size="xl" fw={700}>
              Where can I find sample invoices for inspiration?
            </Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text fz="18" c="deepBlue.9" pl={20}>
              <p>
                Having a well-designed, professional invoice can make a big difference in the eyes
                of your customer and help you get paid on time.
              </p>
              <p>
                If you need help organizing all of the must-have information that comes on an
                invoice, use our tool above or download HubSpot&#39;s{' '}
                <Link href="/">free invoice templates!</Link>
              </p>
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key=" What makes an invoice legal?" value=" What makes an invoice legal?">
          <Accordion.Control>
            <Text size="xl" fw={700}>
              What makes an invoice legal?
            </Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text fz="18" c="deepBlue.9" pl={20}>
              <p>
                An invoice is a legal document and must include certain key information in order to
                be considered legal. Generally, invoices should include the customer’s name, address
                and contact details; an invoice number; a description of the goods and/or services
                sold; the quantity of each item; the total amount due indicated in both numerical
                and written form; any applicable tax rates applied to the sale; and the date the
                invoice was issued. Depending on the jurisdiction, additional information such as
                terms of payment or a unique customer identifier may also be required for an invoice
                to be considered legal.
              </p>
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item
          key="Can I issue an invoice without VAT?"
          value="Can I issue an invoice without VAT?"
        >
          <Accordion.Control>
            <Text size="xl" fw={700}>
              Can I issue an invoice without VAT?
            </Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text fz="18" c="deepBlue.9" pl={20}>
              <p>
                In certain circumstances, it is possible to issue an invoice without VAT. This would
                generally be the case where the goods or services being invoiced are exempt from
                VAT, such as educational services or food products in some countries. Additionally,
                businesses which have an annual turnover below a certain threshold (which varies by
                country) may not be required to charge VAT on their invoices. It is important to
                check local laws and regulations when issuing an invoice so as to ensure that you
                are compliant with local tax requirements.
              </p>
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Text pt={20} c="deepBlue.9" fz={13} mt={50}>
        Disclaimer: These FAQs include some information on legal issues surrounding invoicing, but
        legal information is not the same as legal advice -- applying the law to a specific
        circumstance. We’ve conducted research to better ensure that our information is accurate and
        useful, but we insist that you talk to a lawyer if you want professional assurance that our
        information, and your interpretation of it, is accurate. In a nutshell, you may not rely on
        this information as legal advice, nor as a recommendation or endorsement of any particular
        legal understanding, and you should instead see this info as for entertainment purposes
        only.
      </Text>
    </Box>
  );
}
