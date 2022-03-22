import './App.css';
import NavBar from './components/navBar' // importamos nuestro componente "navBar"
import Titulo from './components/titulos'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Titulo>
        <p>Titulo de seccion de Pagina</p>
      </Titulo>
    </div>   
  );         
}
      


export default App;
