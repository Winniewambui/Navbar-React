import { useState } from 'react';
import React from 'react'
import { MenuData } from './MenuData'
import './NavbarStyles.css';
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'

const Navbar = () => {
const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () =>{
        setMenuVisible(!isMenuVisible)
    }
  return (
    <div className='NavbarItems'>
    <h1 className='logo'>React</h1>
    <div className='menu-icons' onClick={toggleMenu}>
    {isMenuVisible ? (
          <FaTimes />
        ) : (
          <FaBars />
        )}
    </div>
    <ul className={`nav-menu ${isMenuVisible ? 'active' : ''}`}>        
    {MenuData.map((item, index) => (         
        <li key={index}>
            <a href={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</a>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar