import React, {useState, useEffect} from 'react'
import Card from './card'
import db from '../../src/firebase'
import { collection, getDocs} from 'firebase/firestore'

const ListProducts = ({children}) =>{


    const [productos, setProductos] = useState([])

    const obtengoProducto = async () => {
        const coleccion = collection(db, 'productos')
        const productosSnap = await getDocs(coleccion)
        

        const productList = productosSnap.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            console.log('product', product)
            return product
        })
        return productList
            
            

        


        
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
        







