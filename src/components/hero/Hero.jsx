import React from 'react';
import './hero.css';

import bgImage from "../../images/bg.png";

const Hero = () => {
  return (
    <div className='bgimage'>
      <img src={bgImage} alt="" />
    </div>
  )
}

export default Hero