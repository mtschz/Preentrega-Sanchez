import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar.jsx'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

function App() {
  return (
    <div className='App'>
          <NavBar />
    <ItemListConteiner greeting={"Bienvenido"}/>
    </div>
  );
}

export default App;
