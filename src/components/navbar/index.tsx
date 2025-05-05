'use client'

import React from 'react'

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar as HNavbar,
  NavbarBrand,
  NavbarContent
} from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useSnapshot } from 'valtio'

import { logo } from '@/src/assets/images'
import { userStateStore } from '@/src/stores/user-state.store'

import Button from '../button'
import Icon from '../icon'
import Text from '../text'
import CartBadge from './components/cart-badge'

const Navbar = () => {
  const { t } = useTranslation('common')

  const { state } = useSnapshot(userStateStore)

  return (
    <HNavbar
      shouldHideOnScroll
      classNames={{
        base: 'container-wide container',
        wrapper: '!p-0 !m-0 max-w-[auto]',
        content: '!p-0 !m-0 max-w-[auto]'
      }}
      height='90px'
    >
      <NavbarBrand>
        <Link href='/'>
          <Image
            src={logo}
            alt='An awesome company brand logo'
            height={26}
            priority
            quality={55}
          />
        </Link>
      </NavbarBrand>
      <NavbarContent as='div' className='flex gap-1' justify='end'>
        <Button
          aria-label='Wishlist'
          as={Link}
          href='#'
          isIconOnly
          radius='full'
          variant='light'
          className='reset-padding'
          label={<Icon icon='icon-heart' />}
        />
        <CartBadge />
        <Dropdown placement='bottom-end'>
          <DropdownTrigger>
            <Button
              isIconOnly
              radius='full'
              variant='light'
              className='reset-padding'
              label={
                <Avatar
                  showFallback
                  src={state?.image || ''}
                  className='h-5 w-5'
                />
              }
            />
          </DropdownTrigger>
          <DropdownMenu aria-label='Profile Actions' variant='flat'>
            <DropdownItem key='profile' className='h-14 gap-2'>
              <Text tag='span' variant='body2'>
                {t('sign_in_as')}
              </Text>
              <Text tag='span' variant='body2' weight='semibold'>
                {state?.email}
              </Text>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </HNavbar>
  )
}

export default Navbar
