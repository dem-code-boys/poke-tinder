/* eslint-disable react/prop-types */
function PokemonType({ pokemonData }) {
  const getPokemonTypes = () => {
    const { types } = pokemonData;
    return types.map((t) => (
      <div>
        <p>{t.type.name}</p>
      </div>
    ));
  };
  return (
    <div>{getPokemonTypes()}</div>
  );
}

export default PokemonType;
