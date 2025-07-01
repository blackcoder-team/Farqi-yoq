
import React from "react";
import "./App.css";

import Header from "../Header/Header";
import About from "../About/About";
import Musics from "../Musics/Musics";
import Quotes from "../Quotes/Quotes";
import Movies from "../Movies/Movies";
import Contact from "../Contact/Contact";
import Twits from "../Twits/Twits";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Musics />
        <Movies />
        <Quotes />
        <Twits/>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
