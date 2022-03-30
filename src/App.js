// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Carrusel } from './components/Carrusel';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import productos from './components/productos.json'
import { Inicio } from './components/Inicio';




function App() {
  


  return (
    <BrowserRouter>
      
      <NavBar />
      

      <Routes>

        <Route path="/" element={ <Inicio/>} />
        <Route path="/category/:categoryId" element={ <ItemListContainer/>} />
        <Route path="/item/:itemId" element={ <ItemDetailContainer items={productos}/> } />

        <Route path="*" element={<h1>Pagina inexistente</h1>} />
      
      </Routes>


    </BrowserRouter>

    
  )
}

export default App;


