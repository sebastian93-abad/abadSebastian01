import React from 'react' //siempre hay que importar reac. 
import Button from '@mui/material/Button'; // este import , es de la pagina "material ui"
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../context/cartContext';
import { useContext } from 'react';


function NavBar(){
  const { cartProducts } = useContext(CartContext)


    
  return (
    //JSX
    <header className='contenedor'>
      <div>
        <img 
            src="logo192.png" 
        />
      </div>
      <ul>
          <li><Button className="custom-btn" variant="contained"><Link to={'/'}>Inicio</Link></Button></li>
          <li><Button variant="contained">Productos</Button></li>
          <li><Button variant="contained">Nosotros</Button></li>
          <li><Button variant="contained">Contacto</Button></li>
      </ul>
      <div>
        <button><Link to={'/cart'}><ShoppingCartIcon/></Link></button>
        <p>Agregar al Carrito</p>
      </div>
      <p>{cartProducts.length}</p>
      
      
  </header>
  )
}

export default NavBar  // siempre tenemos que exportar para poder utilizar este componente en nuestra "App.js