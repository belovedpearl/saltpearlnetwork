import React from 'react'
import styles from '../styles/Footer.module.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>
                    &copy; {new Date().getFullYear()} 
                    </p>
                    <p>
                    The Salt-Pearl Network
                </p>
                <nav className={styles.nav}>
                <Link 
                    to="/aboutus" 
                    className={styles.link}
                >
                    About Us
                </Link>
                <Link 
                    to="/contact" 
                    className={styles.link}
                >
                    Contact
                </Link>
                <Link 
                    to="/privacy" 
                    className={styles.link}
                >
                    Privacy Policy
                </Link>
                <Link 
                    to="/terms" 
                    className={styles.link}
                >
                    Terms of Service
                </Link>
                <div className={styles.social}>
                    <a 
                        href="https://facebook.com" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className={styles.link}
                    >
                    <FaFacebook />
                    </a>
                    <a 
                        href="https://twitter.com" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className={styles.link}
                    >
                    <FaTwitter />
                    </a>
                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.link}
                    >
                    <FaInstagram />
                    </a>
                </div>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
