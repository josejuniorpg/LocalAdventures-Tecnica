'use client'

import {
  Group,
  Button, Switch,
} from '@mantine/core';
import {IconGlobe, IconMessages, IconUser, IconSearch} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import Image from 'next/image'
import CustomLink from "@/src/components/Navbar/CustomLink";

export default function Index() {

  return (
    <>
      <nav className={classes.navbarTop}>
        <Group className={classes.navbarTopContainer}>
          <Group justify="space-between" h="100%" w='100%'>
            <Group h="100%" gap={32} visibleFrom="sm">
              <CustomLink
                icon={<IconGlobe width={'18px'} height={'18px'}/>}
                text={'English'}
                isSecondary
                showDropdown
              />
              <CustomLink
                icon={<Switch style={{marginRight: '2px'} }/>}
                text={'High Contrast'}
                isSecondary
              />
              <CustomLink
                icon={<IconMessages width={'18px'} height={'18px'}/>}
                text={'Customer Support'}
                isSecondary
              />
              <CustomLink
                icon={<IconUser  width={'18px'} height={'18px'}/>}
                text={'Contact Sales'}
                isSecondary
              />
            </Group>

            <Group h="100%" gap={32} visibleFrom="sm">
              <IconSearch width={'18px'} height={'18px'}/>
              <CustomLink
                text={'Login'}
                isSecondary
              />
              <CustomLink
                text={'About'}
                isSecondary
                showDropdown
              />

            </Group>
          </Group>
        </Group>
      </nav>
      <nav className={classes.navbarBottom}>
        <Group justify="flex-start" className={classes.navbarBottomContainer}>
          <Group>
            <Image
              priority
              src={'/logo.svg'}
              height={32}
              width={120}
              alt="Logo"

              style={{marginRight: '1.5rem'}}
            />

            <Group h="100%" gap={32} visibleFrom="sm">
              <CustomLink text={'Products'} showDropdown/>
              <CustomLink text={'Solutions'} showDropdown/>
              <CustomLink text={'Pricing'}/>
              <CustomLink text={'Resources'} showDropdown/>
            </Group>
          </Group>

          <div style={{justifySelf: 'flex-end'}}>
            <Group visibleFrom="sm">
              <Button color="rgb(224, 72, 38)">Start free or get a demo</Button>
            </Group>
          </div>

        </Group>
      </nav>

    </>

  );
}