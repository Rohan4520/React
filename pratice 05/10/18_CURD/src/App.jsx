import React from 'react'
import HomeNavbar from './CURD/HomeNavbar'
import { Route, Routes } from 'react-router'
import Home from './CURD/Home'
import Create from './CURD/Create'



function App() {
  

  return (
    <>
       <center><h1> React CURD</h1> </center> 
       <HomeNavbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
       </Routes>
    </>
  )
}

export default App
