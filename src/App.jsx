import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'

import Cart from './pages/Cart'
import { ProductProvider } from './Contextt/ProductContext.jsx'
import Footer from './Components/Footer.jsx'
import SingleProduct from './pages/singleProduct.jsx'





const App = () => {
  return (
    <ProductProvider>
       
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/products/:id' element={<SingleProduct/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/products' element={<Products/>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
      
   </ProductProvider>
  )
}

export default App;
