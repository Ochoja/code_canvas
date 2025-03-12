import { useEffect, useState } from 'react';
import { getFullPokedexNumber } from '../utils';
import { TypeCard } from './TypeCard';

export function PokeCard(props) {
  const { selectedPokemon } = props;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!localStorage) return;

    let cache = {};
    if (localStorage.getItem('pokedex')) {
      cache = JSON.parse(localStorage.getItem('pokedex'));
    }

    if (selectedPokemon in cache) {
      setData(cache[selectedPokemon]);
      return;
    }

    async function fetchPokemonData() {
      setLoading(true);
      try {
        const baseUrl = 'https://pokeapi.co/api/v2/';
        const suffix = `pokemon/${selectedPokemon + 1}`;
        const finalUrl = baseUrl + suffix;
        const res = await fetch(finalUrl);
        const pokemonData = await res.json();

        setData(pokemonData);
        console.log(pokemonData);
        cache[selectedPokemon] = pokemonData;
        localStorage.setItem('pokedex', JSON.stringify(cache));
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemonData();
  }, [selectedPokemon]);
  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <div className='poke-card'>
          <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
          <h2>{data.name}</h2>

          <div className='type-container'>
            {data.types.map((type, typeIndex) => {
              return <TypeCard key={typeIndex} type={type} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
