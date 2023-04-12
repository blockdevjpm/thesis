import React from 'react';
import "./quotas.css"

const Quotas = (props) => {

    return (

    <div className='quotas'>
        <div className='props-name'>{props.name}</div>
        <br />
        <div className='props-total'>{props.completed} / {props.total}</div>
        <div className='slider-parent'>
            <input 
                type="range"
                min="1"
                max={props.total}
                value={props.completed}
                className="slider"
            />
        </div>
    </div>
  )
}

export default Quotas