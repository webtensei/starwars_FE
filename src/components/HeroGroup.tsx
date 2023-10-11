import React from 'react';
import HeroCard from './HeroCard';
import { IPerson } from '../models/IPerson';

const HeroGroup = ({ heroes }: { heroes: IPerson[] }) => {
  if (!heroes.length) {
    return <div></div>;
  }
  return (
    <div className='flex flex-row flex-wrap gap-5'>
      {heroes.map((character) => {
        return (
          <HeroCard
            key={character.url}
            popular={character.films.length > 5}
            character={character}
          />
        );
      })}
    </div>
  );
};

export default HeroGroup;
