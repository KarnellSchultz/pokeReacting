import React from 'react'

export default function PokemonInput({pokeInputHandler}) {
    return (
        <div>
             <input
        onChange={(e) => pokeInputHandler(e) }
        className=""
        type="text"
        placeholder="Enter a number. . .">
        </input>
        </div>
    )
}
