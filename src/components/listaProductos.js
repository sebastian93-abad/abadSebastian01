import Carta from './carta'



const ListaProducto = ({children}) =>{
    let dataProduct = {
        titulo: "remera",
        precio:'1500',
        talle: ' m',
        stock: 5
    }

    return(
        <div>
            <h2>{children}</h2>
            <Carta data={dataProduct}/>
        </div>
    )
}

export default ListaProducto