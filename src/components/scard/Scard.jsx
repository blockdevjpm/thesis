import React from 'react';
import "./scard.css";

const Scard = (props) => {
    return (
        <div className='scard'>
            <img
              className="scard-img"
              src={props.img}
              alt="img"
            />
          <span className="scard_type">{props.type}</span>
          <span className="scard_des">{props.des}</span>
        </div>
    )
}

export default Scard