import { useEffect, useState } from 'react';
import { getFullPokedexNumber } from '../utils';
import { TypeCard } from './TypeCard';

export function PokeCard(props) {
  const { selectedPokemon } = props;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { name, sprites, stats, types, moves, height, abilities } = data || {};

  const imgList = Object.keys(sprites || {}).filter((val) => {
    if (!sprites[val]) return false;
    if (['versions', 'other'].includes(val)) return false;
    return true;
  });

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

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='poke-card'>
        <div>
          <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
          <h2>{name}</h2>
        </div>
        <div className='type-container'>
          {data?.types.map((type, typeIndex) => {
            return <TypeCard key={typeIndex} type={type.type.name} />;
          })}
        </div>
        <img
          className='default-img'
          src={'/pokemon/' + getFullPokedexNumber(selectedPokemon) + '.png'}
          alt=''
        />
        <div className='img-container'>
          {imgList.map((spriteUrl, spriteIndex) => {
            return (
              <img
                key={spriteIndex}
                src={sprites[spriteUrl]}
                alt='Some sprite'
              />
            );
          })}
        </div>
        <h3>Stats</h3>
        <div className='stats-card'>
          {stats?.map((statObj, statIndex) => {
            const { stat, base_stat } = statObj;
            return (
              <div className='stat-item' key={statIndex}>
                <p>{stat?.name.replaceAll('-', ' ')}</p>
                <h4>{base_stat}</h4>
              </div>
            );
          })}
        </div>
        <h3>Moves</h3>
        <div className='pokemon-move-grid'>
          {moves.map((moveObj, moveIndex) => {
            return (
              <button
                key={moveIndex}
                className='button-card pokemon-move'
                onClick={() => {}}>
                <p>{moveObj.move?.name.replaceAll('-', ' ')}</p>
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
