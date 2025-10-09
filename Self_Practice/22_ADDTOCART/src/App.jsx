import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeNavBar from './Components/HomeNavBar'
import { Route, Router, Routes } from 'react-router'
import CartHome from './Components/CartHome'
import CartDetails from './Components/CartDetails'


function App() {

  return (
    <>
      <HomeNavBar/>
      <Routes>
        <Route path='/' element={<CartHome/>}/>
        <Route path='cart-details' element={<CartDetails/>}/>
              
      
      </Routes>
    </>
  )
}

export default App
