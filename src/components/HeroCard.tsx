import React, { FC } from 'react';
import Button from './UI/Button';
import {
  BDateIcon,
  eyeIcon,
  hairIcon,
  heightIcon,
  skinIcon,
  vehicleIcon,
  weightIcon,
} from './UI/icons';
import Badge from './UI/Badge';
import { IPerson } from '../models/IPerson';
import { Link } from 'react-router-dom';

export interface HeroCardProps {
  character: IPerson;
  popular?: boolean;
}
const HeroCard: FC<HeroCardProps> = ({ character, popular }) => {
  if (popular) {
    return (
      <div className='bg-gradit relative flex w-full flex-col gap-5 rounded-[30px] bg-gradient-to-tr from-primary-layout from-55% to-primary-yellow p-5 sm:bg-gradient-to-r sm:from-30%'>
        <div className='z-10 flex gap-3'>
          <div
            className={`h-9 w-9 rounded-full ${
              character.gender === 'male'
                ? 'bg-gender-male'
                : character.gender === 'female'
                ? 'bg-gender-female'
                : 'bg-gender-undefined'
            }`}
          />
          <h4 className=' text-2xl font-bold '>{character.name}</h4>
        </div>
        <div className='z-10 flex flex-wrap gap-3'>
          <Badge icon={heightIcon()}>{character.height}</Badge>
          <Badge icon={eyeIcon()}>{character.eye_color}</Badge>
          <Badge icon={BDateIcon()}>{character.birth_year}</Badge>
        </div>
        <div className='z-10 flex flex-wrap gap-3'>
          <Badge icon={weightIcon()}>{character.mass}</Badge>
          <Badge icon={skinIcon()}>{character.skin_color}</Badge>
          <Badge icon={hairIcon()}>{character.hair_color}</Badge>
        </div>
        <div className='absolute -right-12 top-16 z-0 flex rotate-90 select-none items-center gap-2  text-xl font-bold  text-primary-layout sm:bottom-0 sm:right-0 sm:top-auto sm:rotate-0 sm:px-9 sm:py-5 sm:text-5xl'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='48'
            height='48'
            className='text-green-500'
            viewBox='0 0 48 48'
            fill='none'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M36.9454 6.37969C42.8927 10.5077 46.7999 17.3902 46.7999 25.159C46.7999 37.7398 36.5568 48 24.0011 48C11.4431 48 1.19995 37.7398 1.19995 25.159C1.19995 17.083 5.42231 9.96476 11.7701 5.90156C9.66125 11.6832 6.20896 15.3503 7.77043 21.5039C9.08784 26.6975 13.2178 30.1389 16.9591 29.1645C20.1745 28.3269 22.0843 24.4923 21.7217 20.1363C21.3639 15.8427 18.7907 13.4855 15.5896 10.5023L17.9235 7.39688L22.4752 12.1418L20.4707 5.66836L24.257 0L27.7306 5.57578L25.6242 12.4805L30.1735 7.48828L32.3132 10.3559C29.875 13.4111 26.7852 15.2859 26.7213 19.5891C26.6715 22.9611 28.1477 28.3413 31.3038 29.1645C35.0451 30.1389 39.1727 26.6975 40.4925 21.5039C41.8715 16.0703 38.6277 11.2853 36.9454 6.37969Z'
              fill='#161B47'
            />
          </svg>
          POPULAR
        </div>

        <Link
          to={
            character.url.match(/\/people\/\d+/)
              ? character.url.match(/\/people\/\d+/)![0]
              : '#'
          }
        >
          <Button
            startIcon={vehicleIcon(24, 24, 'currentColor')}
            className='
        z-40
        drop-shadow-md
        sm:absolute
        sm:right-0
        sm:top-0
        sm:rounded-none
        sm:rounded-bl-[30px]
        sm:rounded-tr-[30px]'
          >
            vehicles
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className='relative flex  w-full grow-0 flex-col gap-5 rounded-[30px] bg-primary-layout p-5 md:flex-[49%]'>
      <div className='flex gap-3'>
        <div
          className={`h-9 w-9 rounded-full ${
            character.gender === 'male'
              ? 'bg-gender-male'
              : character.gender === 'female'
              ? 'bg-gender-female'
              : 'bg-gender-undefined'
          }`}
        />
        <h4 className=' text-2xl font-bold '>{character.name}</h4>
      </div>
      <div className='z-10 flex flex-wrap gap-3'>
        <Badge icon={heightIcon()}>{character.height}</Badge>
        <Badge icon={eyeIcon()}>{character.eye_color}</Badge>
        <Badge icon={BDateIcon()}>{character.birth_year}</Badge>
      </div>
      <div className='z-10 flex flex-wrap gap-3'>
        <Badge icon={weightIcon()}>{character.mass}</Badge>
        <Badge icon={skinIcon()}>{character.skin_color}</Badge>
        <Badge icon={hairIcon()}>{character.hair_color}</Badge>
      </div>

      <Link
        to={
          character.url.match(/\/people\/\d+/)
            ? character.url.match(/\/people\/\d+/)![0]
            : '#'
        }
      >
        <Button
          startIcon={vehicleIcon(24, 24, 'currentColor')}
          className='
        drop-shadow-md
        sm:absolute
        sm:right-0
        sm:top-0

        sm:rounded-none
        sm:rounded-bl-[30px]
        sm:rounded-tr-[30px]'
        >
          vehicles
        </Button>
      </Link>
    </div>
  );
};

export default HeroCard;
