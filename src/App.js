import React from 'react';
import './scss/App.scss';
import logo from './images/Logo.svg';
import sunIcon from './images/sun.svg';
import AvatarIcon1 from './images/Avatar-1.png';
import AvatarIcon2 from './images/Avatar-2.png';
import AvatarIcon3 from './images/Avatar-3.png';
import AvatarIcon5 from './images/Avatar-5.png';
import AvatarIcon6 from './images/Avatar-6.png';
import starIcon from './images/star.svg';
import brain from './images/icon1.png';
import monkey from './images/icon2.png';
import arrowIcon from './images/arrow-right.svg';
import clipboardIcon from './images/clipboard.svg';
import peopleIcon from './images/people (1).svg';
import { Course } from './components/Course/Course';
import retroPc from './images/retro-pc.svg';
import chatPhone from './images/chat-phone.svg';
import peopleSvg from './images/people (2).svg';
import { AboutCard } from './components/AboutCard/AboutCard';
import figma from './images/Figma.svg';
import telegram from './images/telegram.svg';
import medium from './images/Medium Logo.svg';
import linkedin from './images/linkedin.svg';
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg';
import burgerMenu from './images/textalign-right.svg';
import lightThemeLogo from './images/light-logo.svg';
import lightThemeSun from './images/light-theme-sun.svg';
import lightThemeBurger from './images/lightBurger.svg';

