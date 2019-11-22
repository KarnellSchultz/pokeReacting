import React from "react";

export default function PokemonDetails({ type,  height, weight, baseExp  }) {
  return (
    <div className="container">
      <div  className="row d-flex flex-column justify-content-center align-items-center" >
          <div className="col-6 col-sm-3" > 
      <span className="badge badge-info">Type:{type}</span>
      <span className="badge badge-success">BaseExp:{baseExp}</span>
          </div>
          <div className="col-6 col-sm-3">  
      <span className="badge badge-warning">Height:{height}</span>
      <span className="badge badge-dark">Weight:{weight}</span>
          </div>
      </div>
    </div>
  );
}
