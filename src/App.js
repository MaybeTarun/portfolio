import React from 'react'
// import {Route, Routes} from 'react-router-dom';
import {motion} from "framer-motion"
import { Analytics } from "@vercel/analytics/react"

import './App.css';
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
import Achievements from './components/Achievements.js';
import Preloader from './components/Preloader.js';
import Footer from './components/Footer.js';
import Fact from './components/Fact.js';

const App = () => {
  return (
    <>

    <Analytics></Analytics>

        <Preloader/>

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

            <motion.div className='randomthings'>
                <img src={rt} alt='some things about me'></img>
            </motion.div>

            <Line/>
            <Line/>

            <div className='head'>Skills</div>

            <Line/>

            <Skills/>

            <Line/>
            <Line/>

            <div className='head'>Achievements</div>

            <Line/>

            <Achievements/>

            <Line/>
            <Line/>

            <div className='head'>Some Projects I did</div>

            <Line/>

            <Projects/>

            <Line/>
            <Line/>
            <Line/>

            <div className='head'>Random stuff I designed</div>

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

        <Footer/>

        <Fact/>
    </>
  )
}

export default App