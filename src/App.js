import React from 'react'
// import {Route, Routes} from 'react-router-dom';
import './global.css';
import bg from './assets/bg.png';
import me from './assets/me.png';
import rt from './assets/rt.png';
import github from './assets/github.svg';
import behance from './assets/behance.svg';
import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg';
import instagram from './assets/instagram.svg';

const App = () => {
  return (
    <>
        <div className='bg'>
            <img src={bg} alt='bro your internet is so slow ;-;'></img>
        </div>

        <div className='cv'>
            <div className='me'>
                <a href='https://linktr.ee/maybetarun' target='_blank' rel="noreferrer"><img src={me} alt='me?'></img></a>
            </div>

            <div className='line'></div>

            <div className='titlebox'>
                <div className='title'>Tarun Gupta</div>
                <div className='subtitle'>Software Developer and Designer</div>
            </div>

            <div className='line'></div>

            <div className='button'>
                <a href='https://drive.google.com/drive/folders/1x9L4D6MamSBbXCnPmK_sbQntO6ny0wHj?usp=sharing' target='_blank' rel="noreferrer"><button><span>Resume</span></button></a>
            </div>

            <div className='line'></div>
            <div className='line'></div>

            <div className='head'>About Me</div>

            <div className='line'></div>

            <div className='aboutbox'>
                <div className='about'>Lorem Ipsum About</div>
            </div>

            <div className='line'></div>

            <div className='randomthings'>
                <img src={rt} alt='some things about me'></img>
            </div>

            <div className='line'></div>
            <div className='line'></div>

            <div className='head'>What can I Do?</div>

            <div className='line'></div>

            <div className='skillbox'>
                <div className='idk'>Lorem Ipsum Skills</div>
            </div>

            <div className='line'></div>
            <div className='line'></div>

            <div className='head'>Some Projects I did</div>

            <div className='line'></div>

            <div className='projectbox'>
                <div className='project'>
                    <div className='ptitle'>Concrete Damage Detector</div>
                    <div className='pdesc'>Implemented a Deep Learning model using YOLO-v8 which can detect and segment damages on concrete surfaces in real-time and help maintain strength and integrity of buildings. The model is trained on a custom dataset made using Roboflow.</div>
                    <div className='plink'><a href='https://github.com/MaybeTarun/Concrete-Damage-Detector' target='_blank' rel="noreferrer"><button>Link</button></a></div>
                </div>
                <div className='line2'></div>
                <div className='projectt'><div className='ptitle'>Cognify</div>
                    <div className='pdesc'>Developed a cloud based learning platform using Kotlin and XML that automates learning methods making it easy for the user to learn and understand things. It uses OpenAI as its AI model.</div>
                    <div className='plink'><a href='https://maybetarun.github.io/CognifyWebsite.github.io/' target='_blank' rel="noreferrer"><button>Link</button></a></div>
                </div>
                <div className='line2'></div>
                <div className='project'><div className='ptitle'>Foresty</div>
                    <div className='pdesc'>Created a user-friendly platform that helps users in finding vulnerabilities (such as open ports) in their websites which anyone could have used to hack them. It uses a shell script which automates the process of vulnerability assessment.</div>
                    <div className='plink'><a href='https://maybetarun.github.io/Foresty/' target='_blank' rel="noreferrer"><button>Link</button></a></div>
                </div>
                <div className='line2'></div>
                <div className='projectt'><div className='ptitle'>More Projects</div>
                    <div className='pdesc'>I love to make random projects and websites which u can check out on my github.</div>
                    <div className='plink'><a href='https://github.com/MaybeTarun/' target='_blank' rel="noreferrer"><button>Link</button></a></div>
                </div>
            </div>

            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>

            <div className='head'>I design stuff when I'm bored</div>

            <div className='line'></div>

            <div className='designbox'>
                <div className='idk2'>Lorem Ipsum designs</div>
            </div>

            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>

            <div className='socialbox'>
                <div className='social'>
                    <a href='http://www.linkedin.com/in/maybetarun' target='_blank' rel="noreferrer"><img src={linkedin} alt='linkedin'></img></a>
                </div>
                <div className='social'>
                    <a href='https://twitter.com/MaybeTarun' target='_blank' rel="noreferrer"><img src={twitter} alt='twitter'></img></a>
                </div>
                <div className='social'>
                    <a href='https://github.com/MaybeTarun' target='_blank' rel="noreferrer"><img src={github} alt='github'></img></a>
                </div>
                <div className='social'>
                    <a href='https://www.behance.net/maybetarun' target='_blank' rel="noreferrer"><img src={behance} alt='behance'></img></a>
                </div>
                <div className='social'>
                    <a href='https://instagram.com/maybe._.tarun' target='_blank' rel="noreferrer"><img src={instagram} alt='instagram'></img></a>
                </div>
            </div>

            <div className='line'></div>

            <div className='contact'>
                <div className='email'>
                    <a href='mailto:tarun234.tg@gmail.com'><button>Get In Touch</button></a>
                </div>
                <div className='contactext'>Discuss about a project or freelance</div>
            </div>

            <div className='blank'></div>

        </div>
    </>
  )
}

export default App