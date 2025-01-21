import React from 'react'
import image from '../assets/sp5.jpg'
import styles from '../styles/AboutUs.module.css'
import { Link } from 'react-router-dom';

const team = [
    {
      image: "/path/to/image1.jpg",
      name: "Alice Smith",
      position: "Director",
      bio: "Alice oversees all strategic initiatives and ensures the organization meets its goals.",
    },
    {
      image: "/path/to/image2.jpg",
      name: "John Doe",
      position: "Community Outreach Coordinator",
      bio: "John works closely with our local communities to establish effective support systems.",
    },
    {
        image: "/path/to/image1.jpg",
        name: "Alex Sooth",
        position: "Secretary",
        bio: "Alex oversees all strategic initiatives and ensures the organization meets its goals.",
      },
      {
        image: "/path/to/image1.jpg",
        name: "Alice Smith",
        position: "Director",
        bio: "Alice oversees all strategic initiatives and ensures the organization meets its goals.",
      },
      {
        image: "/path/to/image1.jpg",
        name: "Alice Smith",
        position: "Director",
        bio: "Alice oversees all strategic initiatives and ensures the organization meets its goals.",
      },
  ];

const AboutUs = () => {
  return (
    <div>
        <div className={styles.container}>
            <img 
                    src={image} 
                    alt="About us display pic" 
            />
        </div>
        <div className={styles.aboutCall}>
            <h1>Our Vision, Mission and Values</h1>
            <p>
                We continually work to improve life for children across Nigeria.
            </p>
        </div>
        <div className={styles.mission}>
            <p>
                The Salt-Pearl Network Foundation is a Christian non-profit organisation
                that provides financial, educational and material 
                assistance to children and teens thereby promoting a safe and happy childhood. Our desire
                is to give children and young people the opportunity to reach their God-given 
                potential now and far into the future.
            </p>
            <p>Our programmes are tailored to a child's need or situation which further 
                makes them highly effective.
            </p>
            <p>We put children at the heart of everything we do including our mission and vision.
                They are our blueprint for the way we work.
            </p>
        </div>
        <div>
            <h1>Video Component</h1>
        </div>
        <div className={styles.mission}>
            <h2>Our Values</h2>
            <p>
                <strong>-</strong> 
                    We're <strong>passionate </strong>about all children 
                    having a happy childhood.
            </p>
            <p>
                <strong>-</strong> 
                    We're <strong>determined </strong> to cater for children and young adults.
            </p>
            <p>
                <strong>-</strong> 
                    We're <strong>
                            always ready to collaborate 
                          </strong>internally and externally
                    to give the best to children.
            </p>
            <p>
                <strong>-</strong> 
                    We're <strong>inclusive, </strong>always aiming no child is left behind.
            </p>
        </div>

        <div className={styles.teamContainer}>
            <h2 className='text-light'>Meet the Team</h2>
            <div className={styles.teamList}>
                {team.map((member, index) => (
                <h1>Team Memebers</h1>
            ))}
            </div>
        </div>

        <div className={styles.support}>
            <p>
                You can 
                     <strong><Link  to="/contact" className={styles.take}> support</Link> </strong>
                this mission by reaching out to us in love. 
                
            </p>
        </div>
    </div>
  )
}

export default AboutUs
