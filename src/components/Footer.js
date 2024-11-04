import React, { useEffect, useState } from 'react'
import './Footer.css'
import smile from '../assets/smile.svg';

const Footer = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            // console.log(mouseX, mouseY);
            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle-180);
        })
    })

  return (
    <footer>
        <div className='footer'>
            <div className='eyebox'>
                <div className='eye'>
                    <div className='eyeball'>
                        <div className='eyeline' style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}>
                            <div className='eyeball2'></div>
                        </div>
                    </div>
                </div>
                <div className='eye'>
                    <div className='eyeball'>
                        <div className='eyeline' style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}>
                            <div className='eyeball2'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='smilee'><img src={smile} alt='smile'></img></div>
        </div>
    </footer>
  )
}

export default Footer