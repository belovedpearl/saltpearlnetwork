import React from 'react';
import styles from '../styles/ImageGrid.module.css';
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';
// import image4 from '../assets/image4.jpg'

const ImageGrid = () => {
  const images = [
    image1,
    image2,
    image3
    // image4
  ];

  return (
    <div className={styles.flexContainer}>
        {images.map((image, index) => (
        <div key={index} className={styles.flexItem}>
            <img src={image} alt={`Gallery display ${index + 1}`} className={styles.image} />
        </div>
        ))}
    </div>
  );
};

export default ImageGrid;
