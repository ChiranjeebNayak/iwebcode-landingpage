import React from 'react'
import './hero.css'
import text from '../assets/img/herotext.png'
import rectangle from '../assets/img/Rectangle.png'
function Hero() {
    return (
        <div className="hero container mt-3 mb-3">
            <div className="row">
                <div className="col">
                    <div className="text">
                        <h2 className="content">I’m Arnau Ros, a graphic designer & content creator based in Barcelona.<br></br> Available for freelance & collaborations. </h2>
                    </div>
                </div>
                <div className="col">
                    <div className="image">
                        <img src={rectangle} alt="rectangle" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
