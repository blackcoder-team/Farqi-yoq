import { useState } from "react";
import "./Quotes.css";

function Quotes() {
    const quotes = [
        {
            text: "Faqat sevgan ishlaringizni qiling.",
            author: "Steve Jobs",
            image:
                "https://d23.com/app/uploads/2013/08/1180w-600h_disney-legends-steven-jobs.jpg",
        },
        {
            text: "Hech qachon qiziqishni to‘xtatmang.",
            author: "Albert Einstein",
            image:
                "https://cdn.viva.org.uk/wp-content/uploads/2020/09/albert-einstein-vegetarian.jpg",
        },
        {
            text: "Harakat qiling, qo‘rqmang.",
            author: "Oprah Winfrey",
            image:
                "https://www.gsb.stanford.edu/sites/default/files/styles/1630x_variable/public/photo-oprah-sitting-couch.jpg.webp?itok=H58cgOpx",
        },
        {
            text: "Qandaydir narsani o‘rganing, farqi yo‘q.",
            author: "Elon Musk",
            image:
                "https://www.bankrate.com/brp/2025/02/06145605/elon-musk-2025-worlds-richest-person.jpg?auto=webp&optimize=high&crop=16:9",
        },
        {
            text: "O‘zingni tani.",
            author: "Socrates",
            image:
                "https://brightspotcdn.byu.edu/dims4/default/1f88894/2147483647/strip/true/crop/3323x1869+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fbrigham-young-brightspot-us-east-2.s3.us-east-2.amazonaws.com%2F9d%2F25%2F94605cd44812a154860443a4ae21%2Fstatue-of-plato-12427.jpg",
        },
    ];

    const [current, setCurrent] = useState(quotes[0]);

    const handleClick = () => {
        const random = quotes[Math.floor(Math.random() * quotes.length)];
        setCurrent(random);
    };

    return (
        <section
            className="quote-section"
            style={{
                backgroundImage: `url(${current.image})`,
            }}
        >
            <div className="filter">
                <div className="container">
                    <div className="quote-content">
                        <p className="quote-text">"{current.text}"</p>
                        <p className="quote-author">— {current.author}</p>
                        <button onClick={handleClick}>Yana iqtibos</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Quotes;
