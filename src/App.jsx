/* eslint-disable no-nested-ternary */
import './App.css';
import { useGetRandomPokemonGen1Query } from './api/poke.api';
import ProfileCard from './features/ProfileCard/ProfileCard';

function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetRandomPokemonGen1Query();
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  // render UI based on data and loading state

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <ProfileCard pokemonData={data} />
      ) : null}
    </div>
  );
}

export default App;
