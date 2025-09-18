import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {

  const[ id , setId ]  = useState(1);
  const[ data , setData ] = useState()

  async function apicall(url) {
   try{
      const response  = await fetch(url);
      const Data = await response.json();
      setId(Data?.id)
      setData(Data)


    } catch (error){
      console.log("getting error")
    }
    
  }

  useEffect(()=>{
    apicall(`https://fakestoreapi.com/products/${id}`)
  },[id])


  function increment(){
     if(id>=20){
      setId(1)
      return;
     }
     setId(id+ 1)
  }
  function decrement(){
    if(id<=1){
      setId(1);
      return;
    }
    setId(id - 1)
  }

  return (
    <>
      <Card product={data}/>
      <button onClick={()=>increment()}>increment </button>
      <p>{id}</p>
      <button onClick={decrement}>  Decrement</button>
    </>
  )
}

export default App
