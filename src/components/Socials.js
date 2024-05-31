import React from 'react'
import github from '../assets/github.svg';
import behance from '../assets/behance.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import './Socials.css'
import { motion } from "framer-motion"

const Socials = () => {
  return (
    <div className='socialbox'>
        <motion.div className='social' initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{duration:0}}>
            <a href='http://www.linkedin.com/in/maybetarun' target='_blank' rel="noreferrer"><img src={linkedin} alt='linkedin'></img></a>
        </motion.div>
        <motion.div className='social' initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{duration:0}}>
            <a href='https://twitter.com/MaybeTarun' target='_blank' rel="noreferrer"><img src={twitter} alt='twitter'></img></a>
        </motion.div>
        <motion.div className='social' initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{duration:0}}>
            <a href='https://github.com/MaybeTarun' target='_blank' rel="noreferrer"><img src={github} alt='github'></img></a>
        </motion.div>
        <motion.div className='social' initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{duration:0}}>
            <a href='https://www.behance.net/maybetarun' target='_blank' rel="noreferrer"><img src={behance} alt='behance'></img></a>
        </motion.div>
        <motion.div className='social' initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{duration:0}}>
            <a href='https://instagram.com/maybe._.tarun' target='_blank' rel="noreferrer"><img src={instagram} alt='instagram'></img></a>
        </motion.div>
    </div>
  )
}

export default Socials