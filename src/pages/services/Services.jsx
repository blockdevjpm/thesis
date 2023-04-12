import React from 'react';
import './services.css';

import img1 from "../../images/waste1.jpg";
import img2 from "../../images/waste2.jpg";
import img3 from "../../images/waste3.jpg";
import img4 from "../../images/waste4.jpg";
import img5 from "../../images/waste5.jpg";
import img6 from "../../images/waste6.jpg";

import { Scard } from "../../components";

const Services = () => {

  return (
    <div className='ser-cont'>
      <h1 className='ser-h1'>SERVICES</h1>
      <div className='ser'>
      <Scard 
        img={img1}
        type="Report Waste"
        des="Report any Plastic or Non-biodegradable waste you come across."
      />
      <Scard 
        img={img2}
        type="Track Waste Status"
        des="Track the status of your reported waste"
      />
      <Scard 
        img={img3}
        type="Earn your worth"
        des="Earn points, rewards and money for your contributions towards the cause."
      />
      <Scard 
        img={img4}
        type="View nearby Waste Collection Points"
        des="Get information about nearby waste collection points."
      />
      <Scard 
        img={img5}
        type="Buy Waste for your Business"
        des="If you run a business which creates value from waste"
      />
      <Scard 
        img={img6}
        type="Learn about Waste Management"
        des="Engage with the Community and feel more connected to the cause."
      />
      </div>
    </div>
  )
}

export default Services