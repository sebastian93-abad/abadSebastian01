import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './itemDetail'
import dataProduct from './productosAparte'


const ItemDetailContainer = () =>{
    const [detalles, setDetalles] = useState([])

    const {id} = useParams()

    const obtengoDetalle = (id) => {
        return new Promise  ((resolve, eject) => {
            setTimeout(() => {
                resolve(dataProduct)
            }, 2000)
        })

    }

    useEffect( () => {
        obtengoDetalle().then((data) =>{
            const myId = data.find(e => e.id === id)
            setDetalles(myId)
        })
    }, [id])


    return(
        <div className="contenedorCartas">
            <div>
            {detalles? <ItemDetail data={detalles}></ItemDetail>
            : <div>Cargando...</div>}
            </div>


        </div>
    )

}


export default ItemDetailContainer   



