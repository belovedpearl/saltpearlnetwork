import React from 'react'
import styles from '../styles/DropdownButton.module.css';
import { Link } from 'react-router-dom';

const GetInvolvedDropdown = () => {
  return (
    <div 
        className={styles.dropdown}
    >
        <Link 
            to="#" 
            className={styles.buttonLink}
        >
            Get Involved
        </Link>
        <div 
            className={styles.dropdownMenu}
        >
            <a 
                href="https://forms.gle/MKbv6oE38dxhc9Ff8" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Volunteer
            </a>
            <Link to="/support">
                Donate
            </Link>
            <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfToObhAcIHScgB6NeyqmjerwB1YpJhY-OlXVZvThcpQwyZog/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Patner With Us
            </a>
        </div>
    </div>
  );
};

export default GetInvolvedDropdown;
