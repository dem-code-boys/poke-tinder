import Screen from './Top/Screen/Screen';
import Stat from './Bottom/Stat/Stat';
import './ProfileCard.scss';
import PokemonType from './components/PokemonType/PokemonType';

/* eslint-disable react/prop-types */
function ProfileCard({ pokemonData }) {
  return (
    <div className="container">
      <Screen
        img={pokemonData.sprites.front_shiny}
        name={pokemonData.name}
        id={pokemonData.id}
      />
      <PokemonType pokemonData={pokemonData} />
      <Stat pokemonData={pokemonData} />

    </div>
  );
}

export default ProfileCard;
