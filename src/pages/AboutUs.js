import React from 'react'
import image from '../assets/sp5.jpg'
import styles from '../styles/AboutUs.module.css'
import { Link } from 'react-router-dom';
import VideoComponent from '../components/VideoComponent';
import TeamMembers from '../components/TeamMembers';
import SEO from '../components/SEO';
import image3 from '../assets/sp9.jpg'
import img4 from '../assets/sp14.jpg';

const team = [
    {
      image: "/path/to/image1.jpg",
      name: "Adegoke Omisakin",
      position: "Chairman/Visioneer",
      bio: "Adegoke is a lover of the children, fully dedicated to nurturing young hearts in faith, education, and community service. With a strong background in children ministry, he leads with a vision to inspire and support children in biblical ways and compassionate care. Under his leadership, the organization has expanded its outreach, providing spiritual guidance, resources, and mentorship to children in need.",
    },    
    {name: "Oluwaseun Omisakin",
        position: "Deputy Chairman",
        bio: "Oluwaseun works with the organisation to continually nurture and empower children through Christian values. With a deep passion for children's welfare and spiritual growth, Oluwaseun plays a key role in overseeing programs, fostering community engagement, and ensuring that the organization's mission aligns with biblical principles.",
    },
    {
        image: "/path/to/image1.jpg",
        name: "Adebimpe Adegbite ",
        position: "General Secretary",
        bio: "Adebimpe is dedicated to guiding children in faith and personal growth. With a heart for service, he oversees operations, and ensures the organization's mission aligns with Christian values. Passionate about nurturing young lives, Adebimpe works to inspire and support children in their spiritual journey.",
      },
      {
        image: "/path/to/image1.jpg",
        name: "Adebowale Adejare",
        position: "Treasurer/ Financial Secretary",
        bio: "Adebowale oversees finances with integrity and faith. Committed to stewardship, he ensures transparency, manages resources, and supports programs that nurture children spiritually and physically. With a heart for service, Adebowale helps sustain the organization’s mission through responsible financial planning and management."
      },
      {
        image: img4,
        name: "Modupeoluwa Sam-Charles",
        position: "Public Relation Officer",
        bio: "Modupeoluwa is a believer, a legal practitioner and a christian creative dedicated to promoting the mission of nurturing children through Christian values. Passionate about faith-driven advocacy."
      },
  ];

const AboutUs = () => {
  return (
    <div>
        <SEO
            title="Salt-Pearl Network Foundation"
            description="Building the Young for a better world."
            image={ image3 }
        />
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
            <p className={styles.kid}>
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
        <hr />
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
