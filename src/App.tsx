import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SlideComponent from './component/slidecomponet'

function App() {

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
  }

  return (
    <>
      <div className="app">
        <img src='/Frame 1.png' alt='Background' className='background-image' />
        <div className='overlay'>
          <div className='slidDown'>
            <div className='header'>
              <div className='logo'>LOGO</div>
              <div className='menu'>
                <span>ABOUT</span>
                <span>BLOG</span>
                <span>DESTINATION</span>
              </div>
            </div>
          </div>
          <div className='slideup'>
            <div className='content'>
              <h1>DISCOVER</h1>
              <h2>Your TOURIST DESTINATION</h2>
            </div>
            <div className='social-icons'>
              <a target='_blank' rel='noopener'
                href='https://x.com/i/flow/login'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a target='_blank' rel='noopener'
                href='https://www.instagram.com/'
              >
                <i className='fab fa-instagram'></i>
              </a>
              <a target='_blank' rel='noopener'
                href='https://www.facebook.com/'
              >
                <i className='fab fa-facebook'></i>
              </a>
            </div>

            <button onClick={handleClick} className='scroll-button'>SCROLL</button>
            {toggle && <SlideComponent />}

          </div>

        </div>
      </div>

    </>

  );
}

export default App;
