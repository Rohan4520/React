import React from 'react'
import CategoryList from './compoenents/CategoryList'
import { Route, Routes } from 'react-router'
import LaptopDetail from './compoenents/LaptopDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CategoryList />} />
      <Route path="/laptop-detail" element={<LaptopDetail />} />
    </Routes>
  )
}

export default App
