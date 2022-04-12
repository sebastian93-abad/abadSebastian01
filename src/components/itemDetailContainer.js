import React, {useState, useEffect} from 'react'
import CartaDetalle from './itemDetail'
import dataProduct from './productosAparte'


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
            {detalles.map((detalle) => {
                const {id} = detalle
                return(
                    <CartaDetalle data={detalle} key={id} />
                )
            })}


        </div>
    )

}


export default DetalleProducto   



