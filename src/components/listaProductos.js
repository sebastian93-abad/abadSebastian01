import React, {useState, useEffect} from 'react'
import Carta from './carta'

const ListaProducto = ({children}) =>{
    let dataProduct = [
        {
            id: 1,
            titulo:'remera',
            talle:'s',
            precio:1500,
            stock:5,
        },
        {
            id: 2,
            titulo:'pantalon',
            talle:'m',
            precio:2000,
            stock:7,
        },
        {
            id: 3,
            titulo:'camisa',
            talle:'l',
            precio:5000,
            stock:10,
        },
        {
            id: 4,
            titulo:'zapatillas',
            talle:'40',
            precio:10000,
            stock:15,
        }
    ]

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



