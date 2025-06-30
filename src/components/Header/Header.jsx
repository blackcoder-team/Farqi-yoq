import React from 'react'
import './Header.css'
import '../app/App.css'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <div className="row justify-content-between align-center">
                        <div className="col-3 align-center">
                            <h1 className='m-0'>FARQI YO'Q</h1>
                        </div>
                        <div className="col-8 d-flex align-center justify-content-end">
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Musics</a></li>
                                <li><a href="">Quotes</a></li>
                                <li><a href="">Movies</a></li>
                                <li><a href="">Share With Us</a></li>
                                <li><a href="">Twits</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li className='sign-in'><a href="">Sign In</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="hero">
                <div className="container">
                    <div className="text">
                        <h1>Farqi yo'q</h1>
                        <p>Qanaqa qilsang ham farqi yo'q, lekin qil!</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header