import React, { useEffect } from 'react'
import Contador from './itemCount'
import { Link } from 'react-router-dom'
import { useContext } from 'react' //context
import CartContext from '../context/cartContext' // context

export default function Card({data}) {
    const {titulo, precio, stock, id} = data

    const {cartProducts, addProduct} = useContext(CartContext) //context

    
    const addCard = (e) => {
        e.stopPropagation()
        console.log('productos agregados:', cartProducts)
        addProduct(data) // funcion del context y le paso "data"(que son los productos desestructurados)
        //la funcion "addCard" la pasamos al boton "comprar"
    }






    return(
        <div className="carta">
            <h2>{titulo}</h2>
            <p>Precio : $ {precio}</p>
            <Contador stock={stock}/>
            <button onClick={addCard}>Comprar</button>
            <Link to={`/detalle/${id}`}><button>DETALLE DEL PRODUCTO</button></Link>
        </div>
    )
}


