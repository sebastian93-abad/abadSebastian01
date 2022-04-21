import React, {useState} from 'react'
import { Link } from 'react-router-dom'



const ItemCount = ({stock}) => {
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



    return(
        <div>
            
            <button onClick={restarCantidad}>-</button>
            <p>{cantidad}</p>
            <button onClick={sumarCantidad}>+</button>
        </div>
    )

}
    

export default ItemCount








