import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Header from './Component/Header/Header'
import About from './Component/About/About'

function App() {
  return (
    <>
      <div className="block1">
        <Navbar/>
      </div>
      <div className="block2">
        <Header/>
      </div>
      <div className="box1"></div>
      <div className="block3">
        <About/>
      </div>
    </>
  )
}

export default App
