import React from 'react'
// import {Route, Routes} from 'react-router-dom';
import './App.css';
// import bg from './assets/bg.png';
import me from './assets/me.png';
import rt from './assets/rt.png';
import Bg from './components/Bg.js';
import Line from './components/Line.js';
import About from './components/About.js';
import Title from './components/Title.js';
import ResumeBtn from './components/ResumeBtn.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Designs from './components/Designs.js';
import Socials from './components/Socials.js';
import Contact from './components/Contact.js';
import Blank from './components/Blank.js';

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