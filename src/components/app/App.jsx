import { useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import About from "../About/About";
import Musics from "../Musics/Musics";
import Quotes from "../Quotes/Quotes";

function App() {

  return (
    <>
      <Header/>
      <main>
        <About/>
        <Musics/>
        <Quotes/>
      </main>
    </>
  )
}

export default App
