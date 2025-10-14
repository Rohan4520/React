import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router'
import Home from './components/home'
import About from './components/about'
import Contact from './components/Contactr'
import Error from './components/Error'
import HomeNavBar from './components/HomeNavBar'
import User from './components/User'
import Serch from './components/Serch'
import Service from './components/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeNavBar/>
      <h1> Router </h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        {/* <Route path="/user" element={<User/>}/> */}
        <Route path="/user/:name/:age" element= {<User/>} />
        <Route path="*" element={<Navigate to="/"/>} />
        <Route path="/Serch" element={<Serch/>}/>
        <Route path="/Service" element={<Service/>}/>
      </Routes>
    </>
  )
}

export default App
