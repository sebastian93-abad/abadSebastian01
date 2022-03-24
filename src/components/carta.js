import React from 'react'
import Contador from './contador'

export default function Card({data}) {
    const {titulo, precio, talle, stock} = data
    




    return(
        <div className="card-item">
            <h2>{titulo}</h2>
            <p>Precio : $ {precio}</p>
            <p>Talle : {talle}</p>
            <p>Stock : {stock}</p>
            <Contador stock={stock}/>
        </div>
    )
}

