import React from 'react'
import image from '../assets/sp5.jpg'
import styles from '../styles/AboutUs.module.css'
import { Link } from 'react-router-dom';
import VideoComponent from '../components/VideoComponent';
import TeamMembers from '../components/TeamMembers';

const team = [
    {
      image: "/path/to/image1.jpg",
      name: "Adegoke Omisakin",
      position: "Chairman/Visioneer",
      bio: "Alice oversees all strategic initiatives and ensures the organization meets its goals.",
    },
    {
        image: "/path/to/image2.jpg",
        name: "Oluwaseun Omisakin",
        position: "Deputy Chairman",
        bio: "Oluwaseun works with the organisation to continually nurture and empower children through Christian values. With a deep passion for children's welfare and spiritual growth, Oluwaseun plays a key role in overseeing programs, fostering community engagement, and ensuring that the organization's mission aligns with biblical principles.",
    },
    {
        image: "/path/to/image1.jpg",
        name: "Adebimpe Adegbite ",
        position: "General Secretary",
        bio: "Alex oversees all strategic initiatives and ensures the organization meets its goals.",
      },
      {
        image: "/path/to/image1.jpg",
        name: "Adebowale Adejare",
        position: "Treasurer/ Financial Secretary",
        bio: "Alice oversees all strategic initiatives and ensures the organization meets its goals.",
      },
      {
        image: "/path/to/image1.jpg",
        name: "Modupeoluwa Sam-Charles",
        position: "Public Relation Officer",
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
            <VideoComponent />
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
                <TeamMembers
                key={index}
                image={member.image}
                name={member.name}
                position={member.position}
                bio={member.bio}
            />
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
