import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetch';
import SwService from '../API/swService';
import { IPerson } from '../models/IPerson';
import { IVehicle } from '../models/IVehicle';
import { BeatLoader } from 'react-spinners';
import { motion } from 'framer-motion';
const Personal = () => {
  const { id } = useParams();
  const [person, setPerson] = useState<IPerson>();
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  const [fetchPerson, isLoading, fetchError] = useFetching(async () => {
    const response = await SwService.getPerson(Number(id));
    setPerson(response.data);
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    void fetchPerson();
  }, []);

  useEffect(() => {
    if (person && person.vehicles && person.vehicles.length > 0) {
      // Map through the person's vehicles and fetch data for each vehicle
      const fetchVehicleData = async () => {
        const vehicleData = await Promise.all(
          person.vehicles.map(async (vehicleUrl) => {
            const response = await SwService.getVehicleFromUrl(vehicleUrl);
            return response.data;
          })
        );

        setVehicles(vehicleData);
      };

      fetchVehicleData();
    }
  }, [person]);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <>
      <div className='mx-auto h-full max-w-screen-desktop px-2 pb-5 pt-12 text-white sm:px-10'>
        <div className='mt-32'></div>
        <div className='mb-12 flex h-[60px] flex-row'>
          <Link to='/'>
            <div className='flex h-full items-center justify-center border-r-2 border-primary-layout bg-primary-yellow px-2 text-center text-xl font-bold text-primary-layout transition'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
                />
              </svg>
              Back
            </div>
          </Link>
          <h2 className='z-40  h-full min-w-[128px]    rounded-r-[30px] bg-primary-yellow px-4 text-2xl font-bold text-primary-layout sm:text-5xl'>
            {person ? (
              person.name
            ) : (
              <div className='flex h-full items-center justify-center px-4 text-center'>
                <BeatLoader size={24} color='rgb(22,27,71)' />
              </div>
            )}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={person && { opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className='mb-12 inline-flex items-center items-baseline  gap-2 rounded-r-[30px] bg-primary-action pb-2 pl-10 pr-4 pt-1 text-5xl font-bold text-primary-layout'>
            <motion.svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              initial='hidden'
              animate='visible'
            >
              {vehicles.length ? (
                <>
                  <motion.line
                    x1='0'
                    y1='0'
                    x2='16'
                    y2='32'
                    strokeLinejoin='round'
                    stroke='#00cc88'
                    strokeWidth={3}
                    custom={3}
                    variants={draw}
                  />
                  <motion.line
                    x1='16'
                    strokeLinejoin='round'
                    y1='32'
                    x2='32'
                    y2='0'
                    strokeWidth={3}
                    stroke='#00cc88'
                    custom={3.5}
                    variants={draw}
                  />
                </>
              ) : (
                <>
                  <motion.line
                    x1='0'
                    y1='0'
                    x2='32'
                    y2='32'
                    stroke='#ff0055'
                    strokeWidth={2}
                    custom={3}
                    variants={draw}
                  />
                  <motion.line
                    x1='32'
                    y1='0'
                    x2='0'
                    y2='32'
                    strokeWidth={2}
                    stroke='#ff0055'
                    custom={3.5}
                    variants={draw}
                  />
                </>
              )}
            </motion.svg>
            Vehicles
          </h2>
          <div className='flex  w-full flex-col gap-5'>
            {vehicles &&
              vehicles.map((vehicle) => {
                return (
                  <div
                    key={vehicle.url}
                    className='w-full rounded-[30px] bg-primary-layout p-5'
                  >
                    <h4 className='text-2xl font-bold sm:text-5xl'>
                      {vehicle.name}
                    </h4>
                    <pre className='overflow-y-auto'>
                      <code>{JSON.stringify(vehicle, undefined, 2)}</code>
                    </pre>
                  </div>
                );
              })}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Personal;
