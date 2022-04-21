import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    // Creamos un estado para luego ir metiendole informacion de los productos en el array vacio.

    const addProduct = (product) => {
        console.log('producto a agregar:', product)
        setCartProducts(cartProducts => [...cartProducts, product ])


    }
//Estamos creando una funcion la cual va a recibir un parametro, el cual sera un producto. Esta funcion se la pasamos a otra funcion que se encuentra en la "card" , donde vamos a hacer que se ejecute cuando toquemos el boton "comprar". En el console.log nos va a mostrar el producto el cual estamos tocando el boton.

//Luego vamos a utilizar un "- spread operator -" --> setCartProducts(cartProducts => [...cartProducts, product ])
// Con esto le decimos, que mantenga el valor anterior "...cartProducts" y que luego nos agrege el producto nuevo "product".

    const eliminarProducto = (product) => {
        console.log('quiero eliminar:',product)
        setCartProducts( cartProducts.filter((cartProduct) => {
            return cartProduct.id !== product.id


        }))

    }



    const data = {
        cartProducts,
        addProduct,
        eliminarProducto
    }
// creamos esta constante para pasar solo el "data" como parametro


    return(
        <CartContext.Provider value= { data }>
            {children}
        </CartContext.Provider>
    )
}



export {CartProvider}
export default CartContext