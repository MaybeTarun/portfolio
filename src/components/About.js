import React from 'react'
import './About.css';
import me2 from '../assets/me2.jpg';
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className='aboutbox'>
        <div className='left'>
          <motion.p className='p1' initial={{scale:0.8}} whileInView={{scale:1}} transition={{duration:0}}>I'm <span className='span1'>Tarun Gupta</span>,<br/>A Software Developer<br/><span className='span2'>in development</span></motion.p>
          <p className='p2'>I have spent the past 4+ years learning a variety of skills; <span>P</span>rogramming, <span>W</span>eb <span>D</span>evelopment, <span>A</span>ndroid <span>D</span>evelopment, <span>G</span>raphic <span>D</span>esigning, <span>C</span>loud <span>C</span>omputing (AWS), <span>M</span>achine <span>L</span>earning, <span>UI/UX</span>, <span>P</span>roject <span>M</span>anagement and a bit of <span>B</span>lockchain. Other than work, you can find me playing Badminton or video games.</p>
          <p className='p3'>My goal is to make a living out of developing random things and learn alot more skills along my journey.<br/> I also <a href='https://www.upwork.com/freelancers/~01993e267b8aac12fd' target='_blank' rel="noreferrer">Freelance</a>.</p>
        </div>
        <div className='right'>
          <img src={me2} alt='me'></img>
        </div>
    </div>
  )
}

export default About