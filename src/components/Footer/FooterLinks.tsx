'use client';

import React from 'react';
import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
} from '@tabler/icons-react';
import featureData from 'temp/data-footerLinks-component.json';
import { ActionIcon, Box, Divider, Group, Image, List, Stack, Text } from '@mantine/core';
import classes from './FooterLinks.module.css';

interface FeatureData {
  footerLinks: {
    title: string;
    links: {
      label: string;
      href: string;
    }[];
  }[];
}

export function FooterLinks() {
  const data: FeatureData = featureData;

  return (
    <footer className={classes.footer}>
      <Stack align="center">
        <Group mt={50} justify="center" w="100%" align="stretch" gap={50}>
          <Box>
            <Text c="deepBlue.0" fz={15} fw={800} mb={10}>
              Popular Features
            </Text>
            <List
              styles={{
                item: {
                  listStyleType: 'none',
                  padding: 5,
                },
              }}
            >
              {data.footerLinks[0].links.map((link) => (
                <List.Item key={link.href}>
                  <Link href={link.href} className={classes.linkFooter}>
                    {link.label}
                  </Link>
                </List.Item>
              ))}
            </List>
          </Box>

          <Box pt={40}>
            <List
              styles={{
                item: {
                  listStyleType: 'none',
                  padding: 0,
                },
              }}
            >
              {data.footerLinks[1].links.map((link) => (
                <List.Item key={link.href}>
                  <Link href={link.href} className={classes.linkFooter}>
                    {link.label}
                  </Link>
                </List.Item>
              ))}
            </List>
          </Box>

          <Divider orientation="vertical" />

          <Box>
            <List
              styles={{
                item: {
                  listStyleType: 'none',
                  padding: 5,
                },
              }}
            >
              <Text c="deepBlue.0" fz={15} fw={800} mb={10}>
                Free Tools
              </Text>
              {data.footerLinks[2].links.map((link) => (
                <List.Item key={link.href}>
                  <Link href={link.href} className={classes.linkFooter}>
                    {link.label}
                  </Link>
                </List.Item>
              ))}
            </List>
          </Box>
          <Box>
            <List
              styles={{
                item: {
                  listStyleType: 'none',
                  padding: 5,
                },
              }}
            >
              <Text c="deepBlue.0" fz={15} fw={800} mb={10}>
                Company
              </Text>
              {data.footerLinks[3].links.map((link) => (
                <List.Item key={link.href}>
                  <Link href={link.href} className={classes.linkFooter}>
                    {link.label}
                  </Link>
                </List.Item>
              ))}
            </List>
          </Box>

          <Stack justify="space-between">
            <List
              styles={{
                item: {
                  listStyleType: 'none',
                  padding: 5,
                },
              }}
            >
              <Text c="deepBlue.0" fz={15} fw={800} mb={10}>
                Customers
              </Text>
              {data.footerLinks[4].links.map((link) => (
                <List.Item key={link.href}>
                  <Link href={link.href} className={classes.linkFooter}>
                    {link.label}
                  </Link>
                </List.Item>
              ))}
            </List>

            <List
              styles={{
                item: {
                  listStyleType: 'none',
                  padding: 5,
                },
              }}
            >
              <Text c="deepBlue.0" fz={15} fw={800} mb={10}>
                Partners
              </Text>
              {data.footerLinks[5].links.map((link) => (
                <List.Item key={link.href}>
                  <Link href={link.href} className={classes.linkFooter}>
                    {link.label}
                  </Link>
                </List.Item>
              ))}
            </List>
          </Stack>
        </Group>
        <Divider
          mt={50}
          ml={150}
          mr={150}
          label={
            <>
              <Group>
                <IconBrandInstagram size={35} />
                <IconBrandFacebook size={35} />
                <IconBrandYoutube size={35} />
                <IconBrandX size={35} />
                <IconBrandLinkedin size={35} />
                <IconBrandTiktok size={35} />
              </Group>
            </>
          }
        />
        <Stack align="center">
          <ActionIcon variant="transparent" w={100} aria-label="Home Page">
            <Image rel="shortcut icon" src="/InvoicesSVG/Wordmark-White.svg" />
          </ActionIcon>
          <Text fw={700} fz={14} c="deepBlue.2">
            Copyright © 2024 HubSpot, Inc.
          </Text>
          <Group>
            <Link href="/" className={classes.linkFooterWithDecoration}>
              Legal Stuff
            </Link>
            <Divider my={5} orientation="vertical" />
            <Link href="/" className={classes.linkFooterWithDecoration}>
              Privacy Policy
            </Link>
            <Divider my={5} orientation="vertical" />
            <Link href="/" className={classes.linkFooterWithDecoration}>
              Security
            </Link>
            <Divider my={5} orientation="vertical" />
            <Link href="/" className={classes.linkFooterWithDecoration}>
              Website Accessibility
            </Link>
            <Divider my={5} orientation="vertical" />
            <Link href="/" className={classes.linkFooterWithDecoration}>
              Manage Cookies
            </Link>
            <Divider my={5} orientation="vertical" />
          </Group>
        </Stack>
      </Stack>
    </footer>
  );
}
