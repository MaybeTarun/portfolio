import React from 'react'
import './Designs.css'
import { motion } from 'framer-motion';
import design1 from '../assets/design1.png';
import design2 from '../assets/design2.png';
import design3 from '../assets/design3.png';
import design4 from '../assets/design4.png';
import design5 from '../assets/design5.png';
import design6 from '../assets/design6.png';
import design7 from '../assets/design7.png';
import design8 from '../assets/design8.png';
import design9 from '../assets/design9.png';
import design10 from '../assets/design10.png';
import design11 from '../assets/design11.png';
import design12 from '../assets/design12.png';

const Designs = () => {
  return (
    <div className='designbox'>
        <motion.div className='design' initial={{scale:0.8}} whileInView={{scale:1}} transition={{duration:0}}><img src={design1} alt='design1'></img></motion.div>
        <motion.div className='design' initial={{scale:0.8}} whileInView={{scale:1}} transition={{duration:0}}><img src={design5} alt='design2'></img></motion.div>
        <motion.div className='design' initial={{scale:0.8}} whileInView={{scale:1}} transition={{duration:0}}><img src={design8} alt='design3'></img></motion.div>
        <motion.div className='design' initial={{scale:0.8}} whileInView={{scale:1}} transition={{duration:0}}><img src={design4} alt='design4'></img></motion.div>
        <motion.div className='design' initial={{scale:0.8}} whileInView={{scale:1}} transition={{duration:0}}><img src={design2} alt='design5'></img></motion.div>
        <motion.div className='design' initial={{scale:0.8}} whileInView={{scale:1}} transition={{duration:0}}><img src={design3} alt='design6'></img></motion.div>
        <motion.div className='design' initial={{scale:0.8}} whileInView={{scale:1}} transition={{duration:0}}><img src={design6} alt='design7'></img></motion.div>
        <motion.div className='design' initial={{scale:0.8}} whileInView={{scale:1}} transition={{duration:0}}><img src={design7} alt='design8'></img></motion.div>
        <motion.div className='design' initial={{scale:0.8}} whileInView={{scale:1}} transition={{duration:0}}><img src={design11} alt='design9'></img></motion.div>
        <motion.div className='design' initial={{scale:0.8}} whileInView={{scale:1}} transition={{duration:0}}><img src={design10} alt='design10'></img></motion.div>
        <motion.div className='design' initial={{scale:0.8}} whileInView={{scale:1}} transition={{duration:0}}><img src={design9} alt='design11'></img></motion.div>
        <motion.div className='design' initial={{scale:0.8}} whileInView={{scale:1}} transition={{duration:0}}><img src={design12} alt='design12'></img></motion.div>
    </div>
  )
}

export default Designs