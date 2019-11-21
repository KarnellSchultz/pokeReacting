import React from "react";

export default function PokemonDetails({ type,  height, weight, baseExp  }) {
  return (
    <div>
      <div>
        <h5>
          {type} {height} / {weight} {baseExp}
        </h5>
      </div>
    </div>
  );
}
