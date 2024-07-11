import React from 'react';
import './Projects.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='projectbox'>
      <div className='project'>
        <motion.div className='ptitle' initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{duration:0}}>Concrete Damage Detector</motion.div>
        <div className='pdesc'>Implemented a Deep Learning model using YOLO-v8 which can detect and segment damages on concrete surfaces in real-time and help maintain strength and integrity of buildings. The model is trained on a custom dataset made using Roboflow.</div>
        <div className='plink'><a href='https://github.com/MaybeTarun/Concrete-Damage-Detector' target='_blank' rel="noreferrer"><button>Link</button></a></div>
      </div>
      <div className='line2'></div>
      <div className='projectt'>
        <motion.div className='ptitle' initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{duration:0}}>Cognify</motion.div>
        <div className='pdesc'>Developed a cloud based learning platform using Kotlin and XML that automates learning methods making it easy for the user to learn and understand things. It uses OpenAI as its AI model.</div>
        <div className='plink'><a href='https://maybetarun.github.io/CognifyWebsite.github.io/' target='_blank' rel="noreferrer"><button>Link</button></a></div>
      </div>
      <div className='line2'></div>
      <div className='project'>
        <motion.div className='ptitle' initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{duration:0}}>Foresty</motion.div>
        <div className='pdesc'>Created a user-friendly platform that helps users in finding vulnerabilities (such as open ports) in their websites which anyone could have used to hack them. It uses a shell script which automates the process of vulnerability assessment.</div>
        <div className='plink'><a href='https://maybetarun.github.io/Foresty/' target='_blank' rel="noreferrer"><button>Link</button></a></div>
      </div>
      <div className='line2'></div>
      <div className='projectt'>
        <motion.div className='ptitle' initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{duration:0}}>More Projects</motion.div>
        <div className='pdesc'>I love to make random projects and websites which u can check out by clicking on the button below</div>
        <div className='plink'><Link to='/projects'><button>Link</button></Link></div>
      </div>
    </div>
  );
}

export default Projects;
