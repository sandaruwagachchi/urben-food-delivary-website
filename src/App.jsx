import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Home from './Pages/Home/Home.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx'
import Login from './components/Login/Login.jsx'
import Supplier from './Pages/Supplier/Supplier.jsx'


const App = () => {

const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
         <Route path ='/' element={<Home/>} />
         <Route path ='/cart' element={<Cart/>} />
         <Route path ='/order' element={<PlaceOrder/>} />
         <Route path ='/supplier' element={<Supplier/>} />

      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
