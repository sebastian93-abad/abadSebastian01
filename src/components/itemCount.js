import React, {useState} from 'react'



const Contador = ({stock}) => {
    const [cantidad, setCantidad] = useState(1)

    const sumarCantidad = () =>{
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
        
    }

    const restarCantidad = () =>{
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }

    const agregarCarrito = ()=>{
        console.log('los productos', {cantidad}, 'se agregaron al carrito')
    }

    return(
        <div>
            
            <button onClick={restarCantidad}>-</button>
            <p>{cantidad}</p>
            <button onClick={sumarCantidad}>+</button>
            <hr></hr>
            <button onClick={agregarCarrito}>Agregrar al Carrito</button>

        </div>
    )

}
    

export default Contador








