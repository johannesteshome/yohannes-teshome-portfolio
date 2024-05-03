import React from 'react'
import { FaBehance, FaDribbble, FaTwitter, FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
    return (
      <footer className='footer'>
        <div className='footer__container container grid'>
          <div className='footer__socials'>
            <a
              href='https://www.linkedin.com/in/yohannes-teshome'
              className='footer__social-link'>
              <FaLinkedin />
            </a>

            <a
              href='https://github.com/johannesteshome'
              className='footer__social-link'>
              <FaGithub />
            </a>

            <a
              href='https://t.me/Yohannes_Teshome'
              className='footer__social-link'>
              <FaTelegram />
            </a>
          </div>

          <p className='footer__copyright text-cs'>
            &copy; 2023 <span>Luique</span>. All Rights Reserved
          </p>

          <p className='footer__copyright text-cs'>
            Developed by <span>CrypticalCoder</span>
          </p>
        </div>
      </footer>
    );
}

export default Footer