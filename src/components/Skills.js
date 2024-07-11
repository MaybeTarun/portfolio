import React from 'react'
import './Skills.css';
import {backInOut, motion} from "framer-motion"


const Skills = () => {
  return (
    <div className='skillbox'>
        <motion.div className='skillbar' initial={{ width: '50%' }} whileInView={{ width: '85%' }} transition={{ ease: backInOut }}>
          <div className='skillname'>Programming [ Python, Java, C++, Latex ]</div>
        </motion.div>
        <motion.div className='skillbar' initial={{ width: '50%' }} whileInView={{ width: '95%' }} transition={{ ease: backInOut }}>
          <div className='skillname'>Web Development [ MERN, LAMP ]</div>
        </motion.div>
        <motion.div className='skillbar' initial={{ width: '50%' }} whileInView={{ width: '55%' }} transition={{ ease: backInOut }}>
          <div className='skillname'>Android Development [ Kotlin, XML ]</div>
        </motion.div>
        <motion.div className='skillbar' initial={{ width: '50%' }} whileInView={{ width: '75%' }} transition={{ ease: backInOut }}>
          <div className='skillname'>Database Management [ MySQL, MongoDB ]</div>
        </motion.div>
        <motion.div className='skillbar' initial={{ width: '50%' }} whileInView={{ width: '82%' }} transition={{ ease: backInOut }}>
          <div className='skillname'>Amazon Web Services [ Solution Architect Associate ]</div>
        </motion.div>
        <motion.div className='skillbar' initial={{ width: '50%' }} whileInView={{ width: '78%' }} transition={{ ease: backInOut }}>
          <div className='skillname'>UI/UX Desiging [ Figma, Photoshop ]</div>
        </motion.div>
        <motion.div className='skillbar' initial={{ width: '50%' }} whileInView={{ width: '120%' }} transition={{ ease: backInOut }}>
          <div className='skillname'>Making Random Jokes . . .</div>
        </motion.div>
    </div>
  )
}

export default Skills