import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// Rutas ---
import HomePage from './paginas/homePage';
import NotFoundPage from './paginas/notFound';
import Cart from './paginas/cart';
import DetallesProductos from './paginas/detalleProductos';


// Componentes ---
import NavBar from './components/navBar' 




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/detalle/:id" element={<DetallesProductos/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>


    </div>   
  );         
}
      


export default App;
