import './App.css';
import NavBar from './components/navBar' // importamos nuestro componente "navBar"
import ListaProducto from './components/listaProductos';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ListaProducto />
    </div>   
  );         
}
      


export default App;
