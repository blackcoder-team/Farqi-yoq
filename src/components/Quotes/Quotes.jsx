import { useState } from "react";
import './Quotes.css'

function Quotes() {
  const quotes = [
    {
      text: "Steve Jobs: Faqat sevgan ishlaringizni qiling.",
      bg: "url('https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg')",
      author: "Steve Jobs"
    },
    {
      text: "Albert Einstein: Hech qachon qiziqishni to‘xtatmang.",
      bg: "url('https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg')",
      author: "Albert Einstein"
    },
    {
      text: "Oprah Winfrey: Harakat qiling, qo‘rqmang.",
      bg: "url('https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg')",
      author: "Oprah Winfrey"
    },
    {
      text: "Oprah Winfrey: Siz ishonadigan narsaga harakat qiling va hech qachon taslim bo‘lmang.",
      bg: "url('https://images.pexels.com/photos/20572827/pexels-photo-20572827.jpeg')",
      author: "Oprah Winfrey"
    },
    {
      text: "Elon Musk: Qandaydir narsani o‘rganing, farqi yo‘q.",
      bg: "url('https://images.pexels.com/photos/433155/pexels-photo-433155.jpeg')",
      author: "Elon Musk"
    },
    {
      text: "“Innovatsiya – bu lider va ergashuvchining farqini belgilovchi narsa” – Steve Jobs",
      bg: "url('https://images.pexels.com/photos/31566915/pexels-photo-31566915.jpeg')",
      author: "Steve Jobs"
    },
    {
      text: "Elon Musk: Muvaffaqiyatsizlik — bu muvaffaqiyat sari yo‘lning bir qismi.",
      bg: "url('https://images.pexels.com/photos/16902418/pexels-photo-16902418.jpeg')",
      author: "Elon Musk"
    },
    {
      text: "Albert Einstein: Tasavvur bilimdan muhimroqdir.",
      bg: "url('https://images.pexels.com/photos/13546676/pexels-photo-13546676.jpeg')",
      author: "Albert Einstein"
    },
  ];
  const [current, setCurrent] = useState(quotes[0]);
  const [anim, setAnim] = useState(false);
  const [filter] = useState("Barchasi");

  const filteredQuotes = filter === "Barchasi"
    ? quotes
    : quotes.filter(q => q.author === filter);

  const handleClick = () => {
    const random = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
    setCurrent(random);
    setAnim(true);
    setTimeout(() => {
      setAnim(false);
    }, 1500);
  };

  return (
    <section id="quotes-sect">
      <h1><b>Mashhur Iqtiboslar</b></h1>
        <div
        className={`div-for-default-quotes${anim ? " bg-fade" : ""}`}
        style={{
          backgroundImage: `
            ${current.bg}
          `
        }}
        >
          <div className="obshiy">
        <div className="for-df-quotes">
          <p className={`quote${anim ? " quote-slide" : ""}`}>
          {current.text}
        </p>
        </div>
        <button onClick={handleClick}>Yana iqtibos</button>
          </div>
      </div>
    </section>
  );
}

export default Quotes;