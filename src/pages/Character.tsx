import React, { useEffect, useRef, useState } from 'react';
import WelcomeHeading from '../components/WelcomeHeading';
import HeroGroup from '../components/HeroGroup';
import { IPerson } from '../models/IPerson';
import { useFetching } from '../hooks/useFetch';
import SwService from '../API/swService';
import { getPageCount } from '../utils/calculatePagesCount';
import { useObserver } from '../hooks/useObserver';
import Skeleton from '../components/Skeleton';

const Character = () => {
  const lastElement = useRef(null);
  const [peoples, setPeoples] = useState<IPerson[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const [fetchPeoples, isLoading, fetchError] = useFetching(async () => {
    const response = await SwService.getPeoples(page);
    setPeoples([...peoples, ...response.data.results]);
    setTotalPages(
      getPageCount(response.data.count, response.data.results.length)
    );
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useObserver(lastElement, page < totalPages, isLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    fetchPeoples();
  }, [page]);

  return (
    <>
      <WelcomeHeading />
      <div className='mx-auto max-w-screen-desktop px-2 pb-5 pt-12 text-white sm:px-10'>
        <h2 className='mb-12 inline-flex rounded-r-[30px]  bg-primary-action pb-2 pl-10 pr-4 pt-1 text-5xl font-bold text-primary-layout'>
          Heroes
        </h2>
        <HeroGroup heroes={peoples} />
      </div>
      {!isLoading && totalPages > page + 1 && (
        <div ref={lastElement} className='h-32 bg-inherit' />
      )}
      {isLoading && <Skeleton />}
    </>
  );
};

export default Character;
