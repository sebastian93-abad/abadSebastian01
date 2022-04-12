import React from 'react'
import Contador from './itemCount'

export default function Card({data}) {
    const {titulo, precio, stock} = data
    




    return(
        <div className="carta">
            <h2>{titulo}</h2>
            <p>Precio : $ {precio}</p>
            <Contador stock={stock}/>
        </div>
    )
}

