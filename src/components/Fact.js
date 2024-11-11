import React, { useState } from 'react'
import './Fact.css'
import copy from '../assets/copy.png';
import {motion} from 'framer-motion';

const Fact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const copyToClipboard = () => {
    const textToCopy = 'npx know-about tarun';
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  }

  return (
    <motion.div className='fact' initial={{scale:0.8}} whileInView={{scale:1}}>
      <p className='facttext'>Run</p>
      <div className='copy'>
        <input type='text' value={'npx know-about tarun'} readOnly />
        <button onClick={copyToClipboard}><img src={copy} alt='npx know-about tarun' /></button>
      </div>
      <p className='facttext'>in your terminal</p>
      {showPopup && <div className='popup'>Copied!</div>}
    </motion.div>
  )
}

export default Fact
