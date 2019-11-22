import React from "react";

export default function PokemonImages({ frontImage, backImage }) {
  return (
    <div>
       { frontImage ?
      <img src={frontImage} alt="pokemons front imgae"></img>
       : <span role="img">👷🏾‍♀️</span> }
       { backImage ? 
       <img src={backImage} alt="pokemons front imgae"></img>
       : null
    }
    </div>
  );
}
