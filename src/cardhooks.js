import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import PokemonImages from './PokemonImages'

export default function Cardhooks(props) {
//   const [pokemon, setPokemon] = useState([]);
  const [name, setName] = useState([]);
  const [ID, setID] = useState([]);
  const [clicked, setClicked] = useState(1);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon/1"
  );
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [loading, setLoading] = useState(true);
  const [frontImage, setFrontImage] = useState('');
  const [backImage, setBackImage] = useState('');

  useEffect(() => {
    fetchData();
    setLoading(true);

    async function fetchData() {
      console.log(clicked, nextPage);
      setClicked(clicked + 1);
      let response = await fetch(`${currentPage}`);
      let data = await response.json();
      console.log(data);
      setName(data.name);
      setID(data.id);
      setFrontImage(data.sprites.front_default)
      setBackImage(data.sprites.back_default)
      setLoading(false);
      setNextPage(`https://pokeapi.co/api/v2/pokemon/${clicked + 1}`);
      setPrevPage(`https://pokeapi.co/api/v2/pokemon/${clicked - 1}`);
    }

  }, [currentPage]);

  function gotoNextPage() {
    setCurrentPage(nextPage);
  }
  function gotoPrevPage() {
    setCurrentPage(prevPage);
  }
//   pokeInputHandler = (event) => {
//     setCurrentPage(`https://pokeapi.co/api/v2/pokemon/${event}`)
//   }

  return (
    <>
      <h2>what up </h2>
        {loading ? (
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <h4>{name} 
           <span className="badge badge-pill badge-info">{ID}</span>
           </h4> 
        )}
     <PokemonImages frontImage={frontImage} backImage={backImage} />
        <input onChange={(e)=>  setCurrentPage(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`)} className="pokeInput" type='text' placeholder='type a poke number'></input>
        <button onClick={ (e)=> setCurrentPage(`https://pokeapi.co/api/v2/pokemon/22`)  } className='btn btn-dark'>Submit</button>
      <Pagination clicked={clicked}
      gotoNextPage={gotoNextPage} 
      gotoPrevPage={gotoPrevPage} />
    </>
  );
}
