import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='email'>
            <a href='mailto:tarun234.tg@gmail.com'><button>Email Me</button></a>
        </div>
        <div className='contactext'> &lt; discuss about a project or anything &gt; </div>
    </div>
  )
}

export default Contact