import React from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import './Designs.css';
import design1 from '../assets/design1.png';
import design2 from '../assets/design2.png';
import design3 from '../assets/design3.png';
import design4 from '../assets/design4.png';
import design5 from '../assets/design5.png';
import design6 from '../assets/design6.png';
import design7 from '../assets/design7.png';
import design8 from '../assets/design8.png';
import design9 from '../assets/design9.png';
import design10 from '../assets/design10.png';
import design11 from '../assets/design11.png';
import design12 from '../assets/design12.png';

const Designs = () => {
  const breakpointColumnsObj = {
    default: 3,
    860: 2
  };

  return (
    <div className='designbox'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {[design1, design2, design3, design4, design5, design6, design7, design10, design9, design8, design11, design12].map((design, index) => (
          <motion.div
            className='design'
            key={index}
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0 }}
          >
            <img src={design} alt={`design${index + 1}`} />
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
};

export default Designs;
