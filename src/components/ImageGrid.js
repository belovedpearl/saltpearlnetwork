import React from 'react';
import styles from '../styles/ImageGrid.module.css';
import image1 from '../assets/sp1.jpg';
import image2 from '../assets/sp3.jpg';
import image3 from '../assets/sp8.jpg';
import image4 from '../assets/sp6.jpg'

const ImageGrid = () => {
    const images = [
      image1,
      image2,
      image4,
      image3 
    ];

    return (
        <div className={styles.flexContainer}>
            {images.map((image, index) => (
            <div key={index} className={styles.flexItem}>
                <img 
                  src={image} 
                  alt={`Gallery display ${index + 1}`} 
                  className={styles.image} 
                />
            </div>
            ))}
        </div>
    );
};

export default ImageGrid;
