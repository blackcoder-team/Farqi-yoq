// import { useState } from 'react'
import './App.css'

import Header from '../Header/Header'
import About from "../About/About";
import Musics from "../Musics/Musics";
import Movies from '../Movies/Movies';

function App() {
  

  return (
    <>
      <Header/>
      <main>
        <About/>
        <Musics/>
        <Movies/>
      </main>
    </>
  )
}

export default App
