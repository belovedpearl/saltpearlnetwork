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
            <Link to="/volunteer">
                Volunteer
            </Link>
            <Link to="/support">
                Donate
            </Link>
            <Link to="/patner">
                Patner With Us
            </Link>
        </div>
    </div>
  );
};

export default GetInvolvedDropdown;
