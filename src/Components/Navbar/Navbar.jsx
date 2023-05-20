import React, {useState} from "react";
import './Navbar.css'

//Import Images
import logo from '../../Assets/logo.png'

//Import Icons
import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {

    //Statement to hold the navbar state
    const[navbar, setNavbar] = useState('navbar')

    //funtion to show navbar on smaller width screens
    const showNavbar = () => {
        setNavbar('navbar showNavbar')
    }

    //funtion to remove navbar on smaller width screens
    const removeNavbar = () => {
        setNavbar('navbar ')
    }

    // Funtion to add a background to the Navbar when we scroll a certain height on the window
    const [header, setHeader] = useState('header')
    const addBg = () => {
        if(window.scrollY >= 20) {
            setHeader('header addBg')
        }
    }
window.addEventListener('scroll', addBg)


    return (
        <div className={header}>
            <div className="logoDiv">
                <img src={logo} alt="Logo Image" className="logo" />
            </div>

            <div className={navbar}>
                <ul className="menu">
                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link">Used Cars</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link">New Cars</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link">Auctions</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link">Sell</a>
                    </li>
                </ul>

                {/* Lets get an icon that will close the navbar on small screens */}
                <IoIosCloseCircle className='icon closeIcon' onClick={removeNavbar}/>
                
            </div>

            <div className="signUp flex">
                <div className="text">Sign Up</div>
                 {/* Lets get an icon that will open/show the navbar on small screens */}
                 <TbGridDots className='icon toggleNavbarIcon' onClick={showNavbar}/>
            </div>
        </div>
    )
}

export default Navbar