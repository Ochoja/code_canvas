import { first151Pokemon, getFullPokedexNumber } from '../utils';

export function SideNav(props) {
  const { selectedPokemon, setSelectedPokemon } = props;

  return (
    <nav>
      <div className={'header'}>
        <h1 className={'text-gradient'}>Pokedex</h1>
      </div>
      <input type='text' />

      {first151Pokemon.map((pokemon, index) => {
        return (
          <button key={index} className={'nav-card'}>
            <p>{getFullPokedexNumber(index)}</p>
            {pokemon}
          </button>
        );
      })}
    </nav>
  );
}
