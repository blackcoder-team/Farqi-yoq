import { useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import About from "../About/About";
import Musics from "../Musics/Musics";

function App() {

  return (
    <>
      <Header/>
      <main>
        <About/>
        <Musics/>
      </main>
    </>
  )
}

export default App
