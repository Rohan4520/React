import React from 'react'
import Navbar from './components/Navbar'
import Student from './components/Student'
import { Routes,Route } from 'react-router-dom'
import Teacher from "./components/Teacher.jsx"

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </div>
  )
}