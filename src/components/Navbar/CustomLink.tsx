'use client';
import classes from "@/src/components/Navbar/Navbar.module.css";
import {Box, Group, rem} from "@mantine/core";
import {IconChevronDown} from "@tabler/icons-react";
import {ReactElement} from "react";

type CustomLinkProps = {
  icon?: ReactElement,
  text: string,
  showDropdown?: boolean,
  isSecondary?: boolean
}

export default function CustomLink(
  {
    icon,
    text,
    showDropdown,
    isSecondary
  }: CustomLinkProps) {
  return (<a href="#" className={`${classes.link} ${isSecondary && classes.secondaryLink}`}>
    <Group gap={1}>
      {icon}
      <Box component="span" mr={5}>
        {text}
      </Box>
      {showDropdown && <IconChevronDown
          style={{width: rem(16), height: rem(16)}}
      />}
    </Group>
  </a>)
}