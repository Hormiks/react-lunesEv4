import React from 'react';
import PokemonFetcher from './PokemonFetcher.jsx';
import './App.css';
function App(){
  return(
    <>
    <h1 className='titulo'>¡Conoce a tus Pokemones!</h1>
    <PokemonFetcher />
    </>
  );
}

export default App;