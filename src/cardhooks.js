import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import PokemonImages from "./PokemonImages";
import PokemonDetails from './PokemonDetails'

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
  const [type, setType] = useState([type1, type2]);


  useEffect(() => {
    setLoading(true);
    document.title = `${ID} ${name}`;
    fetchData();
    async function fetchData() {
        try {
            let response = await fetch(`${currentPage}`);
            let data = await response.json();
            console.log(data);
            setName(data.name);
            setID(data.id);
            setFrontImage(data.sprites.front_default);
            setBackImage(data.sprites.back_default);
            setHeight(data.height)
            setWeight(data.weight)
            setBaseExp(data.base_experience)
            setType({data.types[0].type.name
                , data.types[1].type.name  })
            // setType(data.types[1].type.name)
            setLoading(false);
            setNextPage(`https://pokeapi.co/api/v2/pokemon/${data.id + 1}`);
            setPrevPage(`https://pokeapi.co/api/v2/pokemon/${data.id - 1}`);
        } catch (error) {
            console.log(error)
        }
    }
  }, [currentPage]);

  function gotoNextPage() {
    setCurrentPage(nextPage);
  }
  function gotoPrevPage() {
    setCurrentPage(prevPage);
  }
  function pokeInputHandler (event)  {
     setCurrentPage(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`);
   }

  
  return (
    <>
      <h2>Pokemon Stuff</h2>
      {loading 
      ? ( <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>) 
      : (<h4>
          {name}
          <span className="badge badge-pill badge-info">{ID}</span>
        </h4>
        )}

        <PokemonDetails type={type} height={height} weight={weight} baseExp={baseExp} />
      <PokemonImages 
      frontImage={frontImage} 
      backImage={backImage} />
      <input
        onChange={(e) => pokeInputHandler(e) }
        className="pokeInput"
        type="text"
        placeholder="enter a number. . ."
      ></input>
      <button
        onClick={e => setCurrentPage(`https://pokeapi.co/api/v2/pokemon/22`)}
        className="btn btn-dark"
      >Submit
      </button>
      <Pagination
        ID={ID}
        gotoNextPage={gotoNextPage}
        gotoPrevPage={gotoPrevPage}
      />
    </>
  );
}
