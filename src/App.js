// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Carrusel } from './components/Carrusel';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';



function App() {
  
  //prueba porque no se como mandarle el item necesario
  let item = {
    id: 1,
    title: 'Producto 1',
    price: '$100',
    description: 'manteles'
  }

  return (
    <BrowserRouter>
      
      <NavBar />
      <Carrusel />
      

      <Routes>

        <Route path="/" element={ <ItemListContainer/>} />
        <Route path="/category/:id" element={ <ItemListContainer/>} />
        <Route path="/item/:id" element={ <ItemDetailContainer item={item}/>} />

        <Route path="*" element={ <Navigate to="/"/>} />
      
      </Routes>


    </BrowserRouter>

    
  )
}

export default App;


