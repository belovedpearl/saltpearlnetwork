import React from 'react';
import styles from '../styles/VideoComponent.module.css'

const VideoComponent = () => {
    return (
        <div className={styles.videoWrapper}>
            <iframe 
                height="300" 
                src="https://www.youtube.com/embed/_oK2ELswgjU" 
                
                title="YouTube video"
                className={styles.iframeStyle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            >
            </iframe>
            <a
                href="https://www.youtube.com/@saltpearlnetwork"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewMore}
            >
                View More
            </a>
        </div>
    );
};

export default VideoComponent;
