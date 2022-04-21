import React from 'react';
import CartContext from '../context/cartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cartProducts, eliminarProducto } = useContext(CartContext)
    console.log('pantalla del producto agregado:', cartProducts )

    return(
        <div>
            {
                (cartProducts.length === 0)

                &&

                <div>
                    <p>No hay items en tu carrito...</p>
                    <button><Link to={'/'}>VOLVER A COMPRAR</Link></button>
                </div>

            }
            
            
            
            {

                cartProducts.map( (cartProduct) =>{
                    const {titulo, talle, precio, id} = cartProduct
                    return(
                        <div className="carta" key={id}>
                            <h2>{titulo}</h2>
                            <p>Talle:{talle}</p>
                            <p>Precio : $ {precio}</p>
                            <button onClick={() => eliminarProducto(cartProduct)}>Eliminar</button>
                        </div>
            
                
                    )
            

    
                })
                    
            }
            
                

        
        </div>
        

    )

}

export default Cart

// {() => eliminarProducto(cartProduct)}---> Hacemos esto para que no se ejecute todo el tiempo la funcion y solo lo haga cuando utilizemos el boton.