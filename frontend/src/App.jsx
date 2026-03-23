import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'

import bgImage from './assets/back.jpg'
import Footer from './components/Footer'

const App = () => {
  return (
    <div 
      className='px-3 sm:px-5 md:px-8 lg:px-10 max-w-none mx-auto min-h-screen'
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',          // image stretch control
        backgroundPosition: 'center',     // center alignment
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'     // 🔥 MOST IMPORTANT (zoom fix)
      }}
    >
      
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App