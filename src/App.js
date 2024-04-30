import React from 'react'
// import {Route, Routes} from 'react-router-dom';
import './global.css';
// import bg from './assets/bg.png';
import me from './assets/me.png';
import rt from './assets/rt.png';
import Bg from './Bg.js';
import Line from './Line.js';
import About from './About.js';
import Title from './Title.js';
import ResumeBtn from './ResumeBtn.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Designs from './Designs.js';
import Socials from './Socials.js';
import Contact from './Contact.js';
import Blank from './Blank.js';

const App = () => {
  return (
    <>
        <Bg/>

        <div className='cv'>
            <div className='me'>
                <a href='https://linktr.ee/maybetarun' target='_blank' rel="noreferrer"><img src={me} alt='me?'></img></a>
            </div>

            <Line/>

            <Title/>

            <Line/>

            <ResumeBtn/>

            <Line/>
            <Line/>

            {/* <div className='head'>About Me</div> */}

            {/* <Line/> */}

            <About/>

            <Line/>

            <div className='randomthings'>
                <img src={rt} alt='some things about me'></img>
            </div>

            <Line/>
            <Line/>

            <div className='head'>What can I Do?</div>

            <Line/>

            <Skills/>

            <Line/>
            <Line/>

            <div className='head'>Some Projects I did</div>

            <Line/>

            <Projects/>

            <Line/>
            <Line/>
            <Line/>

            <div className='head'>I design stuff when I'm bored</div>

            <Line/>

            <Designs/>

            <Line/>
            <Line/>
            <Line/>
            <Line/>
            <Line/>

            <Socials/>

            <Line/>

            <Contact/>

            <Blank/>

        </div>
    </>
  )
}

export default App