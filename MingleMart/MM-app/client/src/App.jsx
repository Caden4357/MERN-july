import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'
import ProductForm from './components/ProductForm'
function App() {
  return (
    <div className='bg-slate-800 min-h-screen'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<Nav/>}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/sellProduct' element={<ProductForm/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
