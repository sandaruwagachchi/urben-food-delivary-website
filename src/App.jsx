import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Home from './Pages/Home/Home.jsx'
import Card from './Pages/Card/Card.jsx'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
         <Route path ='/' element={<Home/>} />
         <Route path ='/card' element={<Card/>} />
         <Route path ='/order' element={<PlaceOrder/>} />

      </Routes>
    </div>
  )
}

export default App
