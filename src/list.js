import React from 'react'

export default function list(props) {

    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
    <li class="list-group-item" key={number.toString()}>
        {number}
        </li> );


    return (
        <div>
            <ul class="list-group list-group-flush" >
            {listItems}
            </ul>
        </div>
    )
}


