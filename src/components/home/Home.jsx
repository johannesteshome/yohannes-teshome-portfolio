import React from 'react'
import profileImg from '../../assets/profile-img.png'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'

import {
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaLinkedin,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import './home.css'
import CV from '../../assets/Zoe-CV.pdf'

const Home = () => {
    return (
      <section
        className='home'
        id='home'>
        <div className='home__wrapper'>
          <div className='home__container container'>
            <p className='home__subtitle text-cs'>
              Hello, <span>My Name Is</span>
            </p>

            <h1 className='home__title text-cs'>
              <span>Yohannes</span> Teshome
            </h1>

            <p className='home__job'>
              <span className='text-cs'>I Am</span>{" "}
              <b>Web Developer & Data Scientist</b>
            </p>

            <div className='home__img-wrapper'>
              {/* <div className="home__banner">
                            <img src={profileImg} alt="" className='home__profile' />
                        </div> */}

              {/* <p className="home__data home__data-one">
                            <span className="text-lg">
                                12 <b>+</b>
                            </span>

                            <span className="text-sm text-cs">
                                Years of <span>Experience</span>
                            </span>
                        </p> */}

              {/* <p className="home__data home__data-two">
                            <span className="text-lg">
                                330
                            </span>

                            <span className="text-sm text-cs">
                                Completed <span>Projects</span>
                            </span>
                        </p> */}

              <img
                src={shapeOne}
                alt=''
                className='shape shape__1'
              />
              {/* <img src={shapeTwo} alt="" className="shape shape__2" /> */}
              {/* <img src={shapeTwo} alt="" className="shape shape__3" /> */}
            </div>

            <p className='home__text'>
              From Addis Ababa, Ethiopia. I have rich experience in web design
              and development, along with a good knowledge of Data Science. I am
              passionate about UI/UX design and love to create beautiful and
              intuitive websites.
            </p>

            <div className='home__socials'>
              <a
                href='https://www.linkedin.com/in/yohannes-teshome'
                className='home__social-link'>
                <FaLinkedin />
              </a>

              <a
                href='https://github.com/johannesteshome'
                className='home__social-link'>
                <FaGithub />
              </a>

              <a
                href='https://t.me/Yohannes_Teshome'
                className='home__social-link'>
                <FaTelegram />
              </a>
            </div>

            <div className='home__btns'>
              <a
                download='../../assets/Yohannes-Teshome-Resume.pdf'
                href={CV}
                className='btn text-cs'>
                Download CV
              </a>

              <a
                href='#skills'
                className='hero__link text-cs'>
                My Skills
              </a>
            </div>
          </div>

          <div className='section__deco deco__left'>
            <img
              src={shapeOne}
              alt=''
              className='shape'
            />
          </div>
        </div>

        <div className='section__bg-wrapper'>
          <span className='bg__title'>Web Developer</span>
        </div>
      </section>
    );
}

export default Home