import React from 'react';
import styles from '../styles/VideoComponent.module.css'

const VideoComponent = () => {
    return (
        <div>
            <iframe 
                width="50%" 
                height="300" 
                src="https://www.youtube.com/embed/_oK2ELswgjU" 
                
                title="YouTube video"
                className={styles.iframeStyle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            >
            </iframe>
        </div>
    );
};

export default VideoComponent;
