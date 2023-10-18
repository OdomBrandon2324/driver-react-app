import React, {useState} from 'react'
import './NavbarStyles.css'
import {FaBars, FaTimes, FaFacebook, FaInstagram} from 'react-icons/fa'
import {GiCarWheel} from 'react-icons/gi'
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)
    
    const handleNav =() => {
        setNav(!nav)
        setSlide(!slide)
    }

    const handleClose = () => {
        setNav(!nav)
    }
    

    return (
    <div className='navbar'>
        <div className="container">
            <div className={slide ? 'logo slide-right' : 'logo' }>
                <h3>Race</h3>
            </div>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>

                <li>   <Link className='nav-list' onClick={handleClose} activeClass="active" to="power" spy={true} smooth={true}  duration={500} >Power</Link></li>
                <li>   <Link className='nav-list' onClick={handleClose} activeClass="active" to="speed" spy={true} smooth={true}  duration={500} >Speed</Link></li>
                <li>   <Link className='nav-list' onClick={handleClose} activeClass="active" to="handling" spy={true} smooth={true}  duration={500} >Handling</Link></li>
                <li>   <Link className='nav-list' onClick={handleClose} activeClass="active" to="options" spy={true} smooth={true}  duration={500} >Options</Link></li>
                <li>   <Link className='nav-list' onClick={handleClose} activeClass="active" to="contact" spy={true} smooth={true}  duration={500} >Contact</Link></li>
                <li className='nav-list'>Shop</li>
                <li className='nav-list'> Account</li>
                <div className="mobile-menu">
                    <button className='nav-list'>Shop</button>
                    <button className='nav-list'>Account</button>
                    <div className="social-icons">
                        <FaFacebook className='icon'/>
                        <FaInstagram className='icon'/>
                        <GiCarWheel className='icon'/>
                    </div>

                </div>




            </ul>

        
        
        <div className="hamburger" onClick={handleNav}  >
            {nav ? (<FaTimes size={20} />) : (<FaBars  size={20} />)}
        </div>


        </div>


    </div>
  )
}

export default Navbar