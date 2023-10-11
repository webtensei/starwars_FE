import React from 'react';

const Skeleton = () => {
  return (
    <div className='mx-auto flex h-96 w-full max-w-screen-desktop flex-col gap-5 bg-inherit'>
      <div className='flex animate-pulse gap-5 px-2 sm:px-10'>
        <div className='h-52 w-full rounded-[30px] bg-primary-layout' />
        <div className='h-52 w-full rounded-[30px] bg-primary-layout' />
      </div>
    </div>
  );
};

export default Skeleton;
