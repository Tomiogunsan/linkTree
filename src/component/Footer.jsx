import React from 'react'
import zuri from "../assets/Zuri.svg"
import ingress from "../assets/ingressive.svg"
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__wrapper">
            <img src={zuri} alt="" />
            <p>HNG Internship 9 Frontend Task</p>
            <img src={ingress} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
