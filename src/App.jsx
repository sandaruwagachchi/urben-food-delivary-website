import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Home from './Pages/Home/Home.jsx'
import Card from './Pages/Card/Card.jsx'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx'
import Login from './components/Login/Login.jsx'


const App = () => {

const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
         <Route path ='/' element={<Home/>} />
         <Route path ='/card' element={<Card/>} />
         <Route path ='/order' element={<PlaceOrder/>} />

      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
