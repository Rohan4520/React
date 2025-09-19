import { Route, Routes } from 'react-router'
import './App.css'
import BestForm from './components/BestForm'
import Form from './components/Form'
import ProfileData from './components/ProfileData'

function App() {

  return (
    <>
    
      <Routes>
        <Route path='/' element={<BestForm/>}/>
        <Route path='/profileData' element={<ProfileData/>}/>
      </Routes>

    </>
  )
}

export default App
