import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IconChevronRight } from '@tabler/icons-react';
import { Accordion, Box, List, Text, Title } from '@mantine/core';
import classes from './Invoices.module.css';

interface FaqData {
  title: string;
  details: string[];
}

export function FAQSection() {
  const [faqData, setFaqData] = useState<FaqData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/api/invoices/FAQ');
      if (!response.ok) {
        throw new Error('Error fetching the faqDetailsData');
      }
      const data: FaqData[] = await response.json();
      setFaqData(data);
    };

    fetchData().catch((error) => {
      console.error(error); // Manejo simple de errores
      throw error;
    });
  }, []);

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
        {faqData.map((invoice, index) => (
          <Accordion.Item key={index} value={invoice.title}>
            <Accordion.Control>
              <Text size="xl" fw={700}>
                {invoice.title}
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Text fz="18" c="deepBlue.9" pl={20}>
                {index === 0 ? ( //IF for First element, because have a list.
                  <>
                    <p>{invoice.details[0]}</p>
                    <p>{invoice.details[1]}</p>
                    <List withPadding spacing={12} fz="18">
                      {invoice.details.slice(2).map((detail, i) => (
                        <List.Item key={i}>{detail}</List.Item>
                      ))}
                    </List>
                  </>
                ) : index === 3 ? ( // If for Third element, because have a link.
                  <p>
                    {invoice.details.slice(0, -1).join('. ')}
                    <Link href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                      {invoice.details[invoice.details.length - 1]}
                    </Link>
                  </p>
                ) : (
                  invoice.details.map((detail, i) => (
                    <p key={i}>{detail}</p> // The other elements, have normal paragraphs.
                  ))
                )}
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
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
