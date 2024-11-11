import React, { useState, useCallback } from 'react';
import './Projects.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import img1 from '../assets/concrete2.png';
import img2 from '../assets/aaargh.png';
import img3 from '../assets/cognify2.png';

const HoverImage = React.memo(({ src, position }) => (
  <img
    src={src}
    alt=''
    className='hover-image'
    style={{
      top: `${position.y}px`,
      left: `${position.x}px`,
      transform: 'translate(-50%, -50%)',
      position: 'fixed',
    }}
  />
));

const Projects = () => {
  const [showImage, setShowImage] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeImage, setActiveImage] = useState(null);

  const handleMouseEnter = (image) => {
    setActiveImage(image);
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
    setActiveImage(null);
  };

  const handleMouseMove = useCallback(
    (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    },
    [setPosition]
  );

  return (
    <div className='projectbox'>
      {showImage && activeImage && (
        <HoverImage src={activeImage} position={position} />
      )}
      <div className='project'>
        <motion.div
          className='ptitle'
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0 }}
          onMouseEnter={() => handleMouseEnter(img1)}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          Concrete Damage Detector
        </motion.div>
        <div className='pdesc'>
          Implemented a Deep Learning model using YOLO-v8 which can detect and segment damages on concrete surfaces in real-time and help maintain strength and integrity of buildings. The model is trained on a custom dataset made using Roboflow.
        </div>
        <div className='plink'>
          <a href='https://github.com/MaybeTarun/Concrete-Damage-Detector' target='_blank' rel="noreferrer">
            <button>Link</button>
          </a>
        </div>
      </div>
      <div className='line2'></div>
      <div className='projectt'>
        <motion.div
          className='ptitle'
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0 }}
          onMouseEnter={() => handleMouseEnter(img2)}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          AAARGH !
        </motion.div>
        <div className='pdesc'>
          Innovated and crafted a game inspired by Flappy Bird, featuring unique sound-based controls. You would have to scream every time you want the player to jump.
        </div>
        <div className='plink'>
          <a href='https://aaargh.vercel.app/' target='_blank' rel="noreferrer">
            <button>Link</button>
          </a>
        </div>
      </div>
      <div className='line2'></div>
      <div className='project'>
        <motion.div
          className='ptitle'
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0 }}
          onMouseEnter={() => handleMouseEnter(img3)}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          Cognify
        </motion.div>
        <div className='pdesc'>
          Developed a cloud-based learning platform using Kotlin and XML that automates learning methods, making it easy for the user to learn and understand things. It uses OpenAI as its AI model.
        </div>
        <div className='plink'>
          <a href='https://maybetarun.github.io/CognifyWebsite.github.io/' target='_blank' rel="noreferrer">
            <button>Link</button>
          </a>
        </div>
      </div>
      <div className='line2'></div>
      <div className='projectt'>
        <motion.div
          className='ptitle'
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          More Projects
        </motion.div>
        <div className='pdesc'>
          You can check out all my projects and ideas by clicking on the button below.
        </div>
        <div className='plink'>
          <Link to='/projects'><button>Link</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
