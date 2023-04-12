import React, { useState } from 'react';
import "./login.css";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Login = () => {

    const [right, setRight] = useState(true);

    const handleClick = () => setRight(prev => !prev);

  return (
    <div className='con'>
        <div className={right ? "main-container right-panel-active" : "main-container"} id="container">
            <div className="form-container sign-up-container">
                <form className='login-form' action="#">
                    <h1 className='h1'>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><FaIcons.FaFacebookF /></a>
                        <a href="#" className="social"><AiIcons.AiOutlineGoogle /></a>
                    </div>
                    <span className='span'>or use your email for registration</span>
                    <input className='in' type="text" placeholder="Name" />
                    <input className='in' type="email" placeholder="Email" />
                    <input className='in' type="password" placeholder="Password" />
                    <button className='login-b'>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form className='login-form' action="#">
                    <h1 className='h1'>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social"><FaIcons.FaFacebookF /></a>
                        <a href="#" className="social"><AiIcons.AiOutlineGoogle /></a>
                    </div>
                    <span className='span'>or use your account</span>
                    <input className='in' type="email" placeholder="Email" />
                    <input className='in' type="password" placeholder="Password" />
                    {/* <a href="#">Forgot your password?</a> */}
                    <button className='login-b'>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1 className='h1'>Welcome Back!</h1>
                        <p className='p'>To keep connected with us please login with your personal info</p>
                        <button className="login-b ghost" id="signIn" onClick={handleClick}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className='h1'>Hello, Friend!</h1>
                        <p className='p'>Enter your personal details and start journey with us</p>
                        <button className="login-b ghost" id="signUp" onClick={handleClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login