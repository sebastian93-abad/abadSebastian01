import React, {useState, useEffect} from 'react'
import Card from './card'
import dataProduct from './productosAparte'

const ListProducts = ({children}) =>{


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
        <div className="contenedor">
            {productos.map((producto) => {
                const {id} = producto
                return(
                    <Card data={producto} key={id}/>

                )
    
            })}
        </div>
    )

}

export default ListProducts
        







