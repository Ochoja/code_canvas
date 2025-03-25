import { useEffect, useState } from 'react';
import { getFullPokedexNumber } from '../utils';
import { TypeCard } from './TypeCard';
import { Modal } from './Modal';

export function PokeCard({ selectedPokemon }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!localStorage) return;

    let cache = JSON.parse(localStorage.getItem('pokedex') || '{}');

    if (selectedPokemon in cache) {
      setData(cache[selectedPokemon]);
      return;
    }

    async function fetchPokemonData() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
        );
        const pokemonData = await res.json();
        setData(pokemonData);
        cache[selectedPokemon] = pokemonData;
        localStorage.setItem('pokedex', JSON.stringify(cache));
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemonData();
  }, [selectedPokemon]);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data found</div>;

  const { name, sprites, stats, types, moves } = data;
  const imgList = Object.keys(sprites || {}).filter(
    (val) => sprites[val] && !['versions', 'other'].includes(val)
  );

  return (
    <div className='poke-card'>
      <Modal handleCloseModal={() => {}}>
        <div>
          <h6>Name</h6>
          <h2>{name}</h2>
        </div>
        <div>
          <h6>Description</h6>
          <p>Actual</p>
        </div>
      </Modal>

      <div>
        <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
        <h2>{name}</h2>
      </div>

      <div className='type-container'>
        {types?.map((type, index) => (
          <TypeCard key={index} type={type.type.name} />
        ))}
      </div>

      <img
        className='default-img'
        src={sprites?.front_default || '/placeholder.png'}
        alt={name}
      />

      <div className='img-container'>
        {imgList.map((spriteUrl, index) =>
          sprites && sprites[spriteUrl] ? (
            <img key={index} src={sprites[spriteUrl]} alt='Sprite' />
          ) : null
        )}
      </div>

      <h3>Stats</h3>
      <div className='stats-card'>
        {stats?.map((statObj, index) => (
          <div className='stat-item' key={index}>
            <p>{statObj.stat.name.replaceAll('-', ' ')}</p>
            <h4>{statObj.base_stat}</h4>
          </div>
        ))}
      </div>

      <h3>Moves</h3>
      <div className='pokemon-move-grid'>
        {moves.map((moveObj, index) => (
          <button
            key={index}
            className='button-card pokemon-move'
            onClick={() => {}}>
            <p>{moveObj.move.name.replaceAll('-', ' ')}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
