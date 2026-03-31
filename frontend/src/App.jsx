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
import SearchBar from './components/SearchBar'
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='relative min-h-screen'>
      
      {/* 🔥 BLUR BACKGROUND */}
      <div
        className='absolute inset-0 bg-cover bg-center blur-[1.5px] opacity-80'
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: 'fixed'
        }}
      ></div>

      {/* 🔥 MAIN CONTENT */}
      <div className='relative z-10 px-3 sm:px-5 md:px-8 lg:px-10 max-w-none mx-auto'>
        <ToastContainer/>
        <Navbar />
        <SearchBar/>
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

    </div>
  )
}

export default App