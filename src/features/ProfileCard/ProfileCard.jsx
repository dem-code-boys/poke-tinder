/* eslint-disable import/order */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from 'react';
import Screen from './Top/Screen/Screen';
import Stat from './Bottom/Stat/Stat';
import './ProfileCard.scss';
import PokemonType from './components/PokemonType/PokemonType';

/* eslint-disable react/prop-types */
function ProfileCard({ pokemonData }) {
  const [isShown, setIsShown] = useState(false);
  const onClick = () => setIsShown(!isShown);
  return (
    <div className="container">
      <Screen
        img={pokemonData.sprites.front_shiny}
        name={pokemonData.name}
        id={pokemonData.id}
      />
      <PokemonType pokemonData={pokemonData} />
      <button onClick={onClick}>{isShown ? 'Hide' : 'Expand'}</button>
      {isShown
      && (
      <div>
        <Stat pokemonData={pokemonData} />
      </div>
      )}
    </div>
  );
}

export default ProfileCard;
