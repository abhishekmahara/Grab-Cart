import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'
import About from './pages/About'
import Cart from './pages/Cart'
import { ProductProvider } from './Context/ProductContext.jsx'





const App = () => {
  return (
    <ProductProvider>
       
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/products' element={<Products/>}></Route>
   </Routes>
   </BrowserRouter>
      
   </ProductProvider>
  )
}

export default App;
