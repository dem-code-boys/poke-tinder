/* eslint-disable react/prop-types */
function ProfileCard({ pokemonData }) {
  const getPokemonStats = () => {
    const { stats } = pokemonData;
    return stats.map((s) => (
      <div>
        <h2>{s.stat.name}</h2>
        <h3>{s.base_stat}</h3>
      </div>
    ));
  };

  const getPokemonTypes = () => {
    const { types } = pokemonData;
    return types.map((t) => (
      <div>
        <p>{t.type.name}</p>
      </div>
    ));
  };

  return (
    <div>
      <span>{`No. ${pokemonData.id}`}</span>
      <h1>{pokemonData.name}</h1>
      <img src={pokemonData.sprites.front_shiny} alt={pokemonData.name} />
      {getPokemonStats()}
      {getPokemonTypes()}
    </div>
  );
}

export default ProfileCard;
