import React, { Component } from 'react';
import Buttons from './Buttons'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), data: {}};
    }

    componentDidMount() {
        this.timerID =  setInterval(
            () => this.tick(),
            1000
        )

            this.setState({data:this.props.data})
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render(){

        let {  count, next, previous, ...pokeResults  } = this.props.data
        console.log(Object.keys(pokeResults))

        for (let key in pokeResults) {
            console.log((pokeResults[key]))
            console.log(key)
        }
        const gotTheGoods = this.state.data;
        let cardEl;

        if (this.state.data) {
         cardEl = <img src=""  class="card-img-top" alt="placeholder info"></img>
        } else {
           cardEl = <h3>Loading. . . . </h3>
        }


    return (

        <div>
            <div class="card"  >
            <div gotTheGoods={gotTheGoods} > {cardEl}  </div>
                <div class="card-body">
                    <p class="card-text">Here is some example text that I can start with. {pokeResults.name}</p>
                </div>
            </div>
        </div>
        );
    }  
}

export default Card


