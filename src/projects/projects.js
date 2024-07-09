import React from 'react';
import './projects.css';
import data from './data';

const projects = () => {
  return (
    <>
    <div className='app'>
      <div className='heading'>
        <h1>Projects</h1>
      </div>
      <div className='container'>
        {data.map((i, index) => (
          <div className='card' key={index}>
            <div className='cardhead'>
              <img src={i.image} alt={i.heading} />
            </div>
            <div className='cardfoot'>
              <div className='name'>
                <p>{i.name}</p>
                <a href={i.link} className='btn' target='_blank' rel="noopener noreferrer"> Visit </a>
              </div>
              <div className='desc'>
                <p>{i.desc}</p>
              </div>
              <div className='skills'>
                <p>{i.skills}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default projects;