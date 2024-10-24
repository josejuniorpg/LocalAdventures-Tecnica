'use client';

import { ReactElement } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Box, Group, rem } from '@mantine/core';
import classes from '@/src/components/Navbar/Navbar.module.css';

type CustomLinkProps = {
  href?: string; // Agregar la propiedad href
  icon?: ReactElement;
  text: string;
  showDropdown?: boolean;
  isSecondary?: boolean;
};

export default function CustomLink({
  href,
  icon,
  text,
  showDropdown,
  isSecondary,
}: CustomLinkProps) {
  return (
    <a href={href} className={`${classes.link} ${isSecondary && classes.secondaryLink}`}>
      <Group gap={1}>
        {icon}
        <Box component="span" mr={5}>
          {text}
        </Box>
        {showDropdown && (
          <IconChevronDown
            style={{
              width: rem(16),
              height: rem(16),
            }}
          />
        )}
      </Group>
    </a>
  );
}
