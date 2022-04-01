import React, {useState, useEffect} from 'react'
import Carta from './carta'
import {dataProduct} from './productosAparte'


const DetalleProducto = () =>{
    const [detalles, setDetalles] = useState([])

    const obtengoDetalle = (id) => {
        return new Promise  ((resolve, eject) => {
            setTimeout(() => {
                resolve(dataProduct)
            }, 2000)
        })

    }

    useEffect (() => {
        obtengoDetalle().then((data) =>{
            setDetalles(data)
        })
    }, [])


    return(
        <div className="contenedorCartas">
            <Carta data={detalles}/>
            {console.log(detalles)}

        </div>
    )

}


export default DetalleProducto   



