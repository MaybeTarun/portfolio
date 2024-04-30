import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
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
  )
}

export default Projects