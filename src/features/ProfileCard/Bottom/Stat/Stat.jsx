/* eslint-disable react/prop-types */
import './Stat.scss';

function Stat({ pokemonData }) {
  const getPokemonStats = () => {
    const { stats } = pokemonData;
    return stats.map((s) => (
      <div className="statDetails">
        <p className="statName">{s.stat.name}</p>
        <p className="statValue">{s.base_stat}</p>
      </div>
    ));
  };
  return (
    <div>{getPokemonStats()}</div>
  );
}

export default Stat;
