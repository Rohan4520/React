import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContainer from '../../project1/src/components/MainContainer'

function App() {

    const { companyname , setCompanyName}  =  useState("")
    function senddata(){
      setCompanyName("Dr reddy foundation")
    }
  return (
    <>
    <h1>{companyname}</h1>
      <MainContainer companyname={companyname} senddata={senddata}/>
    </>
  )
}

export default App
