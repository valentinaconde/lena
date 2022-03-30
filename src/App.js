// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Carrusel } from './components/Carrusel';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import productos from './components/productos.json'




function App() {
  


  return (
    <BrowserRouter>
      
      <NavBar />
      <Carrusel />
      

      <Routes>

        <Route path="/" element={ <ItemListContainer greeting={'Todos nuestros productos'}/>} />
        <Route path="/category/:categoryId" element={ <ItemListContainer/>} />
        <Route path="/item/:itemId" element={ <ItemDetailContainer items={productos}/> } />

        <Route path="*" element={<h1>Pagina inexistente</h1>} />
      
      </Routes>


    </BrowserRouter>

    
  )
}

export default App;


