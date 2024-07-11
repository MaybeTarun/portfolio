import React, { useState, useEffect, useRef } from 'react';
import './projects.css';
import data from './data';
import spree2 from '../assets/spree2.png';
import die1 from '../assets/die1.png';
import die2 from '../assets/die2.png';
import die3 from '../assets/die3.png';
import die4 from '../assets/die4.png';
import die5 from '../assets/die5.png';
import die6 from '../assets/die6.png';

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCardName, setHoveredCardName] = useState(null);
  const [rotateDirection, setRotateDirection] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [diceImage, setDiceImage] = useState(null);
  const videoRefs = useRef({});

  const diceImages = [die1, die2, die3, die4, die5, die6];

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (name, index) => {
    if (name === 'Spree') {
      setHoveredCardName(name);
    }
    if (name === 'Sentiment Analyzer') {
      setShowPopup(true);
    }
    if (name === 'Dice Simulator') {
      const randomImage = diceImages[Math.floor(Math.random() * diceImages.length)];
      setDiceImage(randomImage);
    }
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch(error => {
        console.log('Failed to play the video:', error);
      });
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredCardName(null);
    setShowPopup(false);
    setDiceImage(null);
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  const handleBtnMouseEnter = () => {
    setRotateDirection((prevDirection) => !prevDirection);
  };

  const isVideo = (src) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg'];
    return videoExtensions.some(extension => src.endsWith(extension));
  };

  return (
    <div className='app'>
      {showPopup && (
        <div className='popup'>
          <div className='popuptext'>
            <p>You seem impressed 🥰</p>
          </div>
        </div>
      )}
      <div
        className='bggrad'
        style={{
          position: 'fixed',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div className='heading'>
        <h1>My Projects</h1>
      </div>
      <div className='container'>
        {data.map((item, index) => (
          <div className='card' key={item.name}>
            <div className='cardhead'>
              {isVideo(item.image) ? (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  width="100%"
                  height="auto"
                  controls
                  src={item.image}
                  onMouseEnter={() => handleMouseEnter(item.name, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={
                    item.name === 'Spree' && hoveredCardName === 'Spree'
                      ? spree2
                      : item.name === 'Dice Simulator' && diceImage
                      ? diceImage
                      : item.image
                  }
                  alt={item.name}
                  onMouseEnter={() => handleMouseEnter(item.name, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                />
              )}
            </div>
            <div className='cardfoot'>
              <div className='name'>
                <p>{item.name}</p>
                <a
                  href={item.link}
                  className={`btn ${rotateDirection ? 'hover-style-1' : 'hover-style-2'}`}
                  target='_blank'
                  rel="noopener noreferrer"
                  onMouseEnter={handleBtnMouseEnter}
                >
                  Visit
                </a>
              </div>
              <div className='desc'>
                <p>{item.desc}</p>
              </div>
              <div className='skills'>
                {item.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className='skill'>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className='card'>
          <p className='more'>More coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
