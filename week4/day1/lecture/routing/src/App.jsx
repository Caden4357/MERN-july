
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import LandingPage from './components/LandingPage'
import Nav from './components/Nav'
import WordAndColor from './components/WordAndColor'
import Form from './components/Form'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          {/* <Route index element={<LandingPage/>}/> */}
          <Route index element={<Form/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/dynamic/:word/:color' element={<WordAndColor/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
