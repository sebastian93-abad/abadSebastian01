import React, {useState, useEffect} from 'react'
import Carta from './carta'
import {dataProduct} from './productosAparte'

const ListaProducto = ({children}) =>{


    const [productos, setProductos] = useState([])

    const obtengoProducto = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(dataProduct)
            }, 2000 );
    })
    } 

    useEffect ( () => {
        obtengoProducto().then((data) =>{
            setProductos(data)
        })
    },[])



    return(
        <div className="contenedorCartas">
            {productos.map((producto) => {
                const {id} = producto
                return(
                    <Carta data={producto} key={id}/>

                )
    
            })}
        </div>
    )
}

export default ListaProducto



