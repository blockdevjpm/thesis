import React, { useState } from 'react';
import "./rw.css";

import { AllCameras } from "../../components";
import places from "./places.js";

import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";

import ReactMapboxGl, { Marker, Cluster } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Rw = () => {

  const [lat, setLat] = useState(22.2820101);
  const [long, setLong] = useState(73.199739);
  const [camera, setCamera] = useState(false);
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(true);      
  }

  const Map = ReactMapboxGl({
    accessToken:
    "pk.eyJ1IjoianBtcnVseiIsImEiOiJjbGZ5Ymp3YjIwbDlqM2pwaGljNjZ1b3NnIn0.HqflgyBQjrsWSfKRYOE6mA",
  });

  return (
    <div className='map'>
      <div className='map-cont'>
        <div>
          <form className='report-waste-rw'>
            <p>REPORT WASTE!</p>
            <div className='location-rw'>
              <button type="submit" className="searchButton-rw">
                <ImIcons.ImLocation className='icon-rw'/>
              </button>
              <input
                type="search"
                placeholder="Current Location"
                // onChange={handleChange}
                // value={searchInput} 
              />
            </div>
            <div className='type-rw'>
              <button type="submit" className="searchButton-rw">
                <ImIcons.ImBin2 className='icon-rw'/>
              </button>
              <input
                type="search-rw"
                placeholder="Type of Waste"
                // onChange={handleChange}
                // value={searchInput} 
              />
            </div>
            <div className='type-rw'>
              <button type="submit" className="searchButton-rw">
                <GiIcons.GiWeight className='icon'/>
              </button>
              <input
                type="search-rw"
                placeholder="Estimated Weight (optional)"
                // onChange={handleChange}
                // value={searchInput} 
              />
            </div>
            <div className='photo-rw' onClick={() => setCamera(true)}>
              <p>Take Photo:</p>
              {camera ? <AllCameras /> : <div className='take-photo-rw' >
                <MdIcons.MdAddPhotoAlternate className='img-icon-rw' />
              </div>}
            </div>
            <button className='submit-rw' type='submit'>REPORT WASTE</button>
            <button className='submit-rw show-all' onClick={handleClick}>Show all the sites</button>
          </form>
        </div>

        <Map
          style="mapbox://styles/mapbox/streets-v9"
          center={[long, lat]}
          zoom={[13]}
          containerStyle={{
            height: '85vh',
            width: '50vw',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
          }}
        >
          <Marker
            coordinates={[long, lat]}
            anchor="bottom"
          >
            <ImIcons.ImLocation className='loc' />
          </Marker>
          {show && 
          <Marker
          coordinates={[73.180340, 22.306750]}
          anchor="bottom"
        >
          <ImIcons.ImBin className='bin' />
        </Marker>
          }
        </Map>
      </div>
    </div>
  )
}

export default Rw