function App() {
  const [onClickBurger, setOnClickBurger] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  return (
    <div className="App" style={isDark ? { backgroundColor: '#171717' } : {}}>
      <div className="background-circles">
        <span className="first-circle">
          <div className="rate">
            <img
              src={starIcon}
              alt="starIcon"
              style={{
                width: '20px',
                height: '20px',
              }}
            />
            <p>4.8</p>
          </div>
          <img
            src={brain}
            alt="AvatarIcon"
            style={{
              width: '80px',
              height: '80px',
              position: 'absolute',
              bottom: '300px',
              left: '0px',
            }}
          />
          <img
            src={AvatarIcon1}
            alt="AvatarIcon"
            style={{
              width: '80px',
              height: '80px',
              position: 'absolute',
              top: '200px',
              right: '10px',
            }}
          />
          <img
            src={AvatarIcon6}
            alt="AvatarIcon"
            style={{
              width: '80px',
              height: '80px',
              position: 'absolute',
              bottom: '250px',
              right: '10px',
            }}
          />
        </span>
        <span className="second-circle">
          <img
            src={AvatarIcon3}
            alt="AvatarIcon"
            style={{
              width: '80px',
              height: '80px',
              position: 'absolute',
              top: '400px',
              left: '0px',
            }}
          />
          <img
            src={AvatarIcon5}
            alt="AvatarIcon"
            style={{
              width: '80px',
              height: '80px',
              position: 'absolute',
              top: '600px',
              right: '-40px',
            }}
          />
        </span>
        <span className="third-circle">
          <img
            src={AvatarIcon2}
            alt="AvatarIcon"
            style={{
              width: '80px',
              height: '80px',
              position: 'absolute',
              bottom: '400px',
              left: '80px',
            }}
          />
          <img
            src={monkey}
            alt="monkey"
            style={{
              width: '80px',
              height: '80px',
              position: 'absolute',
              bottom: '250px',
              right: '200px',
            }}
          />
        </span>
      </div>
      <main className="wrap">
        <div
          className="burger-menu-overlay"
          style={onClickBurger ? { top: '0px' } : { top: '-100vh' }}
        >
          <nav className="burger-menu-nav">
            <p
              style={isDark ? { color: '#fff' } : {}}
              onClick={() => {
                setOnClickBurger(false);
              }}
            >
              Back
            </p>
            <p style={isDark ? { color: '#fff' } : {}}>Home</p>
            <p style={isDark ? { color: '#fff' } : {}}>About us</p>
            <p style={isDark ? { color: '#fff' } : {}}>Courses</p>
            <p style={isDark ? { color: '#fff' } : {}}>FAQ</p>
            <button className="contact-us-button">Contact Us</button>
            <div
              className="change-theme-button"
              style={isDark ? { border: '1px solid #fff' } : { border: '1px solid #000' }}
            >
              <img
                src={isDark ? lightThemeSun : sunIcon}
                alt="sun"
                onClick={() => {
                  setIsDark(!isDark);
                }}
              />
            </div>
          </nav>
        </div>
        <header className="header">
          <img src={isDark ? lightThemeLogo : logo} alt="logo" className="logo" />
          <nav className="nav-links">
            <p style={isDark ? { color: '#fff' } : {}}>Home</p>
            <p style={isDark ? { color: '#fff' } : {}}>About us</p>
            <p style={isDark ? { color: '#fff' } : {}}>Courses</p>
            <p style={isDark ? { color: '#fff' } : {}}>FAQ</p>
            <button className="contact-us-button">Contact Us</button>
            <div className="change-theme-button">
              <img
                src={isDark ? lightThemeSun : sunIcon}
                alt="sun"
                onClick={() => {
                  setIsDark(!isDark);
                }}
              />
            </div>
          </nav>
          <img
            src={isDark ? lightThemeBurger : burgerMenu}
            alt="burgerMenu"
            width={'40px'}
            className="burger-menu"
            onClick={() => {
              setOnClickBurger(true);
            }}
          />
        </header>
        <article className="call-to-action-block">
          <h1 style={isDark ? { color: '#fff' } : {}}>
            Where the joy of learn meets the power of community
          </h1>
          <p style={isDark ? { color: '#fff' } : {}}>
            Dive deep in immersive, interactive small groups. Expand horizons, engage in
            discussions, and elevate your learning journey with us.
          </p>
          <button className="cta-button">Start your travel</button>
          <div className="second-cta-button">
            <p>Watch video</p>
            <img src={arrowIcon} alt="arrow" width={'25px'} />
          </div>
        </article>
        <article className="benefits-block">
          <div className="benefit">
            <img src={clipboardIcon} alt="clipboardIcon" width={'25px'} />
            <div className="benefit-info">
              <h2>Explore topics</h2>
              <p>Explore our selection of courses in development</p>
            </div>
          </div>
          <div className="benefit">
            <img src={peopleIcon} alt="clipboardIcon" width={'25px'} />
            <div className="benefit-info">
              <h2>Meet new friends</h2>
              <p>Join the network with million of students and learn</p>
            </div>
          </div>
          <div className="benefit">
            <img src={peopleIcon} alt="clipboardIcon" width={'25px'} />
            <div className="benefit-info">
              <h2>Learn code</h2>
              <p>Learn all about code and become in a developer</p>
            </div>
          </div>
        </article>
        <article className="courses-block">
          <h3 style={isDark ? { color: '#fff' } : {}}>Popular courses</h3>
          <section className="courses-wrap">
            <Course isDark={isDark} />
            <Course isDark={isDark} />
            <Course isDark={isDark} />
            <Course isDark={isDark} />
          </section>
        </article>
      </main>
      <article className="about-block">
        <h5>Emily Rolando</h5>
        <p>
          I recently started learning to code with Tian and it's been a game-changer. The lessons
          are clear and engaging, perfect for beginners like me. I've already built my first app
          thanks to their hands-on approach. Highly recommend Tian for anyone starting their coding
          journey!
        </p>
      </article>
      <article className="about-cards-wrap" style={isDark ? { backgroundColor: '#171717' } : {}}>
        <AboutCard
          img={retroPc}
          title={'Explore Topics'}
          p={`Dive deep into our diverse catalog featuring a curated selection of courses in the realms
            of arts and writing. Experience knowledge crafted by experts, designed to inspire and
            nurture your creative journey.`}
          isDark={isDark}
        />

        <AboutCard
          img={peopleSvg}
          title={'Meet new Friends'}
          p={`Connect with our expansive network, match with like-minded peers, and learn code together`}
          isDark={isDark}
        />

        <AboutCard
          img={chatPhone}
          title={'Find '}
          p={`Connect with people around the world in a huge community with million of students`}
          isDark={isDark}
        />
      </article>
      <footer className="footer">
        <div className="footer-left">
          <img src={isDark ? lightThemeLogo : logo} alt="logo" className="logo" />
          <div className="socials">
            <img src={instagram} alt="instagram" width={'35px'} />
            <img src={twitter} alt="twitter" width={'35px'} />
            <img src={linkedin} alt="linkedin" width={'35px'} />
            <img src={figma} alt="figma" width={'35px'} />
            <img src={telegram} alt="telegram" width={'35px'} />
            <img src={medium} alt="medium" width={'35px'} />
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-category-nav">
            <h6 style={isDark ? { color: '#fff' } : {}}>Products</h6>
            <p style={isDark ? { color: '#fff' } : {}}>Courses</p>
            <p style={isDark ? { color: '#fff' } : {}}>Development</p>
          </div>
          <div className="footer-category-nav">
            <h6 style={isDark ? { color: '#fff' } : {}}>Resources</h6>
            <p style={isDark ? { color: '#fff' } : {}}>Careers</p>
            <p style={isDark ? { color: '#fff' } : {}}>Blog</p>
          </div>
          <div className="footer-category-nav">
            <h6 style={isDark ? { color: '#fff' } : {}}>Company</h6>
            <p style={isDark ? { color: '#fff' } : {}}>QA</p>
            <p style={isDark ? { color: '#fff' } : {}}>Terms and conditions</p>
            <p style={isDark ? { color: '#fff' } : {}}>Privacy policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
