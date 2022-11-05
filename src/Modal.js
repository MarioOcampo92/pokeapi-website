import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

const Modal = ({closeModal}) => {

    const getRndInteger = () => {
      let num = Math.floor(Math.random() * (150 - 0)) + 0;
      return num;
    };
    
    const pokemon_id = getRndInteger();
  
    const [pokemon, setPokemon] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
  
    const initUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}`;



   function fetchPokemon(url){
     fetch(url)
     .then((res) => res.json())
     .then((data) => [setPokemon(data.sprites.other.dream_world.front_default), setPokemonName(data.name)])
  };


  // data.sprites.other.dream_world.front_default
  useEffect(() => {
    fetchPokemon(initUrl);
  }, []);

  return (
    <div className="modalBg">
      <div className="modalContainer">
        <div className="">
          <Pokemon poke={pokemon} pokeName={pokemonName} closeModal={closeModal}/>
        </div>
      </div>
    </div>
  );
};

export default Modal;
