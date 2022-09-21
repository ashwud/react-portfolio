import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> AshWad</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/ash.wadud"><AiOutlineInstagram/></a>
        <a href="https://tiktok.com/@ashwud"><FaTiktok/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; AshWad - NO RIGHTS RESERVED</small>
      </div>
    </footer>
  )
}

export default Footer