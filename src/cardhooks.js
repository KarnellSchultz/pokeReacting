import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import PokemonImages from "./PokemonImages";
import PokemonDetails from './PokemonDetails';
import PokemonInput from './PokemonInput';

export default function Cardhooks(props) {
  const [name, setName] = useState([]);
  const [ID, setID] = useState([]);
  const [currentPage, setCurrentPage] = useState(`https://pokeapi.co/api/v2/pokemon/1`);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [loading, setLoading] = useState(true);

  const [frontImage, setFrontImage] = useState("");
  const [backImage, setBackImage] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [baseExp, setBaseExp] = useState("");
  const [type, setType] = useState([]);


  useEffect(() => {
    setLoading(true);
    fetchData();

}, [currentPage]);

async function fetchData() {
    try {
        let response = await fetch(`${currentPage}`);
        let data = await response.json();
        console.log(data.name, data.id);
        setName(data.name);
        setID(data.id);
        setFrontImage(data.sprites.front_default);
        setBackImage(data.sprites.back_default);
        setHeight(data.height)
        setWeight(data.weight)
        setBaseExp(data.base_experience)
        setType([data.types[0].type.name])
        // setType(data.types[1].type.name)
        setNextPage(`https://pokeapi.co/api/v2/pokemon/${data.id + 1}`);
        setPrevPage(`https://pokeapi.co/api/v2/pokemon/${data.id - 1}`);
        document.title = `${ID} ${name}`;
        setLoading(false);
    } catch (error) {
        console.log(error)
        setCurrentPage(`https://pokeapi.co/api/v2/pokemon/${randomPoke()}`)
    }
}

  function gotoNextPage() {
    setCurrentPage(nextPage);
  }
  function gotoPrevPage() {
    setCurrentPage(prevPage);
  }
  function pokeInputHandler (event)  {
     setCurrentPage(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`);
   }
    
let randomPoke = (max = 900) => {
    console.log(max)
    return Math.floor(Math.random() * Math.floor(max));
}
  
  return (
    <>
    <div className="card d-flex flex-column bg-light justify-content-center align-items-center shadow p-3 mb-5  rounded"> 

      <h2>Pokemon React Pokedex</h2>
      {loading 
      ? ( <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>) 
      : (<h4>  
          <span className="badge badge-pill badge-info">{ID } </span>
          {name}
        </h4>
        )}
      <PokemonImages frontImage={frontImage} backImage={backImage} />
      <PokemonDetails  type={type} height={height} weight={weight} baseExp={baseExp} />
      
      <PokemonInput pokeInputHandler={pokeInputHandler} />
      <button
        onClick={e => setCurrentPage(`https://pokeapi.co/api/v2/pokemon/${randomPoke()}`)}
        className="btn btn-dark"
      >Random Poke
      </button>
      <Pagination
        ID={ID}
        gotoNextPage={gotoNextPage}
        gotoPrevPage={gotoPrevPage}
      />
      </div>
    </>
  );
}
