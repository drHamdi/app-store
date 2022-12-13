import React , {useState} from 'react'
import { Link } from 'react-router-dom'

import Logo from '../Resource/logo.png'

import {FaBars, FaTimes} from 'react-icons/fa'

import './NavbarStyle.css'

const Navbar = () => {
    const [click, setClick ] = useState(false)
    const fireClick = () => setClick (!click)

  return (
    <header>
        <nav className='navbar'>
            <div className='logo'>
                <Link to='/'><img src={Logo} alt='' /></Link>
            </div>
            <ul className={click ? "nav-menu active" : 'nav-menu'}>
                <li className='nav-items'>
                    <Link to= '/' className='nav-link'>Home</Link>
                </li>
                <li className='nav-items'>
                    <Link to= '/' className='nav-link'>Pricing</Link>
                </li>
                <li className='nav-items'>
                    <Link to= '/' className='nav-link'>FAQ</Link>
                </li>
                <li className='nav-items'>
                    <Link to= '/' className='nav-link'>Contact</Link>
                </li>
            </ul>
            <div className='action-icons' onClick={fireClick}>
                { click ? (< FaTimes  style={{color : '#fff'}} />)  : (<FaBars size={20} style ={{color : '#ffffff'}} />)}
            </div>
        </nav>
    </header>
  )
}

export default Navbar