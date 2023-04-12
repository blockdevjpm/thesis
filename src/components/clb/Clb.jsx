import React, { useState } from 'react';
import './clb.css';

import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";

import userData from "./user_data.js";
import clientData from './client_data';
import { Card, Quotas } from "../../components";
import AllCameras from "../allcameras/AllCameras";

const Clb = () => {
  // const [searchInput, setSearchInput] = useState("");
  // const locations = [
  //   { name: "Vadodara", state: "Gujarat" },
  //   { name: "Ahemdabad", state: "Gujarat" },
  //   { name: "Surat", state: "Gujarat" },
  //   { name: "Anand", state: "Gujarat" }
  // ]
  const [camera, setCamera] = useState(false)

  const userDataElements = userData.map(i => <Card 
      picture={i.picture}
      displayName={i.displayName}
      waste={i.waste}
      earned={i.earned}
    />)

    const clientDataElements = clientData.map(j => <Quotas 
        name={j.name}
        completed={j.completed}
        total={j.total}
    />)

  return (
    <>
      <form className='report-waste'>
        <p>REPORT WASTE!</p>
        <div className='location'>
          <button type="submit" className="searchButton">
            <ImIcons.ImLocation className='icon'/>
          </button>
          <input
            type="search"
            placeholder="Current Location"
            // onChange={handleChange}
            // value={searchInput} 
          />
        </div>
        <div className='type'>
          <button type="submit" className="searchButton">
            <ImIcons.ImBin2 className='icon'/>
          </button>
          <input
            type="search"
            placeholder="Type of Waste"
            // onChange={handleChange}
            // value={searchInput} 
          />
        </div>
        <div className='type'>
          <button type="submit" className="searchButton">
            <GiIcons.GiWeight className='icon'/>
          </button>
          <input
            type="search"
            placeholder="Estimated Weight (optional)"
            // onChange={handleChange}
            // value={searchInput} 
          />
        </div>
        <div className='photo' onClick={() => setCamera(true)}>
          <p>Take Photo:</p>
          {camera ? <AllCameras /> : <div className='take-photo' >
            <MdIcons.MdAddPhotoAlternate className='img-icon' />
          </div>}
        </div>
        <button className='submit' type='submit'>REPORT WASTE</button>
      </form>

      <div className='quote'>
        <p className='first'>JOIN THE MOVEMENT!</p>
        <p>Let's not waste Plastic Waste.</p>
        <p>Recycle and Reuse!</p>
      </div>

      <div className='top-contri'>
        <p>Top 10 Contributors</p>
        {userDataElements}
      </div>

      <p className='top-goals-h1'>Top Goals fulfilled</p>
      <div className='top-goals'>
        {clientDataElements}
      </div>

      <div className="footer">
    <div className="row">
      <div className="col-md-6 col-lg-4">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            This project is a part of the thesis done in the final year of under-graduation in GSV under the guidance of Dr. Venkatesh Chintala.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-8">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="footer-link">
              <h3>Service Area</h3>
              <a href="">Lorem ipsum</a>
              <a href="">tempus posuere </a>
              <a href="">velit id accumsan</a>
              <a href="">ut porttitor</a>
              <a href="">Nam pretium</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="footer-link">
              <h3>Useful Link</h3>
              <a href="">Sed pretium</a>
              <a href="">ultricies turpis at</a>
              <a href="">Mauris cursus</a>
              <a href="">consectetur</a>
              <a href="">condimentum</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="footer-contact">
              <h3>Get In Touch</h3>
              <p><FaIcons.FaMapMarkerAlt />123 Street, New York, USA</p>
              <p><FaIcons.FaMapMarkerAlt />+012 345 67890</p>
              <p><i className="fa fa-envelope"></i>info@example.com</p>
              <div className="footer-social">
                <a href=""><FaIcons.FaTwitter /></a>
                <a href=""><FaIcons.FaFacebookF /></a>
                <a href=""><FaIcons.FaYoutube /></a>
                <a href=""><FaIcons.FaInstagram /></a>
                <a href=""><FaIcons.FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Clb