import React from 'react' //siempre hay que importar reac. 
import Button from '@mui/material/Button'; // este import , es de la pagina "material ui"
import ImagNav from './imgNav';
import { Link } from 'react-router-dom';


function NavBar(){  //este es el componente que creamos y luego lo utilizamos en "App.js"
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
      <ImagNav/>
  </header>
  )
}

export default NavBar  // siempre tenemos que exportar para poder utilizar este componente en nuestra "App.js