import React from "react";

export default function PokemonDetails({ type,  height, weight, baseExp  }) {
  return (
    <div className="container">
      <div  className="row" >
          <div className="col-6 col-sm-3" > 
      <span class="badge badge-success">Type:{type}</span>
      <span class="badge badge-success">BaseExp:{baseExp}</span>
          </div>
          <div className="col-6 col-sm-3">  
      <span class="badge badge-success">Height:{height}</span>
      <span class="badge badge-success">Weight:{weight}</span>
          </div>
      </div>
    </div>
  );
}
