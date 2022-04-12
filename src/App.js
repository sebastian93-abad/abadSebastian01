import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Rutas ---
import HomePage from './paginas/homePage';
import Detalle from './paginas/detalle';


// Componentes ---
import NavBar from './components/navBar' 




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/detalle/:id" element={<Detalle />}/>
        </Routes>
      </BrowserRouter>


    </div>   
  );         
}
      


export default App;
