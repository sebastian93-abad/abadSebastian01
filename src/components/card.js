import React from 'react'
import Contador from './itemCount'
import { Link } from 'react-router-dom'

export default function Card({data, action}) {
    const {titulo, precio, stock, id} = data
    




    return(
        <div className="carta">
            <h2>{titulo}</h2>
            <p>Precio : $ {precio}</p>
            <Contador stock={stock}/>
            <button onClick={(e) => action(e)}>Comprar</button>
            <Link to={`/detalle/${id}`}><button>DETALLE DEL PRODUCTO</button></Link>
        </div>
    )
}


