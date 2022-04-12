import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dataProduct from '../components/productosAparte';

const Detalle = () => {
    const {id} = useParams()
    console.log(id)
    console.log('productos:', dataProduct)

    useEffect = ( () => {
        filtroId(dataProduct, id)

    }, []) 


    const filtroId = (array, id) => {
        return array.map((product) => {
            if(product.id == id){
                return console.log('productos filtrados:',product)
            }
        })
    }

    return(
        <div>
            <h1>HOLA</h1>
        </div>
    )
}




export default Detalle