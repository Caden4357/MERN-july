
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Homepage from './components/Homepage'
import Login from './components/Login'
function App() {

  return (
    <>
      <h1 className='text-center'>Login & Registration</h1>
      <Routes>
        <Route index element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
      </Routes>
    </>
  )
}

export default App
