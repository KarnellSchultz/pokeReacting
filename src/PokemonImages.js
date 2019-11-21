import React from "react";

export default function PokemonImages({ frontImage, backImage }) {
  return (
    <div>
      <img src={frontImage} alt="pokemons front imgae"></img>
      <img src={backImage} alt="pokemons front imgae"></img>
    </div>
  );
}
