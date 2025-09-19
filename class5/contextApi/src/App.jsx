import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext } from 'react'
import ChildA from './components/ChildA'

 export const usercontext =  createContext();

function App() {
 
 
  const userName = "grow tech"

  return (
    <>
      <usercontext.Provider value={userName}>
        <ChildA/>
      </usercontext.Provider>
    </>
  )
}

export default App

