import React from 'react';
import CartContext from '../context/cartContext';
import { useContext } from 'react';


const Cart = () => {
    const { cartProducts } = useContext(CartContext)
    console.log('pantalla del producto agregado:', cartProducts )

    return(
        cartProducts.map( (cartProducts) =>{
            return(
                <div className="carta" ke={cartProducts.id}>
                    <h2>{cartProducts.titulo}</h2>
                    <p>Talle:{cartProducts.talle}</p>
                    <p>Precio : $ {cartProducts.precio}</p>
                </div>

            )
        
        })

    )

}

export default Cart