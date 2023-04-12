import React, { useState } from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

import SidebarData from "./SidebarData";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='container'>
    {/* <Link to="/login">
      <button className='login-b'>SIGN UP / LOG IN</button>
    </Link> */}

      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <div className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-hrefggle">
              <div className="menu-bars">
                <AiIcons.AiOutlineClose />
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar