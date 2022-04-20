import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// Rutas ---
import HomePage from './paginas/homePage';
import NotFoundPage from './paginas/notFound';
import Cart from './paginas/cart';
import DetallesProductos from './paginas/detalleProductos';


// Componentes ---
import NavBar from './components/navBar' 

// Contexto ---
import { CartProvider } from './context/cartContext';




function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/detalle/:id" element={<DetallesProductos/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='*' element={<NotFoundPage />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>


    </div>   
  );         
}
      


export default App;
