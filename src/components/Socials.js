import React from 'react'
import github from '../assets/github.svg';
import behance from '../assets/behance.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import './Socials.css'
// import { motion } from "framer-motion"

const Socials = () => {
  return (
    <div className='socialbox'>
        <div className='social'>
            <a href='http://www.linkedin.com/in/maybetarun' target='_blank' rel="noreferrer"><img src={linkedin} alt='linkedin'></img></a>
        </div>
        <div className='social'>
            <a href='https://twitter.com/MaybeTarun' target='_blank' rel="noreferrer"><img src={twitter} alt='twitter'></img></a>
        </div>
        <div className='social'>
            <a href='https://github.com/MaybeTarun' target='_blank' rel="noreferrer"><img src={github} alt='github'></img></a>
        </div>
        <div className='social'>
            <a href='https://www.behance.net/maybetarun' target='_blank' rel="noreferrer"><img src={behance} alt='behance'></img></a>
        </div>
        <div className='social'>
            <a href='https://instagram.com/maybe._.tarun' target='_blank' rel="noreferrer"><img src={instagram} alt='instagram'></img></a>
        </div>
    </div>
  )
}

export default Socials