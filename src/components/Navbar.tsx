import React from 'react';
import Button from './UI/Button';
import { linkIcon } from './UI/icons';

const Navbar = () => {
  return (
    <nav className='fixed z-50 flex h-24 w-full items-center   border-b-2  border-primary-yellow  backdrop-blur sm:h-32'>
      <div className='mx-auto flex w-full max-w-screen-desktop flex-row items-center justify-center px-10 sm:justify-between'>
        <img alt='Logo' src='/images/Logo.svg' className='h-24' />
        <div className='hidden gap-5 sm:flex'>
          <a
            href='https://www.figma.com/file/GbKEJh8a6g0V4ErCRzTdM9/Untitled?type=design&node-id=12-1318&mode=design&t=TrXgQMqvjbXT0w5r-0'
            target='_blank'
          >
            <Button
              className='drop-shadow-md'
              startIcon={linkIcon(24, 24, 'currentColor')}
            >
              design file
            </Button>
          </a>
          <a href='https://imagekeeper.webtensei.ru/' target='_blank'>
            <Button
              className='drop-shadow-md'
              startIcon={linkIcon(24, 24, 'currentColor')}
            >
              another project
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
