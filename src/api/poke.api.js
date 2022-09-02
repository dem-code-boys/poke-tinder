import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonById: builder.query({
      query: (id) => `pokemon/${id}`,
    }),
    getRandomPokemonGen1: builder.query({
      query: () => `pokemon/${random(1, 150)}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByIdQuery, useGetRandomPokemonGen1Query } = pokemonApi;
