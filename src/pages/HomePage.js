import React, { useState, useEffect } from 'react';
import styles from '../styles/HomePage.module.css'
import GetInvolvedDropdown from '../components/GetInvolvedDropdown';
import image1 from '../assets/sp2.jpg';
import image4 from '../assets/sp4.jpg';
import image2 from '../assets/sp9.jpg';
import image3 from '../assets/sp10.jpg';
import ImageGrid from '../components/ImageGrid';
import SEO from "../components/SEO";


const HomePage = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const images = [
      image1,
      image2,
      image4,
      image3,
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);
    return (
        <div>
            <SEO
              title="Salt-Pearl Network Foundation"
              description="Building the Young for a better world."
              image={ image3 }
            />
          <div className={styles.container}> 
              <div className={styles.leftbox}>
                  <h1>Building the young for a better world</h1>
                  <p>
                      Join us in reaching out to children and teens, sharing hope and love
                      to every child.
                  </p>
                  <GetInvolvedDropdown />
              </div>
              <div className={styles.rightbox}>
                <img 
                  src={images[currentImage]} 
                  alt="Carousel" 
                />
            </div>
          </div>
          <ImageGrid />
        </div>
    );
}
export default HomePage
