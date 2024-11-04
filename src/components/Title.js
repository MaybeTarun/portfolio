import React from 'react'
import './Title.css'
import { Typewriter } from 'react-simple-typewriter';

const Title = () => {
  return (
    <div className='titlebox'>
      <div className='title'>TARUN GUPTA</div>
      <div className='subtitle'> — &nbsp;
      <Typewriter
        words={[
          'Fullstack Developer',
          'Software Developer',
          'Creative Designer',
          'Cloud Solution Architect'
        ]}
        loop={Infinity}
        cursor
        cursorStyle='|'
        typeSpeed={100}
        deleteSpeed={80}
        delaySpeed={1000}
      />
      </div>
    </div>
  )
}

export default Title