import React, {useState, useEffect} from 'react'
import Card from './card'
import dataProduct from './productosAparte'

const ListProducts = ({children}) =>{


    const [productos, setProductos] = useState([])
    const [contador, setContador] = useState (0)

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


    const agregarAlContador = (e) =>{
        e.stopPropagation()
        setContador(contador + 1)
        
        
    }

        



    return(
        <div className="contenedor">
            <h1>Productos agregados:{contador}</h1>
            {productos.map((producto) => {
                const {id} = producto
                return(
                    <Card data={producto} key={id} action={agregarAlContador}/>

                )
    
            })}
        </div>
    )
}

export default ListProducts



