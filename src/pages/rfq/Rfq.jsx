import React, {useState} from 'react';
import "./rfq.css";

import PhoneInput from 'react-phone-input-2';

const Rfq = () => {

  const [phone, setPhone] = useState("");

  return (
    <div className='rfq-cont'>
      <form className='rfq-form' action="#">
        <h1 className='rfq-h1'>REQUEST FOR QUOTE</h1>
        <input className='rfq-in' type="text" placeholder="Registered Name of your Business" />
        <input className='rfq-in' type="email" placeholder="Email" />
        <PhoneInput
          country={'in'}
          value={phone}
          onChange={phone => setPhone({ phone }) }
          className="ph"
        />
        <input className='rfq-in' type="text" placeholder="Type of Waste" />
        <input className='rfq-in' type="text" placeholder="Estimated amount(in kg)" />      
        <button className='submit-rfq' type='submit'>Request for Quote</button>
      </form>
    </div>
  )
}

export default Rfq