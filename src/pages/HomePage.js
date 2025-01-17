import React from 'react';
import styles from '../styles/HomePage.module.css'
import GetInvolvedDropdown from '../components/GetInvolvedDropdown';


const HomePage = () => {
    return (
      <div>
      <div className={styles.container}> 
        <div className={styles.leftbox}>
            <h1>Building the young for a better world</h1>
            <p>
                Join us in reaching out to children and teens, sharing hope and love
                to everychild.
            </p>
            <GetInvolvedDropdown />
        </div>
        <div className={styles.rightbox}>
          <img 
            src = ''
            alt="Carousel" 
          />
        </div>
      </div>
      <h2>ImageGrid </h2>
      </div>
    );
}

export default HomePage
