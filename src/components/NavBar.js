import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import styles from '../styles/NavBar.module.css'
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BsChatQuote } from 'react-icons/bs';
import { FaDonate } from "react-icons/fa";
import logo from "../assets/logo.jpg"
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
          <Navbar 
                className={styles.NavBar} 
                expand="md" 
                fixed='top'
            >
                <Container>
                <Nav className="text-left">
                        <div 
                            className="d-flex align-items-center justify-content-between w-100"
                        >
                            <div>
                                <NavLink to="/" >
                                    <Navbar.Brand>
                                        <img 
                                            src={logo} 
                                            alt='Brand logo' 
                                            height='40'
                                            
                                        />
                                    </Navbar.Brand>
                                </NavLink>
                            </div>
                        </div>
                    </Nav>
                    <Navbar.Toggle 
                        aria-controls="basic-navbar-nav" 
                        className={styles.ToggleButton}
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto text-left">
                            <NavLink 
                                exact to = "/" 
                                className={`${styles.NavLink} mr-2 ${styles.HomeIcon}`} 
                                activeClassName = {styles.Active} 
                            >
                                <div className={`${styles.LinkContainer} ${styles.AddandSign}`}>
                                    <FaHome className='mr-1' size={30}/>
                                    Home
                                </div>
                            </NavLink>   
                            <NavLink 
                                exact to = "/aboutus" 
                                className={`${styles.NavLink} mr-2 ${styles.HomeIcon}`} 
                                activeClassName = {styles.Active} 
                            >
                                <div className={`${styles.LinkContainer} ${styles.AddandSign}`}>
                                    <HiOutlineInformationCircle className='mr-1' size={30}/>
                                    About Us
                                </div>
                            </NavLink>            
                        
                        <NavLink 
                                exact to = "contact" 
                                className={`${styles.NavLink} mr-2 ${styles.HomeIcon}`} 
                                activeClassName = {styles.Active} 
                            >
                                <div className={`${styles.LinkContainer} ${styles.AddandSign}`}>
                                    <IoIosContact className='mr-1' size={30}/>
                                    Contact
                                </div>
                        </NavLink>
                        <NavLink 
                                exact to = "testi" 
                                className={`${styles.NavLink} mr-2 ${styles.HomeIcon}`} 
                                activeClassName = {styles.Active} 
                            >
                                <div className={`${styles.LinkContainer} ${styles.AddandSign}`}>
                                    <BsChatQuote className='mr-1' size={30}/>
                                    Testimonials
                                </div>
                        </NavLink> 
                        <NavLink 
                                exact to = "support" 
                                className={`${styles.NavLink} mr-2 ${styles.HomeIcon}`} 
                                activeClassName = {styles.Active} 
                            >
                                <div className={`${styles.LinkContainer} ${styles.AddandSign}`}>
                                    <FaDonate className='mr-1' size={30}/>
                                    Support
                                </div>
                        </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
    </div>
  )
}

export default NavBar