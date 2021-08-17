import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import vector from '../assets/img/Vector (1).png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return (
        <div className="footer container">
            <div className="row">
                <h3>Join the Newsletter!</h3>
                <h4>You’ll receive an email every once in a while about new<br></br> products, courses, and videos!</h4>
                <input className="form-control" type="email" placeholder="name@example.com"></input>
                <button className="btn btn-secondary"><FontAwesomeIcon icons={faArrowRight} className="arrow"></FontAwesomeIcon> </button>
                <p>We’ll never share your details. See our Privacy Policy</p>
            </div>
            <div className="row">
                <div className="col">
                    <div className="company">
                        <span className="logo">ar</span>
                        <span className="copyright">© 2021 Arnau Ros, LLC. All rights reserved.</span>
                    </div>
                </div>
                <div className="col">
                    <ul>
                        <li className="icons"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></li>
                        <li className="icons"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></li>
                        <li className="icons"><FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
