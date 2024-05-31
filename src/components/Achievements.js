import React from 'react'
import './Achievements.css'
import badge1 from '../assets/badge1.png';
import badge2 from '../assets/badge2.png';
import badge3 from '../assets/badge3.png';
import badge4 from '../assets/badge4.png';
import cert1 from '../assets/SIH.jpg';
import { motion } from "framer-motion"

const Achievements = () => {
  return (
    <div className='achievementbox'>
        <motion.div className='badges' initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{duration:0}}> 
            <a href='https://www.credly.com/badges/712255f1-8bbc-4878-b80a-8282844ec96f/public_url' target='_blank' rel="noreferrer"><img src={badge1} alt='Solution Architect Associate C03'></img></a>
            <a href='https://www.credly.com/badges/c8a052ee-3fa7-4314-abc6-719a8d34ba0c/public_url' target='_blank' rel="noreferrer"><img src={badge2} alt='Cloud Quest Cloud Practioner'></img></a>
            <a href='https://www.credly.com/badges/9a8631d4-c12a-4f38-aef2-9ede8e7bfd55/public_url' target='_blank' rel="noreferrer"><img src={badge3} alt='AWS Academy Cloud Architecting'></img></a>
            <a href='https://www.credly.com/badges/61b36c7a-3d84-4ce0-b620-c530c0c5aaca/public_url' target='_blank' rel="noreferrer"><img src={badge4} alt='AWS Academy Cloud Foundation'></img></a>
        </motion.div>
        <motion.div className='certs' initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{duration:0}}>
        <a href='https://drive.google.com/file/d/1c9S_BLfHfiu1z_aR9dyhQRFkLOiInrKH/view?usp=sharing' target='_blank' rel="noreferrer"><img src={cert1} alt='SIH 2023 - Rank 12'></img></a>
        {/* <a href='' target='_blank' rel="noreferrer"><img src={cert1} alt=''></img></a> */}
        </motion.div>
    </div>
  )
}

export default Achievements