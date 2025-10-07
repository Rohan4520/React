import React from 'react'
import './App.css'
import HomeNavbar from './component/HomeNavbar'
import { Route, Routes } from 'react-router'
import Home from './component/Home'
import Create from './component/create'
import UpdatePage from './component/UpdatePage'
import Delete from './component/Delete'
import { Read } from './component/Read'


function App() {
 

  return (
    <>
    <h1 className='app'> CURD useing Redux Toolkit </h1>
    <HomeNavbar />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/updatepage/:id' element={<UpdatePage/>}/>
    <Route path='/delete/:id' element={<Delete/>}/>
    <Route path='/read' element={<Read/> }/>
    </Routes>
    </>
  )
}

export default App
