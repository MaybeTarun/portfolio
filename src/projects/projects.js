import React, { useState, useEffect } from 'react';
import './projects.css';
import data from './data';
import spree2 from '../assets/spree2.png';

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [rotateDirection, setRotateDirection] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (index === 10) {
      setHoveredCardId(index);
    }
    if (index === 9) {
      setShowPopup(true);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
    setShowPopup(false);
  };

  const handleBtnMouseEnter = () => {
    setRotateDirection((prevDirection) => !prevDirection);
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
        <h1>Projects</h1>
      </div>
      <div className='container'>
        {data.map((item, index) => (
          <div className='card' key={index}>
            <div className='cardhead'>
              {item.image.endsWith('.mp4') ? (
                <video width="100%" height="auto" controls>
                  <source src={item.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={
                    index === 10 && hoveredCardId === 10
                      ? spree2
                      : item.image
                  }
                  alt={item.name}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
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
