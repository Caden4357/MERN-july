import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import DisplayAllAlbums from './components/DisplayAllAlbums'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route index element={<DisplayAllAlbums/>}/>
      </Routes>
    </>
  )
}

export default App
