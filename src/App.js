// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Carrusel } from './components/Carrusel';
import { ItemListContainer } from './components/ItemListContainer';



function App() {


  
  return (
    <>
      <NavBar />
      <Carrusel />
      <ItemListContainer greeting={'Aqui te va un saludo!'}/>
    </>
  )
}

export default App;


