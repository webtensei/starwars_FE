import React, { useEffect, useState } from 'react';
import Button from './UI/Button';
import { filmIcon } from './UI/icons';
import getRandomHeading from '../utils/randomHeading';
import { IHeading } from '../mock/headingData';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
const WelcomeHeading = () => {
  const [heading, setHeading] = useState<IHeading>();
  const count = useMotionValue(1900);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  useEffect(() => {
    setHeading(getRandomHeading());
  }, []);
  useEffect(() => {
    if (heading?.date) {
      const controls = animate(count, Number(heading?.date), {
        duration: 1,
        bounce: 30,
      });
      return controls.stop;
    }
  }, [heading]);
  return (
    <div className=' relative z-40 flex min-h-[668px] bg-primary-layout '>
      <div className='relative mx-auto mt-32 flex w-full  max-w-screen-desktop flex-col px-10 pt-12 lg:flex-row'>
        <div className='mx-auto lg:mx-0 lg:w-4/6'>
          <div className='flex max-w-[740px] flex-col gap-6'>
            <motion.p
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className=' text-justify text-3xl font-bold italic text-white/70 sm:text-5xl'
            >
              {`"${heading?.quote}"`}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className='text-4xl font-semibold text-white sm:text-end sm:text-6xl'
            >
              {heading?.character}
            </motion.p>
            <div className='relative flex flex-col items-center sm:flex-row sm:justify-between'>
              <motion.p
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className='z-40 w-full text-left text-2xl leading-normal text-white sm:w-auto'
              >
                {heading?.film}
              </motion.p>
              <div className='flex w-full justify-end'>
                <motion.a
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 }}
                  href={heading?.film_link}
                  target='_blank'
                  className='z-50 sm:w-auto'
                >
                  <Button
                    className='rounded-none rounded-br-[30px] rounded-tl-[30px] drop-shadow-md'
                    startIcon={filmIcon(24, 24, 'currentColor')}
                  >
                    Go to film
                  </Button>
                </motion.a>
              </div>
              <motion.p
                initial={{ scale: 0.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.3 }}
                className='absolute -bottom-32 left-0 select-none	text-6xl	font-black tracking-[22px] text-white/30 sm:bottom-2 sm:text-9xl'
              >
                {rounded}
              </motion.p>
            </div>
          </div>
        </div>

        <div className='hidden lg:flex lg:w-2/6'>
          <motion.img
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            alt='Hero image'
            className=' absolute bottom-0 right-10 max-h-[500px]'
            src={heading?.image}
          />
        </div>
      </div>
      <div className='absolute bottom-0 h-[4px] w-full bg-primary-background' />
    </div>
  );
};

export default WelcomeHeading;
