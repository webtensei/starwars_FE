'use client';
import React, { forwardRef } from 'react';

import { twMerge } from 'tailwind-merge';
// eslint-disable-next-line import/named
import { HTMLMotionProps, motion } from 'framer-motion';
interface ButtonProps extends HTMLMotionProps<'button'> {
  startIcon?: React.ReactElement;
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, startIcon, disabled, type = 'button', ...props },
    ref
  ) => {
    return (
      <motion.button
        whileTap={{ scale: 0.93 }}
        type={type}
        className={twMerge(
          `
           inline-flex
           gap-x-[10px]
           rounded-[10px]
           bg-primary-action
           p-[15px]
           pr-[20px]
           tracking-tighter  
           text-primary-layout
           transition-all
           hover:bg-opacity-90
           hover:text-primary-yellow`,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {startIcon}
        {children}
      </motion.button>
    );
  }
);
Button.displayName = 'Button';

export default Button;
