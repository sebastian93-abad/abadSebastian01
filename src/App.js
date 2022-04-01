import './App.css';
import NavBar from './components/navBar' // importamos nuestro componente "navBar"
import ListaProducto from './components/listaProductos';
import DetalleProducto from './components/detalleProducto';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ListaProducto />
      <DetalleProducto/>
    </div>   
  );         
}
      


export default App;
