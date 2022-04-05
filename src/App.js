// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import productos from './components/productos.json'
import { Inicio } from './components/Inicio';
import { Cart } from './components/Cart';
import { useState } from 'react';
import { CartContext } from './context/CartContext';
import 'bootswatch/dist/minty/bootstrap.min.css'
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';




function App() {

  const addItem = (item, cant) => {

    if (isInCart(item.id)) {
      let index = carrito.findIndex(it => it.id == item.id)
      carrito[index].cantidad += cant
    }

    else {
      setCarrito([...carrito, item])
    }
  }

  const clear = () => {
    setCarrito([])
  }

  const isInCart = (id) => {
    return carrito.some(item => item.id === id)
  }

  const removeItem = (id) => {
    setCarrito(carrito.filter(item => item.id !== id))
  }

  const [carrito, setCarrito] = useState([])




  return (

    <CartContext.Provider value={{ carrito, addItem, removeItem, clear }}>


      <BrowserRouter>

        <NavBar />


        <Routes>

          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer items={productos} />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<h1>Pagina inexistente</h1>} />

        </Routes>

        <Footer/>


      </BrowserRouter>
    </CartContext.Provider>


  )
}

export default App;


