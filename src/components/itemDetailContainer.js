import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './itemDetail'
import db from '../../src/firebase'
import { collection, getDocs} from 'firebase/firestore'
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () =>{
    const [detalles, setDetalles] = useState([])

    const {id} = useParams()

    const obtengoDetalle = async (id) => {
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

    const getProduct = async() => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let detalle = docSnap.data()
            detalle.id = docSnap.id
            setDetalles(detalle)
        } else {
            console.log("Pagina no existe")
        }
    }
        


    useEffect( () => {
        getProduct()
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



