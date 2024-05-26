'use client';

import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { ModeToggle } from './ModeToggle';
import Image from 'next/image';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navLinks, socialLinks } from '@/constants';
import { Separator } from '../ui/separator';
import { useState } from 'react';

const Header = () => {
  return (
    <header className='fixed flex items-center justify-between w-full h-16 border-b border-gray-200 dark:border-gray-900 p-5 backdrop-blur'>
      <Link href='/' className='hidden md:block'>
        <span className='text-lg font-bold tracking-wider'>JLEVENEUR</span>
      </Link>
      <div className='md:hidden'>
        <Sheet>
          <SheetTrigger>
            <Image
              src='/assets/icons/menu.svg'
              alt='Menu'
              width={20}
              height={20}
              className='dark:invert'
              priority
            />
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetHeader>
              <SheetTitle className='text-left'>JLEVENEUR</SheetTitle>
              <SheetDescription className='text-left'>
                Full Stack Developer
              </SheetDescription>
            </SheetHeader>
            <Separator className='my-4' />
            <nav className='flex flex-col gap-2'>
              {navLinks.map((link) => (
                <SheetClose key={link.label} asChild>
                  <Link
                    href={link.route}
                    className='flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg'
                  >
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={20}
                      height={20}
                      className='dark:invert'
                    />
                    <span className='text-lg font-bold'>{link.label}</span>
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <nav className='hidden md:flex items-center gap-4 lg:gap-6'>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.route}
            className='transition-colors hover:text-foreground/80 text-foreground/60'
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <nav className='flex items-center gap-2'>
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            className={buttonVariants({ variant: 'ghost', size: 'icon' })}
            href={link.url}
            target='_blank'
          >
            <Image
              src={link.icon}
              alt={link.label}
              width={16}
              height={16}
              className='dark:invert'
            />
          </Link>
        ))}
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;
