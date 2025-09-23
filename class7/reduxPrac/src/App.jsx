import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Teacher from './components/Teacher'
import Student from './components/Student'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Teacher/>} />
         <Route path="/student" element={<Student/>} />
      </Routes>
     
    </div>
  )
}

export default App