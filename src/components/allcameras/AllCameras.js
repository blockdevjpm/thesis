import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

import './allcameras.css';

const videoConstraints = {
    width: "500px",
    facingMode: "environment"
};

const AllCameras = () => {

    const webcamRef = useRef(null);
    const [url, setUrl] = useState(null);
   
    const capturePhoto = useCallback(async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setUrl(imageSrc);
    }, [webcamRef]);
   
    const onUserMedia = (e) => {
      console.log(e);
    };
  return (
    <>
      <div className='camera-access'>
        <Webcam
          ref={webcamRef}
          audio={true}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          onUserMedia={onUserMedia}
        />
        <div className='buttons'>
          <button className='button1' onClick={capturePhoto}>Capture</button>
          <button className='button2' onClick={() => setUrl(null)}>Refresh</button>
        </div>  
      </div>
      {url && (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )}
    </>
  )
}

export default AllCameras