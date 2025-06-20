import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react";
import './App.css';
import me from './assets/me.png';
import rt from './assets/rt.png';
import Bg from './components/Bg.js';
import Line from './components/Line.js';
import About from './components/About.js';
import Title from './components/Title.js';
import ResumeBtn from './components/ResumeBtn.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Designs from './components/Designs.js';
import Socials from './components/Socials.js';
import Contact from './components/Contact.js';
import Blank from './components/Blank.js';
import Achievements from './components/Achievements.js';
import Preloader from './components/Preloader.js';
import Footer from './components/Footer.js';
import Fact from './components/Fact.js';
import AllProjects from './projects/projects';
import AudioPlayer from 'react-audio-player';
import music from './assets/bgm.mp3';
import cat from './assets/cat.gif';
import { useState, useEffect } from 'react';

const getShouldShowPreloader = () => {
  const data = localStorage.getItem('preloader_shown');
  if (!data) return true;
  try {
    const { value, expiry } = JSON.parse(data);
    if (value !== true) return true;
    if (Date.now() > expiry) return true;
    return false;
  } catch {
    return true;
  }
};

const setPreloaderShown = () => {
  const expiry = Date.now() + 60 * 60 * 1000; // 1 hour
  localStorage.setItem('preloader_shown', JSON.stringify({ value: true, expiry }));
};

const App = () => {
  const [showPreloader, setShowPreloader] = useState(getShouldShowPreloader());

  useEffect(() => {
    if (showPreloader) {
      setPreloaderShown();
      const timer = setTimeout(() => setShowPreloader(false), 5500); // match Preloader duration
      return () => clearTimeout(timer);
    }
  }, [showPreloader]);

  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={
          <>
            {showPreloader && <Preloader />}
            <Bg />
            <ParallaxImage />
            <div className='cv'>
              <div className='me'>
                <a href='https://linktr.ee/maybetarun' target='_blank' rel="noreferrer"><img src={me} alt='me?'></img></a>
              </div>
              <Line />
              <Title />
              <Line />
              <ResumeBtn />
              <Line />
              <Line />
              <About />
              <Line />
              <motion.div className='randomthings'>
                <img src={rt} alt='some things about me'></img>
              </motion.div>
              <Line />
              <Line />
              <div className='head'>Skills</div>
              <Line />
              <Skills />
              <Line />
              <Line />
              <div className='head'>Some Achievements</div>
              <Line />
              <Achievements />
              <Line />
              <Line />
              <div className='head'>Some Projects I did</div>
              <Line />
              <Projects />
              <Line />
              <Line />
              <Line />
              <div className='head'>Random stuff I designed</div>
              <Line />
              <Designs />
              <Line />
              <Line />
              <Line />
              <Line />
              <Line />
              <Socials />
              <Line />
              <Contact />
              <Blank />
            </div>
            <Footer />
            <Fact />
          </>
        } />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/aaargh" element={
          <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0, overflow: 'hidden' }}>
            <iframe
              src="https://aaargh.vercel.app"
              title='aaargh!'
              width="100%"
              height="100%"
              allowFullScreen
              style={{ border: 'none' }}
            ></iframe>
          </div>
        } />
      </Routes>

      <AudioPlayer
        src={music}
        autoPlay
        loop
        volume={0.05}
        style={{ display: 'none' }}
      />

    </Router>
  );
}

const ParallaxImage = () => {
  const { scrollYProgress } = useScroll();
  const [showHeart, setShowHeart] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);

  const y = useTransform(scrollYProgress, [0, 1], ['10%', '25%']);
  const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['5%', '-5%', '10%', '-5%', '15%']);
  const width = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['15%', '13%', '16%', '14%', '18%']);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollYProgress.get() >= 0.98) {
        setShowHeart(true);
      } else {
        setShowHeart(false);
      }
    };

    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollYProgress]);

  if (!isMdScreen) return null;

  return (
    <div style={{ position: 'relative' }}>
      <motion.img
        src={cat}
        alt='parallax'
        style={{
          position: 'fixed',
          top: y,
          left: x,
          width: width,
          height: 'auto',
        }}
        initial={{ y: -300, x: -200 }}
        animate={{ y: 0, x: 0 }}
        transition={{ duration: 3, delay: 3, ease: "linear" }}
      />
      {showHeart && (
        <div style={{ position: 'fixed', top: '47%', left: '24%', fontSize: '45px', zIndex: 10, rotate: '12deg' }}>
          🥰
        </div>
      )}
    </div>
  );
}

export default App;
