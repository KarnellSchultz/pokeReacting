import React, { Component } from "react";
import Cardhooks from "./cardhooks";


class App extends Component {
  constructor() {
  super();
  this.state = {
    data: [],
    };
  }

 componentDidMount() {
    // const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*`
    const pokeURL = 'https://pokeapi.co/api/v2/pokemon/'

    fetch(pokeURL)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data:result,
        })
      })
  }

  
  render() {
    const { data } = this.state

      return  <div className="  d-flex flex-column "> <Cardhooks data={data} name={data.results} /> 
      </div> 
  }
}

export default App;
