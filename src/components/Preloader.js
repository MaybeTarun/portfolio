import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [firstOpacity, setFirstOpacity] = useState(0);
  const [secondOpacity, setSecondOpacity] = useState(0);
  const [thirdOpacity, setThirdOpacity] = useState(0);
  const [preloaderOpacity, setPreloaderOpacity] = useState(1);
  const [slideDown, setSlideDown] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFirstOpacity(1);
    }, 1000);

    const timer2 = setTimeout(() => {
      setSecondOpacity(1);
    }, 2000);

    const timer3 = setTimeout(() => {
      setThirdOpacity(1);
    }, 3000);

    const slideDownTimer = setTimeout(() => {
      setSlideDown(true);
    }, 4000);

    const fadeOutTimer = setTimeout(() => {
      setPreloaderOpacity(0);
    }, 4500);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(slideDownTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    isVisible && (
      <div className='preloader' style={{ opacity: preloaderOpacity }}>
        <div className='texts-container'>
          <span
            style={{ opacity: firstOpacity }}
            className={slideDown ? 'slide-down' : ''}
          >
            Software Developer
          </span>
          <span
            style={{ opacity: secondOpacity }}
            className={slideDown ? 'slide-down' : ''}
          >
            Designer
          </span>
          <span
            style={{ opacity: thirdOpacity }}
            className={slideDown ? 'slide-down' : ''}
          >
            Cloud Solution Architect
          </span>
        </div>
      </div>
    )
  );
};

export default Preloader;
