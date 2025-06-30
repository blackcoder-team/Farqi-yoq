import React from 'react'
import './App.css'

import Quotes from '../Quotes/Quotes'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
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
      <Quotes />
      <Contact />
      <Footer />
    </>
  )
}

export default App
