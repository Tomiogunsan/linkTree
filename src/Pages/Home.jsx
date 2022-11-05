import React from 'react'
import './Home.css'
import myProfilePic from "../assets/my cv pic.jpg";
import {RiShareForwardLine } from 'react-icons/ri'
import slack from "../assets/slack.svg"
import github from "../assets/github.svg"
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
         <main>
        <div className="container">
          <div className="row">
            <section id="profile">
              <div className="profile__container">
                <figure className="profile__img--mask">
                  <img id="profile__img" src={myProfilePic} alt="" />
                </figure>
                <h2 className="profile__name">Pretomia</h2>
                <div className="button__wrapper">
                  <button className="button__share">
                    <RiShareForwardLine className="share" />
                    < GiHamburgerMenu className="hamburger" />
                  </button>
                </div>
              </div>
            </section>
            <section id="links">
              <div className="links__wrapper">
                <div className="link">
                <a href="https://twitter.com/pretomia2" target="_blank" rel='noreferrer'>
                  <button className="link__btn " id="twitter">Twitter Link</button>
                </a>
                </div>
                <div id="slack" className="link">
                <a href="https://slack.com/pretomia" target="_blank" rel='noreferrer'>
                  <button className="link__btn">Slack</button>
                </a>
                </div>
                <div className="link">
                <a href="https://training.zuri.team/" target="_blank" rel='noreferrer'>
                  <button className="link__btn" id="btn__zuri">Zuri Team</button>
                </a>
                </div>
                <div className="link">
                <a href="http://books.zuri.team/" target="_blank" rel='noreferrer'>
                  <button className="link__btn" id="books">Zuri Books</button>
                </a>
                </div>
                <div className="link">
                <a href="https://books.zuri.team/python-for-beginners?ref_id=pretomia" target="_blank" rel='noreferrer'>
                  <button className="link__btn" id="book__python">Python Books</button>
                </a>
                </div>
                <div className="link">
                <a href="https://background.zuri.team/" target="_blank" rel='noreferrer'>
                  <button className="link__btn" id="pitch">BackGround Check for Coders</button>
                </a>
                </div>
                <div className="link">
                <a href="https://books.zuri.team/design-rules" target="_blank" rel='noreferrer'>
                  <button className="link__btn" id="book__design">Design Books</button>
                </a>
                </div>
                <div className='link'>
                  <Link to='/contact'>
                    <button className='link_btn' id='contact'>Contact Me</button>
                  </Link>
                </div>
              </div>
            </section>
            <section id="social">
              <div className="social__wrapper">
                  <a href="https://slack.com/pretomia" target="_blank" rel='noreferrer'>
                    <img src={slack} alt="Github"/></a>
                  <a href="https://github.com/Tomiogunsan" target="_blank"rel='noreferrer' className="github__icon">
                    <img src={github} alt="Github" /></a>
              </div>  
            </section>
          </div>
        </div>
      </main>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default Home