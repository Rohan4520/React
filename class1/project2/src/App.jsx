import './App.css'
import { Customer } from './components/Customer'
import Data from './components/data'

function App() {

  return (
    <>
    {/* when is no content or children inside Data compoent that time we  use seldf closing sytax like below  */}
      <Data/>

      {/* when is  content or children inside Data compoent that time we  use seldf closing sytax like below  */}
      <Data> </Data>


      {/*  named import  */}
      <Customer/> 
    </>
  )
}

export default App
