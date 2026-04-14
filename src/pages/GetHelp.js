import React, { useRef, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/GetHelp.module.css';
import heroImage from '../assets/sp9.jpg';

const FORM_WIDTH = 640;
const FORM_HEIGHT = 2749;

const GetHelp = () => {
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [offsetLeft, setOffsetLeft] = useState(0);

  useEffect(() => {
    const updateScale = () => {
      if (wrapperRef.current) {
        const available = wrapperRef.current.offsetWidth;
        const s = available < FORM_WIDTH ? available / FORM_WIDTH : 1;
        setScale(s);
        // Center the scaled iframe: shift right by half the leftover space
        setOffsetLeft((available - FORM_WIDTH * s) / 2);
      }
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <Container className="my-4">
      <div className={styles.imageWrapper}>
        <img src={heroImage} alt="Get help" className={styles.heroImage} />
      </div>
      <div
        ref={wrapperRef}
        className={styles.formWrapper}
        style={{ height: FORM_HEIGHT * scale }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe9B7eShWYHL9-eABF6PZNXrMM-IXU3PJrwk_1D0iZJvxJc2Q/viewform?embedded=true"
          title="Get Help Form"
          className={styles.formFrame}
          style={{
            transform: `scale(${scale})`,
            marginLeft: `${offsetLeft}px`,
          }}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </Container>
  );
};

export default GetHelp;
